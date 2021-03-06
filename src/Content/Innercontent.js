import React, { Fragment, useRef } from 'react';
import { HtmlVideo } from './HTMLVideo/HTMLVideo';
import { YoutubeVideo } from './YoutubeVideo/YoutubeVideo';
import { Tab } from './Tab';
import { LikeShareGeneric } from './LikeAndShare/LikeShare/LikeShareGeneric';
import { Instagram } from './Instagram';
import { icons } from './icons/icons.js';
import { randomString } from '../Helper/Data';
import { Dropdown } from './Dropdown';
import { FacebookPagePlugin } from './FacebookPagePlugin';
import { convertBoxShadowToTextShadow } from '../Helper/convertBoxShadowToTextShadow';
import { tryParseJSON } from '../Helper/tryParseJSON';

export const customIconDefKey = 'is-custom-icon';
export const customIcon = 'custom-icon';

const Innercontent = (props) => {
	const {
		item,
		parent,
		ProductList,
		ProductGrid,
		Category,
		formatMessage,
		ProductScroll,
		CategoryScroll,
		deviceFilterKey,
	} = props;

	if (!item || !item.entity_id) return '';

	let data = {};
	if (item.data && typeof item.data === 'object') {
		data = { ...item.data };
	} else if (item.dataParsed) {
		data = { ...item.dataParsed };
	}
	Object.keys(data).forEach((key) => {
		if (key.includes(deviceFilterKey)) {
			const styleKey = key.replace(deviceFilterKey, '');
			data[styleKey] = data[key];
		}
	});
	const styles = tryParseJSON(item.styles) || {};
	const dataParsed = item.dataParsed || {};
	const nameSpace = useRef(dataParsed.name || randomString(5)).current;

	if (item.type === 'text') {
		const textValue = item.name ? item.name : 'Your Text Go Here';
		const translatedText = formatMessage({ val: textValue });
		if (item.dataParsed && item.dataParsed.textTag) {
			const TextTag = item.dataParsed.textTag;
			const textStyle = {};
			const {
				stylesParsed: {
					fontSize,
					fontStyle,
					textDecoration,
					fontWeight,
					fontFamily,
					lineHeight,
					boxShadow,
				},
			} = item;

			if (fontSize) textStyle.fontSize = fontSize;
			if (fontStyle) textStyle.fontStyle = fontStyle;
			if (textDecoration) textStyle.textDecoration = textDecoration;
			if (fontWeight) textStyle.fontWeight = fontWeight;
			if (fontFamily) textStyle.fontFamily = fontFamily;
			if (lineHeight) textStyle.lineHeight = lineHeight;
			if (boxShadow)
				textStyle.textShadow = convertBoxShadowToTextShadow(boxShadow);
			return <TextTag style={textStyle}>{translatedText}</TextTag>;
		}
		return translatedText;
	} else if (item.type === 'tabs') {
		return <Tab item={item} />;
	} else if (item.type === 'dropdown') {
		return <Dropdown item={item} formatMessage={formatMessage} />;
	} else if (item.type === 'image') {
		if (data.image) {
			const alt = formatMessage({
				val: (data.alt !== undefined ? data.alt : 'Image') || '',
			});
			const title = formatMessage({
				val: (data.title !== undefined ? data.title : '') || '',
			});
			return (
				<img
					src={data.image}
					alt={alt}
					title={title}
					style={{
						width: data.width || '100%',
						height: data.height || '100%',
						objectFit:
							item.stylesParsed && item.stylesParsed.objectFit
								? item.stylesParsed.objectFit
								: 'cover',
					}}
				/>
			);
		}
	} else if (item.type === 'category') {
		if (Category)
			return (
				<Category
					item={item}
					formatMessage={formatMessage}
					data={data}
					styles={styles}
				/>
			);
		else return '';
	} else if (item.type === 'product_scroll') {
		if (ProductList)
			return (
				<ProductList
					item={item}
					formatMessage={formatMessage}
					data={data}
					styles={styles}
				/>
			);
		else return '';
	} else if (item.type === 'product_grid') {
		if (ProductGrid)
			return (
				<ProductGrid
					item={item}
					formatMessage={formatMessage}
					data={data}
					styles={styles}
				/>
			);
		else return '';
	} else if (item.type === 'product_scroll_1') {
		if (ProductScroll)
			return (
				<ProductScroll
					item={item}
					formatMessage={formatMessage}
					data={data}
					styles={styles}
				/>
			);
		else return '';
	} else if (item.type === 'category_scroll_1') {
		if (CategoryScroll)
			return (
				<CategoryScroll
					item={item}
					formatMessage={formatMessage}
					data={data}
					styles={styles}
				/>
			);
		else return '';
	} else if (item.type === 'paragraph') {
		const wrapperStyle = item.stylesParsed.boxShadow
			? {
				textShadow: convertBoxShadowToTextShadow(item.stylesParsed.boxShadow),
			}
			: null;

		if (data.paragraphContent) {
			return (
				<div
					dangerouslySetInnerHTML={{ __html: data.paragraphContent }}
					style={wrapperStyle}
				/>
			);
		}
	} else if (['html_video', 'youtube_video'].includes(item.type)) {
		const imgCover = (data ? data.imageCover : null) || null;
		const size = (data ? data.size : null) || null;
		const width = (data ? data.width : null) || null;
		const videoURL = (data ? data.videoURL : null) || '';
		const showControl =
			data && data.showControl !== undefined ? data.showControl : true;
		const shadowStyle = item.stylesParsed.boxShadow
			? {
				boxShadow: item.stylesParsed.boxShadow,
			}
			: null;

		if (item.type === 'html_video') {
			return (
				<Fragment>
					<HtmlVideo
						width={width}
						size={size}
						showControl={showControl}
						imgCover={imgCover}
						videoURL={videoURL}
						formatMessage={formatMessage}
						style={shadowStyle}
					/>
				</Fragment>
			);
		} else if (item.type === 'youtube_video') {
			return (
				<YoutubeVideo
					width={width}
					size={size}
					showControl={showControl}
					imgCover={imgCover}
					videoURL={videoURL}
					formatMessage={formatMessage}
					style={shadowStyle}
				/>
			);
		}
	} else if (item.type === 'share_button') {
		return <LikeShareGeneric item={item} formatMessage={formatMessage} />;
	} else if (item.type === 'facebook_page_plugin') {
		return <FacebookPagePlugin item={item} formatMessage={formatMessage} />;
	} else if (item.type === 'instagram') {
		return <Instagram item={item} formatMessage={formatMessage} />;
	} else if (item.type === 'custom_html') {
		if (data.htmlContent) {
			const shadowStyle = item.stylesParsed.boxShadow
				? {
					boxShadow: item.stylesParsed.boxShadow,
				}
				: null;
			return (
				<div
					dangerouslySetInnerHTML={{ __html: data.htmlContent }}
					style={shadowStyle}
				/>
			);
		}
	} else if (item.type === 'icon') {
		const shouldUseCustomIcon = data[customIconDefKey];
		const customIconValue = data[customIcon] || '';
		const shadowStyle = item.stylesParsed.boxShadow
			? {
				boxShadow: item.stylesParsed.boxShadow,
			}
			: null;
		if (shouldUseCustomIcon) {
			return <i className={customIconValue} style={shadowStyle} />;
		}
		if (data.icon && icons[data.icon]) return icons[data.icon];
	} else if (item.type === 'text_input') {
		const placeholder = data ? data.placeholder : '';
		const applicableStyleAttr = [
			'padding',
			'paddingTop',
			'paddingBottom',
			'paddingLeft',
			'paddingRight',
			'fontWeight',
			'fontSize',
			'border',
			'borderRadius',
			'lineHeight',
			'color',
			'fontFamily',
			'width',
			'height',
			'widthPixel',
			'heightPixel',
			'maxWidth',
			'maxHeight',
			'minWidth',
			'minHeight',
		];
		// padding for input behave differently from others,
		// so the above style can not be used in outer container

		const miniStyle = Object.entries(styles)
			.filter(([k, v]) => {
				return applicableStyleAttr.includes(k);
			})
			.reduce((acc, [k, v]) => {
				acc[k] = v;
				return acc;
			}, {});

		if (miniStyle.widthPixel !== undefined) {
			miniStyle.width = miniStyle.widthPixel;
		}
		if (miniStyle.heightPixel !== undefined) {
			miniStyle.height = miniStyle.heightPixel;
		}
		miniStyle.border = 'none';
		return (
			<input
				type='text'
				placeholder={placeholder}
				style={{ ...miniStyle, height: '100%' }}
				name={nameSpace}
			/>
		);
	}
	return '';
};

export default Innercontent;
