import React from 'react'
import { Link } from "react-router-dom"; 
import './BrandedMerch.css'
import dealImg01 from '../../images/T-shirt02.webp'
import dealImg02 from '../../images/mug mockup.jpg'
import dealImg03 from '../../images/image 01.jpg'
import dealImg04 from '../../images/image 02.jpg'
import dealImg05 from '../../images/image 03.jpg'
import dealImg06 from '../../images/image 04.jpg'
import dealImg07 from '../../images/image 05.jpg'
import dealImg08 from '../../images/image 06.jpg'


function Deals() {
  return (
    <div>
      <div className="homepage-generic-tiles-section swan-bounded-content swan-mt-0 swan-mb-8 swan-mb-8-sm swan-mb-9-md">
  <div className="swan-grid-container">
    <div className="swan-row">
      <div
        data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
        data-position={0}
        className="swan-col-12"
      >
        <div
          style={{ alignItems: "baseline" }}
          className="product-header swan-display-flex"
        >
          <h2
            id="Don’t miss our daily deals and more-1"
            className="swan-heading swan-text-5 swan-font-weight-bold"
          >
            Don’t miss our daily deals and more
          </h2>
        </div>
      </div>
    </div>
    <div className="swan-col-12 swan-px-0">
      <ul className="homepage-generic-tiles-row grid-on-mobile swan-row">
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={1}
            data-translation="Today Only: Up to 30% off select T-shirts"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay">
              <span className="swan-callout swan-callout-skin-announcement swan-callout-inverse">
                Daily Deal
              </span>
            </div>
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg01}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Today Only: Up to 30% off select T-shirts
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={2}
            data-translation="Today Only: 40% off Mugs"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg02}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Today Only: 40% off Mugs
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={3}
            data-translation="Business Cards"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay">
              <span className="swan-callout swan-callout-skin-announcement swan-callout-inverse">
                Up to 30% off
              </span>
            </div>
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg03}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Business Cards
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={4}
            data-translation="Flyers"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg04}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Flyers
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={5}
            data-translation="Posters"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg05}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Posters
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={6}
            data-translation="Vinyl Banners"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg06}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Vinyl Banners
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={7}
            data-translation="Note Cards"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg07}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Note Cards
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
        <li className="swan-col-6 swan-col-xs-6 swan-col-sm-6 swan-mb-4">
          <div
            data-section="Content:Featured Tiles_Don’t miss our daily deals and more_Row1"
            data-position={8}
            data-translation="Roll Labels"
            className="homepage-generic-tiles-section-tile swan-standard-tile"
          >
            <div className="swan-standard-tile-overlay" />
            <div className="swan-standard-tile-image">
              <span
                style={{ paddingBottom: "100%" }}
                className="swan-responsive-image-wrapper swan-aspect-ratio-container"
              >
                <span className="swan-aspect-ratio-content">
                  <img
                    src={dealImg08}
                    alt=""
                    loading="lazy"
                    className="swan-responsive-image"
                  />
                </span>
              </span>
            </div>
            <div className="swan-standard-tile-contents">
              <Link
                to="javascript:void(0)"
                className="swan-link swan-link-skin-cta swan-link-covering"
              >
                Roll Labels
                <img
                  src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                  alt=""
                  className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                />
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>

    </div>
  )
}

export default Deals
