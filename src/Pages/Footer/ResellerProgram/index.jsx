import React from "react";
import "./ResellerProgram.css";

import img1 from "../../../images/custom-icon.svg"
import img2 from "../../../images/sale-terms-icon.svg"
import img3 from "../../../images/fulfilment-icon.svg"
import img4 from "../../../images/premium-think.jpg"
import img5 from "../../../images/profile-1.png"
import img6 from "../../../images/testimonial-1-img.jpg"
import img7 from "../../../images/call-icon.svg"
import img8 from "../../../images/email-icon.svg"
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";

const ResellerProgram = () => {
    return (
        <>
        <Header/>
            <div className="ResellerProgram">
                <div className="container-fluid" id="hero-container">
                    <div className="row">
                        <div className="col-md-4 " id="hero-child-div">
                            <h2>
                                ProAdvantage by Reseller Program <br />{" "}
                                <span className="hero-child-div-spain">Done Right Decals</span>
                            </h2>
                            <h1 id="re-progrm">Print Reseller Program</h1>
                            <p>
                                We use our love of all things tech, design, manufacturing, and
                                customer care to help small businesses feel big.
                            </p>
                            <a href="#" className="btn btn-dark">
                                Explore Jobs
                            </a>
                            <a href="#" className="btn btn-dark">
                                Show How It Works
                            </a>
                        </div>
                    </div>
                </div>
                {/*End  hero section */}
                {/* reseller container */}
                <div className="continer" id="reseller-program">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center">
                                Building your reseller business begins here
                            </h1>
                            <p className="text-center">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
                                commodi debitis illo quas enim eaque! Lorem, ipsum dolor sit amet
                                consectetur adipisicing elit. Sit, ex.
                            </p>
                        </div>
                    </div>
                </div>
                {/* products Container */}
                <div className="container products-container">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={img1} alt="" />
                            <h4>Create custom products</h4>
                            <p>
                                Add your artwork to a wide range of products or create a new design
                                using our templates.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={img2} alt="" />
                            <h4>Create custom products</h4>
                            <p>
                                Add your artwork to a wide range of products or create a new design
                                using our templates.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <img src={img3} alt="" />
                            <h4>Create custom products</h4>
                            <p>
                                Add your artwork to a wide range of products or create a new design
                                using our templates.
                            </p>
                        </div>
                    </div>
                </div>
                {/* premium container */}
                <div className="container-fluid premium-container">
                    <div className="row">
                        <h1>Become A Premium Container</h1>
                        <div className="col-md-6">
                            <h4>Try it free for 30 days. $74.99 / year after.</h4>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />{" "}
                                <a href="#">
                                    <p>Try it free for 30 days. $74.99 / year after.</p>
                                </a>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />
                                <p>Try it free for 30 days. $74.99 / year after.</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />
                                <p>Try it free for 30 days. $74.99 / year after.</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />
                                <p>Try it free for 30 days. $74.99 / year after.</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />
                                <p>Try it free for 30 days. $74.99 / year after.</p>
                            </div>
                            <div className="d-flex">
                                <i className="fa-solid fa-check" />
                                <p>Try it free for 30 days. $74.99 / year after.</p>
                            </div>
                            <a href="#" className="btn btn-dark">
                                Sign Up
                            </a>
                            <p className="below-p">Not ready for a Premium membership?</p>
                            <a href="#" className="membership-a">
                                <p>try our free basic membership</p>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="rounded"
                                src={img4}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
       
                {/* support container */}
                <div className="container support-container">
                    <div className="row">
                        <div className="col-md-5">
                            <img src={img7} alt="" />
                            <h4>Call Us</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
                                repellendus?
                            </p>
                        </div>
                        <div className="col-md-5">
                            <img src={img8} alt="" />
                            <h4>Email</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, ab.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}
export default ResellerProgram;