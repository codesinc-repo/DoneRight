import React from "react";
import "./Career.css"
import img1 from "../../../images/data-analytics.svg"
import img2 from "../../../images/image 06.jpg"
import img3 from "../../../images/technology-icon.svg"
import img4 from "../../../images/design-ux.svg"
import img5 from "../../../images/manufacturing.svg"
import img6 from "../../../images/opp-icon.svg"
import img7 from "../../../images/manufacturing.svg"
import img8 from "../../../images/custoer-care.svg"
import img9 from "../../../images/manufacturing.svg"
import img10 from "../../../images/future-icon.svg"
import img11 from "../../../images/below-line-removebg-preview.png"
import img12 from "../../../images/1by2 img01.webp"
import img13 from "../../../images/lines-removebg-preview.png"
import img14 from "../../../images/line2-removebg-preview.png"
import img15 from "../../../images/done-right-decals-behaviur.png"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";


function Career() {
    return (
        <>
        <Header/>
            <div className="main_career">
                {/* hero section */}
                <div className="container-fluid" id="hero-container">
                    <div className="row">
                        <div className="col-md-4 " id="hero-child-div">
                            <h1>
                                Let help small businesses succeed,{" "}
                                <span className="hero-child-div-spain">together.</span>
                            </h1>
                            <p>
                                We use our love of all things tech, design, manufacturing, and
                                customer care to help small businesses feel big.
                            </p>
                            <a href="#" className="btn btn-dark">
                                Explore Jobs
                            </a>
                        </div>
                    </div>
                </div>
                {/*End  hero section */}
                {/* Great Place Work Container */}
                <div className="container" id="work-container">
                    <div className="row">
                        <h2>Why Choose Done Right Decals?</h2>
                        <div className="col-md-2 mt-5">
                            <h6>Precision in Every Detail</h6>
                            <p className="work-detail-p">
                                At Done Right Decals, we prioritize precision. Our team ensures that
                                every decal is crafted with meticulous attention to detail,
                                guaranteeing a flawless finish that exceeds expectations.
                            </p>
                        </div>
                        <div className="col-md-2 mt-5">
                            <h6>High-Quality Materials</h6>
                            <p className="work-detail-p">
                                We use only the best materials for our decals, ensuring durability and
                                vibrant colors that stand the test of time. Quality is at the heart of
                                everything we do.
                            </p>
                        </div>
                        <div className="col-md-2 mt-5">
                            <h6>Custom Designs</h6>
                            <p className="work-detail-p">
                                Whether you have a specific vision or need creative guidance, we work
                                closely with you to create custom designs that perfectly match your
                                style and purpose.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <img
                                className="rounded"
                                src={img2}
                                alt="Done Right Decals - Precision and Quality"
                            />
                        </div>
                    </div>
                </div>

                {/* services container */}
                <div className="container">
                    <h2>So many ways to support small businesses.</h2>
                    <p className="intro-text">
                        No matter where you work, our teams offer you the opportunity to think
                        big, act like an owner, and deliver results for customers around the
                        world.
                    </p>
                    <div className="services-grid">
                        <div className="service-box" id="services1">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img1}
                                    alt=""
                                />
                            </div>
                            <h3>Data &amp; Analytics</h3>
                            <p>Create intuitive narratives from complex data.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services2">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img3}
                                    alt=""
                                />
                            </div>
                            <h3>Design/UX</h3>
                            <p>Deliver user-centered, tech-empowered experiences.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services3">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img4}
                                    alt=""
                                />
                            </div>
                            <h3>Technology</h3>
                            <p>Where a line of code is more like a work of art.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services4">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img5}
                                    alt=""
                                />
                            </div>
                            <h3>Marketing</h3>
                            <p>Help our products turn heads around the world.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services5">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img6}
                                    alt=""
                                />
                            </div>
                            <h3>Business &amp; People Ops</h3>
                            <p>From people and finance to legal and more.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services6">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img7}
                                    alt=""
                                />
                            </div>
                            <h3>Product Management</h3>
                            <p>Create and deliver experiences that wow our customers.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services7">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img8}
                                    alt=""
                                />
                            </div>
                            <h3>Customer Care</h3>
                            <p>Love helping people? We do, too.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services8">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img9}
                                    alt=""
                                />
                            </div>
                            <h3>Manufacturing</h3>
                            <p>Build and distribute world-class products.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                        <div className="service-box" id="services9">
                            <div className="icon-container">
                                <img
                                    className="service-icon"
                                    src={img10}
                                    alt=""
                                />
                            </div>
                            <h3>Future Talent</h3>
                            <p>Build and distribute world-class products.</p>
                            <div className="links">
                                <a href="#">Learn More</a> | <a href="#">View Jobs</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* services second */}
                {/* Done Right Decals Conatainer */}
                <div className="container-fluid" id="behaviour-container">
                    <div className="row">
                        <div className="col-md-5">
                            <h2>Done Right Decals Behaviors</h2>
                            <p className="behaviour-p">
                                The Done Right Decals Behaviors provide a common language and shared
                                understanding for how we expect all team members to conduct
                                themselves. These behaviors are highly valued within our organization
                                and serve as guiding principles that help us evaluate decisions and
                                engage in constructive debate. They clarify the culture necessary for
                                success at every level, ensuring we perform at our best as a cohesive
                                and driven team.
                            </p>
                            <img
                                className="img-fluid"
                                id="lines-img"
                                src={img13}
                                alt="Decorative Lines"
                            />
                        </div>
                        <div className="col-md-7">
                            <img
                                src={img15}
                                alt="Done Right Decals Behavior Illustration"
                                className="img-fluid"
                            />
                        </div>
                    </div>
                </div>
                {/* color-line container */}
                <div className="container" id="line-container">
                    <div className="row">
                        <div className="col-md-3">
                            <img src={img14} alt="" />
                        </div>
                    </div>
                </div>
                {/* Valued Container */}
                <div className="container" id="valued-container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Work where you're appreciated, respected, and valued.</h2>
                            <p>
                                At Done Right Decals, we believe that to deliver outstanding results
                                for our clients, we must first be outstanding partners to our team
                                members. We foster a culture of collaboration, support, and community,
                                driven by the belief that diverse perspectives enable us all to reach
                                our full potential. We’re proud to offer a workplace where your career
                                can thrive, no matter where you're located.
                            </p>
                            <a href="#" className="btn btn-dark">
                                Learn More
                            </a>
                        </div>
                        <div className="col-md-8">
                            <img
                                src={img12}
                                alt="Done Right Decals Team"
                            />
                        </div>
                    </div>
                </div>
                {/* below-line-container */}
                <div className="container-fluid" id="below-container">
                    <div className="row">
                        <div className="col-md-7">
                            <img src={img11} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>



    );

};

export default Career;