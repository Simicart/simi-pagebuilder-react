import React from 'react';
import product_item_mockup from './images/product_item_mockup.png';
import HtmlParser from 'react-html-parser';
import { HtmlVideo } from './HTMLVideo/HTMLVideo';
import { YoutubeVideo } from './YoutubeVideo/YoutubeVideo';
import { LikeShareGeneric } from './LikeAndShare/LikeShare/LikeShareGeneric';

const Innercontent = (props) => {
	const { item, ProductList, ProductGrid } = props;

	if (!item || !item.entity_id) return '';
	let data = {};
	if (item.data && typeof item.data === 'object') {
		data = item.data;
	} else if (item.dataParsed) {
		data = item.dataParsed;
	}
	if (item.type === 'button') {
		return item.name ? item.name : 'Button Label';
	} else if (item.type === 'text') {
		return item.name ? item.name : 'Your Text Go Here';
	} else if (item.type === 'image') {
		if (data.image)
			return (
				<img
					src={data.image}
					alt={(data.alt !== undefined ? data.alt : 'pb img item') || ''}
					title={(data.title !== undefined ? data.title : '') || ''}
					style={{
						width: data.width || '100%',
						height: data.height || 'auto',
					}}
				/>
			);
	} else if (item.type === 'category') {
		return (
			<React.Fragment>
				{data.image ? (
					<img src={data.image} alt='pb img item' style={{ width: '100%' }} />
				) : (
					''
				)}
				{item.name && (
					<div style={{ textAlign: 'center', marginTop: 10 }}>{item.name}</div>
				)}
			</React.Fragment>
		);
	} else if (item.type === 'product_scroll') {
		if (ProductList) return <ProductList item={item} />;
		else return '';
	} else if (item.type === 'product_grid') {
		if (ProductGrid) return <ProductGrid item={item} />;
		else return '';
	} else if (item.type === 'paragraph') {
		if (data.paragraphContent) return HtmlParser(data.paragraphContent);
    } else if (item.type === 'icon') {
        if (data.icon) return <i className={`zmdi zmdi-${data.icon}`}/>
    } else if (['html_video', 'youtube_video'].includes(item.type)) {
		const imgCover = (data ? data.imageCover : null) || null;
		const size = (data ? data.size : null) || null;
		const width = (data ? data.width : null) || null;
		const videoURL = (data ? data.videoURL : null) || '';
		const showControl =
			data && data.showControl !== undefined ? data.showControl : true;

		if (item.type === 'html_video') {
			return (
				<HtmlVideo
					width={width}
					size={size}
					showControl={showControl}
					imgCover={imgCover}
					videoURL={videoURL}
				/>
			);
		} else if (item.type === 'youtube_video') {
			return (
				<YoutubeVideo
					width={width}
					size={size}
					showControl={showControl}
					imgCover={imgCover}
					videoURL={videoURL}
				/>
			);
		}
	} else if (item.type === 'share_button') {
		return <LikeShareGeneric item={item} />;
	} else if (item.type === 'custom_html') {
		if (data.htmlContent) return HtmlParser(data.htmlContent);
	}
	return '';
};

export default Innercontent;
