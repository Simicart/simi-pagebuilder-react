import React from 'react';
import Innercontent from './Innercontent';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { randomString, listToTree } from '../Helper/Data';
import { useDeviceWidthPrefix } from '../hooks/useDeviceWidthPrefix';

const PbContent = (props) => {
	const {
		data: { spb_item, spb_page },
		ProductList,
		ProductGrid,
	} = props;
	const deviceFilterKey = useDeviceWidthPrefix();

	const renderItem = (item, children) => {
		const styles = prepareStyle(item);
		const itemProps = {
			key: `${randomString(5)}${item.root ? 'root' : item.entity_id}`,
			style: styles,
			className: `spb-item ${item.root ? 'spb-item-root' : ''} ${
				item.class_name
			} ${'type_' + item.type}`,
		};
		if (item.dataParsed && item.dataParsed.scrollTo) {
			itemProps.onClick = (e) => {
				var elmnt = document.getElementsByClassName(item.dataParsed.scrollTo);
				if (elmnt && elmnt.length) elmnt[0].scrollIntoView();
			};
		}
		return <div {...itemProps}>{renderInnerContent(item, children)}</div>;
	};

	const renderInnerContent = (item, children) => {
		if (item.type === 'slider') {
			const slideSettings = {
				autoPlay: true,
				showArrows: true,
				showThumbs: false,
				showIndicators: !!(children.length && children.length !== 1),
				showStatus: false,
				infiniteLoop: true,
				lazyLoad: true,
			};
			return <Carousel {...slideSettings}>{children}</Carousel>;
		}
		return (
			<React.Fragment>
				<Innercontent
					item={item}
					ProductList={ProductList}
					ProductGrid={ProductGrid}
				/>
				{children.length ? children : ''}
			</React.Fragment>
		);
	};

	const prepareStyle = (item) => {
		const defaultStyles = {
			display: 'flex',
			flexDirection: 'column',
			flexWrap: 'wrap',
		};
		let style = defaultStyles;
		if (item && item.stylesParsed) {
			try {
				const itemStyle = item.stylesParsed;
				if (itemStyle.widthPercent) {
					itemStyle.width = parseInt(itemStyle.widthPercent, 10) + '%';
					delete itemStyle.widthPercent;
				}
				if (itemStyle.widthPixel) {
					itemStyle.width = parseInt(itemStyle.widthPixel, 10) + 'px';
					delete itemStyle.widthPixel;
				}
				if (itemStyle.heightPixel) {
					if (itemStyle.heightPixel === 'auto')
						itemStyle.height = itemStyle.heightPixel;
					else itemStyle.height = parseInt(itemStyle.heightPixel, 10) + 'px';
					delete itemStyle.heightPixel;
				}
				style = { ...style, ...itemStyle };
			} catch (err) {}

			// add device styles
			Object.keys(style).forEach((key) => {
				if (key.includes(deviceFilterKey)) {
					const styleKey = key.replace(deviceFilterKey, '');
					style[styleKey] = style[key];
				}
			});
		}
		if (item && item.type !== 'image' && item.type !== 'category') {
			if (item.dataParsed) {
				const itemData = item.dataParsed;
				if (itemData && itemData.image) {
					style.backgroundImage = `url("${itemData.image}")`;
				}
			}
		}
		return style;
	};

	/*
    Recursive render
    */

	const recursiveRender = (childrenArray) => {
		const returnedItems = [];
		if (childrenArray) {
			childrenArray.map((item) => {
				const children = recursiveRender(item.children);
				returnedItems.push(renderItem(item, children));
				return null;
			});
		}
		return returnedItems;
	};

	const renderItems = (itemTree) => {
		const children = recursiveRender(itemTree.children);
		return renderItem({ root: true }, children);
	};

	const rootItem = {
		id: 'root',
	};
	let newTree;
	if (spb_item) {
		newTree = JSON.parse(JSON.stringify(spb_item.items));
	} else {
		newTree = JSON.parse(spb_page.items[0].publish_items);
	}
	newTree = listToTree(newTree);
	rootItem.children = newTree;

	return renderItems(rootItem);
};

export default PbContent;
