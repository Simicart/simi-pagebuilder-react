import React from 'react';

export const _HtmlVideo = (props) => {
	const { width, size, showControl, imgCover, videoURL } = props;
	return (
		<>
			<video
				width={width || size || '100%'}
				height={size || '100%'}
				controls={showControl || false}
				poster={imgCover || undefined}
			>
				<source src={videoURL} />
				Your browser does not support the video tag.
			</video>
		</>
	);
};

export const HtmlVideo = React.memo(_HtmlVideo, (prevProps, nextProps) => {
	const { width, size, showControl, videoURL } = prevProps || {};
	const { width1, size1, showControl1, videoURL1 } = nextProps || {};

	return (
		width === width1 &&
		size === size1 &&
		showControl === showControl1 &&
		videoURL === videoURL1
	);
});
