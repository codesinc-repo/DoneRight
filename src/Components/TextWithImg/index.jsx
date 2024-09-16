import React from 'react';
import { Link } from "react-router-dom"; 

function TextWithImg({ eyebrowText, title, description1, description2, promoCode, buttonText, footnote, imgSrc, imgAlt }) {
    return (
        <section className="merchandising-section-hero">
            <div className="swan-bounded-content swan-px-0 swan-mb-6 swan-mb-6-sm swan-mb-8-md">
                <div
                    data-testid="default-wrapper"
                    style={{ '--swan-public-marketing-background': '#2b3b55' }}
                    className="swan-banner swan-banner-card swan-banner-text-horizontal-align-on-extra-small-left swan-banner-text-box-horizontal-align-left swan-banner-hide-image-on-extra-small swan-banner-image-focal-point-center-center swan-bgc-talavera swan-dark-mode"
                >
                    <div className="swan-banner-text-container">
                        <div className="swan-banner-text">
                            <p data-testid="eyebrow-without-icon" className="swan-banner-eyebrow swan-font-primary">
                                {eyebrowText}
                            </p>
                            <p className="swan-banner-title swan-font-primary swan-font-weight-bold">
                                {title}
                            </p>
                            <div className="swan-banner-description">
                                <div>{description1}</div>
                            </div>
                            <div className="swan-banner-description">
                                <p>
                                    {promoCode && <span className="swan-promo-code">{promoCode}</span>} {description2}
                                </p>
                            </div>
                            <div className="swan-banner-links">
                                <Link to="javascript:void(0)" className="swan-button swan-button-skin-primary swan-button-mini swan-link">
                                    {buttonText}
                                </Link>
                            </div>
                            <div className="swan-banner-footnote">
                                <div>{footnote}</div>
                            </div>
                        </div>
                    </div>
                    <div className="swan-banner-image-container">
                        <div className="swan-banner-image">
                            <img
                                src={imgSrc}
                                srcSet={imgSrc}
                                loading="lazy"
                                className="swan-fluid-image"
                                alt={imgAlt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TextWithImg;
