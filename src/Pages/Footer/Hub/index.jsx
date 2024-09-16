import React from "react";
import mainimg from "../../../images/A&Marketing07.jpeg"
import img1 from "../../../images/A&Marketing01.jpg"
import img2 from "../../../images/A&Marketing02.jpg"
import img3 from "../../../images/A&Marketing03.jpg"
import img4 from "../../../images/A&Marketing04.jpg"
import img5 from "../../../images/A&Marketing05.jpeg"
import img6 from "../../../images/A&Marketing06.jpg"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Hub = () => {
    return (
        <>
            <Header />
            <div className="container-fluid p-4">
                <div className="row mb-4 mt-4">
                    <div className="col-lg-6 d-flex justify-content-center algin-items-center flex-column">
                        <h1 className="display-4 mb-4">Ideas &amp; Advice</h1>
                        <p className="text-secondary mb-4">
                            A small business blog with helpful tips, practical advice, and inspirational
                            stories.
                        </p>
                    </div>
                    <div className="col-lg-6">
                        <img src={mainimg} style={{ width: "100%" }} alt="" />
                    </div>
                </div>
                <div className=" mx-auto row mb-4">
                    <div className="d-flex justify-content-center ">
                        <button className="btn btn-light text-dark fw-semibold me-2 mb-2">Design Tips</button>
                        <button className="btn btn-light text-dark fw-semibold me-2 mb-2">
                            Marketing &amp; Advertising
                        </button>
                        <button className="btn btn-light text-dark fw-semibold me-2 mb-2">Business Tips</button>
                        <button className="btn btn-light text-dark fw-semibold me-2 mb-2">Branding</button>
                        <button className="btn btn-light text-dark fw-semibold mb-2">All Articles</button>
                    </div>
                </div>
                <div className="row g-4">
                    <h5 className="fw-semibold">Design Tips</h5>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img1}
                                alt="Design Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    What is a brochure? The essential guide to the power of the fold
                                </h5>
                                <p className="card-text text-secondary">
                                    There’s a quiet power to brochures. Whether you’ve picked up a
                                    sleek, minimalist product brochure from your local store, casually
                                    flipped […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img2}
                                alt="Font Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">7 alluring font trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    It’s a unique, transitional moment in the digital art world. And the
                                    2024 font design trends reflect this. With so […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img3}
                                alt="Color Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">9 powerful color trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    If you’ve ever worn pink to lift your spirits or black to feel
                                    confident, you know how colors can influence […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img4}
                                alt="Marketing Guide Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    The ultimate guide to small business marketing in 2024
                                </h5>
                                <p className="card-text text-secondary">
                                    The latest survey from Vistaprint, in partnership with Wix, captured
                                    insights from 1,000 U.S. small business owners and consumers in […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img5}
                                alt="Marketing Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">10 best marketing trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    As we step into 2024, the marketing landscape is buzzing with fresh,
                                    innovative ideas. Marketers are getting creative and discovering […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img6}
                                alt="Packaging Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Wow your customers with custom small business packaging
                                </h5>
                                <p className="card-text text-secondary">
                                    Have you ever received a package that popped with color and
                                    personality? As a business owner, you no doubt want […]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-4">
                    <h5 className="fw-semibold">Marketing & Advertising</h5>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img1}
                                alt="Design Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    What is a brochure? The essential guide to the power of the fold
                                </h5>
                                <p className="card-text text-secondary">
                                    There’s a quiet power to brochures. Whether you’ve picked up a
                                    sleek, minimalist product brochure from your local store, casually
                                    flipped […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img2}
                                alt="Font Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">7 alluring font trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    It’s a unique, transitional moment in the digital art world. And the
                                    2024 font design trends reflect this. With so […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img3}
                                alt="Color Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">9 powerful color trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    If you’ve ever worn pink to lift your spirits or black to feel
                                    confident, you know how colors can influence […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img4}
                                alt="Marketing Guide Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    The ultimate guide to small business marketing in 2024
                                </h5>
                                <p className="card-text text-secondary">
                                    The latest survey from Vistaprint, in partnership with Wix, captured
                                    insights from 1,000 U.S. small business owners and consumers in […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img5}
                                alt="Marketing Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">10 best marketing trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    As we step into 2024, the marketing landscape is buzzing with fresh,
                                    innovative ideas. Marketers are getting creative and discovering […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img6}
                                alt="Packaging Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Wow your customers with custom small business packaging
                                </h5>
                                <p className="card-text text-secondary">
                                    Have you ever received a package that popped with color and
                                    personality? As a business owner, you no doubt want […]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-4 mt-5">
                    <h5 className="fw-semibold">Business Tips</h5>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img1}
                                alt="Design Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    What is a brochure? The essential guide to the power of the fold
                                </h5>
                                <p className="card-text text-secondary">
                                    There’s a quiet power to brochures. Whether you’ve picked up a
                                    sleek, minimalist product brochure from your local store, casually
                                    flipped […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img2}
                                alt="Font Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">7 alluring font trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    It’s a unique, transitional moment in the digital art world. And the
                                    2024 font design trends reflect this. With so […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img3}
                                alt="Color Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">9 powerful color trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    If you’ve ever worn pink to lift your spirits or black to feel
                                    confident, you know how colors can influence […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img4}
                                alt="Marketing Guide Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    The ultimate guide to small business marketing in 2024
                                </h5>
                                <p className="card-text text-secondary">
                                    The latest survey from Vistaprint, in partnership with Wix, captured
                                    insights from 1,000 U.S. small business owners and consumers in […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img5}
                                alt="Marketing Trends Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">10 best marketing trends for 2024</h5>
                                <p className="card-text text-secondary">
                                    As we step into 2024, the marketing landscape is buzzing with fresh,
                                    innovative ideas. Marketers are getting creative and discovering […]
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card h-100 shadow-sm">
                            <img
                                src={img6}
                                alt="Packaging Tips Image"
                                className="card-img-top"
                            />
                            <div className="card-body">
                                <h5 className="card-title">
                                    Wow your customers with custom small business packaging
                                </h5>
                                <p className="card-text text-secondary">
                                    Have you ever received a package that popped with color and
                                    personality? As a business owner, you no doubt want […]
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

}
export default Hub;