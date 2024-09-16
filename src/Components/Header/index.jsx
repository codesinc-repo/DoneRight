import React from "react";
import './Header.css';
import TopHeader from "../TopHeader";
import logo from '../../images/DRD logo.png'
import { Link } from "react-router-dom";
//Car Wraps
import CarWrapImg01 from '../../images/Car warp_1.jpg'
import CarWrapImg02 from '../../images/Car warp_2.jpg'
import CarWrapImg03 from '../../images/Car warp_3.png'
import CarWrapImg04 from '../../images/Car warp_4.jpg'
import CarWrapImg05 from '../../images/Car warp_5.jpg'
import CarWrapImg06 from '../../images/Car warp_6.jpg.jpeg'
import CarWrapImg07 from '../../images/Car warp_7.jpg'
import CarWrapImg08 from '../../images/Car warp_8.webp'
import CarWrapImg09 from '../../images/Car warp_9.jpeg'
import CarWrapImg10 from '../../images/Car warp_10.webp'
import CarWrapImg11 from '../../images/Car warp_11.webp'
import CarWrapImg12 from '../../images/Car warp_12.webp'
import CarWrapImg13 from '../../images/Car warp_13.webp'
import CarWrapImg14 from '../../images/Car warp_14.webp'
import CarWrapImg15 from '../../images/Car warp_15.webp'
import CarWrapImg16 from '../../images/Car warp_16.webp'
import CarWrapImg17 from '../../images/Car warp_17.webp'
import CarWrapImg18 from '../../images/Car warp_18.webp'
import CarWrapImg19 from '../../images/Car warp_19.jpeg'
//Store Fronts
import StoreFrontImg01 from '../../images/store fronts 01.jpeg'
import StoreFrontImg02 from '../../images/store fronts 02.jpeg'
import StoreFrontImg03 from '../../images/store fronts 03.jpeg'
import StoreFrontImg04 from '../../images/store fronts 04.jpeg'
import StoreFrontImg05 from '../../images/store fronts 05.jpeg'
import StoreFrontImg06 from '../../images/store fronts 06.jpeg'
import StoreFrontImg07 from '../../images/store fronts 05.jpeg'
//Window Tints
import wTintImg01 from '../../images/window tint 01.jpeg'
import wTintImg02 from '../../images/window tint 02.jpeg'
import wTintImg03 from '../../images/window tint 03.jpeg'
import wTintImg04 from '../../images/window tint 04.jpeg'
import wTintImg05 from '../../images/window tint 05.jpeg'
import wTintImg06 from '../../images/window tint 06.jpeg'
import wTintImg07 from '../../images/window tint 07.jpeg'
import wTintImg08 from '../../images/window tint 08.webp'
import wTintImg09 from '../../images/window tint 09.webp'
import wTintImg10 from '../../images/window tint 10.webp'
import wTintImg11 from '../../images/window tint 11.webp'
import wTintImg12 from '../../images/window tint 12.webp'
// Advertising and marketing
import AdvertisingImg01 from '../../images/A&Marketing01.jpg'
import AdvertisingImg02 from '../../images/A&Marketing02.jpg'
import AdvertisingImg03 from '../../images/A&Marketing03.jpg'
import AdvertisingImg04 from '../../images/A&Marketing04.jpg'
import AdvertisingImg05 from '../../images/A&Marketing05.jpeg'
import AdvertisingImg06 from '../../images/A&Marketing06.jpg'
import AdvertisingImg07 from '../../images/A&Marketing07.jpeg'
import AdvertisingImg08 from '../../images/A&Marketing08.jpeg'
import AdvertisingImg09 from '../../images/A&Marketing09.jpg'
import AdvertisingImg10 from '../../images/A&Marketing10.jpeg'
import AdvertisingImg11 from '../../images/A&Marketing11.jpg'
import AdvertisingImg12 from '../../images/A&Marketing12.jpg'
import AdvertisingImg13 from '../../images/A&Marketing13.webp'
import AdvertisingImg14 from '../../images/A&Marketing14.webp'
import AdvertisingImg15 from '../../images/A&Marketing15.webp'
import AdvertisingImg16 from '../../images/A&Marketing16.webp'
import AdvertisingImg17 from '../../images/A&Marketing17.jpeg'
import AdvertisingImg18 from '../../images/A&Marketing18.jpg'
import AdvertisingImg19 from '../../images/A&Marketing19.jpg'
import AdvertisingImg20 from '../../images/A&Marketing20.jpg'
import AdvertisingImg21 from '../../images/A&Marketing21.webp'
import AdvertisingImg22 from '../../images/A&Marketing22.webp'
import AdvertisingImg23 from '../../images/A&Marketing23.webp'
import AdvertisingImg24 from '../../images/A&Marketing24.webp'
import AdvertisingImg25 from '../../images/A&Marketing25.webp'
import AdvertisingImg26 from '../../images/A&Marketing26.webp'
// Signs and Banners
import SignBanner01 from '../../images/SignBanner01.webp'
import SignBanner02 from '../../images/SignBanner02.webp'
import SignBanner03 from '../../images/SignBanner03.webp'
import SignBanner04 from '../../images/SignBanner04.webp'
import SignBanner05 from '../../images/SignBanner05.webp'
import SignBanner06 from '../../images/SignBanner06.webp'
import SignBanner07 from '../../images/SignBanner07.webp'
import SignBanner08 from '../../images/SignBanner08.jpg'
import SignBanner09 from '../../images/SignBanner09.jpg'
import SignBanner10 from '../../images/SignBanner10.webp'
import SignBanner11 from '../../images/SignBanner11.jpeg'
import SignBanner12 from '../../images/SignBanner12.jpeg'
import SignBanner13 from '../../images/SignBanner13.webp'
// Apparel and Merch
import ApparelMerch01 from '../../images/Apparel-Merch01.jpeg'
import ApparelMerch02 from '../../images/Apparel-Merch02.jpg'
import ApparelMerch03 from '../../images/Apparel-Merch03.jpeg'
import ApparelMerch04 from '../../images/Apparel-Merch04.jpeg'
import ApparelMerch05 from '../../images/Apparel-Merch05.jpeg'
import ApparelMerch06 from '../../images/Apparel-Merch06.jpeg'
import ApparelMerch07 from '../../images/Apparel-Merch07.jpeg'
import ApparelMerch08 from '../../images/Apparel-Merch08.jpeg'
import ApparelMerch09 from '../../images/Apparel-Merch09.jpeg'
import ApparelMerch10 from '../../images/Apparel-Merch10.jpeg'
import ApparelMerch11 from '../../images/Apparel-Merch11.jpeg'
import ApparelMerch12 from '../../images/Apparel-Merch12.jpeg'
import ApparelMerch13 from '../../images/Apparel-Merch13.jpeg'
import ApparelMerch14 from '../../images/Apparel-Merch14.jpeg'
// Event P production
import EPProduction01 from '../../images/EPProduction01.webp'
import EPProduction02 from '../../images/EPProduction02.webp'
import EPProduction03 from '../../images/EPProduction03.webp'
import EPProduction04 from '../../images/EPProduction04.webp'
import EPProduction05 from '../../images/EPProduction05.webp'
import EPProduction06 from '../../images/EPProduction06.webp'
import EPProduction07 from '../../images/EPProduction06.webp'
import EPProduction08 from '../../images/EPProduction07.jpeg'
import EPProduction09 from '../../images/EPProduction08.jpeg'
import EPProduction10 from '../../images/EPProduction09.jpeg'
import EPProduction11 from '../../images/EPProduction10.jpeg'
import EPProduction12 from '../../images/EPProduction11.jpeg'
import EPProduction13 from '../../images/EPProduction12.jpeg'
import EPProduction14 from '../../images/EPProduction13.jpeg'
import EPProduction15 from '../../images/EPProduction14.jpeg'
import EPProduction16 from '../../images/EPProduction15.jpeg'
import EPProduction17 from '../../images/EPProduction16.jpeg'
import EPProduction18 from '../../images/EPProduction17.jpeg'
import EPProduction19 from '../../images/EPProduction18.jpeg'
import EPProduction20 from '../../images/EPProduction19.jpeg'
import EPProduction21 from '../../images/EPProduction20.jpeg'
import EPProduction22 from '../../images/EPProduction21.jpeg'
import EPProduction23 from '../../images/EPProduction22.jpeg'
import EPProduction24 from '../../images/EPProduction23.jpeg'
import EPProduction25 from '../../images/EPProduction24.jpeg'
import EPProduction26 from '../../images/EPProduction25.jpeg'
import EPProduction27 from '../../images/EPProduction26.jpeg'
import EPProduction28 from '../../images/EPProduction27.webp'
import EPProduction29 from '../../images/EPProduction28.webp'
import EPProduction30 from '../../images/EPProduction29.jpeg'
// invitations Gfits and stationary
import IGStationary01 from '../../images/IGStationary01.jpeg'
import IGStationary02 from '../../images/IGStationary02.jpeg'
import IGStationary03 from '../../images/IGStationary03.jpeg'
import IGStationary04 from '../../images/IGStationary04.jpeg'
import IGStationary05 from '../../images/IGStationary05.jpeg'
import IGStationary06 from '../../images/IGStationary06.jpeg'
import IGStationary07 from '../../images/IGStationary07.jpeg'
import IGStationary08 from '../../images/IGStationary01.jpeg'
import IGStationary09 from '../../images/IGStationary08.jpeg'
import IGStationary10 from '../../images/IGStationary09.jpeg'
import IGStationary11 from '../../images/IGStationary10.jpeg'
import IGStationary12 from '../../images/IGStationary11.jpeg'
import IGStationary13 from '../../images/IGStationary12.jpeg'
import IGStationary14 from '../../images/IGStationary13.jpeg'
import IGStationary15 from '../../images/IGStationary14.webp'
import IGStationary16 from '../../images/IGStationary15.webp'
import IGStationary17 from '../../images/IGStationary17.webp'
import IGStationary18 from '../../images/IGStationary16.webp'
// website services 
import WebDR01 from '../../images/WebDR01.jpeg'
import WebDR02 from '../../images/WebDR02.jpeg'
import WebDR03 from '../../images/WebDR03.jpeg'
import WebDR04 from '../../images/WebDR04.jpeg'
import WebDR05 from '../../images/WebDR05.jpeg'
// Logo Desing and services 
import LBDhelp01 from '../../images/WebDR01.jpeg'
import LBDhelp02 from '../../images/WebDR02.jpeg'
import LBDhelp03 from '../../images/WebDR03.jpeg'
import LBDhelp04 from '../../images/WebDR04.jpeg'
import LBDhelp05 from '../../images/WebDR05.jpeg'


