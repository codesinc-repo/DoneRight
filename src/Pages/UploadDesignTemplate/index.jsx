import React, { useState } from 'react';
import img01 from '../../images/Store fronts_1.jpg'
import img02 from '../../images/Store fronts_2.jpg'
import img03 from '../../images/Store fronts_3.jpg'
import img04 from '../../images/Store fronts_4.jpg'
import img05 from '../../images/Store fronts_5.jpg'
import img06 from '../../images/Store fronts_6.jpg'
import img07 from '../../images/Store fronts_7.jpg'
import img08 from '../../images/Store fronts_8.jpg'
import img09 from '../../images/Store fronts_1.jpg'
import img10 from '../../images/Store fronts_2.jpg'
import img11 from '../../images/Store fronts_3.jpg'
import './UploadDesignTemplate.css'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const UploadDesignTemplate = () => {
    const [showBusinessCardModal, setShowBusinessCardModal] = useState(false);
    const [showImageModal, setShowImageModal] = useState(false);
    const [zoomPercentage, setZoomPercentage] = useState(100);

    const handleNextButton = () => {
        setShowBusinessCardModal(false);
        setTimeout(() => {
            setShowImageModal(true);
        }, 500);
    };

    const handleZoomChange = (e) => {
        setZoomPercentage(e.target.value);
    };



    return (
        <div>
            <>
                <Header />
                <section>
                    <div className="container-fluid px-4 mt-4 mb-4">
                        {/* <div className="row d-flex flex-row">
                            <div className="col-lg-6 d-flex flex-column ">
                                <h4>Store fronts</h4>
                                <div className="icons_color d-flex flex-row gap-4 mt-3">
                                    <div>
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                        <i className="fa-solid fa-star" />
                                    </div>
                                    <div className="gap-3 d-flex">
                                        <span>4.6</span>
                                        <span>
                                            <a href="javascript:void(0)">63986 Reviews</a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 justify-content-end d-flex ">
                                <p className="w-75">
                                    Discover our range of storefront solutions designed to enhance the
                                    appeal and functionality of your business. From eye-catching signage
                                    to stylish display elements, find everything you need to create an
                                    inviting and professional storefront that attracts customers and
                                    boosts your brand presence.
                                </p>
                            </div>
                        </div> */}
                        <hr />
                        {/* --------------- section  part 2 -------------- */}
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="search-bar">
                                    <input type="text" className="form-control" placeholder="Designs" />
                                    <i className="fa-solid fa-magnifying-glass  search-icon" />
                                </div>
                            </div>
                            <div className="col-lg-6 text-end">
                                <button className="btn btn-outline-dark w-25"> Favorites</button>
                            </div>
                        </div>
                        {/* -------------- side Bar  Portion  */}
                        <div className="row mt-5">
                            <div className="col-lg-3">
                                <div className="accordion" id="accordionSidebar">
                                    {/* Shape Section */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingShape">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseShape"
                                                aria-expanded="true"
                                                aria-controls="collapseShape"
                                            >
                                                Shape
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseShape"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingShape"
                                            data-bs-parent="#accordionSidebar"
                                        >
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="shapeStandard"
                                                    />
                                                    <label className="form-check-label" htmlFor="shapeStandard">
                                                        Standard (3.5" x 2")
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="shapeSquare"
                                                    />
                                                    <label className="form-check-label" htmlFor="shapeSquare">
                                                        Square (2.5" x 2.5")
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Orientation Section */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOrientation">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOrientation"
                                                aria-expanded="false"
                                                aria-controls="collapseOrientation"
                                            >
                                                Orientation
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseOrientation"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOrientation"
                                            data-bs-parent="#accordionSidebar"
                                        >
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="orientationHorizontal"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="orientationHorizontal"
                                                    >
                                                        Horizontal
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        defaultValue=""
                                                        id="orientationVertical"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="orientationVertical"
                                                    >
                                                        Vertical
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Industry Section */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header " id="headingIndustry">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseIndustry"
                                                aria-expanded="false"
                                                aria-controls="collapseIndustry"
                                            >
                                                Industry
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseIndustry"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingIndustry"
                                            data-bs-parent="#accordionSidebar"
                                        >
                                            <div className="accordion-body">
                                                <ul className="list-unstyled gap-2 d-flex fs-5 flex-column">
                                                    <li>Agriculture &amp; Farming</li>
                                                    <li>Animals &amp; Pet Care</li>
                                                    <li>Arts, Crafts, and Design</li>
                                                    <li>Automotive &amp; Transportation</li>
                                                    <li>Beauty &amp; Spa</li>
                                                    <li>Construction and Real Estate</li>
                                                    <li>Education Services</li>
                                                    <li>Entertainment &amp; Recreation</li>
                                                    <li>Finance &amp; Insurance</li>
                                                    <li>Food &amp; Beverage</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Corners Section */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingCorners">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseCorners"
                                                aria-expanded="true"
                                                aria-controls="collapseCorners"
                                            >
                                                Corners
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseCorners"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingCorners"
                                            data-bs-parent="#accordionSidebar"
                                        >
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="cornersOptions"
                                                        id="cornersStandard"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="cornersStandard"
                                                    >
                                                        Standard
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="cornersOptions"
                                                        id="cornersRounded"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="cornersRounded"
                                                    >
                                                        Rounded
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Finishes Section */}
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFinishes">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFinishes"
                                                aria-expanded="false"
                                                aria-controls="collapseFinishes"
                                            >
                                                Finishes
                                            </button>
                                        </h2>
                                        <div
                                            id="collapseFinishes"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingFinishes"
                                            data-bs-parent="#accordionSidebar"
                                        >
                                            <div className="accordion-body d-flex flex-column gap-2">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="finishesOptions"
                                                        id="finishNoFinish"
                                                        defaultChecked=""
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="finishNoFinish"
                                                    >
                                                        No Finish
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="finishesOptions"
                                                        id="finishEmbossedGloss"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="finishEmbossedGloss"
                                                    >
                                                        Embossed Gloss
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="finishesOptions"
                                                        id="finishFoilAccent"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="finishFoilAccent"
                                                    >
                                                        Foil Accent
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="finishesOptions"
                                                        id="finishGoldRaisedFoil"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="finishGoldRaisedFoil"
                                                    >
                                                        Gold Raised Foil
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="finishesOptions"
                                                        id="finishSilverRaisedFoil"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="finishSilverRaisedFoil"
                                                    >
                                                        Silver Raised Foil
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* ------------- card -------------- */}
                            <div className="col-lg-9">
                                <div className="row g-2">
                                    {/* Upload Your Own Design */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="upload-card d-flex flex-column justify-content-center" onClick={() => setShowBusinessCardModal(true)}>
                                            <i className="fa-solid fa-upload" />
                                            <h5 className="mt-3">Upload your own design</h5>
                                            <p className="mt-3">100 from $14.99</p>
                                        </div>
                                    </div>
                                    {/* Product Card 1 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card" data-bs-toggle="modal" data-bs-target="#designModal">
                                            <img src={img01} alt="Product Image" />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }}></span>
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }}></span>
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }}></span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Product Card 2 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img02}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 3 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img03}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2 mt-4">
                                    {/* Product Card 1 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img04}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 2 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img05}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 3 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img06}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 4 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img07}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-2 mt-4">
                                    {/* Product Card 1 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img08}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 2 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img09}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 3 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img10}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Product Card 4 */}
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card product-card">
                                            <img
                                                src={img11}
                                                alt="Product Image"
                                            />
                                            <div className="card-body">
                                                <h6>Standard (3.5" x 2")</h6>
                                                <p>100 from $14.99</p>
                                                <div className="color-options d-flex flex-row justify-content-between">
                                                    <div className="d-flex flex-row">
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#000000" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#6A3E23" }} />
                                                        </div>
                                                        <div className="Button_set_circle">
                                                            <span style={{ backgroundColor: "#2C3E50" }} />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="more-colors d-flex flex-row">+2</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Business Card Modal */}
                {showBusinessCardModal && (
                    <div className="modal fade show" tabIndex="-1" style={{ display: 'block' }}>
                        <div className="modal-dialog modal-dialog-left">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Business Card Templates</h5>
                                    <button type="button" className="btn-close" onClick={() => setShowBusinessCardModal(false)}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Please select all required options.</p>

                                    <div className="option-group">
                                        <h6>Shape <span className="required">(Required)</span></h6>
                                        <div className="btn-group d-flex flex-wrap" role="group">
                                            <input type="radio" className="btn-check" name="shape" id="shapeStandard" defaultChecked />
                                            <label className="btn btn-outline-secondary flex-fill" htmlFor="shapeStandard">Standard</label>

                                            <input type="radio" className="btn-check" name="shape" id="shapeSquare" />
                                            <label className="btn btn-outline-secondary ms-md-3 mt-2 mt-md-0 flex-fill" htmlFor="shapeSquare">
                                                Square<br />+$0.09/ea
                                            </label>
                                        </div>
                                    </div>

                                    <div className="option-group mt-4">
                                        <h6>Orientation <span className="required">(Required)</span></h6>
                                        <div className="btn-group d-flex flex-wrap" role="group">
                                            <input type="radio" className="btn-check" name="orientation" id="orientationHorizontal" defaultChecked />
                                            <label className="btn btn-outline-secondary flex-fill" htmlFor="orientationHorizontal">Horizontal</label>

                                            <input type="radio" className="btn-check" name="orientation" id="orientationVertical" />
                                            <label className="btn btn-outline-secondary ms-md-3 mt-2 mt-md-0 flex-fill" htmlFor="orientationVertical">Vertical</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <p className="price-info mb-0">100 starting at $14.99</p>
                                    <button type="button" className="btn btn-dark w-100 mt-3" onClick={handleNextButton}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

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
                                <div className="modal-body d-flex flex-wrap  align-items-flex-start">
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

                <div
                    className="modal fade"
                    id="designModal"
                    tabIndex={-1}
                    aria-labelledby="designModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header p-2">
                                <h5 className="modal-title" id="designModalLabel">
                                    Design Your Product
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                />
                            </div>
                            <div className="modal-body">
                                <div className="container mt-4 design_section">
                                    <div className="row">
                                        {/* Design Area */}
                                        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center mb-4">
                                            <img
                                                src={img01}
                                                width="100%"
                                                alt=""
                                                className="img-fluid"
                                            />
                                            <div className="mt-3">
                                                <label className="switch">
                                                    <input type="checkbox" className="cb" />
                                                    <span className="toggle">
                                                        <span className="left">Back</span>
                                                        <span className="right">Front</span>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        {/* Options Section */}
                                        <div className="col-lg-6 col-md-12 ">
                                            <div className="w-100 float-end">
                                                <div className="set_overflow d-flex justify-content-evenly align-content-center flex-column">
                                                    <p>
                                                        100 from <del>$26.99</del>{" "}
                                                        <span className="text-success">$20.24</span>
                                                    </p>
                                                    <p>Get it as soon as Thursday, Aug 29th</p>

                                                    <h5 className="mt-4">Colors:</h5>
                                                    <div className="colors mt-3 d-flex justify-content-around">
                                                        <button className="btn btn-primary btn-sm" />
                                                        <button className="btn btn-danger btn-sm" />
                                                        <button className="btn btn-light btn-sm" />
                                                        <button className="btn btn-dark btn-sm" />
                                                        <button className="btn btn-secondary btn-sm" />
                                                    </div>

                                                    <h5 className="mt-4">Corners:</h5>
                                                    <div className="corners mt-3 d-flex justify-content-around">
                                                        <button className="btn btn-outline-dark btn-sm">
                                                            Standard <br /> +$0.12
                                                        </button>
                                                        <button className="btn btn-outline-dark btn-sm">
                                                            Rounded <br /> +$0.02
                                                        </button>
                                                    </div>

                                                    <h5 className="mt-4">Orientation:</h5>
                                                    <div className="orientation mt-3 d-flex justify-content-around">
                                                        <button className="btn btn-outline-dark btn-sm">Horizontal</button>
                                                        <button className="btn btn-outline-dark btn-sm">Vertical</button>
                                                    </div>
                                                </div>

                                                <button className="btn btn-dark mt-4 w-100">Edit my design</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <Footer />
            </>
        </div >
    )
}
export default UploadDesignTemplate;