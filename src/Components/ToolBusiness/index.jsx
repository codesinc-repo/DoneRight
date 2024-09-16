import React from 'react';
import { Link } from "react-router-dom"; 
function ToolBusiness() {
    return (
        <div className="homepage-generic-tiles-section swan-bounded-content swan-mt-0 swan-mb-8 swan-mb-8-sm swan-mb-9-md">
            <div className="swan-grid-container">
                <div className="swan-row">
                    <div
                        data-section="Content:Featured Tiles_Tools to help build your business_Row5"
                        data-position="0"
                        className="swan-col-12"
                    >
                        <div style={{ alignItems: 'baseline' }} className="product-header swan-display-flex">
                            <h2
                                id="Tools to help build your business-5"
                                className="swan-heading swan-text-5 swan-font-weight-bold"
                            >
                                Tools to help build your business
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="swan-row">
                    <div className="swan-col-12">
                        <div
                            className="swan-carousel-container"
                            aria-roledescription="carousel"
                            role="region"
                            style={{
                                '--swan-carousel-arrow-top': '25%',
                                '--swan-carousel-arrow-vertical-offset': '0px',
                                '--swan-internal-carousel-placeholder-slides-to-show': '6',
                            }}
                        >
                            <div className="swan-carousel swan-carousel-grid-gutters swan-carousel-placeholder swan-carousel-placeholder-featureRow5">
                                <style>
                                    {`
                                        .swan-carousel-placeholder-featureRow5 .slick-slide:nth-of-type(6) ~ .slick-slide {
                                            display: none !important;
                                        }
                                    `}
                                </style>
                                <div className="slick-list">
                                    <div className="slick-track">
                                        {[
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759523/MXP28294-Service-Tile-Logomaker-002",
                                                alt: "CUSTOM LOGOS Create your free logo A tote bag with a custom logo.",
                                                text: "Custom Logos",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759528/MXP28294-Service-Tile-Refresh-Design-Help-002",
                                                alt: "PRODUCT DESIGN Get design help A stack of customized rounded corner business cards.",
                                                text: "Product Design",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759566/MXP28294-Service-Tile-Refresh-Vista-Wix-Websites-002",
                                                alt: "CUSTOM BUSINESS WEBSITES Build your website A laptop screen showing a custom business website.",
                                                text: "Custom Business Websites",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759590/MXP28294-Service-Tile-VistaCreate-002",
                                                alt: "SOCIAL MEDIA Design social content Phone screens showing social media posts.",
                                                text: "Social Media",
                                                to: "https://create.vista.com/",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759533/MXP28294-Service-Tile-Refresh-Hire-A-Designer-002",
                                                alt: "CREATIVE EXPERTS Hire a designer A mug personalized with a business logo.",
                                                text: "Creative Experts",
                                                to: "https://99designs.com/?utm_source=Partner&utm_medium=Referral&utm_campaign=Homepage-US&utm_content=Product-Tile",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759542/MXP28294-Service-Tile-Refresh-ProAdvantage-Reseller-002",
                                                alt: "WHOLESALE PRINT PROGRAM Explore reseller program A customized print on top of an envelope.",
                                                text: "Wholesale Print Program",
                                            },
                                            {
                                                src: "https://cms.cloudinary.vpsvc.com/images/c_scale,dpr_auto,f_auto,fl_progressive,w_450/legacy_dam/en-us/S001759635/MXP28294-Service-Tile-Refresh-VCS-002",
                                                alt: "A screen showing a branded website experience.",
                                                text: "Corporate Services",
                                                to: "https://vistaprintcorporate.com/vphp-us",
                                            },
                                        ].map((item, index) => (
                                            <div key={index} className="slick-slide">
                                                <div>
                                                    <div data-testid="slick-item" className="swan-carousel-slide">
                                                        <div
                                                            data-section="Content:Featured Tiles_Tools to help build your business_Row5"
                                                            data-position={index + 1}
                                                            data-translation={item.text}
                                                            className="homepage-generic-tiles-section-tile swan-standard-tile"
                                                        >
                                                            <div className="swan-standard-tile-overlay"></div>
                                                            <div className="swan-standard-tile-image">
                                                                <span
                                                                    style={{ paddingBottom: '100%' }}
                                                                    className="swan-responsive-image-wrapper swan-aspect-ratio-container"
                                                                >
                                                                    <span className="swan-aspect-ratio-content">
                                                                        <img
                                                                            src={item.src}
                                                                            alt={item.alt}
                                                                            loading="lazy"
                                                                            className="swan-responsive-image"
                                                                        />
                                                                    </span>
                                                                </span>
                                                            </div>
                                                            <div className="swan-standard-tile-contents">
                                                                <Link
                                                                    to={item.to || "javascript:void(0)"}
                                                                    className="swan-link swan-link-skin-cta swan-link-covering"
                                                                >
                                                                    {item.text}
                                                                    <img
                                                                        src="https://swan.prod.merch.vpsvc.com/v2/icons/arrow_right.b75db7a964c0e26c4d1da0075e0a7ad6.svg"
                                                                        alt=""
                                                                        className="swan-icon swan-icon-skin-standard swan-icon-type-arrowRight swan-ml-1"
                                                                    />
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ToolBusiness;
