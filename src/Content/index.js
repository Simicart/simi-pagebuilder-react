import React, { Component } from 'react';
import Innercontent from './Innercontent';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import classes from './style.css';
import { randomString, listToTree } from '../Helper/Data';

const $ = window.$;

const PbContent = (props) => {
	const {
		data: { spb_item, spb_page },
	} = props;
	/*
    Render Item
    */
	const renderItem = (item, children) => {
		const styles = prepareStyle(item);
		return (
			<div
				key={`${randomString(5)}${item.root ? 'root' : item.entity_id}`}
				className={`${classes['spb-item']} ${
					item.root ? classes['spb-item-root'] : ''
				} ${item.class_name} ${classes['type_' + item.type]}`}
				style={styles}
			>
				{renderInnerContent(item, children)}
			</div>
		);
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
				<Innercontent item={item} />
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
		if (item && item.styles) {
			if (typeof item.styles === 'string')
				item.styles = JSON.parse(item.styles);
			try {
				const itemStyle = item.styles;
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
			} catch (err) {
				console.log(err);
			}
		}
		if (item && item.type !== 'image' && item.type !== 'category') {
			if (item.data) {
				let itemData = false;
				if (typeof item.data === 'string') itemData = JSON.parse(item.data);
				else itemData = item.data;
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

	const updateCustomCss = (css) => {
		if (!window.document.getElementById('pbpreviewcustomcss'))
			$('head').append(
				`<style type="text/css" id="pbpreviewcustomcss">${css}</style>`,
			);
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

	if (spb_page && spb_page.custom_css) updateCustomCss(spb_page.custom_css);

	return renderItems(rootItem);
};

export default PbContent;