function Header() {
    return (
        <>
            <header className="site-header site-header-full">
                <div className="site-header-brand-banner-container">
                    <div
                        id="vatSelectionPop"
                        role="dialog"
                        aria-labelledby="vatPopTitle"
                        className=""
                    >
                        <button
                            data-section="VAT Pop-Up"
                            data-position={1}
                            data-translation="Pop-Up Closed"
                            className="vat-pop-close-button"
                            id="vatSelectionCloseButton"
                            tabIndex={-1}
                        >
                            <img
                                src="https://swan.prod.merch.vpsvc.com/v2/icons/close.85e7f885b43a4696861ed533934f3b01.svg"
                                alt=""
                                className="swan-icon swan-icon-skin-standard swan-icon-type-close"
                            />
                            <span className="swan-visually-hidden" />
                        </button>
                        <h2
                            id="vatPopTitle"
                            className="vat-pop-title swan-heading swan-mb-0 swan-text-2 swan-font-weight-bold swan-text-center"
                        ></h2>
                        <button
                            aria-describedby="vatPopExclusiveLabel"
                            data-section="VAT Pop-Up"
                            data-position={2}
                            data-translation="Pop-Up Clicked:See prices ex. 20% VAT"
                            id="vatSelectionExclusionButton"
                            tabIndex={-1}
                            type="button"
                            className="swan-button swan-button-skin-primary swan-button-mini swan-mt-5"
                        />
                        <button
                            aria-describedby="vatPopInclusiveLabel"
                            data-section="VAT Pop-Up"
                            data-position={3}
                            data-translation="Pop-Up Clicked:See prices inc. 20% VAT"
                            id="vatSelectionInclusionButton"
                            tabIndex={-1}
                            type="button"
                            className="swan-button swan-button-skin-secondary swan-button-mini swan-mt-1"
                        />
                    </div>
                </div>
                <div className="site-header-main-container swan-bounded-content p-0">
                    <TopHeader />
                    {/* ============================ Large Screen ======================= */}
                    <nav className="navbar large_screen_PC d-none d-md-block  navbar-expand-lg navbar-light bg-light p-2">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav nav-tabs" id="navId" role="tablist">
                                    {/* 1st */}
                                    <li className="nav-item " id="menu_label_1">
                                        <Link
                                            className="nav-link  icon"
                                            to="/MainHeading"
                                            data-target="#dropdownMenu1"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Car Wraps
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_1">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Spot-Graphics-Heading" className="text-decoration-none">
                                                            <img src={CarWrapImg01} alt="Spot Graphics" className="dropdown-image" />
                                                            <h6>Spot Graphics</h6>
                                                        </Link>
                                                        <Link to="/Custom-Spot-Graphics" className="text-decoration-none">
                                                            <img src={CarWrapImg02} alt="Custom Spot Graphics" className="dropdown-image" />
                                                            Custom Spot Graphics
                                                        </Link>
                                                        <Link to="/Fleet-Spot-Graphics" className="text-decoration-none">
                                                            <img src={CarWrapImg03} alt="Fleet Spot Graphics" className="dropdown-image" />
                                                            Fleet Spot Graphics
                                                        </Link>
                                                        <Link to="/Basic-Spot-Graphics" className="text-decoration-none">
                                                            <img src={CarWrapImg04} alt="Basic Spot Graphics" className="dropdown-image" />
                                                            Basic Spot Graphics
                                                        </Link>
                                                        <Link to="/Trailer-Spot-Graphics" className="text-decoration-none">
                                                            <img src={CarWrapImg05} alt="Trailer Spot Graphics" className="dropdown-image" />
                                                            Trailer Spot Graphics
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Partial-Wraps" className="text-decoration-none">
                                                            <img src={CarWrapImg06} alt="Partial Wraps" className="dropdown-image" />
                                                            <h6>Partial Wraps</h6>
                                                        </Link>
                                                        <Link to="/One-By-Eight" className="text-decoration-none">
                                                            <img src={CarWrapImg07} alt="1/8 Wrap" className="dropdown-image" />
                                                            1/8 Wrap
                                                        </Link>
                                                        <Link to="/One-By-Four" className="text-decoration-none">
                                                            <img src={CarWrapImg08} alt="1/4 Wrap" className="dropdown-image" />
                                                            1/4 Wrap
                                                        </Link>
                                                        <Link to="/One-By-Two" className="text-decoration-none">
                                                            <img src={CarWrapImg09} alt="1/2 Wrap" className="dropdown-image" />
                                                            1/2 Wrap
                                                        </Link>
                                                        <Link to="/Three-By-Four" className="text-decoration-none">
                                                            <img src={CarWrapImg10} alt="3/4 Wrap" className="dropdown-image" />
                                                            3/4 Wrap
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Full-Wraps" className="text-decoration-none">
                                                            <img src={CarWrapImg11} alt="Full Wraps" className="dropdown-image" />
                                                            <h6>Full Wraps</h6>
                                                        </Link>
                                                        <Link to="/Custom-Full-Wrap" className="text-decoration-none">
                                                            <img src={CarWrapImg12} alt="Custom Full Wrap" className="dropdown-image" />
                                                            Custom Full Wrap
                                                        </Link>
                                                        <Link to="/Full-Color-Change-Wrap" className="text-decoration-none">
                                                            <img src={CarWrapImg13} alt="Full Color Change Wrap" className="dropdown-image" />
                                                            Full Color Change Wrap
                                                        </Link>
                                                        <Link to="/Commercial-Full-Wrap" className="text-decoration-none">
                                                            <img src={CarWrapImg14} alt="Commercial Full Wrap" className="dropdown-image" />
                                                            Commercial Full Wrap
                                                        </Link>
                                                        <Link to="/Fleet-Full-Wrap-One-Way-Vision" className="text-decoration-none">
                                                            <img src={CarWrapImg15} alt="Fleet Full Wrap with One-Way Vision" className="dropdown-image" />
                                                            Fleet Full Wrap with One-Way Vision
                                                        </Link>
                                                        <Link to="/Full-One-Way-Vision" className="text-decoration-none">
                                                            <img src={CarWrapImg16} alt="Full One-Way Vision" className="dropdown-image" />
                                                            Full One-Way Vision
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Car-Wraps-Design-and-Customization" className="text-decoration-none">
                                                            <img src={CarWrapImg17} alt="Design and Customization" className="dropdown-image" />
                                                            <h6>Design and Customization</h6>
                                                        </Link>
                                                        <Link to="/Upload-Design-Template" className="text-decoration-none">
                                                            <img src={CarWrapImg18} alt="Upload Your Design" className="dropdown-image" />
                                                            Upload Your Design
                                                        </Link>
                                                        <Link to="/Make-a-Design" className="text-decoration-none">
                                                            <img src={CarWrapImg19} alt="Make a Design" className="dropdown-image" />
                                                            Make a Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 2nd */}
                                    <li className="nav-item bg-light" id="menu_label_2">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            data-target="#dropdownMenu2"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Store fronts
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link
                                                            to="/Vinyl-Types-Applications"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg01} alt="Vinyl Types and Applications" className="dropdown-image" />
                                                            <h6>Vinyl Types and Applications</h6>
                                                        </Link>
                                                        <Link
                                                            to="/Frosted-Glass-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg02} alt="Frosted Glass Vinyl" className="dropdown-image" />
                                                            Frosted Glass Vinyl
                                                        </Link>
                                                        <Link
                                                            to="/Full-Coverage-One-Way-Vision-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg03} alt="Full Coverage One-Way Vision Vinyl" className="dropdown-image" />
                                                            Full Coverage One-Way Vision Vinyl
                                                        </Link>
                                                        <Link
                                                            to="/Color-Cut-Out-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg04} alt="Color Cut-Out Vinyl" className="dropdown-image" />
                                                            Color Cut-Out Vinyl
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link
                                                            to="Store Fronts/Design_and_Customization.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg05} alt="Design and Customization" className="dropdown-image" />
                                                            <h6>Design and Customization</h6>
                                                        </Link>
                                                        <Link
                                                            to="/Upload-Design-Template"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg06} alt="Upload Your Design" className="dropdown-image" />
                                                            Upload Your Design
                                                        </Link>
                                                        <Link
                                                            to="Store Fronts/Make_a_Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <img src={StoreFrontImg07} alt="Make a Design" className="dropdown-image" />
                                                            Make a Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 3rd */}
                                    <li className="nav-item " id="menu_label_3">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            window tints
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_3">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Window-Tints-Heading" className="text-decoration-none">
                                                            <img src={wTintImg01} alt="Window Tint" className="dropdown-image" />
                                                            <h6>Window Tint</h6>
                                                        </Link>
                                                        <Link to="/Car-Window-Tints" className="text-decoration-none">
                                                            <img src={wTintImg02} alt="Car Window Tints" className="dropdown-image" />
                                                            Car Window Tints
                                                        </Link>
                                                        <Link to="/Fleet-Window-Tints" className="text-decoration-none">
                                                            <img src={wTintImg03} alt="Fleet Window Tints" className="dropdown-image" />
                                                            Fleet Window Tints
                                                        </Link>
                                                        <Link to="/Commercial-Site-Window-Tints" className="text-decoration-none">
                                                            <img src={wTintImg04} alt="Commercial Site Window Tints" className="dropdown-image" />
                                                            Commercial Site/Store Window Tints
                                                        </Link>
                                                        <Link to="/House-Window-Tints" className="text-decoration-none">
                                                            <img src={wTintImg05} alt="House Window Tints" className="dropdown-image" />
                                                            House Window Tints
                                                        </Link>
                                                        <Link to="/Custom-Window-Tints" className="text-decoration-none">
                                                            <img src={wTintImg06} alt="Custom Window Tints" className="dropdown-image" />
                                                            Custom Window Tints
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Pre-Cut-Car-Patterns" className="text-decoration-none">
                                                            <img src={wTintImg07} alt="Pre-Cut Car Patterns" className="dropdown-image" />
                                                            <h6>Pre-Cut Car Patterns</h6>
                                                        </Link>
                                                        <Link to="/Shop-All-Patterns" className="text-decoration-none">
                                                            <img src={wTintImg08} alt="Shop All Patterns" className="dropdown-image" />
                                                            Shop All Patterns
                                                        </Link>
                                                        <Link to="/All-Around-Front-Back-Sides" className="text-decoration-none">
                                                            <img src={wTintImg09} alt="All around Front, Back, and Sides" className="dropdown-image" />
                                                            All around Front, Back, and Sides
                                                        </Link>
                                                        <Link to="/Single-Piece-Visor-Strip-Sunroof" className="text-decoration-none">
                                                            <img src={wTintImg10} alt="Single Piece Visor Strip, Sunroof" className="dropdown-image" />
                                                            Single Piece Visor Strip, Sunroof
                                                        </Link>
                                                        <Link to="/Sides-Front" className="text-decoration-none">
                                                            <img src={wTintImg11} alt="Sides + Front" className="dropdown-image" />
                                                            Sides + Front
                                                        </Link>
                                                        <Link to="/Sides-Back" className="text-decoration-none">
                                                            <img src={wTintImg12} alt="Sides + Back" className="dropdown-image" />
                                                            Sides + Back
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        {/* Add more links if necessary, or keep this section empty if not needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 4th */}
                                    <li className="nav-item" id="menu_label_4">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Advertising and Marketing
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_4">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/print-advertising-heading" className="text-decoration-none">
                                                            <img src={AdvertisingImg01} alt="Print Advertising" className="dropdown-image" />
                                                            <h6>Print Advertising</h6>
                                                        </Link>
                                                        <Link to="Flyers" className="text-decoration-none">
                                                            <img src={AdvertisingImg02} alt="Flyers" className="dropdown-image" />
                                                            Flyers
                                                        </Link>
                                                        <Link to="/Posters" className="text-decoration-none">
                                                            <img src={AdvertisingImg03} alt="Posters" className="dropdown-image" />
                                                            Posters
                                                        </Link>
                                                        <Link to="/Brochurs" className="text-decoration-none">
                                                            <img src={AdvertisingImg04} alt="Brochures" className="dropdown-image" />
                                                            Brochures
                                                        </Link>
                                                        <Link to="/Catalogs" className="text-decoration-none">
                                                            <img src={AdvertisingImg05} alt="Catalogs" className="dropdown-image" />
                                                            Catalogs
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Promotional-item-Heading" className="text-decoration-none">
                                                            <img src={AdvertisingImg06} alt="Promotional Items" className="dropdown-image" />
                                                            <h6>Promotional Items</h6>
                                                        </Link>
                                                        <Link to="/Business-Cards" className="text-decoration-none">
                                                            <img src={AdvertisingImg07} alt="Business Cards" className="dropdown-image" />
                                                            Business Cards
                                                        </Link>
                                                        <Link to="/Branded-Merchandise" className="text-decoration-none">
                                                            <img src={AdvertisingImg08} alt="Branded Merchandise" className="dropdown-image" />
                                                            Branded Merchandise
                                                        </Link>
                                                        <Link to="/Pens" className="text-decoration-none">
                                                            <img src={AdvertisingImg09} alt="Pens" className="dropdown-image" />
                                                            Pens
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg10} alt="Notebooks" className="dropdown-image" />
                                                            Notebooks
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg11} alt="Signage and Displays" className="dropdown-image" />
                                                            <h6>Signage and Displays</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg12} alt="Posters" className="dropdown-image" />
                                                            Posters
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg13} alt="PopUp Banners" className="dropdown-image" />
                                                            PopUp Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg14} alt="Window Decals" className="dropdown-image" />
                                                            Window Decals
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg15} alt="Floor Graphics" className="dropdown-image" />
                                                            Floor Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg16} alt="Directional Signs" className="dropdown-image" />
                                                            Directional Signs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg17} alt="Branded Stationery" className="dropdown-image" />
                                                            Branded Stationery
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg18} alt="Desk Accessories" className="dropdown-image" />
                                                            Desk Accessories
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg19} alt="Corporate Gifts" className="dropdown-image" />
                                                            Corporate Gifts
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg20} alt="Trade Show Giveaways" className="dropdown-image" />
                                                            Trade Show Giveaways
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg21} alt="Design Services" className="dropdown-image" />
                                                            <h6>Design Services</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg22} alt="Logo Design" className="dropdown-image" />
                                                            Logo Design
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg23} alt="Custom Graphics" className="dropdown-image" />
                                                            Custom Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg24} alt="Brand Guidelines" className="dropdown-image" />
                                                            Brand Guidelines
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg25} alt="Business Card Design" className="dropdown-image" />
                                                            Business Card Design
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={AdvertisingImg26} alt="Marketing Collateral Design" className="dropdown-image" />
                                                            Marketing Collateral Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 5th */}
                                    <li className="nav-item" id="menu_label_5">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Signs and Banners
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_5">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Banner-Types" className="text-decoration-none">
                                                            <img src={SignBanner01} alt="Banner Types" className="dropdown-image" />
                                                            <h6>Banner Types</h6>
                                                        </Link>
                                                        <Link to="/Vinyl-Banners" className="text-decoration-none">
                                                            <img src={SignBanner02} alt="Vinyl Banners" className="dropdown-image" />
                                                            Vinyl Banners
                                                        </Link>
                                                        <Link to="/Mesh-Banners" className="text-decoration-none">
                                                            <img src={SignBanner03} alt="Mesh Banners" className="dropdown-image" />
                                                            Mesh Banners
                                                        </Link>
                                                        <Link to="/Construction-Site-Mesh-Fence-Banners" className="text-decoration-none">
                                                            <img src={SignBanner04} alt="Construction Site Mesh Fence Banners" className="dropdown-image" />
                                                            Construction Site Mesh Fence Banners
                                                        </Link>
                                                        <Link to="/Pole-Banners" className="text-decoration-none">
                                                            <img src={SignBanner05} alt="Pole Banners" className="dropdown-image" />
                                                            Pole Banners
                                                        </Link>
                                                        <Link to="/Truck-Frame-Banners" className="text-decoration-none">
                                                            <img src={SignBanner06} alt="Truck Frame Banners" className="dropdown-image" />
                                                            Truck Frame Banners
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Signage-Solutions" className="text-decoration-none">
                                                            <img src={SignBanner07} alt="Signage Solutions" className="dropdown-image" />
                                                            <h6>Signage Solutions</h6>
                                                        </Link>
                                                        <Link to="/Yard-Signs" className="text-decoration-none">
                                                            <img src={SignBanner08} alt="Yard Signs" className="dropdown-image" />
                                                            Yard Signs
                                                        </Link>
                                                        <Link to="/Sidewalk-AFrame-Signs" className="text-decoration-none">
                                                            <img src={SignBanner09} alt="Sidewalk AFrame Signs" className="dropdown-image" />
                                                            Sidewalk AFrame Signs
                                                        </Link>
                                                        <Link to="/Poster" className="text-decoration-none">
                                                            <img src={SignBanner10} alt="Posters" className="dropdown-image" />
                                                            Posters
                                                        </Link>
                                                        <Link to="/Solid-Aluminum-Signs" className="text-decoration-none">
                                                            <img src={SignBanner11} alt="Solid Aluminum Signs" className="dropdown-image" />
                                                            Solid Aluminum Signs
                                                        </Link>
                                                        <Link to="/Acrylic-Signs" className="text-decoration-none">
                                                            <img src={SignBanner12} alt="Acrylic Signs" className="dropdown-image" />
                                                            Acrylic Signs
                                                        </Link>
                                                        <Link to="/Cardstock-Signs" className="text-decoration-none">
                                                            <img src={SignBanner13} alt="Cardstock Signs" className="dropdown-image" />
                                                            Cardstock Signs
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 6th */}
                                    <li className="nav-item " id="menu_label_6">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Apparel &amp; Merch
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch01} alt="Custom Apparel" className="dropdown-image" />
                                                            <h6>Custom Apparel</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch02} alt="T-Shirts" className="dropdown-image" />
                                                            T-Shirts
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch03} alt="Hoodies and Sweatshirts" className="dropdown-image" />
                                                            Hoodies and Sweatshirts
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch04} alt="Polo Shirts" className="dropdown-image" />
                                                            Polo Shirts
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch05} alt="Caps & Hats" className="dropdown-image" />
                                                            Caps & Hats
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch06} alt="Jackets" className="dropdown-image" />
                                                            Jackets
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch07} alt="Workwear" className="dropdown-image" />
                                                            Workwear
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch08} alt="Promotional Merchandise" className="dropdown-image" />
                                                            <h6>Promotional Merchandise</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch09} alt="Tote Bags" className="dropdown-image" />
                                                            Tote Bags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch10} alt="Mugs & Drinkware" className="dropdown-image" />
                                                            Mugs & Drinkware
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch11} alt="Phone Cases" className="dropdown-image" />
                                                            Phone Cases
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch12} alt="Key Chain" className="dropdown-image" />
                                                            Key Chain
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch13} alt="Stickers" className="dropdown-image" />
                                                            Stickers
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={ApparelMerch14} alt="Notebooks & Journals" className="dropdown-image" />
                                                            Notebooks & Journals
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </li>
                                    {/* 7th */}
                                    <li className="nav-item" id="menu_label_7">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Event Promotion &amp; Production
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_7">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction01} alt="Printed Materials" className="dropdown-image" />
                                                            <h6>Printed Materials</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction02} alt="Pens" className="dropdown-image" />
                                                            Pens
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction03} alt="Mugs" className="dropdown-image" />
                                                            Mugs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction04} alt="Fitted Table Covers" className="dropdown-image" />
                                                            Fitted Table Covers
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction05} alt="Table Throws" className="dropdown-image" />
                                                            Table Throws
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction06} alt="Table Runner" className="dropdown-image" />
                                                            Table Runner
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction07} alt="Banners & Graphics" className="dropdown-image" />
                                                            <h6>Banners & Graphics</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction08} alt="RollUp Retractable Banners" className="dropdown-image" />
                                                            RollUp Retractable Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction09} alt="XFrame Banners" className="dropdown-image" />
                                                            XFrame Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction10} alt="Indoor Floor Graphics" className="dropdown-image" />
                                                            Indoor Floor Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction11} alt="Outdoor Rough Surface Graphics" className="dropdown-image" />
                                                            Outdoor Rough Surface Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction12} alt="Carpet Graphics" className="dropdown-image" />
                                                            Carpet Graphics
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction13} alt="Flags" className="dropdown-image" />
                                                            <h6>Flags</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction14} alt="Feather Flags" className="dropdown-image" />
                                                            Feather Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction15} alt="Teardrop Flags" className="dropdown-image" />
                                                            Teardrop Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction16} alt="Regular Flags" className="dropdown-image" />
                                                            Regular Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction17} alt="Event Setup" className="dropdown-image" />
                                                            <h6>Event Tents/Setups</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction18} alt="Tents" className="dropdown-image" />
                                                            Tents
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction19} alt="Table Covers" className="dropdown-image" />
                                                            Table Covers
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction20} alt="Retractable Banners" className="dropdown-image" />
                                                            Retractable Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction21} alt="Flags" className="dropdown-image" />
                                                            Flags
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction22} alt="Promotional Products" className="dropdown-image" />
                                                            <h6>Promotional Products</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction23} alt="Custom Labels" className="dropdown-image" />
                                                            Custom Labels
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction24} alt="Gender Reveal" className="dropdown-image" />
                                                            <h6>Gender Reveal</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction25} alt="Event Setup" className="dropdown-image" />
                                                            Event Setup
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction26} alt="Engaging Products" className="dropdown-image" />
                                                            Engaging Products
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction27} alt="Decorations" className="dropdown-image" />
                                                            Decorations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction28} alt="Reveal Surprises" className="dropdown-image" />
                                                            Reveal Surprises
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction29} alt="Custom Graphics" className="dropdown-image" />
                                                            Custom Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={EPProduction30} alt="Gifts" className="dropdown-image" />
                                                            Gifts
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 8th */}
                                    <li className="nav-item  bg-light" id="menu_label_8">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            invitations gifts and stationarys,
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_8">
                                            <div className="container">
                                                <div className="row text-start">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary01} alt="Invitation Cards" className="dropdown-image" />
                                                            <h6>Invitation Cards</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary02} alt="Wedding Invitations" className="dropdown-image" />
                                                            Wedding Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary03} alt="Birthday Invitations" className="dropdown-image" />
                                                            Birthday Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary04} alt="Event Invitations" className="dropdown-image" />
                                                            Event Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary05} alt="Save the Date Cards" className="dropdown-image" />
                                                            Save the Date Cards
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary06} alt="RSVP Cards" className="dropdown-image" />
                                                            RSVP Cards
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary07} alt="Personalized Gifts" className="dropdown-image" />
                                                            <h6>Personalized Gifts</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary08} alt="Customized Mugs" className="dropdown-image" />
                                                            Customized Mugs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary09} alt="Personalized Keychains" className="dropdown-image" />
                                                            Personalized Keychains
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary10} alt="Custom Tote Bags" className="dropdown-image" />
                                                            Custom Tote Bags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary11} alt="Personalized Notebooks" className="dropdown-image" />
                                                            Personalized Notebooks
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary12} alt="Engraved Pens" className="dropdown-image" />
                                                            Engraved Pens
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary13} alt="Stationery Products" className="dropdown-image" />
                                                            <h6>Stationery Products</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary14} alt="Custom Notepads" className="dropdown-image" />
                                                            Custom Notepads
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary15} alt="Greeting Cards" className="dropdown-image" />
                                                            Greeting Cards
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary16} alt="Letterhead" className="dropdown-image" />
                                                            Letterhead
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary17} alt="Envelopes" className="dropdown-image" />
                                                            Envelopes
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={IGStationary18} alt="Business Cards" className="dropdown-image" />
                                                            Business Cards
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        {/* Additional content can go here if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 9th  */}
                                    <li className="nav-item " id="menu_label_9">
                                        <Link
                                            className="nav-link icon "
                                            to="/WebsiteDoneRightDecals"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            websites by done Right
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_9">
                                            <div className="container">
                                                <div className="row text-start">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={WebDR01} alt="Design Services" className="dropdown-image" />
                                                            Design Services
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={WebDR02} alt="QR Code Generator" className="dropdown-image" />
                                                            QR Code Generator
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={WebDR03} alt="Wedding Design Services" className="dropdown-image" />
                                                            Wedding Design Services
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={WebDR04} alt="Logo Design" className="dropdown-image" />
                                                            Logo Design
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={WebDR05} alt="Logo Maker" className="dropdown-image" />
                                                            Logo Maker
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 10th */}
                                    <li className="nav-item " id="menu_label_9">
                                        <Link
                                            className="nav-link icon "
                                            to="/LogoDesign"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Logo and Branding&nbsp;design&nbsp; help
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_9">
                                            <div className="container">
                                                <div className="row text-start">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={LBDhelp01} alt="Design Services" className="dropdown-image" />
                                                            Design Services
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={LBDhelp02} alt="QR Code Generator" className="dropdown-image" />
                                                            QR Code Generator
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={LBDhelp03} alt="Wedding Design Services" className="dropdown-image" />
                                                            Wedding Design Services
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={LBDhelp04} alt="Logo Design" className="dropdown-image" />
                                                            Logo Design
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <img src={LBDhelp05} alt="Logo Maker" className="dropdown-image" />
                                                            Logo Maker
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* ================================ Small Screen =============================== */}
                   
                    <nav className="navbar Small_screen_mobile  d-block d-md-none  navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="nav nav-tabs" id="navId" role="tablist">
                                    {/* 1st */}
                                    <li className="nav-item " id="menu_label_1">
                                        <Link
                                            className="nav-link  icon"
                                            to="/MainHeading"
                                            data-target="#dropdownMenu1"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Car Wraps
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_1">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Spot-Graphics-Heading" className="text-decoration-none">
                                                            <h6>Spot Graphics</h6>
                                                        </Link>
                                                        <Link to="/Custom-Spot-Graphics" className="text-decoration-none">
                                                            Custom Spot Graphics
                                                        </Link>
                                                        <Link to="/Fleet-Spot-Graphics" className="text-decoration-none">
                                                            Fleet Spot Graphics
                                                        </Link>
                                                        <Link to="/Basic-Spot-Graphics" className="text-decoration-none">
                                                            Basic Spot Graphics
                                                        </Link>
                                                        <Link to="/Trailer-Spot-Graphics" className="text-decoration-none">
                                                            Trailer Spot Graphics
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Partial-Wraps" className="text-decoration-none">
                                                            <h6>Partial Wraps</h6>
                                                        </Link>
                                                        <Link to="/One-By-Eight" className="text-decoration-none">
                                                            1/8 Wrap
                                                        </Link>
                                                        <Link to="/One-By-Four" className="text-decoration-none">
                                                            1/4 Wrap
                                                        </Link>
                                                        <Link to="/One-By-Two" className="text-decoration-none">
                                                            1/2 Wrap
                                                        </Link>
                                                        <Link to="/Three-By-Four" className="text-decoration-none">
                                                            3/4 Wrap
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Full-Wraps" className="text-decoration-none">
                                                            <h6>Full Wraps</h6>
                                                        </Link>
                                                        <Link to="/Custom-Full-Wrap" className="text-decoration-none">
                                                            Custom Full Wrap
                                                        </Link>
                                                        <Link to="/Full-Color-Change-Wrap" className="text-decoration-none">
                                                            Full Color Change Wrap
                                                        </Link>
                                                        <Link to="/Commercial-Full-Wrap" className="text-decoration-none">
                                                            Commercial Full Wrap
                                                        </Link>
                                                        <Link to="/Fleet-Full-Wrap-One-Way-Vision" className="text-decoration-none">
                                                            Fleet Full Wrap with One-Way Vision
                                                        </Link>
                                                        <Link to="/Full-One-Way-Vision" className="text-decoration-none">
                                                            Full One-Way Vision
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Car-Wraps-Design-and-Customization" className="text-decoration-none">
                                                            <h6>Design and Customization</h6>
                                                        </Link>
                                                        <Link to="/Upload-Design-Template" className="text-decoration-none">
                                                            Upload Your Design
                                                        </Link>
                                                        <Link to="/Make-a-Design" className="text-decoration-none">
                                                            Make a Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 2nd */}
                                    <li className="nav-item bg-light" id="menu_label_2">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            data-target="#dropdownMenu2"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Store fronts
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_2">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link
                                                            to="/Vinyl-Types-Applications"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Vinyl Types and Applications</h6>
                                                        </Link>
                                                        <Link
                                                            to="/Frosted-Glass-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            Frosted Glass Vinyl
                                                        </Link>
                                                        <Link
                                                            to="/Full-Coverage-One-Way-Vision-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            Full Coverage One-Way Vision Vinyl
                                                        </Link>
                                                        <Link
                                                            to="/Color-Cut-Out-Vinyl"
                                                            className="text-decoration-none"
                                                        >
                                                            Color Cut-Out Vinyl
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link
                                                            to="Store Fronts/Design_and_Customization.html"
                                                            className="text-decoration-none"
                                                        >
                                                            <h6>Design and Customization</h6>
                                                        </Link>
                                                        <Link
                                                            to="/Upload-Design-Template"
                                                            className="text-decoration-none"
                                                        >
                                                            Upload Your Design
                                                        </Link>
                                                        <Link
                                                            to="Store Fronts/Make_a_Design.html"
                                                            className="text-decoration-none"
                                                        >
                                                            Make a Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 3rd */}
                                    <li className="nav-item " id="menu_label_3">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            window tints
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_3">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Window-Tints-Heading" className="text-decoration-none">
                                                            <h6>Window Tint</h6>
                                                        </Link>
                                                        <Link to="/Car-Window-Tints" className="text-decoration-none">
                                                            Car Window Tints
                                                        </Link>
                                                        <Link to="/Fleet-Window-Tints" className="text-decoration-none">
                                                            Fleet Window Tints
                                                        </Link>
                                                        <Link to="/Commercial-Site-Window-Tints" className="text-decoration-none">
                                                            Commercial Site/Store Window Tints
                                                        </Link>
                                                        <Link to="/House-Window-Tints" className="text-decoration-none">
                                                            House Window Tints
                                                        </Link>
                                                        <Link to="/Custom-Window-Tints" className="text-decoration-none">
                                                            Custom Window Tints
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Pre-Cut-Car-Patterns" className="text-decoration-none">
                                                            <h6>Pre-Cut Car Patterns</h6>
                                                        </Link>
                                                        <Link to="/Shop-All-Patterns" className="text-decoration-none">
                                                            Shop All Patterns
                                                        </Link>
                                                        <Link to="/All-Around-Front-Back-Sides" className="text-decoration-none">
                                                            All around Front, Back, and Sides
                                                        </Link>
                                                        <Link to="/Single-Piece-Visor-Strip-Sunroof" className="text-decoration-none">
                                                            Single Piece Visor Strip, Sunroof
                                                        </Link>
                                                        <Link to="/Sides-Front" className="text-decoration-none">
                                                            Sides + Front
                                                        </Link>
                                                        <Link to="/Sides-Back" className="text-decoration-none">
                                                            Sides + Back
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        {/* Add more links if necessary, or keep this section empty if not needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 4th */}
                                    <li className="nav-item" id="menu_label_4">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Advertising and Marketing
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_4">
                                            <div className="container">
                                                <div className="row g-0">
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/print-advertising-heading" className="text-decoration-none">
                                                            <h6>Print Advertising</h6>
                                                        </Link>
                                                        <Link to="Flyers" className="text-decoration-none">
                                                            Flyers
                                                        </Link>
                                                        <Link to="/Posters" className="text-decoration-none">
                                                            Posters
                                                        </Link>
                                                        <Link to="/Brochurs" className="text-decoration-none">
                                                            Brochures
                                                        </Link>
                                                        <Link to="/Catalogs" className="text-decoration-none">
                                                            Catalogs
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Promotional-item-Heading" className="text-decoration-none">
                                                            <h6>Promotional Items</h6>
                                                        </Link>
                                                        <Link to="/Business-Cards" className="text-decoration-none">
                                                            Business Cards
                                                        </Link>
                                                        <Link to="/Branded-Merchandise" className="text-decoration-none">
                                                            Branded Merchandise
                                                        </Link>
                                                        <Link to="/Pens" className="text-decoration-none">
                                                            Pens
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Notebooks
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Signage and Displays</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Posters
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            PopUp Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Window Decals
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Floor Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Directional Signs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Branded Stationery
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Desk Accessories
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Corporate Gifts
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Trade Show Giveaways
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 g-0 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Design Services</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Logo Design
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Custom Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Brand Guidelines
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Business Card Design
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Marketing Collateral Design
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </li>
                                    {/* 5th */}
                                    <li className="nav-item" id="menu_label_5">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Signs and Banners
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_5">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Banner-Types" className="text-decoration-none">
                                                            <h6>Banner Types</h6>
                                                        </Link>
                                                        <Link
                                                            to="/Vinyl-Banners"
                                                            className="text-decoration-none"
                                                        >
                                                            Vinyl Banners
                                                        </Link>
                                                        <Link
                                                            to="/Mesh-Banners"
                                                            className="text-decoration-none"
                                                        >
                                                            Mesh Banners
                                                        </Link>
                                                        <Link
                                                            to="/Construction-Site-Mesh-Fence-Banners"
                                                            className="text-decoration-none"
                                                        >
                                                            Construction Site Mesh Fence Banners
                                                        </Link>
                                                        <Link
                                                            to="/Pole-Banners"
                                                            className="text-decoration-none"
                                                        >
                                                            Pole Banners
                                                        </Link>
                                                        <Link
                                                            to="/Truck-Frame-Banners"
                                                            className="text-decoration-none"
                                                        >
                                                            Truck Frame Banners
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Signage-Solutions" className="text-decoration-none">
                                                            <h6>Signage Solutions</h6>
                                                        </Link>
                                                        <Link to="/Yard-Signs" className="text-decoration-none">
                                                            Yard Signs
                                                        </Link>
                                                        <Link to="/Sidewalk-AFrame-Signs" className="text-decoration-none">
                                                            Sidewalk AFrame Signs
                                                        </Link>
                                                        <Link to="/Poster" className="text-decoration-none">
                                                            Posters
                                                        </Link>
                                                        <Link to="/Solid-Aluminum-Signs" className="text-decoration-none">
                                                            Solid Aluminum Signs
                                                        </Link>
                                                        <Link to="/Acrylic-Signs" className="text-decoration-none">
                                                            Acrylic Signs
                                                        </Link>
                                                        <Link to="/Cardstock-Signs" className="text-decoration-none">
                                                            Cardstock Signs
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 6th */}
                                    <li className="nav-item " id="menu_label_6">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Apparel &amp; Merch
                                        </Link>
                                        <div className="set_dropdwon" id="dropdown_menu_label_6">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">
                                                            <h6>Custom Apparel</h6>
                                                        </Link>
                                                        <Link to="/Notebooks">T-Shirts</Link>
                                                        <Link to="/Notebooks">Hoodies and Sweetshirts</Link>
                                                        <Link to="/Notebooks">Polo shirts</Link>
                                                        <Link to="/Notebooks">Caps &amp; Hats</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">Jackets</Link>
                                                        <Link to="/Notebooks">Workwear</Link>
                                                        <Link to="/Notebooks">
                                                            <h6>Permotional Merchandies</h6>
                                                        </Link>
                                                        <Link to="/Notebooks">Tote Bags</Link>
                                                        <Link to="/Notebooks">Muge &amp; Drinkware</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks">Phone Cases</Link>
                                                        <Link to="/Notebooks">Key Chain</Link>
                                                        <Link to="/Notebooks">Stickers</Link>
                                                        <Link to="/Notebooks">Notebook &amp; Journals</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 7th */}
                                    <li className="nav-item" id="menu_label_7">
                                        <Link
                                            className="nav-link icon text-decoration-none"
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Event Promotion &amp; Production
                                        </Link>
                                        <div className="set_dropdwon bg-light" id="dropdown_menu_label_7">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Printed Materials</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Pens
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Mugs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Fitted Table Covers
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Table Throws
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Table Runner
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Banners &amp; Graphics</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            RollUp Retractable Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            XFrame Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Indoor Floor Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Outdoor Rough Surface Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Carpet Graphics
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Flags</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Feather Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Teardrop Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Regular Flags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Event Tents/Setups</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Event Setup
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Tents
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Table Covers
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Retractable Banners
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Flags
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column text-start">
                                                        <Link to="/Notebooks">
                                                            <h6>Promotional Products</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Promotional Products
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Custom Labels
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Gender Reveal</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Event Setup
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Engaging Products
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Decorations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Reveal Surprises
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Custom Graphics
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Gifts
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 8th */}
                                    <li className="nav-item  bg-light" id="menu_label_8">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            invitations gifts and stationarys,
                                        </Link>
                                        <div className="set_dropdown bg-light" id="dropdown_menu_label_8">
                                            <div className="container">
                                                <div className="row text-start">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Invitation Cards</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Wedding Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Birthday Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Event Invitations
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Save the Date Cards
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            RSVP Cards
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Personalized Gifts</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Customized Mugs
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Personalized Keychains
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Custom Tote Bags
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Personalized Notebooks
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Engraved Pens
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            <h6>Stationery Products</h6>
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Custom Notepads
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Greeting Cards
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Letterhead
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Envelopes
                                                        </Link>
                                                        <Link to="/Notebooks" className="text-decoration-none">
                                                            Business Cards
                                                        </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        {/* Additional content can go here if needed */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 9th  */}
                                    <li className="nav-item " id="menu_label_9">
                                        <Link
                                            className="nav-link icon "
                                            to="/MainHeading"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            websites by done Right
                                        </Link>
                                        <div className="set_dropdwon" id="dropdown_menu_label_9">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">Design Services</Link>
                                                        <Link to="/Notebooks">QR Code Generator </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">Wedding Design Services</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks">Logo Design</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks">Logo Maker</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* 10th */}
                                    <li className="nav-item " id="menu_label_9">
                                        <Link
                                            className="nav-link icon "
                                            to="/LogoDesign"
                                            role="button"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            Logo and Branding&nbsp;design&nbsp; help
                                        </Link>
                                        <div className="set_dropdwon" id="dropdown_menu_label_9">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">Design Services</Link>
                                                        <Link to="/Notebooks">QR Code Generator </Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column d-flex flex-column">
                                                        <Link to="/Notebooks">Wedding Design Services</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks">Logo Design</Link>
                                                    </div>
                                                    <div className="col-sm-3 gap-2 d-flex flex-column">
                                                        <Link to="/Notebooks">Logo Maker</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

        </>


    );
};
export default Header;