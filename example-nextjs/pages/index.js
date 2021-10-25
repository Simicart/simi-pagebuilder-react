import { PageBuilderComponent } from 'simi-pagebuilder-react';

const endPoint = 'https://tapita.io/pb/graphql';
const maskedId = '48mLip5LwVQpjX9ZJaIDan1631181384';

const pageData = {
  entity_id: 406,
  name: 'Demo Simpify Home Page',
  status: 1,
  masked_id: '48mLip5LwVQpjX9ZJaIDan1631181384',
  custom_css: null,
  custom_js: null,
  keywords: null,
  title: 'Demo Simpify Home Page',
  desc: '',
  publish_items:
    '[{"entity_id":"24250","page_id":"406","parent_id":"24566","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631763546934\\/adidas.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"20","visibility":"","status":"1","tag_id":""},{"entity_id":"24249","page_id":"406","parent_id":"24563","styles":"{\\"flexDirection\\":\\"column\\",\\"marginRight\\":0,\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631763393297\\/nike.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"40","visibility":"","status":"1","tag_id":""},{"entity_id":"24248","page_id":"406","parent_id":"24560","styles":"{\\"marginRight\\":0,\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631763112378\\/vans.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"60","visibility":"","status":"1","tag_id":""},{"entity_id":"24560","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/vans\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"80","visibility":"","status":"1","tag_id":""},{"entity_id":"24563","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/nike\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"100","visibility":"","status":"1","tag_id":""},{"entity_id":"24566","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/adidas\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"120","visibility":"","status":"1","tag_id":""},{"entity_id":"24569","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/converse\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"140","visibility":"","status":"1","tag_id":""},{"entity_id":"24572","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/puma\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"160","visibility":"","status":"1","tag_id":""},{"entity_id":"24575","page_id":"406","parent_id":"24559","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/dr-martens\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"180","visibility":"","status":"1","tag_id":""},{"entity_id":"24576","page_id":"406","parent_id":"24575","styles":"{\\"widthPercent\\":\\"100%\\", \\"flexDirection\\":\\"colum\\"}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631851486784\\/drmartens.png\\"}","name":"","class_name":"","type":"image","storeview_visibility":"","sort_order":"190","visibility":"","status":"1","tag_id":""},{"entity_id":"24604","page_id":"406","parent_id":"24603","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631849736285\\/sale.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"210","visibility":"","status":"1","tag_id":""},{"entity_id":"24242","page_id":"406","parent_id":"24526","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631762584537\\/kid.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"220","visibility":"","status":"1","tag_id":""},{"entity_id":"24570","page_id":"406","parent_id":"24569","styles":"{\\"widthPercent\\":\\"100%\\", \\"flexDirection\\":\\"colum\\"}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631850431109\\/converse.png\\"}","name":"","class_name":"","type":"image","storeview_visibility":"","sort_order":"240","visibility":"","status":"1","tag_id":""},{"entity_id":"24573","page_id":"406","parent_id":"24572","styles":"{\\"widthPercent\\":\\"100%\\", \\"flexDirection\\":\\"colum\\"}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631850604842\\/puma.png\\"}","name":"","class_name":"","type":"image","storeview_visibility":"","sort_order":"260","visibility":"","status":"1","tag_id":""},{"entity_id":"24241","page_id":"406","parent_id":"24523","styles":"{\\"flexDirection\\":\\"column\\",\\"marginRight\\":0,\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631762360787\\/women.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"270","visibility":"","status":"1","tag_id":""},{"entity_id":"24240","page_id":"406","parent_id":"24520","styles":"{\\"marginRight\\":0,\\"objectFit\\":\\"cover\\",\\"widthPercent\\":100}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631762065266\\/men.png\\"}","name":"Sample Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"280","visibility":"","status":"1","tag_id":""},{"entity_id":"24520","page_id":"406","parent_id":"24519","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/men\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"290","visibility":"","status":"1","tag_id":""},{"entity_id":"24523","page_id":"406","parent_id":"24519","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/women\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"300","visibility":"","status":"1","tag_id":""},{"entity_id":"24526","page_id":"406","parent_id":"24519","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/kid\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"310","visibility":"","status":"1","tag_id":""},{"entity_id":"24603","page_id":"406","parent_id":"24519","styles":"{\\"padding\\":\\"15px\\",\\"width\\":\\"100%\\"}","data":"{\\"openUrl\\":\\"\\/collections\\/sale\\"}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"320","visibility":"","status":"1","tag_id":"pbi_RWs0b2YxNjMxODQ5Nzc3NjY3_77667"},{"entity_id":"24228","page_id":"406","parent_id":"0","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100,\\"heightPixel\\":0}","data":"{\\"showSliderIndicator\\":1,\\"showSliderNavBtn\\":0,\\"sliderAutoSlide\\":\\"1\\",\\"sliderInfiniteLoop\\":\\"1\\",\\"hideOnMobile\\":false}","name":"","class_name":"","type":"slider","storeview_visibility":"","sort_order":"330","visibility":"","status":"1","tag_id":"pbi_VWNVVm8xNjMxNzYxMDkxMDEx_91011"},{"entity_id":"24229","page_id":"406","parent_id":"24228","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100,\\"paddingTop\\":15,\\"paddingBottom\\":15,\\"paddingLeft\\":15,\\"paddingRight\\":15}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631765996751\\/banner-1.png\\"}","name":"First Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"340","visibility":"","status":"1","tag_id":""},{"entity_id":"24230","page_id":"406","parent_id":"24228","styles":"{\\"flexDirection\\":\\"column\\",\\"widthPercent\\":100,\\"paddingTop\\":15,\\"paddingLeft\\":15,\\"paddingRight\\":15,\\"paddingBottom\\":15}","data":"{\\"image\\":\\"https:\\/\\/tapita.io\\/pb\\/pub\\/media\\/spb\\/usr\\/48\\/oti\\/1631766074203\\/banner-2.png\\"}","name":"Second Image","class_name":"","type":"image","storeview_visibility":"","sort_order":"350","visibility":"","status":"1","tag_id":""},{"entity_id":"24231","page_id":"406","parent_id":"0","styles":"{\\"widthPercent\\":100,\\"marginTop\\":30,\\"marginBottom\\":0,\\"fontWeight\\":700,\\"fontSize\\":\\"16px\\"}","data":"{\\"textTag\\":\\"\\"}","name":"Browse by Category","class_name":"","type":"text","storeview_visibility":"","sort_order":"360","visibility":"","status":"1","tag_id":"pbi_TG9vN1ExNjMxNzYxMjc1ODA0_75804"},{"entity_id":"24519","page_id":"406","parent_id":"0","styles":"{\\"flexDirection\\":\\"row\\",\\"widthPercent\\":100,\\"flexShrink\\":1,\\"paddingTop\\":\\"20px\\",\\"paddingBottom\\":\\"20px\\",\\"paddingLeft\\":\\"15px\\",\\"paddingRight\\":\\"15px\\",\\"justifyContent\\":\\"center\\",\\"display\\":\\"grid\\",\\"columnGap\\":\\"15px\\",\\"rowGap\\":\\"15px\\",\\"gridTemplateColumns\\":\\"1fr 1fr 1fr 1fr\\",\\"m_gridTemplateColumns\\":\\"1fr 1fr\\",\\"maxWidth\\":\\"1280px\\",\\"t_maxWidth\\":\\"1024px\\",\\"marginLeft\\":\\"auto\\",\\"marginRight\\":\\"auto\\",\\"t_gridTemplateColumns\\":\\"1fr 1fr 1fr 1fr\\",\\"l_gridTemplateColumns\\":\\"1fr 1fr 1fr 1fr\\"}","data":"{\\"hideOnMobile\\":false}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"370","visibility":"","status":"1","tag_id":"pbi_ZVVPV1cxNjMxODQ2NTEwMzM4_10338"},{"entity_id":"24246","page_id":"406","parent_id":"0","styles":"{\\"widthPercent\\":100,\\"marginTop\\":30,\\"marginBottom\\":0,\\"fontWeight\\":700,\\"fontSize\\":\\"16px\\"}","data":"{\\"textTag\\":\\"\\"}","name":"Browse by Collection","class_name":"","type":"text","storeview_visibility":"","sort_order":"380","visibility":"","status":"1","tag_id":"pbi_WW1veFoxNjMxNzYyODIzNTA2_23506"},{"entity_id":"24559","page_id":"406","parent_id":"0","styles":"{\\"flexDirection\\":\\"row\\",\\"widthPercent\\":100,\\"flexShrink\\":1,\\"paddingTop\\":\\"20px\\",\\"paddingBottom\\":\\"20px\\",\\"paddingLeft\\":\\"15px\\",\\"paddingRight\\":\\"15px\\",\\"justifyContent\\":\\"center\\",\\"display\\":\\"grid\\",\\"columnGap\\":\\"15px\\",\\"rowGap\\":\\"15px\\",\\"gridTemplateColumns\\":\\"1fr 1fr 1fr\\",\\"m_gridTemplateColumns\\":\\"1fr 1fr\\",\\"maxWidth\\":\\"1280px\\",\\"t_maxWidth\\":\\"1024px\\",\\"marginLeft\\":\\"auto\\",\\"marginRight\\":\\"auto\\"}","data":"{\\"hideOnMobile\\":false}","name":"","class_name":"","type":"container","storeview_visibility":"","sort_order":"390","visibility":"","status":"1","tag_id":"pbi_WnptNkUxNjMxODQ3ODYxNzM1_61735"}]',
  is_rtl: 0,
  storeview_visibility: '',
};

