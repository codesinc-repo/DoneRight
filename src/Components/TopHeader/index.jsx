import React from 'react'
import '../Header/Header.css'
import logo from '../../images/DRD logo.png'
import { Link } from 'react-router-dom'

function TopHeader() {
  return (
    <>
    <div className="site-header-main full-width-container full-width-container-capped">
    <div className="site-header-logo-and-tagline">
        <div className="swan-visible-xs swan-visible-sm">
            <button className="site-header-navburger swan-button-skin-unstyled">
                <span className="swan-visually-hidden">Site Navigation</span>
                <span aria-hidden="true" data-dialog-show="navigation-dialog">
                    <span className="navburger">
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <line
                                x1="5.75"
                                y1="9.25"
                                x2="18.25"
                                y2="9.25"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                            <line
                                x1="5.75"
                                y1="15.25"
                                x2="18.25"
                                y2="15.25"
                                stroke="black"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                            />
                        </svg>
                    </span>
                </span>
            </button>
        </div>
        <div className="swan-visible-xs">
            <button className="swan-button-skin-unstyled mobile-search-toggle">
                <span className="swan-visually-hidden">Search</span>
                <span aria-hidden="true" data-dialog-show="navigation-dialog">
                    <img
                        src="https://swan.prod.merch.vpsvc.com/v2/icons/search.3594f845fd4e26d76fd4cf3b291a9e7e.svg"
                        alt=""
                        className="swan-icon swan-icon-size-20p swan-icon-skin-standard swan-icon-type-search"
                    />
                </span>
            </button>
        </div>
        <div className="site-header-logo">
            <Link
                aria-label="Return to Home Page"
                data-fidoprefetchhint="EAGER"
                data-position={0}
                data-section="Header"
                data-translation="homePage"
                to="/"
            >
                <span aria-hidden="true">
                    <span className="logo-fullsize">
                        <img src={logo} width={150} alt="" />
                    </span>
                </span>
            </Link>
        </div>
    </div>
    <div className="swan-visible-xs">
        <div className="mobile-search-veil" />
    </div>
    <div className="site-header-search-container">
        <div className="swan-visible-xs">
            <button className="swan-button-skin-unstyled close-search">
                <span className="swan-visually-hidden">Close</span>
                <span aria-hidden="true" data-dialog-show="navigation-dialog">
                    <svg
                        width={17}
                        height={16}
                        viewBox="0 0 17 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <line
                            x1="14.25"
                            y1="7.94995"
                            x2="3.75"
                            y2="7.94995"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7 4L3 8C3 8 5.47619 10.4762 7 12"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </span>
            </button>
        </div>
        <div className="search-context-inner-wrapper">
            <div
                className="search-application search-results-analytics-container"
                data-search-application-name="SearchBarFlyout"
            >
                <div role="group">
                    <search>
                        <form className="site-header-search-form" action="#">
                            <label
                                className="swan-visually-hidden swan-label-required"
                                htmlFor="siteHeaderSearch-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                            >
                                Search
                            </label>
                            <div className="search-input">
                                <input
                                    type="search"
                                    defaultValue=""
                                    id="siteHeaderSearch-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                    required=""
                                    aria-required="true"
                                    aria-autocomplete="list"
                                    placeholder="Search"
                                    autoComplete="off"
                                    aria-controls="siteHeaderSearchFlyoutLabel-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                    aria-owns="siteSearchResultsListBox-5fe3b0ec-190a-4872-a1a0-8da5bd5f1233"
                                    className="swan-polyfill-empty search-bar-input site-header-search swan-input"
                                />
                                <button
                                    type="submit"
                                    aria-label="Search"
                                    className="search-input-submit swan-button swan-button-skin-secondary"
                                >
                                    <img
                                        src="https://swan.prod.merch.vpsvc.com/v2/icons/search.3594f845fd4e26d76fd4cf3b291a9e7e.svg"
                                        alt=""
                                        className="search-submit-icon swan-icon swan-icon-skin-standard swan-icon-type-search"
                                    />
                                </button>
                            </div>
                        </form>
                    </search>
                </div>
            </div>
        </div>
    </div>
    <nav className="site-header-links" aria-label="User Functions">
        <ul
            role="list"
            style={{ alignItems: "flex-start" }}
            className="swan-list swan-list-skin-minimal swan-display-flex"
        >
            <li className="icon-alignment swan-p-0">
                <div className="site-header-link-menu nohover">
                    <Link
                        className="site-header-link site-header-link-content site-header-link-menu-top-item"
                        aria-label="Help is here"
                        data-position={0}
                        data-section="Header"
                        data-translation="contactUs"
                        to="javascript:void(0)"
                    >
                        <span className="site-header-link-icon">
                            <svg
                                width={28}
                                height={28}
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.5472 4C9.31915 4 5.04166 8.27749 5.04166 13.5055C5.04166 15.4066 5.59615 17.2285 6.62592 18.7336L5.04166 22.4566C4.88324 22.7734 5.20009 23.0903 5.59615 23.0111L9.31915 21.4268C10.8242 22.4566 12.6461 23.0111 14.5472 23.0111C19.7752 23.0111 24.0527 18.7336 24.0527 13.5055C24.0527 8.27749 19.7752 4 14.5472 4Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <ellipse
                                    cx="14.548"
                                    cy="17.4679"
                                    rx="0.792128"
                                    ry="0.792127"
                                    fill="black"
                                />
                                <path
                                    d="M14.5474 15.4073L14.4682 13.8231C15.7356 13.8231 16.8446 12.7933 16.8446 11.4467C16.8446 10.1001 15.8148 9.07031 14.4682 9.07031C13.1216 9.07031 12.0918 10.1001 12.0918 11.4467H12.171C12.171 10.1001 13.28 9.07031 14.5474 9.07031C15.8148 9.07031 16.9238 10.1793 16.9238 11.4467C16.9238 12.7933 15.894 13.8231 14.5474 13.8231V15.4073Z"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeMiterlimit={10}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <div className="swan-visible-lg swan-visible-xl">
                            <span className="site-header-link-text swan-text-1">
                                <span className="site-header-link-primary">
                                    Help is here
                                </span>
                                <span className="site-header-link-subtext swan-text-dark-grey">
                                    1.866.207.4955
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
            </li>
            <li className="icon-alignment swan-p-0">
                <div className="site-header-link-menu swan-hidden-xs">
                    <Link
                        className="site-header-link site-header-link-content site-header-link-menu-top-item"
                        aria-label="My Projects"
                        data-position={0}
                        data-section="Header"
                        data-translation="myProjects"
                        to="javascript:void(0)"
                    >
                        <span className="site-header-link-icon site-header-icon-myprojects">
                            <svg
                                width={22}
                                height={17}
                                viewBox="0 0 22 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M21.5 13.875C21.5 14.8694 21.0689 15.5634 20.4851 15.9837C19.9396 16.3764 19.3075 16.5 18.875 16.5H2.625C1.63056 16.5 0.936647 16.0689 0.516349 15.4851C0.123586 14.9396 0 14.3075 0 13.875V1.75C0 0.783502 0.783502 0 1.75 0H7.74469C8.30074 0 8.82369 0.264253 9.15354 0.711902L9.55003 1.25H19.75C20.7165 1.25 21.5 2.0335 21.5 3V13.875ZM1.5 1.75C1.5 1.61193 1.61193 1.5 1.75 1.5H7.74469C7.82413 1.5 7.89884 1.53775 7.94596 1.6017L10.8465 5.5381C11.1763 5.98575 11.6993 6.25 12.2553 6.25H19.75C19.8885 6.25 20 6.36192 20 6.49952V13.875C20 14.3806 19.8061 14.6241 19.6086 14.7663C19.3729 14.9361 19.0675 15 18.875 15H2.625C2.11944 15 1.87585 14.8061 1.73365 14.6086C1.56391 14.3729 1.5 14.0675 1.5 13.875V1.75ZM20 4.76772V3C20 2.86193 19.8881 2.75 19.75 2.75H10.6553L12.054 4.6483C12.1012 4.71225 12.1759 4.75 12.2553 4.75H19.75C19.8349 4.75 19.9183 4.75604 20 4.76772Z"
                                    fill="black"
                                />
                            </svg>
                        </span>
                        <div className="swan-visible-lg swan-visible-xl">
                            <span className="site-header-link-text swan-text-1">
                                <span className="site-header-link-primary">
                                    My Projects
                                </span>
                            </span>
                        </div>
                    </Link>
                </div>
            </li>
            <li className="icon-alignment swan-p-0">
                <div
                    id="siteHeaderAccountMFEContainer"
                    className="site-header-link-account site-header-link-menu swan-hidden-xs"
                >
                    <Link
                        className="site-header-link site-header-link-content site-header-link-menu-top-item"
                        aria-label="Account"
                        data-position={0}
                        data-section="Header"
                        data-translation="myAccount"
                        to="/SignIn"
                    >
                        <span className="site-header-link-icon" >
                            <svg
                                width={28}
                                height={28}
                                viewBox="0 0 28 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="13.4197"
                                    cy="10.8738"
                                    r="4.37382"
                                    stroke="black"
                                    strokeWidth="1.5"
                                />
                                <path
                                    d="M5.75586 22.5005C5.75586 21.5482 5.9541 20.6053 6.33925 19.7255C6.7244 18.8457 7.28893 18.0463 8.0006 17.3729C8.71227 16.6996 9.55715 16.1654 10.487 15.801C11.4168 15.4366 12.4134 15.249 13.4199 15.249C14.4263 15.249 15.4229 15.4366 16.3528 15.801C17.2826 16.1654 18.1275 16.6996 18.8392 17.3729C19.5509 18.0463 20.1154 18.8457 20.5005 19.7255C20.8857 20.6053 21.0839 21.5482 21.0839 22.5005"
                                    stroke="black"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                        <div className="swan-visible-lg swan-visible-xl">
                            <span className="site-header-link-text site-header-link-text-signin swan-text-1">
                                Account
                            </span>
                        </div>
                    </Link>
                </div>
            </li>
            <li className="icon-alignment swan-p-0">
                <div className="site-header-link-cart site-header-link-menu nohover">
                    <Link
                        data-position={0}
                        data-section="Header"
                        data-translation="Cart"
                        data-testid="cart-redirect-link"
                        className="site-header-link swan-link swan-link-skin-unstyled"
                    >
                        <div
                            className="cart-item-count-container"
                            data-testid="mini-cart-auth-wrapper-container"
                        >
                            <div
                                className="cart-item-count"
                                data-testid="mini-cart-auth-wrapper"
                            >
                                <div
                                    style={{ alignItems: "center" }}
                                    className="swan-display-flex"
                                >
                                    <div className="cart-icon" data-testid="cart-icon">
                                        <svg
                                            width={28}
                                            height={29}
                                            viewBox="0 0 28 29"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <g clipPath="url(#clip0)">
                                                <path
                                                    d="M22 8.09863H6V24.7986H22V8.09863Z"
                                                    stroke="black"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M11.5 10.6002V5.5002C11.5 4.8002 12.1 4.2002 12.8 4.2002H15.4C16.1 4.2002 16.7 4.8002 16.7 5.5002V10.7002"
                                                    stroke="black"
                                                    strokeWidth="1.5"
                                                    strokeMiterlimit={10}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0">
                                                    <rect
                                                        width={24}
                                                        height={24}
                                                        fill="white"
                                                        transform="translate(2 2.5)"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <div className="cart-label" data-testid="cart-label">
                                        <div className="swan-visible-lg swan-visible-xl">
                                            <div className="swan-text-1">Cart</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </li>
        </ul>
    </nav>
</div>
</>
  )
}

export default TopHeader