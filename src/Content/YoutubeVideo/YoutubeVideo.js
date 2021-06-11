import React from 'react';

const defaultVideoLink = 'OrzMIhLpVps';

const extractVideoId = (shareURL) => {
	try {
		const uOb = new URL(shareURL);
		const vParams = uOb.searchParams.get('v');
		if (vParams) {
			// case copy from link
			return vParams;
		} else {
			return uOb.pathname.slice(1);
		}
	} catch (e) {
		return defaultVideoLink;
	}
};

const changeShareURLToEmbedded = (shareURL) => {
	const videoId = extractVideoId(shareURL);
	return `https://www.youtube.com/embed/${videoId}`;
};

export const _YoutubeVideo = (props) => {
	const { width, size, showControl, videoURL } = props;

	return (
		<iframe
			height={size || '100%'}
			width={width || size || '100%'}
			allowFullScreen=''
			frameBorder='0'
			src={
				changeShareURLToEmbedded(videoURL) + `?controls=${showControl ? 1 : 0}`
			}
		/>
	);
};

export const YoutubeVideo = React.memo(
	_YoutubeVideo,
	(prevProps, nextProps) => {
		const { width, size, showControl, videoURL } = prevProps || {};
		const { width1, size1, showControl1, videoURL1 } = nextProps || {};

		return (
			width === width1 &&
			size === size1 &&
			showControl === showControl1 &&
			videoURL === videoURL1
		);
	},
);
