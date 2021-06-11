import React, { useEffect, useState } from 'react';
import { sendRequest } from './Network/GraphQl';
import Content from './Content';
import { Helmet } from 'react-helmet';

let runCustomJSOnce = false;

const PREVIEW_ITEM_QUERY = `
    query getPbItem($pageMaskedId: String) {
        spb_page(pageMaskedId: $pageMaskedId) {
            total_count
            items {
                entity_id
                name
                status
                masked_id
                custom_css
                custom_js
                keywords
                title
                desc
            }
        }
        spb_item(pageMaskedId: $pageMaskedId) {
            total_count
            items {
                entity_id
                page_id
                parent_id
                styles
                data
                name
                tag_id
                class_name
                type
                status
                visibility
                storeview_visibility
                sort_order
            }
        }
    }
`;

const GET_ITEM_QUERY = `
    query getPbItem($pageMaskedId: String) {
        spb_page(pageMaskedId: $pageMaskedId) {
            total_count
            items {
                entity_id
                name
                status
                masked_id
                custom_css
                custom_js
                keywords
                title
                desc
                publish_items
            }
        }
    }
`;

const GET_PB_PAGES_QUERY = `
    query getPagesByToken($integrationToken: String) {
        spb_page(integrationToken: $integrationToken) {
            total_count
            items {
                status
                masked_id
                name
                url_path
                priority
            }
        }
    }
`;

export const PageBuilderComponent = (props) => {
	const { endPoint, maskedId, toPreview, ProductList, ProductGrid } = props;
	const [data, setData] = useState(false);
	if (!data) {
		sendRequest(
			endPoint,
			(result) => {
				setData(result);
			},
			toPreview ? PREVIEW_ITEM_QUERY : GET_ITEM_QUERY,
			{ pageMaskedId: maskedId },
			'getPbItem',
		);
	}
	let spgData;
	if (
		(data &&
			data.data &&
			data.data.spb_page &&
			// live
			data.data.spb_item &&
			data.data.spb_item.items &&
			data.data.spb_page &&
			data.data.spb_page.items[0]) ||
		// preview
		(data &&
			data.data &&
			data.data.spb_page &&
			data.data.spb_page.items &&
			data.data.spb_page.items[0] &&
			data.data.spb_page.items[0].publish_items)
	) {
		spgData = data.data.spb_page.items[0];
	}
	useEffect(() => {
		if (spgData && spgData.status && spgData.custom_js && !runCustomJSOnce) {
			try {
				runCustomJSOnce = true;
				eval(spgData.custom_js);
			} catch (err) {}
		}
	}, [spgData]);

	if (spgData && spgData.status) {
		return (
			<React.Fragment>
				<Helmet
					style={[
						{
							cssText: `
                            .spb-item {
                                background-color: white;
                                overflow: auto;
                                transition: transform 0.3s ease;
                                position: relative;
                                flex-shrink: 0;
                                background-size: cover;
                                background-repeat: no-repeat;
                                background-position: top left;
                                padding: 15px;
                            }
                            .spb-item-root {
                                align-items: center;
                                padding: 0px;
                            }

                            .spb-item .slide {
                                background-color: white;
                            }

                            .spb-item.type_button {
                                padding: 10px 20px;
                                cursor: pointer;
                            }

                            .spb-item.type_button:hover {
                                opacity: 0.8;
                            }

                            .spb-item.type_image {
                                padding: 0;
                            }
                        `,
						},
					]}
				/>
				{spgData && spgData.custom_css ? (
					<Helmet
						style={[
							{
								cssText: spgData.custom_css,
							},
						]}
					/>
				) : (
					''
				)}
				<Helmet>
					{spgData.title ? <title>{spgData.title}</title> : ''}
					{spgData.desc ? (
						<meta name='description' content={spgData.desc} />
					) : (
						''
					)}
					{spgData.keywords ? (
						<meta name='keywords' content={spgData.keywords} />
					) : (
						''
					)}
				</Helmet>
				<Content
					data={data.data}
					ProductList={ProductList}
					ProductGrid={ProductGrid}
				/>
			</React.Fragment>
		);
	}
	return '';
};

export const usePbFinder = (props) => {
	const { endPoint, integrationToken } = props;
	const [pbData, setPbData] = useState(false);
	const [loading, setLoading] = useState(false);
	const [pathToFind, setPathFoFind] = useState(false);
	let pageMaskedId;

	const findPage = (pathName) => {
		setPathFoFind(pathName);
		if (window.smPbPagesByToken) {
			setPbData(window.smPbPagesByToken);
		} else {
			if (!loading) {
				setLoading(true);
				sendRequest(
					endPoint,
					(result) => {
						setLoading(false);
						if (result && result.data && result.data.spb_page)
							window.smPbPagesByToken = result;
						setPbData(result);
					},
					GET_PB_PAGES_QUERY,
					{ integrationToken },
					'getPbPage',
				);
			}
		}
	};

	if (pbData && pbData.data && pbData.data.spb_page && pathToFind) {
		const { spb_page } = pbData.data;
		pageMaskedId = 'notfound';
		if (spb_page.items && spb_page.items.length) {
			const pbPages = JSON.parse(JSON.stringify(spb_page.items));
			pbPages.sort(
				(el1, el2) => parseInt(el2.priority) - parseInt(el1.priority),
			);
			const pageToFind = pbPages.find((item) => item.url_path === pathToFind);
			if (pageToFind && pageToFind.masked_id)
				pageMaskedId = pageToFind.masked_id;
		}
	}

	return {
		loading,
		pageMaskedId,
		findPage,
		pathToFind,
	};
};
