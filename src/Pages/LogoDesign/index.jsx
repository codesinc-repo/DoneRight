import React from "react";
import "./LogoDesign.css"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import img1 from "../../images/a.jpg";
import img2 from "../../images/c.jpg";
import img3 from "../../images/d.jpg";
import img4 from "../../images/e.jpg";
import img5 from "../../images/1.webp";
import img6 from "../../images/2.webp";
import img7 from "../../images/12.png";




function LogoDesign() {

    return (
        <>
          <Header/> 
                <div className="container-fluid" style={{ backgroundColor: "#c0e6df" }}>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="Banner d-flex justify-content-center align-items-start mt-5 ms-5 flex-column">
                                <h5>Design Services</h5>
                                <h2>Let the professionals take it from here</h2>
                                <p>
                                    Our community of trusted designers can create standout designs for
                                    every stage of your business journey.
                                </p>
                                <button
                                    type="button"
                                    className="btn btn-dark btn-lg px-4 py-1 rounded-pill text-centre mt-2 mb-3"
                                >
                                    Choose a product
                                </button>{" "}
                                <a href="#" style={{ color: "black", fontSize: "1.2rem" }}>
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner-image">
                                <img src={img5} alt="header-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <section>
                    <div className="container second mt-5 mb-5">
                        <h1>Collaborate with a designer</h1>
                        <p>
                            Getting professional design has never been easier. Here's how it's done:
                        </p>
                        <div className="row mx-auto d-flex justify-content-center">
                            <div className="col-md-2">
                                <img src={img1} alt={1} width="190px" height="150px" />
                                <p>
                                    <u>Choose a product</u>based on your unique needs.
                                </p>
                            </div>
                            <div className="col-md-2">
                                <img src={img2} alt={1} width="190px" height="150px" />
                                <p>
                                    Fill out a brief and share your project details with your designer.
                                </p>
                            </div>
                            <div className="col-md-2">
                                <img src={img3} alt={1} width="190px" height="150px" />
                                <p>Work with your designer on feedback and revisions.</p>
                            </div>
                            <div className="col-md-2">
                                <img src={img4} alt={1} width="190px" height="150px" />
                                <p>Your designer will provide you with files ready to print.</p>
                            </div>
                        </div>
                        <div className="container d-flex justify-content-space-evenly ">
                            <h6>Choose a product to get started</h6>
                            <i className="fa-solid fa-arrow-right-long" />
                        </div>
                    </div>
                </section>
                <section className=" mx-3 p-5 BG_COLOR_SET">
                    <div className="container-fliud rounded-3">
                        <div className="row">
                            <div className="col-lg-6 you">
                                <h1>Logo dreams really do come true</h1>
                                <p>
                                    There are three ways to make your unique brand a reality. Start with
                                    our free logo maker, hire a professional designer or start a
                                    contest.
                                </p>
                                <button type="button" className="btn btn-dark btn-lg">
                                    Explore your options
                                </button>
                            </div>
                            <div className="col-lg-6 banner-image">
                                <img src={img6} alt="image" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-center mt-5 mb-5">
                    <h1>More design options</h1>
                    <div className="container-fluid four">
                        <div className="row">
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                            <div className="col-md-2 g-0">
                                <img src={img7} alt="image" />
                            </div>
                        </div>
                    </div>
                    <div
                        className="container-fliud mt-5 "
                        style={{ backgroundColor: "#f8f8f8" }}
                    >
                        <div className="row g-0">
                            <div className=" col-lg-8 mx-auto mt-5 d-flex flex-column justify-content-center align-items-center">
                                <h2>Still unsure?</h2>
                                <p>
                                    Browse our Help Centre or chat with one of our Customer Care
                                    Specialists who will be available anytime to help you get a great
                                    design.
                                </p>
                                <a
                                    className="text-decoration-none text-dark"
                                    href="javascript:void(0)"
                                >
                                    Visit our Help Center &nbsp;
                                    <i className="fa-solid fa-arrow-right-long" />
                                </a>
                                <button className="btn btn-dark w-25 text-center mt-5 mb-5 p-2">
                                    Chat Now{" "}
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
          <Footer/>

        </>
    );

};
export default LogoDesign;