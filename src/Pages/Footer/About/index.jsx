import React from "react";
import "./AboutUs.css";
import img1 from "../../../images/card-2.jpg"
import img2 from "../../../images/card-3.webp"
import img3 from "../../../images/card-4.jpg"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function About() {

    return (
        <>
            <Header />
            {/* Hero Section */}
            <div className="container-fluid" id="hero-container">
                {/* Background image is handled in CSS */}
            </div>
            {/* Business Big Ideas Section */}
            <div className="container" id="big-ideas-container">
                <h2 className="business-ideas-heading text-center my-4">
                    Where Small Businesses Get Big Ideas.
                </h2>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <p className="p1-ideas">
                            Done Right Decals, part of the Cimpress family, empowers small
                            business owners with expertly designed, up-to-date custom marketing.
                            We offer a diverse range of products to help businesses look
                            professional, prepared, and connected.
                        </p>
                        <p className="p1-ideas">
                            While we're known for our business cards, with billions printed since
                            our founding in 1995, Done Right Decals has grown to offer so much
                            more.
                        </p>
                        <p className="p1-ideas">
                            Today, we provide a wide variety of customizable marketing products,
                            real-time access to expert guidance, and a seamless experience for
                            those who know exactly what they want.
                        </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <p className="p1-ideas">
                            With Done Right Decals, our customers can create a cohesive look that
                            spans their entire business, whether they operate in-store, online,
                            on-site, or on the go. This allows them to compete confidently and
                            take action right away.
                        </p>
                        <p className="p1-ideas">
                            Because now isn’t just a challenge – it’s an opportunity. And Done
                            Right Decals is here to help small business owners{" "}
                            <span className="p1-ideas-span">OWN THE NOW.</span>
                        </p>
                    </div>
                </div>
            </div>
            {/* Small Business Section */}
            <div className="container my-5" id="big-ideas-container">
                <h2 className="business-ideas-heading text-center my-4">
                    Small Business Ideas
                </h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="feature-box">
                            <img
                                src={img1}
                                alt="Just Right Selection"
                                className="feature-img img-fluid"
                            />
                            <h3 className="mt-3">A “Just-Right” Selection</h3>
                            <p>
                                We provide small business owners with the right assortment of
                                products and options – enough to meet their needs without
                                overwhelming them, all at a fair price.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="feature-box">
                            <img
                                src={img2}
                                alt="Easy Experience"
                                className="feature-img img-fluid"
                            />
                            <h3 className="mt-3">Easy Experience</h3>
                            <p>
                                We help small business owners quickly and effectively create the
                                products they need to succeed, offering tips, inspiration, and
                                expert advice every step of the way.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="feature-box">
                            <img
                                src={img3}
                                alt="Design for Everyone"
                                className="feature-img img-fluid"
                            />
                            <h3 className="mt-3">Design for Everyone</h3>
                            <p>
                                We offer on-trend designs, intuitive tools, and support options that
                                enable any small business owner to create professionally designed
                                marketing, even without design expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Promise Section */}
            <div className="container my-5" id="container-promise">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h1 className="promise-heading">Our Promise</h1>
                        <h3 className="promise-sub-heading my-3">
                            You Need It. We Print It. You Love It.
                        </h3>
                        <p className="promise-p">
                            Whether it’s printed, embroidered, or published online, Done Right
                            Decals is{" "}
                            <a href="#" className="tag-promise">
                                here to help
                            </a>{" "}
                            every step of the way.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>


    );
};
export default About;