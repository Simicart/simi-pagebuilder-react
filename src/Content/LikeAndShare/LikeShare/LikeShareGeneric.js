import React from 'react';
import { LikeShareReal } from './LikeShareReal';
import { tryParseJSON } from '../../../Helper/tryParseJSON';

const DEFAULT_BUTTON_TYPE = LikeShareReal;

export const LikeShareGeneric = (props) => {
	const { item } = props;

	const parsedStyle = tryParseJSON(item.styles, {});
	const type = parsedStyle.type;
	const parsedData = item.dataParsed
		? item.dataParsed
		: tryParseJSON(item.data, {});

	const { likeURL, appID } = parsedData;

	if (!likeURL) {
		return '';
	}

	let Picked = null;

	switch (type) {
		case 1:
			Picked = LikeShareReal;
			break;
		// case 2:
		// 	Picked = LikeShare2;
		// 	break;
		//
		// case 3:
		// 	Picked = LikeShare3;
		// 	break;
		//
		// case 4:
		// 	Picked = LikeShare4;
		// 	break;
		default:
			Picked = DEFAULT_BUTTON_TYPE;
	}

	return (
		<div>
			<Picked likeURL={likeURL} appID={appID} type={type} />
		</div>
	);
};
