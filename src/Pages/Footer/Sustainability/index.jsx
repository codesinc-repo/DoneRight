import React from "react";
import "./Sustainability.css"
import Footer from "../../../Components/Footer";
import Header from "../../../Components/Header";
import img1 from "../../../images/paper-product-icon.png"
import img2 from "../../../images/emmision-icon.png"
import img3 from "../../../images/carbon-icon.png"
import img4 from "../../../images/cutting-carbon.jpg"
import img5 from "../../../images/wood.jpg"
import img6 from "../../../images/green.jpg"


function Sustainability() {
    return (

        <>
            <Header />
            <main className="main_sustainability">
                <div className="container-fluid hero-container">
                    <div className="row">
                        <h1 className="text-center">We’re dedicated to sustainability.</h1>
                        <div className="col-md-12">
                            <p>
                                Learn about our commitment to reducing our environmental footprint and
                                promoting sustainability at Done Right Decals.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Second Container */}
                <div className="container-fluid second-container">
                    <div className="row">
                        <div className="col-md-4 card-hero">
                            <img
                                src={img1}
                                alt="Paper Product Icon"
                            />
                            <div className="flex-column">
                                <h4>95% of our paper products</h4>
                                <p>
                                    are made from paper certified to the highest standards of
                                    responsible forestry.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 card-hero">
                            <img
                                src={img2}
                                alt="Greenhouse Emissions Icon"
                            />
                            <div className="flex-column">
                                <h4>8.3% reduction in greenhouse emissions</h4>
                                <p>achieved since FY19 through enhanced operational practices.</p>
                            </div>
                        </div>
                        <div className="col-md-4 card-hero">
                            <img src={img3} alt="Carbon Neutral Icon" />
                            <div className="flex-column">
                                <h4>Our goal: Carbon Neutral by 2040</h4>
                                <p>
                                    following a 1.5ºC decarbonization pathway, surpassing the 2015 Paris
                                    Agreement targets.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Environment */}
                <div className="container environment-container mt-5">
                    <h3>Our strategies for reducing environmental impact</h3>
                    <div className="row border-row">
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img
                                    src={img4}
                                    alt="Cutting Carbon Emissions"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">Reducing carbon emissions</h3>
                                    <p className="card-text">
                                        We are lowering our Scope 1 and 2 carbon emissions by using less
                                        energy and shifting to renewable sources, aligning with
                                        science-based targets. <a href="#">Learn More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img
                                    src={img5}
                                    alt="Practicing Responsible Forestry"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">Responsible forestry practices</h3>
                                    <p className="card-text">
                                        Our paper is sourced from sustainably managed forests, and we use
                                        advanced technology to reduce waste and enhance recycling.{" "}
                                        <a href="#">Discover More &gt;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mt-4">
                            <div className="card">
                                <img
                                    src={img6}
                                    alt="Installing Greener Technology"
                                />
                                <div className="card-body">
                                    <h3 className="card-title">Adopting greener technology</h3>
                                    <p className="card-text">
                                        We implement energy-efficient equipment and technologies, such as
                                        LED lighting and curing systems, to cut emissions across our
                                        global operations. <a href="#">Explore More &gt;</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Supplies */}
                <div className="container supply-container">
                    
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Commitment to ethical supply chain</h4>
                            <p>
                                We uphold the highest standards of ethics and integrity with our
                                suppliers at Done Right Decals.
                            </p>
                            <br />
                            <a href="#" className="btn btn-light">
                                Modern Slavery Act
                            </a>{" "}
                            <a href="#" className="btn btn-light">
                                Code Of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );

}
export default Sustainability;