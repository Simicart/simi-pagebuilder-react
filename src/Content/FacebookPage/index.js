import React, { useState, useEffect, Fragment } from 'react';
import Script from 'react-load-script';

const FacebookPage = props => {
	const [scriptLoaded, setScriptLoaded] = useState(false);

	const { pageURL } = props.item.dataParsed;

	console.log(pageURL);

	useEffect(() => {
		if (window.FB) {
			window.FB.XFBML.parse();
		}
	}, []);

	return (
		<>
			<Script
				url={'https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v12.0'}
				onCreate={() => setScriptLoaded(false)}
				onError={() => setScriptLoaded(true)}
				onLoad={() => setScriptLoaded(true)}
			/>
			<div
				className={'fb-page'}
				data-href={pageURL}
				data-tabs={'timeline'}
				data-width={'500'}
				data-height={'500'}
				data-small-header={'false'}
				data-adapt-container-width={'true'}
				data-hide-cover={'false'}
				data-show-facepile={'true'}
			>
				<blockquote cite={pageURL} className={'fb-xfbml-parse-ignore'}>
					<a href={pageURL}>Facebook</a>
				</blockquote>
			</div>
		</>
	);
};

export default FacebookPage;
