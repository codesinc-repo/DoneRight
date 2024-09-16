import React from 'react';
import { Link } from "react-router-dom"; 
import mainImg from '../../images/image 06.jpg'



function  Mainbanner() {
    return (
        <div>
            <div className="swan-bounded-content swan-px-0 swan-mb-6 swan-mb-6-sm swan-mb-8-md">
                <div
                    data-testid="default-wrapper"
                    style={{ '--swan-public-marketing-background': '#f6f6ec' }}
                    className="swan-banner swan-banner-full-width-image swan-banner-text-horizontal-align-on-extra-small-center swan-banner-text-box-horizontal-align-center swan-banner-hide-image-on-extra-small swan-banner-image-focal-point-center-center swan-bgc-warm-white"
                >
                    <div className="swan-banner-text-container">
                        <div className="swan-banner-text">
                            <p data-testid="eyebrow-without-icon" className="swan-banner-eyebrow swan-font-primary">
                                Semi-Annual Sale
                            </p>
                            <p className="swan-banner-title swan-font-primary swan-font-weight-bold">
                                Up to 40% off almost everything
                            </p>
                            <div className="swan-banner-description">
                                <div>
                                    Don't miss our daily deals on top products. Plus, free shipping on orders $100+.
                                </div>
                            </div>
                            <div className="swan-banner-description">
                                <p>
                                    <span className="swan-promo-code"></span> Ends July 25
                                </p>
                            </div>
                            <div className="swan-banner-links">
                                <Link
                                    to="javascript:void(0)"
                                    className="swan-button swan-button-skin-primary swan-button-mini swan-link"
                                >
                                    Shop all deals
                                </Link>
                                <Link
                                    to="javascript:void(0)"
                                    className="swan-button swan-button-skin-secondary swan-button-mini swan-link"
                                >
                                    Daily Deal: T-shirts
                                </Link>
                                <Link
                                    to="javascript:void(0)"
                                    className="swan-button swan-button-skin-secondary swan-button-mini swan-link"
                                >
                                    Daily Deal: Mugs
                                </Link>
                            </div>
                            <div className="swan-banner-footnote">
                                <div>
                                    Discount will automatically be applied to your cart. Not combinable with other offers.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="swan-banner-image-container">
                        <div className="swan-banner-image">
                            <img src={mainImg} width="100%" alt="Banner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mainbanner;
