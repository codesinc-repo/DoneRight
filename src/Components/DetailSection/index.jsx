import React, { useState } from "react";
import { Link } from "react-router-dom";
import './DetailSection.css'
import CarImg01 from "../../images/card-2.jpg";
import CarImg02 from "../../images/card-3.webp";
import CarImg03 from "../../images/card-4.jpg";
import CarImg04 from "../../images/card-6.jpg";
import CarImg05 from "../../images/card-7.jpg";
// import { Link } from "react-router-dom";

const DetailSection = ({ title, description }) => {

    const [bgImage, setBgImage] = useState(" ");

    const handleImageClick = (imageUrl) => {
        setBgImage(`url(${imageUrl})`);
        console.log(`Background Image Set to: ${imageUrl}`);
    };

    const [showImageModal, setShowImageModal] = useState(false);
    const [zoomPercentage, setZoomPercentage] = useState(100);

    const handleZoomChange = (e) => {
        setZoomPercentage(e.target.value);
    };


    return (
        <div>
            <>
                <div className="swan-bounded-content mb-4">
                    <div className="swan-grid-container">
                        <div className="carousel-row-container swan-row">
                            <div className="swan-col-7 swan-pb-4 swan-px-0">
                                <div style={{ position: "sticky", top: 20 }}>
                                    <div className="position-relative">
                                        <div className="column">
                                            <div
                                                id="img-holder"
                                                style={{
                                                    backgroundImage: bgImage,
                                                    width: "100%",
                                                    height: "500px",
                                                    backgroundSize: "cover",
                                                    backgroundPosition: "center",
                                                }}
                                            />
                                            <div className="left-icon">
                                                <div>
                                                    <img
                                                        onClick={() => handleImageClick(CarImg01)}
                                                        src={CarImg01}
                                                        id="left-circle"
                                                        alt="Car 1"
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => handleImageClick(CarImg02)}
                                                        src={CarImg02}
                                                        id="left-circle"
                                                        alt="Car 2"
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => handleImageClick(CarImg03)}
                                                        src={CarImg03}
                                                        id="left-circle"
                                                        alt="Car 3"
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => handleImageClick(CarImg04)}
                                                        src={CarImg04}
                                                        id="left-circle"
                                                        alt="Car 4"
                                                    />
                                                </div>
                                                <div>
                                                    <img
                                                        onClick={() => handleImageClick(CarImg05)}
                                                        src={CarImg05}
                                                        id="left-circle"
                                                        alt="Car 5"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swan-col-5 swan-px-0">
                                <div className="on-page-builder">
                                    <div className="swan-bounded-content swan-pt-6">
                                        <div className="builder-container swan-grid-container">
                                            <div>
                                                <div
                                                    style={{
                                                        alignItems: "center",
                                                        justifyContent: "space-between"
                                                    }}
                                                    className="swan-display-flex"
                                                >
                                                    <div>
                                                        <h3
                                                            className="product-name swan-heading swan-mb-0"
                                                            elementtiming="first-meaningful-paint"
                                                        >
                                                            {title}
                                                        </h3>
                                                        <Link
                                                            to="javascript:void(0)"
                                                            className="swan-link swan-link-skin-unstyled swan-pb-5"
                                                        >
                                                            <div
                                                                className="swan-display-flex"
                                                                style={{ alignItems: "center" }}
                                                            >
                                                                <div
                                                                    className="rr-rating swan-display-flex"
                                                                    style={{ alignItems: "center" }}
                                                                >
                                                                    <div
                                                                        aria-label="Rated 4.6 out of 5 stars"
                                                                        role="img"
                                                                        className="swan-ratings swan-bgc-standard"
                                                                    >
                                                                        <div
                                                                            className="swan-ratings-stars-container swan-display-flex"
                                                                            style={{
                                                                                alignItems: "center",
                                                                                gap: "var(--swan-sem-space-2)"
                                                                            }}
                                                                        >
                                                                            <div
                                                                                role="img"
                                                                                aria-label="Rated 4.6 out of 5 stars"
                                                                                className="swan-ratings-stars"
                                                                            >
                                                                                <span>
                                                                                    <i className="fa-solid fa-star" />
                                                                                </span>
                                                                                <span>
                                                                                    <i className="fa-solid fa-star" />
                                                                                </span>
                                                                                <span>
                                                                                    <i className="fa-solid fa-star" />
                                                                                </span>
                                                                                <span>
                                                                                    <i className="fa-solid fa-star" />
                                                                                </span>
                                                                                <span></span>
                                                                            </div>{" "}
                                                                            &nbsp;&nbsp;
                                                                            <span className="swan-ratings-stars-rating">
                                                                                4.6
                                                                            </span>
                                                                            <span className="swan-ratings-stars-reviews">
                                                                                (65423)
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                        <div
                                                            style={{ alignItems: "center" }}
                                                            className="swan-display-flex"
                                                        ></div>
                                                    </div>
                                                    <div />
                                                </div>
                                                <div className="product-description swan-text-small swan-mb-5">
                                                    <p className="product-description">
                                                        <span>
                                                            {description}
                                                        </span>
                                                        <Link
                                                            to="javascript:void(0)"
                                                            className="see-details swan-link"
                                                        >
                                                            See details
                                                        </Link>
                                                    </p>
                                                </div>
                                                <div
                                                    style={{ alignItems: "center", flexDirection: "row" }}
                                                    className="swan-display-flex swan-mb-5"
                                                >
                                                    <div className="swan-pr-3">
                                                        <img
                                                            src="https://swan.prod.merch.vpsvc.com/v2/icons/templates.6bba82ee7cf98e41f9b097d5f7512a47.svg"
                                                            alt=""
                                                            className="swan-icon swan-icon-size-20p swan-icon-skin-standard swan-icon-type-templates"
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="see-details swan-text-small">
                                                            <div>
                                                                <Link to="javascript:void(0)">
                                                                    View Specs &amp; Templates
                                                                </Link>{" "}
                                                                to create your print-ready file.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="builder-controls">
                                                    <div className="builder-step-loader">
                                                        <span className="swan-spinner swan-spinner-super">
                                                            <span className="swan-spinner-animation">
                                                                <span className="swan-spinner-animation-inner" />
                                                            </span>
                                                            <span className="swan-spinner-text">
                                                                Fetching compatible options
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div className="controls-row">
                                                        <div className="swan-mt-5">
                                                            <div>
                                                                <div />
                                                            </div>
                                                            <div>
                                                                <div className="sc-imWZod jDwzQE">
                                                                    <h3
                                                                        id="quantity-list-title"
                                                                        className="swan-heading swan-text-standard swan-font-weight-bold swan-mb-3"
                                                                    >
                                                                        Quantity
                                                                    </h3>
                                                                    <div
                                                                        style={{ flexWrap: "wrap" }}
                                                                        aria-labelledby="quantity-list-title"
                                                                        role="radiogroup"
                                                                        className="swan-selection-set"
                                                                    >
                                                                        <input
                                                                            type="radio"
                                                                            id="Quantity50"
                                                                            className="swan-selection-set-input swan-radio"
                                                                            defaultValue={50}
                                                                            name="auto-id-ddz77zj6d-5"
                                                                        />
                                                                        <label
                                                                            style={{ wordBreak: "initial" }}
                                                                            htmlFor="Quantity50"
                                                                            className="swan-selection-set-label swan-my-2"
                                                                        >
                                                                            <div htmlFor="Quantity50">
                                                                                <div
                                                                                    style={{ justifyContent: "space-between" }}
                                                                                    className="quantity-container swan-display-flex"
                                                                                >
                                                                                    <div
                                                                                        style={{ alignItems: "center" }}
                                                                                        className="quantity-number-callouts swan-display-flex"
                                                                                    >
                                                                                        <div className="swan-text-standard swan-font-weight-bold swan-pr-3">
                                                                                            50
                                                                                        </div>
                                                                                        <div className="swan-display-flex"></div>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            justifyContent: "space-between",
                                                                                            flexDirection: "column",
                                                                                            alignItems: "end"
                                                                                        }}
                                                                                        className="quantity-prices swan-display-flex"
                                                                                    >
                                                                                        <div
                                                                                            className="swan-display-flex"
                                                                                            style={{ alignItems: "baseline" }}
                                                                                        >
                                                                                            <div className="swan-pr-3">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $11.99
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="swan-text-xsmall">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $0.24
                                                                                                        </span>
                                                                                                        <span className="swan-pricing-offer">
                                                                                                            / unit
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{ alignItems: "center" }}
                                                                                            className="swan-display-flex"
                                                                                        ></div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                        <input
                                                                            type="radio"
                                                                            id="Quantity100"
                                                                            className="swan-selection-set-input swan-radio"
                                                                            defaultChecked=""
                                                                            defaultValue={100}
                                                                            name="auto-id-ddz77zj6d-5"
                                                                        />
                                                                        <label
                                                                            style={{ wordBreak: "initial" }}
                                                                            htmlFor="Quantity100"
                                                                            className="swan-selection-set-label swan-my-2"
                                                                        >
                                                                            <div htmlFor="Quantity100">
                                                                                <div
                                                                                    style={{ justifyContent: "space-between" }}
                                                                                    className="quantity-container swan-display-flex"
                                                                                >
                                                                                    <div
                                                                                        style={{ alignItems: "center" }}
                                                                                        className="quantity-number-callouts swan-display-flex"
                                                                                    >
                                                                                        <div className="swan-text-standard swan-font-weight-bold swan-pr-3">
                                                                                            100
                                                                                        </div>
                                                                                        <div className="swan-display-flex"></div>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            justifyContent: "space-between",
                                                                                            flexDirection: "column",
                                                                                            alignItems: "end"
                                                                                        }}
                                                                                        className="quantity-prices swan-display-flex"
                                                                                    >
                                                                                        <div
                                                                                            className="swan-display-flex"
                                                                                            style={{ alignItems: "baseline" }}
                                                                                        >
                                                                                            <div className="swan-pr-3">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $14.99
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="swan-text-xsmall">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $0.15
                                                                                                        </span>
                                                                                                        <span className="swan-pricing-offer">
                                                                                                            / unit
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{ alignItems: "center" }}
                                                                                            className="swan-display-flex"
                                                                                        >
                                                                                            <span className="swan-discount-price swan-text-small">
                                                                                                37% savings
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                        <input
                                                                            type="radio"
                                                                            id="Quantity250"
                                                                            className="swan-selection-set-input swan-radio"
                                                                            defaultValue={250}
                                                                            name="auto-id-ddz77zj6d-5"
                                                                        />
                                                                        <label
                                                                            style={{ wordBreak: "initial" }}
                                                                            htmlFor="Quantity250"
                                                                            className="swan-selection-set-label swan-my-2"
                                                                        >
                                                                            <div htmlFor="Quantity250">
                                                                                <div
                                                                                    style={{ justifyContent: "space-between" }}
                                                                                    className="quantity-container swan-display-flex"
                                                                                >
                                                                                    <div
                                                                                        style={{ alignItems: "center" }}
                                                                                        className="quantity-number-callouts swan-display-flex"
                                                                                    >
                                                                                        <div className="swan-text-standard swan-font-weight-bold swan-pr-3">
                                                                                            250
                                                                                        </div>
                                                                                        <div className="swan-display-flex"></div>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            justifyContent: "space-between",
                                                                                            flexDirection: "column",
                                                                                            alignItems: "end"
                                                                                        }}
                                                                                        className="quantity-prices swan-display-flex"
                                                                                    >
                                                                                        <div
                                                                                            className="swan-display-flex"
                                                                                            style={{ alignItems: "baseline" }}
                                                                                        >
                                                                                            <div className="swan-pr-3">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $22.99
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="swan-text-xsmall">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $0.10
                                                                                                        </span>
                                                                                                        <span className="swan-pricing-offer">
                                                                                                            / unit
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{ alignItems: "center" }}
                                                                                            className="swan-display-flex"
                                                                                        >
                                                                                            <span className="swan-discount-price swan-text-small">
                                                                                                58% savings
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                        <input
                                                                            type="radio"
                                                                            id="Quantity500"
                                                                            className="swan-selection-set-input swan-radio"
                                                                            defaultValue={500}
                                                                            name="auto-id-ddz77zj6d-5"
                                                                        />
                                                                        <label
                                                                            style={{ wordBreak: "initial" }}
                                                                            htmlFor="Quantity500"
                                                                            className="swan-selection-set-label swan-my-2"
                                                                        >
                                                                            <div htmlFor="Quantity500">
                                                                                <div
                                                                                    style={{ justifyContent: "space-between" }}
                                                                                    className="quantity-container swan-display-flex"
                                                                                >
                                                                                    <div
                                                                                        style={{ alignItems: "center" }}
                                                                                        className="quantity-number-callouts swan-display-flex"
                                                                                    >
                                                                                        <div className="swan-text-standard swan-font-weight-bold swan-pr-3">
                                                                                            500
                                                                                        </div>
                                                                                        <div className="swan-display-flex">
                                                                                            <span className="swan-callout swan-callout-skin-announcement swan-callout-overlay">
                                                                                                Recommended
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            justifyContent: "space-between",
                                                                                            flexDirection: "column",
                                                                                            alignItems: "end"
                                                                                        }}
                                                                                        className="quantity-prices swan-display-flex"
                                                                                    >
                                                                                        <div
                                                                                            className="swan-display-flex"
                                                                                            style={{ alignItems: "baseline" }}
                                                                                        >
                                                                                            <div className="swan-pr-3">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $24.99
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="swan-text-xsmall">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $0.05
                                                                                                        </span>
                                                                                                        <span className="swan-pricing-offer">
                                                                                                            / unit
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{ alignItems: "center" }}
                                                                                            className="swan-display-flex"
                                                                                        >
                                                                                            <span className="swan-discount-price swan-text-small">
                                                                                                79% savings
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                        <input
                                                                            type="radio"
                                                                            id="Quantity1000"
                                                                            className="swan-selection-set-input swan-radio"
                                                                            defaultValue={1000}
                                                                            name="auto-id-ddz77zj6d-5"
                                                                        />
                                                                        <label
                                                                            style={{ wordBreak: "initial" }}
                                                                            htmlFor="Quantity1000"
                                                                            className="swan-selection-set-label swan-my-2"
                                                                        >
                                                                            <div htmlFor="Quantity1000">
                                                                                <div
                                                                                    style={{ justifyContent: "space-between" }}
                                                                                    className="quantity-container swan-display-flex"
                                                                                >
                                                                                    <div
                                                                                        style={{ alignItems: "center" }}
                                                                                        className="quantity-number-callouts swan-display-flex"
                                                                                    >
                                                                                        <div className="swan-text-standard swan-font-weight-bold swan-pr-3">
                                                                                            1000
                                                                                        </div>
                                                                                        <div className="swan-display-flex"></div>
                                                                                    </div>
                                                                                    <div
                                                                                        style={{
                                                                                            justifyContent: "space-between",
                                                                                            flexDirection: "column",
                                                                                            alignItems: "end"
                                                                                        }}
                                                                                        className="quantity-prices swan-display-flex"
                                                                                    >
                                                                                        <div
                                                                                            className="swan-display-flex"
                                                                                            style={{ alignItems: "baseline" }}
                                                                                        >
                                                                                            <div className="swan-pr-3">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $39.99
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                            <div className="swan-text-xsmall">
                                                                                                <span>
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $0.04
                                                                                                        </span>
                                                                                                        <span className="swan-pricing-offer">
                                                                                                            / unit
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div
                                                                                            style={{ alignItems: "center" }}
                                                                                            className="swan-display-flex"
                                                                                        >
                                                                                            <span className="swan-discount-price swan-text-small">
                                                                                                83% savings
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                    <div
                                                                        style={{ justifyContent: "center" }}
                                                                        className="swan-display-flex swan-mt-5"
                                                                    >
                                                                        <button
                                                                            type="button"
                                                                            className="swan-link swan-button-skin-link"
                                                                        >
                                                                            See more quantities
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="swan-row">
                                                        <div className="price-column swan-col-12">
                                                            <div
                                                                style={{ flexWrap: "wrap" }}
                                                                className="swan-display-flex"
                                                            >
                                                                <div
                                                                    style={{ flexDirection: "column" }}
                                                                    className="fade-in active swan-display-flex"
                                                                >
                                                                    <div className="price-block swan-mr-3">
                                                                        <span className="swan-text-small">
                                                                            <span>
                                                                                <span className="swan-pricing">
                                                                                    <span className="swan-pricing-offer">
                                                                                        100 starting at{" "}
                                                                                    </span>
                                                                                    <span className="swan-list-price">
                                                                                        $14.99
                                                                                    </span>
                                                                                </span>
                                                                            </span>
                                                                        </span>
                                                                    </div>
                                                                    <div className="swan-mb-3">
                                                                        <div className="shipping-calculator-container swan-mt-1">
                                                                            <div className="swan-text-small">
                                                                                <span>
                                                                                    <div>
                                                                                        <div>
                                                                                            <button className="swan-link">
                                                                                                <span>
                                                                                                    Get it as soon as
                                                                                                    <b>Thursday, Aug 8th</b> to 02451
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div>
                                                                                            <button className="free-shipping-link swan-link">
                                                                                                <span>
                                                                                                    <u>
                                                                                                        <b>Free shipping</b>
                                                                                                    </u>
                                                                                                    on orders over
                                                                                                    <span className="swan-pricing">
                                                                                                        <span className="swan-list-price">
                                                                                                            $100
                                                                                                        </span>
                                                                                                    </span>
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                    </div>
                                                                                </span>
                                                                                <dialog
                                                                                    role="dialog"
                                                                                    aria-modal="true"
                                                                                    className="swan-dialog swan-vanilla-ignore"
                                                                                    aria-labelledby="auto-id-ddz77zj6d-33"
                                                                                >
                                                                                    <div
                                                                                        aria-label="Shipping options dialog box"
                                                                                        className="swan-modal-dialog swan-modal-dialog-skin-full-bleed"
                                                                                    >
                                                                                        <div className="swan-modal-dialog-nav swan-pb-4">
                                                                                            <div className="swan-modal-dialog-header swan-my-2">
                                                                                                <h2
                                                                                                    className="swan-modal-dialog-title"
                                                                                                    id="auto-id-ddz77zj6d-33"
                                                                                                >
                                                                                                    Delivery options
                                                                                                </h2>
                                                                                            </div>
                                                                                            <button className="swan-modal-dialog-close-button">
                                                                                                <span className="swan-visually-hidden">
                                                                                                    Close Shipping Options Modal
                                                                                                </span>
                                                                                            </button>
                                                                                        </div>
                                                                                        <div className="swan-modal-dialog-body">
                                                                                            <div className="shipping-calculator-content-container swan-px-6 swan-pb-6 swan-pt-0">
                                                                                                <div className="swan-text-xsmall swan-text-color-subtle">
                                                                                                    Price and shipping options apply to
                                                                                                    this selected product only. Total
                                                                                                    price will be calculated in
                                                                                                    cart.&nbsp;
                                                                                                    <button className="swan-link">
                                                                                                        Learn more
                                                                                                    </button>
                                                                                                </div>
                                                                                                <div className="swan-mt-5">
                                                                                                    <form className="swan-form swan-form-skin-tight">
                                                                                                        <div>
                                                                                                            <div className="swan-input-group">
                                                                                                                <div className="swan-text-xsmall swan-text-color-subtle">
                                                                                                                    Country
                                                                                                                </div>
                                                                                                                <select
                                                                                                                    aria-label="Country"
                                                                                                                    aria-invalid="false"
                                                                                                                    className="swan-dropdown swan-dropdown-skin-line swan-dropdown-full-width"
                                                                                                                    id="auto-id-ddz77zj6d-34"
                                                                                                                >
                                                                                                                    <option value="AT">
                                                                                                                        Austria
                                                                                                                    </option>
                                                                                                                    <option value="AU">
                                                                                                                        Australia
                                                                                                                    </option>
                                                                                                                    <option value="BE">
                                                                                                                        Belgium
                                                                                                                    </option>
                                                                                                                    <option value="CA">
                                                                                                                        Canada
                                                                                                                    </option>
                                                                                                                    <option value="CH">
                                                                                                                        Switzerland
                                                                                                                    </option>
                                                                                                                    <option value="CZ">
                                                                                                                        Czech Republic
                                                                                                                    </option>
                                                                                                                    <option value="DE">
                                                                                                                        Germany
                                                                                                                    </option>
                                                                                                                    <option value="DK">
                                                                                                                        Denmark
                                                                                                                    </option>
                                                                                                                    <option value="ES">
                                                                                                                        Spain
                                                                                                                    </option>
                                                                                                                    <option value="FI">
                                                                                                                        Finland
                                                                                                                    </option>
                                                                                                                    <option value="FR">
                                                                                                                        France
                                                                                                                    </option>
                                                                                                                    <option value="GB">
                                                                                                                        United Kingdom
                                                                                                                    </option>
                                                                                                                    <option value="GR">
                                                                                                                        Greece
                                                                                                                    </option>
                                                                                                                    <option value="IE">
                                                                                                                        Ireland
                                                                                                                    </option>
                                                                                                                    <option value="IS">
                                                                                                                        Iceland
                                                                                                                    </option>
                                                                                                                    <option value="IT">
                                                                                                                        Italy
                                                                                                                    </option>
                                                                                                                    <option value="NL">
                                                                                                                        Netherlands
                                                                                                                    </option>
                                                                                                                    <option value="NO">
                                                                                                                        Norway
                                                                                                                    </option>
                                                                                                                    <option value="NZ">
                                                                                                                        New Zealand
                                                                                                                    </option>
                                                                                                                    <option value="PL">
                                                                                                                        Poland
                                                                                                                    </option>
                                                                                                                    <option value="PT">
                                                                                                                        Portugal
                                                                                                                    </option>
                                                                                                                    <option value="SE">
                                                                                                                        Sweden
                                                                                                                    </option>
                                                                                                                    <option value="US">
                                                                                                                        United States of America
                                                                                                                    </option>
                                                                                                                </select>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="swan-display-flex"
                                                                                                            style={{
                                                                                                                flexWrap: "nowrap",
                                                                                                                justifyContent: "space-between"
                                                                                                            }}
                                                                                                        >
                                                                                                            <div>
                                                                                                                <div className="swan-input-group">
                                                                                                                    <div className="swan-vanilla-ignore swan-input-with-floating-label">
                                                                                                                        <input
                                                                                                                            aria-label="ZIP code"
                                                                                                                            type="text"
                                                                                                                            placeholder=" "
                                                                                                                            aria-invalid="false"
                                                                                                                            className="swan-input"
                                                                                                                            defaultValue={"02451"}
                                                                                                                            id="auto-id-ddz77zj6d-35"
                                                                                                                        />
                                                                                                                        <label htmlFor="auto-id-ddz77zj6d-35">
                                                                                                                            ZIP code
                                                                                                                        </label>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                            <div className="swan-mt-3 swan-ml-5">
                                                                                                                <button
                                                                                                                    type="button"
                                                                                                                    className="swan-button swan-button-skin-primary swan-button-mini"
                                                                                                                >
                                                                                                                    Apply
                                                                                                                </button>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </form>
                                                                                                </div>
                                                                                                <div>
                                                                                                    <div className="swan-mb-2">
                                                                                                        <div className="swan-text-xsmall">
                                                                                                            Delivery time
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        role="radiogroup"
                                                                                                        className="swan-selection-set"
                                                                                                    >
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            className="swan-selection-set-input swan-radio"
                                                                                                            defaultValue="a418bd7b-38d0-4948-9e51-d848a4146704"
                                                                                                            defaultChecked=""
                                                                                                            id="auto-id-ddz77zj6d-36"
                                                                                                            name="auto-id-ddz77zj6d-40"
                                                                                                        />
                                                                                                        <label
                                                                                                            className="swan-selection-set-label"
                                                                                                            htmlFor="auto-id-ddz77zj6d-36"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="swan-display-flex"
                                                                                                                style={{
                                                                                                                    flexDirection: "row",
                                                                                                                    justifyContent:
                                                                                                                        "space-between"
                                                                                                                }}
                                                                                                            >
                                                                                                                <div className="swan-mr-2">
                                                                                                                    <div className="swan-text-no-wrap swan-text-small swan-font-weight-bold">
                                                                                                                        Rush: Thursday, Aug 8th
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <div className="swan-text-small swan-font-weight-bold swan-text-align-right">
                                                                                                                        <div className="swan-markup">
                                                                                                                            <span>
                                                                                                                                <span className="swan-pricing">
                                                                                                                                    <span className="swan-list-price">
                                                                                                                                        $23.99
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="swan-display-flex"></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </label>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            className="swan-selection-set-input swan-radio"
                                                                                                            defaultValue="f31ed114-c42e-4ae6-9d26-6ce83daeb853"
                                                                                                            id="auto-id-ddz77zj6d-37"
                                                                                                            name="auto-id-ddz77zj6d-40"
                                                                                                        />
                                                                                                        <label
                                                                                                            className="swan-selection-set-label"
                                                                                                            htmlFor="auto-id-ddz77zj6d-37"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="swan-display-flex"
                                                                                                                style={{
                                                                                                                    flexDirection: "row",
                                                                                                                    justifyContent:
                                                                                                                        "space-between"
                                                                                                                }}
                                                                                                            >
                                                                                                                <div className="swan-mr-2">
                                                                                                                    <div className="swan-text-no-wrap swan-text-small swan-font-weight-bold">
                                                                                                                        Express: Friday, Aug 9th
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <div className="swan-text-small swan-font-weight-bold swan-text-align-right">
                                                                                                                        <div className="swan-markup">
                                                                                                                            <span>
                                                                                                                                <span className="swan-pricing">
                                                                                                                                    <span className="swan-list-price">
                                                                                                                                        $18.99
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="swan-display-flex"></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </label>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            className="swan-selection-set-input swan-radio"
                                                                                                            defaultValue="8e067f09-97f7-4138-aba2-2989a0aded12"
                                                                                                            id="auto-id-ddz77zj6d-38"
                                                                                                            name="auto-id-ddz77zj6d-40"
                                                                                                        />
                                                                                                        <label
                                                                                                            className="swan-selection-set-label"
                                                                                                            htmlFor="auto-id-ddz77zj6d-38"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="swan-display-flex"
                                                                                                                style={{
                                                                                                                    flexDirection: "row",
                                                                                                                    justifyContent:
                                                                                                                        "space-between"
                                                                                                                }}
                                                                                                            >
                                                                                                                <div className="swan-mr-2">
                                                                                                                    <div className="swan-text-no-wrap swan-text-small swan-font-weight-bold">
                                                                                                                        Priority: Wednesday, Aug
                                                                                                                        14th
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <div className="swan-text-small swan-font-weight-bold swan-text-align-right">
                                                                                                                        <div className="swan-markup">
                                                                                                                            <span>
                                                                                                                                <span className="swan-pricing">
                                                                                                                                    <span className="swan-list-price">
                                                                                                                                        $9.99
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="swan-display-flex"></div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </label>
                                                                                                        <input
                                                                                                            type="radio"
                                                                                                            className="swan-selection-set-input swan-radio"
                                                                                                            defaultValue="3ce583de-0d3a-4933-bd7a-b7ee3b550273"
                                                                                                            id="auto-id-ddz77zj6d-39"
                                                                                                            name="auto-id-ddz77zj6d-40"
                                                                                                        />
                                                                                                        <label
                                                                                                            className="swan-selection-set-label"
                                                                                                            htmlFor="auto-id-ddz77zj6d-39"
                                                                                                        >
                                                                                                            <div
                                                                                                                className="swan-display-flex"
                                                                                                                style={{
                                                                                                                    flexDirection: "row",
                                                                                                                    justifyContent:
                                                                                                                        "space-between"
                                                                                                                }}
                                                                                                            >
                                                                                                                <div className="swan-mr-2">
                                                                                                                    <div className="swan-text-no-wrap swan-text-small swan-font-weight-bold">
                                                                                                                        Standard: Friday, Aug 16th
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div>
                                                                                                                    <div className="swan-text-small swan-font-weight-bold swan-text-align-right">
                                                                                                                        <div className="swan-markup">
                                                                                                                            <span>
                                                                                                                                <span className="swan-pricing">
                                                                                                                                    <span className="swan-list-price">
                                                                                                                                        $5.99
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </div>
                                                                                                                    </div>
                                                                                                                    <div className="swan-display-flex">
                                                                                                                        <span className="shipping-calculator-option-item-free-messaging swan-text-xsmall swan-font-weight-normal swan-text-align-right">
                                                                                                                            <span>
                                                                                                                                Free on orders over
                                                                                                                                <span className="swan-pricing">
                                                                                                                                    <span className="swan-list-price">
                                                                                                                                        $100
                                                                                                                                    </span>
                                                                                                                                </span>
                                                                                                                            </span>
                                                                                                                        </span>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </label>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="swan-modal-dialog-popover"></div>
                                                                                </dialog>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div style={{ width: "100%" }}>
                                                                    <div className="" data-pp-id={1}>
                                                                        <span id="zoid-paypal-message-uid_17c8cb692c_mte6mtg6ntc">
                                                                            <style
                                                                                nonce=""
                                                                                dangerouslySetInnerHTML={{
                                                                                    __html:
                                                                                        "\n                                                                                    #zoid-paypal-message-uid_17c8cb692c_mte6mtg6ntc>iframe {\n                                                                                        width: 100%;\n                                                                                        height: 0;\n                                                                                    }\n\n                                                                                    #zoid-paypal-message-uid_17c8cb692c_mte6mtg6ntc>iframe:nth-of-type(2) {\n                                                                                        display: none;\n                                                                                    }\n                                                                                "
                                                                                }}
                                                                            />
                                                                            <iframe
                                                                                allowTransparency="true"
                                                                                name="__zoid__paypal_message__eyJzZW5kZXIiOnsiZG9tYWluIjoiaHR0cHM6Ly93d3cudmlzdGFwcmludC5jb20ifSwibWV0YURhdGEiOnsid2luZG93UmVmIjp7InR5cGUiOiJwYXJlbnQiLCJkaXN0YW5jZSI6MH19LCJyZWZlcmVuY2UiOnsidHlwZSI6InJhdyIsInZhbCI6IntcInVpZFwiOlwiem9pZC1wYXlwYWwtbWVzc2FnZS11aWRfMTdjOGNiNjkyY19tdGU2bXRnNm50Y1wiLFwiY29udGV4dFwiOlwiaWZyYW1lXCIsXCJ0YWdcIjpcInBheXBhbC1tZXNzYWdlXCIsXCJjaGlsZERvbWFpbk1hdGNoXCI6e1wiX190eXBlX19cIjpcInJlZ2V4XCIsXCJfX3ZhbF9fXCI6XCJcXFxcLnBheXBhbFxcXFwuY29tKDpcXFxcZCspPyRcIn0sXCJ2ZXJzaW9uXCI6XCIxMF8zXzNcIixcInByb3BzXCI6e1wiYWNjb3VudFwiOlwiY2xpZW50LWlkOkFaODFmZ0JOcXZiQTV0a2FxOHQwV2lrLXg4SW1vVWJfM0FzT0I2aTNQWTlzbjNvWDc0QTkzT1d6SUJCaERtVEtFS0d4Q1Rla1FvNklVRWI4XCIsXCJtZXJjaGFudElkXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcImN1c3RvbWVySWRcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY3VycmVuY3lcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiYW1vdW50XCI6MTQuOTksXCJidXllckNvdW50cnlcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiaWdub3JlQ2FjaGVcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY2hhbm5lbFwiOlwiVVBTVFJFQU1cIixcImVjVG9rZW5cIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY29udGV4dHVhbENvbXBvbmVudHNcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwiY3NwTm9uY2VcIjpcIlwiLFwiZmVhdHVyZXNcIjpcIm5hdGl2ZS1tb2RhbFwiLFwiaW5kZXhcIjpcIjFcIixcInBhZ2VUeXBlXCI6e1wiX190eXBlX19cIjpcInVuZGVmaW5lZFwifSxcInN0eWxlXCI6e1wibGF5b3V0XCI6XCJ0ZXh0XCJ9LFwib2ZmZXJcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwib25DbGlja1wiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2UyNzA2NjM1MWVfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcIm9uQ2xpY2tcIn19LFwib25BcHBseVwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJvblJlYWR5XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfNzQ2MjI2NTVmYl9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwib25SZWFkeVwifX0sXCJnZXRDb250YWluZXJcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8yODBkOTY5YzQ3X210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJnZXRDb250YWluZXJcIn19LFwibW9kYWxcIjp7XCJyZW5kZXJcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8wNDA3YjI5MDQzX210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJSXCJ9fSxcInNob3dcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8zODQxNjMwZDcyX210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJUXCJ9fSxcImhpZGVcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF85ZTdmYmI0MDFmX210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJGXCJ9fSxcInVwZGF0ZVByb3BzXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfYjk2NjY2NTg3ZV9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwidXBkYXRlUHJvcHNcIn19fSxcIm9uRGVzdHJveVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzdkYmM3NTEwYTVfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcIm9uRGVzdHJveVwifX0sXCJvbkhvdmVyXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZDEwMDIyNjI2ZV9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwib25Ib3ZlclwifX0sXCJvbk1hcmt1cFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkX2I5YzUyYWJmZjRfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcIm9uTWFya3VwXCJ9fSxcInBheWVySWRcIjpudWxsLFwiY2xpZW50SWRcIjpcIkFaODFmZ0JOcXZiQTV0a2FxOHQwV2lrLXg4SW1vVWJfM0FzT0I2aTNQWTlzbjNvWDc0QTkzT1d6SUJCaERtVEtFS0d4Q1Rla1FvNklVRWI4XCIsXCJtZXJjaGFudENvbmZpZ0hhc2hcIjpcIjZlMzc3Mzk1ZGFiYTMyOTBmYzg5ZTVmMDkyMTcxNTU1Yjc5NGFiODJcIixcInRyZWF0bWVudHNIYXNoXCI6XCI5NDdiNTNlNTI5ZmRjYzYyMzI3NThkYjRlMjQ3MGVhY2JmZDczZGFmXCIsXCJlbnZcIjpcInByb2R1Y3Rpb25cIixcInZlcnNpb25cIjpcIjEuNjQuOFwiLFwiaW50ZWdyYXRpb25UeXBlXCI6XCJTREtcIixcImRldmljZUlEXCI6XCJ1aWRfM2E4NWEwODQ1Y19tZGs2bnRlNm10bVwiLFwic2Vzc2lvbklEXCI6XCJ1aWRfMTMwMDIyMDVmZV9tdGU2bXRnNm50Y1wiLFwic2NyaXB0VUlEXCI6XCJ1aWRfdndvY3NhYXFreHRpeWxoeHZnd2Vpc2l3aWNxbmR1XCIsXCJtZXNzYWdlUmVxdWVzdElkXCI6XCJ1aWRfYjg1OWJiNDg5Yl9tdGU2bXRnNm50Y1wiLFwiZGVidWdcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwibWVzc2FnZUxvY2F0aW9uXCI6XCJodHRwczovL3d3dy52aXN0YXByaW50LmNvbS9idXNpbmVzcy1jYXJkcy9zdGFuZGFyZFwiLFwic3RhZ2VUYWdcIjp7XCJfX3R5cGVfX1wiOlwidW5kZWZpbmVkXCJ9LFwicGFydG5lckF0dHJpYnV0aW9uSWRcIjpudWxsLFwiZGV2VG91Y2hwb2ludFwiOntcIl9fdHlwZV9fXCI6XCJ1bmRlZmluZWRcIn0sXCJkaXNhYmxlU2V0Q29va2llXCI6dHJ1ZX0sXCJleHBvcnRzXCI6e1wiaW5pdFwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzY5MzcwMzc4YjBfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcImluaXRcIn19LFwiY2xvc2VcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF82MGY2YjQ4ZWQyX210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJjbG9zZTo6bWVtb2l6ZWRcIn19LFwiY2hlY2tDbG9zZVwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzBmMWI0MmY2OWRfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcImNoZWNrQ2xvc2VcIn19LFwicmVzaXplXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZmRkMjY4MGVmYV9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwiSGVcIn19LFwib25FcnJvclwiOntcIl9fdHlwZV9fXCI6XCJjcm9zc19kb21haW5fZnVuY3Rpb25cIixcIl9fdmFsX19cIjp7XCJpZFwiOlwidWlkXzZkNGQ5MGJhYTlfbXRlNm10ZzZudGNcIixcIm5hbWVcIjpcInFlXCJ9fSxcInNob3dcIjp7XCJfX3R5cGVfX1wiOlwiY3Jvc3NfZG9tYWluX2Z1bmN0aW9uXCIsXCJfX3ZhbF9fXCI6e1wiaWRcIjpcInVpZF8xNDA4Njk1MTkwX210ZTZtdGc2bnRjXCIsXCJuYW1lXCI6XCJ2ZVwifX0sXCJoaWRlXCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfZjg4Y2U1NWRhMF9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwibWVcIn19LFwiZXhwb3J0XCI6e1wiX190eXBlX19cIjpcImNyb3NzX2RvbWFpbl9mdW5jdGlvblwiLFwiX192YWxfX1wiOntcImlkXCI6XCJ1aWRfYTg0YzUzMzg0Nl9tdGU2bXRnNm50Y1wiLFwibmFtZVwiOlwiWWVcIn19fX0ifX0__"
                                                                                title="PayPal Message 1"
                                                                                scrolling="no"
                                                                                id="jsx-iframe-629c5fcebb"
                                                                                style={{
                                                                                    backgroundColor: "transparent",
                                                                                    border: "none",
                                                                                    height: 23,
                                                                                    opacity: 1
                                                                                }}
                                                                                data-width={459}
                                                                                data-height={23}
                                                                            />
                                                                            <iframe
                                                                                name="__detect_close_uid_29abd492ea_mte6mtg6ntc__"
                                                                                style={{ display: "none" }}
                                                                            />
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{
                                                        flexWrap: "nowrap",
                                                        justifyContent: "space-between"
                                                    }}
                                                    className="cta-group swan-display-flex swan-mt-6"
                                                >
                                                    <div className="cta-container">
                                                        <Link
                                                            to="/Upload-Design-Template"
                                                            data-section="Product Page"
                                                            data-position={0}
                                                            data-translation="gallery"
                                                            className="swan-button swan-button-skin-primary swan-button-with-icon-right swan-button-full-width swan-button-design-path"
                                                        >
                                                            Browse designs
                                                            <img
                                                                src="https://swan.prod.merch.vpsvc.com/v2/icons/browse_designs.e42cb33e9ce4c9091305f75d78b7d250.svg"
                                                                alt=""
                                                                className="swan-icon swan-icon-size-20p swan-icon-skin-standard swan-icon-type-browseDesigns"
                                                            />
                                                            <span className="cta-description swan-button-description">
                                                                Choose one of our templates
                                                            </span>
                                                        </Link>
                                                    </div>
                                                    <div className="cta-container">
                                                        <button
                                                            type="button"
                                                            className="swan-button-skin-unstyled swan-button-full-width"
                                                            onClick={() => setShowImageModal(true)}
                                                        >
                                                            <span
                                                                aria-disabled="false"
                                                                className="swan-button swan-button-skin-secondary swan-button-with-icon-right swan-button-full-width swan-button-design-path"
                                                            >
                                                                Upload design
                                                                <span className="cta-description swan-button-description">
                                                                    Have a design? Upload and edit it
                                                                </span>
                                                                <img
                                                                    src="https://swan.prod.merch.vpsvc.com/v2/icons/upload.ebf1857cb02b2eb7938bce435b1ae181.svg"
                                                                    alt=""
                                                                    className="swan-icon swan-icon-size-20p swan-icon-skin-standard swan-icon-type-upload"
                                                                />
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div
                                                    style={{ flexDirection: "column" }}
                                                    className="swan-display-flex"
                                                >
                                                    <div
                                                        style={{ marginTop: "-106px", height: 98 }}
                                                        className="satisfaction-guaranteed-spacer swan-display-flex swan-bgc-strong"
                                                    ></div>
                                                    <div
                                                        style={{ alignItems: "center", justifyContent: "center" }}
                                                        className="satisfaction-guaranteed swan-display-flex swan-bgc-strong"
                                                    >
                                                        <img
                                                            src="https://cms.cloudinary.vpsvc.com/image/upload/c_scale,co_rgb:666666,dpr_auto,e_colorize:100,f_auto,w_auto/guaranteedsatisfaction"
                                                            alt=""
                                                            className="swan-icon swan-icon-mask swan-icon-skin-standard swan-icon-custom"
                                                        />
                                                        <div className="swan-text-small swan-font-weight-bold swan-text-align-center swan-text-color-subtle swan-my-6">
                                                            Done Right Decals is here to help every step of the way.
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Image Modal */}

                {showImageModal && (
                    <div
                        className="modal fade show"
                        tabIndex="-1"
                        style={{ display: "block" }}
                    >
                        <div className="modal-dialog modal-dialog-centered modal-xl">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Customize Your Design</h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        onClick={() => setShowImageModal(false)}
                                    ></button>
                                </div>
                                <div className="modal-body d-flex flex-wrap  align-items-flex-start justify-content-center">
                                    {/* Sidebar with options */}
                                    <div className=" col-md-1 d-flex  justify-content-md-start mb-3 mb-md-0">
                                        <div className="nav-container d-flex flex-md-column">
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-font"></i>
                                                <br />
                                                Text
                                            </a>
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-image"></i>
                                                <br />
                                                Images
                                            </a>
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-drafting-compass"></i>
                                                <br />
                                                Graphics
                                            </a>
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-qrcode"></i>
                                                <br />
                                                QR Codes
                                            </a>
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-table"></i>
                                                <br />
                                                Tables
                                            </a>
                                            <a href="#" className="nav-icons text-center mx-2 mx-md-0 mb-2">
                                                <i className="fas fa-expand"></i>
                                                <br />
                                                Size
                                            </a>
                                        </div>
                                    </div>

                                    {/* Sidebar with text options */}
                                    <div className="col-12 col-md-3 sidebar px-3 mt-5">
                                        <div className="option  d-flex flex-column ">
                                            <h6>Text</h6>
                                            <p>
                                                Edit your text below, or click on the field you'd like to edit
                                                directly on your design.
                                            </p>
                                            <button className="btn btn-dark w-100">New Text Field</button>
                                        </div>
                                    </div>

                                    {/* Design area */}
                                    <div className="design-area flex-grow-1 d-flex mt-3 flex-column align-items-center justify-content-center">
                                        <p className="instruction-text mb-0">
                                            Click on any element to start editing
                                        </p>
                                        <div className="design-template mt-3">
                                            <div className="upload-placeholder">
                                                <span className="placeholder-text">Upload Your Design</span>
                                            </div>
                                        </div>
                                        <div className="mt-3 d-flex justify-content-center">
                                            <button className="btn btn-outline-secondary me-2">Front</button>
                                            <button className="btn btn-outline-secondary">Back</button>
                                        </div>
                                    </div>

                                    {/* 3D View */}
                                    <div className="three-d-view col-12 col-md-3 d-flex flex-column align-items-end mt-3 mt-md-0">
                                        <div className="d-flex justify-content-end w-100">
                                            <button className="btn btn-sm btn-link hide-3d-view">Hide 3D view</button>
                                        </div>
                                        <div className="position-relative w-100">
                                            <div className="three-d-placeholder">
                                                <span className="placeholder-text">Live 3D animation</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer d-flex flex-column flex-md-row justify-content-between">
                                    <div className="d-flex align-items-center mb-2 mb-md-0">
                                        <label htmlFor="zoomSlider" className="form-label me-2 mb-0">
                                            Zoom:
                                        </label>
                                        <input
                                            type="range"
                                            className="form-range"
                                            id="zoomSlider"
                                            min="50"
                                            max="150"
                                            value={zoomPercentage}
                                            onChange={handleZoomChange}
                                        />
                                        <span className="ms-2" id="zoomPercentage">
                                            {zoomPercentage}%
                                        </span>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-secondary me-2"
                                            onClick={() => setShowImageModal(false)}
                                        >
                                            Close
                                        </button>
                                        <button type="button" className="btn btn-primary">
                                            Save changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

            </>

        </div>
    )
}
export default DetailSection;