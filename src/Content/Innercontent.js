import React from 'react';
import product_item_mockup from './images/product_item_mockup.png';
import HtmlParser from 'react-html-parser';

const Innercontent = props => {
    const { item, ProductList, ProductGrid } = props;
    console.log(item)

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
                <img src={data.image} alt='pb img item' style={{ width: '100%' }} />
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
                    <div style={{ textAlign: 'center', marginTop: 10 }}>
                        {item.name}
                    </div>
                )}
            </React.Fragment>
        );
    } else if (item.type === 'product_scroll') {
        if (ProductList)
            return <ProductList item={item} />
        else
            return '';
    } else if (item.type === 'product_grid') {
        if (ProductGrid)
            return <ProductGrid item={item} />
        else
            return '';
    } else if (item.type === 'paragraph') {
        if (data.paragraphContent) return HtmlParser(data.paragraphContent);
    } else if (item.type === 'custom_html') {
        if (data.htmlContent) return HtmlParser(data.htmlContent);
    } else if (item.type === 'icon') {
        if (data.icon) return <i className={`zmdi zmdi-${data.icon}`}/>
    }
    return '';
};

export default Innercontent;