export default function Home() {
  return (
    <div className=''>
      <style jsx global>{`
        .spb-item {
          overflow: auto;
          transition: transform 0.3s ease;
          position: relative;
          flex-shrink: 0;
          background-size: cover;
          background-repeat: no-repeat;
          background-position: top left;
          padding: 15px;
          box-sizing: border-box;
        }

        .type_slider .carousel-root {
          max-width: 100%;
        }

        .spb-item-root {
          align-items: center;
          padding: 0px;
        }

        .spb-item .type_slider {
          background-color: white;
          padding: 0;
        }

        .spb-item.type_button {
          padding: 10px 20px;
          cursor: pointer;
          border: none;
          background-color: #ffffff;
        }

        .spb-item.type_image {
          padding: 0;
        }
        .spb-item.type_dropdown.collapsed > .spb-item {
          display: none !important;
        }
        .spb-item.type_dropdown .smpb-dropdown-title {
          cursor: pointer;
          display: flex;
          padding: 15px;
          justify-content: space-between;
        }

        .spb-item.type_dropdown .smpb-dropdown-title svg,
        .spb-item.type_dropdown .smpb-dropdown-title img {
          width: 21px;
          height: 21px;
        }

        .spb-item h1,
        .spb-item h2,
        .spb-item h3,
        .spb-item h4,
        .spb-item h5,
        .spb-item h6 {
          margin-top: 0;
          margin-bottom: 0;
          font-weight: 500;
          line-height: 1.2;
        }
        .spb-item h1 {
          font-size: 2.1875rem;
        }
        .spb-item h2 {
          font-size: 1.75rem;
        }
        .spb-item h3 {
          font-size: 1.53125rem;
        }
        .spb-item h4 {
          font-size: 1.3125rem;
        }
        .spb-item h5 {
          font-size: 1.09375rem;
        }
        .spb-item h6 {
          font-size: 0.875rem;
        }

        .spb-item.type_instagram .simipb-insta-item {
          display: block;
        }
        .spb-item.type_instagram .simipb-insta-item img,
        .spb-item.type_instagram .simipb-insta-item video {
          max-width: 100%;
          height: 100%;
          object-fit: cover;
        }

        //react-responsive-carousel/lib/styles/carousel.min.css
        .carousel .control-arrow,
        .carousel.carousel-slider .control-arrow {
          -webkit-transition: all 0.25s ease-in;
          -moz-transition: all 0.25s ease-in;
          -ms-transition: all 0.25s ease-in;
          -o-transition: all 0.25s ease-in;
          transition: all 0.25s ease-in;
          opacity: 0.4;
          filter: alpha(opacity=40);
          position: absolute;
          z-index: 2;
          top: 20px;
          background: none;
          border: 0;
          font-size: 32px;
          cursor: pointer;
        }
        .carousel .control-arrow:focus,
        .carousel .control-arrow:hover {
          opacity: 1;
          filter: alpha(opacity=100);
        }
        .carousel .control-arrow:before,
        .carousel.carousel-slider .control-arrow:before {
          margin: 0 5px;
          display: inline-block;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          content: '';
        }
        .carousel .control-disabled.control-arrow {
          opacity: 0;
          filter: alpha(opacity=0);
          cursor: inherit;
          display: none;
        }
        .carousel .control-prev.control-arrow {
          left: 0;
        }
        .carousel .control-prev.control-arrow:before {
          border-right: 8px solid #fff;
        }
        .carousel .control-next.control-arrow {
          right: 0;
        }
        .carousel .control-next.control-arrow:before {
          border-left: 8px solid #fff;
        }
        .carousel-root {
          outline: none;
        }
        .carousel {
          position: relative;
          width: 100%;
        }
        .carousel * {
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
          box-sizing: border-box;
        }
        .carousel img {
          width: 100%;
          display: inline-block;
          pointer-events: none;
        }
        .carousel .carousel {
          position: relative;
        }
        .carousel .control-arrow {
          outline: 0;
          border: 0;
          background: none;
          top: 50%;
          margin-top: -13px;
          font-size: 18px;
        }
        .carousel .thumbs-wrapper {
          margin: 20px;
          overflow: hidden;
        }
        .carousel .thumbs {
          -webkit-transition: all 0.15s ease-in;
          -moz-transition: all 0.15s ease-in;
          -ms-transition: all 0.15s ease-in;
          -o-transition: all 0.15s ease-in;
          transition: all 0.15s ease-in;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
          -ms-transform: translate3d(0, 0, 0);
          -o-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
          position: relative;
          list-style: none;
          white-space: nowrap;
        }
        .carousel .thumb {
          -webkit-transition: border 0.15s ease-in;
          -moz-transition: border 0.15s ease-in;
          -ms-transition: border 0.15s ease-in;
          -o-transition: border 0.15s ease-in;
          transition: border 0.15s ease-in;
          display: inline-block;
          margin-right: 6px;
          white-space: nowrap;
          overflow: hidden;
          border: 3px solid #fff;
          padding: 2px;
        }
        .carousel .thumb:focus {
          border: 3px solid #ccc;
          outline: none;
        }
        .carousel .thumb.selected,
        .carousel .thumb:hover {
          border: 3px solid #333;
        }
        .carousel .thumb img {
          vertical-align: top;
        }
        .carousel.carousel-slider {
          position: relative;
          margin: 0;
          overflow: hidden;
        }
        .carousel.carousel-slider .control-arrow {
          top: 0;
          color: #fff;
          font-size: 26px;
          bottom: 0;
          margin-top: 0;
          padding: 5px;
        }
        .carousel.carousel-slider .control-arrow:hover {
          background: rgba(0, 0, 0, 0.2);
        }
        .carousel .slider-wrapper {
          overflow: hidden;
          margin: auto;
          width: 100%;
          -webkit-transition: height 0.15s ease-in;
          -moz-transition: height 0.15s ease-in;
          -ms-transition: height 0.15s ease-in;
          -o-transition: height 0.15s ease-in;
          transition: height 0.15s ease-in;
        }
        .carousel .slider-wrapper.axis-horizontal .slider {
          -ms-box-orient: horizontal;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -moz-flex;
          display: -webkit-flex;
          display: flex;
        }
        .carousel .slider-wrapper.axis-horizontal .slider .slide {
          flex-direction: column;
          flex-flow: column;
        }
        .carousel .slider-wrapper.axis-vertical {
          -ms-box-orient: horizontal;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -moz-flex;
          display: -webkit-flex;
          display: flex;
        }
        .carousel .slider-wrapper.axis-vertical .slider {
          -webkit-flex-direction: column;
          flex-direction: column;
        }
        .carousel .slider {
          margin: 0;
          padding: 0;
          position: relative;
          list-style: none;
          width: 100%;
        }
        .carousel .slider.animated {
          -webkit-transition: all 0.35s ease-in-out;
          -moz-transition: all 0.35s ease-in-out;
          -ms-transition: all 0.35s ease-in-out;
          -o-transition: all 0.35s ease-in-out;
          transition: all 0.35s ease-in-out;
        }
        .carousel .slide {
          min-width: 100%;
          margin: 0;
          position: relative;
          text-align: center;
        }
        .carousel .slide img {
          width: 100%;
          vertical-align: top;
          border: 0;
        }
        .carousel .slide iframe {
          display: inline-block;
          width: calc(100% - 80px);
          margin: 0 40px 40px;
          border: 0;
        }
        .carousel .slide .legend {
          -webkit-transition: all 0.5s ease-in-out;
          -moz-transition: all 0.5s ease-in-out;
          -ms-transition: all 0.5s ease-in-out;
          -o-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
          position: absolute;
          bottom: 40px;
          left: 50%;
          margin-left: -45%;
          width: 90%;
          border-radius: 10px;
          background: #000;
          color: #fff;
          padding: 10px;
          font-size: 12px;
          text-align: center;
          opacity: 0.25;
          -webkit-transition: opacity 0.35s ease-in-out;
          -moz-transition: opacity 0.35s ease-in-out;
          -ms-transition: opacity 0.35s ease-in-out;
          -o-transition: opacity 0.35s ease-in-out;
          transition: opacity 0.35s ease-in-out;
        }
        .carousel .control-dots {
          position: absolute;
          bottom: 0;
          margin: 10px 0;
          padding: 0;
          text-align: center;
          width: 100%;
          z-index: 1;
        }
        @media (min-width: 960px) {
          .carousel .control-dots {
            bottom: 0;
          }
        }
        .carousel .control-dots .dot {
          -webkit-transition: opacity 0.25s ease-in;
          -moz-transition: opacity 0.25s ease-in;
          -ms-transition: opacity 0.25s ease-in;
          -o-transition: opacity 0.25s ease-in;
          transition: opacity 0.25s ease-in;
          opacity: 0.3;
          filter: alpha(opacity=30);
          box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.9);
          background: #fff;
          border-radius: 50%;
          width: 8px;
          height: 8px;
          cursor: pointer;
          display: inline-block;
          margin: 0 8px;
        }
        .carousel .control-dots .dot.selected,
        .carousel .control-dots .dot:hover {
          opacity: 1;
          filter: alpha(opacity=100);
        }
        .carousel .carousel-status {
          position: absolute;
          top: 0;
          right: 0;
          padding: 5px;
          font-size: 10px;
          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.9);
          color: #fff;
        }
        .carousel:hover .slide .legend {
          opacity: 1;
        }
      `}</style>
      <PageBuilderComponent
				endPoint={endPoint}
				maskedId={maskedId}
				toPreview={false}
				pageData={pageData}
			/>
    </div>
  );
}
