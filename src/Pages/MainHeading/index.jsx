import React from "react";
import { Link } from "react-router-dom"; 
import "./MainHeading.css";
import img1 from "../../images/1by2 img01.webp"
import img2 from "../../images/1by2 img02.webp"
import img3 from "../../images/1by2 img03.webp"
import img4 from "../../images/1by2 img04.webp"
import img5 from "../../images/20_-tint.jpg"
import img6 from "../../images/35  tint.jpg"
import img7 from "../../images/50_ tint.webp"
import img8 from "../../images/70_ tint.webp"
import img9 from "../../images/Advertising office maketing_1.jpg"
import img10 from "../../images/Advertising office maketing_2.jpg"
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

function MainHeading() {
    return (
        <>
        <Header/>
            <div className="container-fluid mt-5 MainHeading">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="sidebar_12 p-0">
                            <h5 className="border-bottom mb-4">Spot Graphics</h5>
                            <ul>
                                <li>
                                    <Link to="">Custom Spot Graphics</Link>
                                </li>
                                <li>
                                    <Link to="">Fleet Spot Graphics</Link>
                                </li>
                                <li>
                                    <Link to="">Basic Spot Graphics</Link>
                                </li>
                                <li>
                                    <Link to="">Trailer Spot Graphics</Link>
                                </li>
                            </ul>
                            <h5 className="border-bottom mb-4">Partial Wraps</h5>
                            <ul>
                                <li>
                                    <Link to="">1/8 Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">1/4 Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">1/2 Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">3/4 Wrap</Link>
                                </li>
                            </ul>
                            <h5 className="border-bottom mb-4">Full Wraps</h5>
                            <ul>
                                <li>
                                    <Link to="">Custom Full Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">Full Color Change Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">Commercial Full Wrap</Link>
                                </li>
                                <li>
                                    <Link to="">Fleet Full Wrap with One-Way Vision</Link>
                                </li>
                                <li>
                                    <Link to="">Full One-Way Vision</Link>
                                </li>
                            </ul>
                            <h5 className="border-bottom mb-4">Design and Customization</h5>
                            <ul>
                                <li>
                                    <Link to="">Upload Your Design</Link>
                                </li>
                                <li>
                                    <Link to="">Make a Design</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="main-content">
                            <div className="imgWithText">
                                <div className="row">
                                    <div className="col-lg-6 p-4">
                                        <h3>Car Wraps</h3>
                                        <p>
                                            Want to give your vehicle a fresh, eye-catching look? Explore
                                            our wide range of customizable car wraps, including full wraps,
                                            partial wraps, and specialty finishes. Transform your ride with
                                            professional installation and top-quality materials.
                                        </p>
                                        <div className="button-group d-flex">
                                            <button className="btn rounded-5">Browse designs</button>
                                            <button className="btn rounded-5">Upload design</button>
                                            <button className="btn rounded-5">Reorder</button>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 p-4">
                                        <img
                                            src={img1}
                                            alt=""
                                            height="300px"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="card-options">
                                <h3>Explore all your card options</h3>
                                <p>From standard to standout papers, get the look you want.</p>
                                <div className="row">
                                    {/* Spot Graphics */}
                                    <div className="col-lg-3 g-0">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img2}
                                                width="100%"
                                                height="100%"
                                                alt="Spot Graphics"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Custom Spot Graphics</h5>
                                                <p className="card-text card-text-limit ">
                                                    Create custom spot graphics tailored to your vehicle. Stand
                                                    out on the road.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img3}
                                                width="100%"
                                                height="100%"
                                                alt="Fleet Spot Graphics"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Fleet Spot Graphics</h5>
                                                <p className="card-text card-text-limit">
                                                    Enhance your fleet with cohesive spot graphics for a
                                                    professional look.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img4}
                                                width="100%"
                                                height="100%"
                                                alt="Basic Spot Graphics"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Basic Spot Graphics</h5>
                                                <p className="card-text card-text-limit">
                                                    Simple yet effective spot graphics to give your vehicle a
                                                    fresh look.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img5}
                                                width="100%"
                                                height="100%"
                                                alt="Trailer Spot Graphics"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Trailer Spot Graphics</h5>
                                                <p className="card-text card-text-limit">
                                                    Perfect for trailers, our spot graphics add flair and
                                                    functionality.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Partial Wraps */}
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img6}
                                                width="100%"
                                                height="100%"
                                                alt="1/8 Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">1/8 Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    A subtle touch with a 1/8 wrap. Perfect for accenting your
                                                    vehicle's style.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img7}
                                                width="100%"
                                                height="100%"
                                                alt="1/4 Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">1/4 Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Get noticed with a 1/4 wrap, offering a balance between
                                                    coverage and cost.
                                                </p>
                                                <Link to="" className="btn btn-light">
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img8}
                                                width="100%"
                                                height="100%"
                                                alt="1/2 Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">1/2 Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Cover more with a 1/2 wrap, offering extensive design
                                                    flexibility.
                                                </p>
                                                <Link to="" className="btn btn-light">
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img9}
                                                width="100%"
                                                height="100%"
                                                alt="3/4 Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">3/4 Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Nearly full coverage with a 3/4 wrap. Maximize your
                                                    vehicle's branding potential.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Full Wraps */}
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img10}
                                                width="100%"
                                                height="100%"
                                                alt="Custom Full Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Custom Full Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Turn heads with a fully customized wrap that reflects your
                                                    style.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img1}
                                                width="100%"
                                                height="100%"
                                                alt="Full Color Change Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Full Color Change Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Change the color of your vehicle completely with our full
                                                    color wrap.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img2}
                                                width="100%"
                                                height="100%"
                                                alt="Commercial Full Wrap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Commercial Full Wrap</h5>
                                                <p className="card-text card-text-limit">
                                                    Promote your business with a full wrap designed for
                                                    commercial vehicles.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img3}
                                                width="100%"
                                                height="100%"
                                                alt="Fleet Full Wrap with One-Way Vision"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Fleet Full Wrap with One-Way Vision
                                                </h5>
                                                <p className="card-text card-text-limit">
                                                    Get the full fleet covered with wraps that include one-way
                                                    vision technology.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Design and Customization */}
                                    <div className="col-lg-3 g-0 mt-4">
                                        <div className="card">
                                            <img
                                                className="card-img-top"
                                                src={img4}
                                                width="100%"
                                                height="100%"
                                                alt="Upload Your Design"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">Upload Your Design</h5>
                                                <p className="card-text card-text-limit">
                                                    Have a design in mind? Upload it, and we’ll make it come to
                                                    life on your vehicle.
                                                </p>
                                                <Link
                                                    to=""
                                                    className="btn btn-light"
                                                >
                                                    See Options
                                                </Link>
                                            </div>
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
    );
}
export default MainHeading;