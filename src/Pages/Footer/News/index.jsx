import React from "react";
import "./News.css";
import img1 from "../../../images/card-6.jpg"
import img2 from "../../../images/card-4.jpg"
import img3 from "../../../images/card-8.jpg"
import img4 from "../../../images/card-4.webp"
import img5 from "../../../images/card-3.webp"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function News() {
    return (
        <>
            <Header />
            <section className="main_section_news">
                {/* hero container */}
                <div className="container-fluid" id="hero-container">
                    <div className="row"> 
                        <div className="col-md-4 text-center" id="child-container">
                            <h3>Done Right Decals News</h3>
                            <p>
                                Explore our space for the latest press releases, news, and information
                                about our brand.
                            </p>
                        </div>
                    </div>
                </div>
                <aside className="aside-bar">
                    <h4>Media Contacts</h4>
                    <a href="#" className="media-p">
                        <p>
                            North America
                            <br />
                            Carrie Byard or Ryan Roccaforte
                            <br />
                            pr@done-right-decals.com
                        </p>
                    </a>
                    <a href="#" className="media-p">
                        <p>
                            Europe
                            <br />
                            Marta Bernasconi
                            <br />
                            EUpr@done-right-decals.com
                        </p>
                    </a>
                    <a href="#" className="media-p">
                        <p>
                            Australia &amp; New Zealand
                            <br />
                            Michelle Pan
                            <br />
                            ANZSpublicrelations@done-right-decals.com
                        </p>
                    </a>
                    <h4>Recent News</h4>
                    <a href="#" className="recent-news-p">
                        <p>
                            Small Business Owners Are Marketing Better Than Ever, According to Done
                            Right Decals’ 2024 Marketing Report
                        </p>
                    </a>
                    <a href="#" className="recent-news-p">
                        <p>
                            Done Right Decals &amp; the Boston Celtics Shamrock Foundation, Together
                            With the NAACP, Distribute 18 $25,000 Grants to Power Forward Small
                            Business Grant Recipients
                        </p>
                    </a>
                    <a href="#" className="recent-news-p">
                        <p>Done Right Decals Appoints CEO John Doe</p>
                    </a>
                </aside>
                <main className="main">
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>
                                        Done Right Decals &amp; Boston Celtics Distribute $25,000 Grants
                                        to Small Businesses
                                    </h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>May 12, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <div className="d-flex">
                                    <img src={img1} alt="" />
                                    <p className="blog-p">
                                        Done Right Decals, in collaboration with the Boston Celtics, has
                                        awarded 18 $25,000 grants to small businesses in a bid to empower
                                        local entrepreneurship. Boston, MA (May 12, 2024) – The grants […]
                                    </p>
                                </div>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>
                                        Done Right Decals &amp; Boston Celtics Distribute $25,000 Grants
                                        to Small Businesses
                                    </h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>May 12, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <div className="d-flex">
                                    <img src={img3} alt="" />
                                    <p className="blog-p">
                                        Done Right Decals, in collaboration with the Boston Celtics, has
                                        awarded 18 $25,000 grants to small businesses in a bid to empower
                                        local entrepreneurship. Boston, MA (May 12, 2024) – The grants […]
                                    </p>
                                </div>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>
                                        Done Right Decals &amp; Boston Celtics Distribute $25,000 Grants
                                        to Small Businesses
                                    </h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>May 12, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <div className="d-flex">
                                    <img src={img2} alt="" />
                                    <p className="blog-p">
                                        Done Right Decals, in collaboration with the Boston Celtics, has
                                        awarded 18 $25,000 grants to small businesses in a bid to empower
                                        local entrepreneurship. Boston, MA (May 12, 2024) – The grants […]
                                    </p>
                                </div>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>Done Right Decals Launches New Line of Eco-Friendly Decals</h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>July 15, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <p className="blog-p">
                                    Done Right Decals is proud to introduce its latest line of
                                    eco-friendly decals, designed to meet the growing demand for
                                    sustainable products. Boston, MA (July 15, 2024) – These decals […]
                                </p>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>
                                        Done Right Decals &amp; Boston Celtics Distribute $25,000 Grants
                                        to Small Businesses
                                    </h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>May 12, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <div className="d-flex">
                                    <img src={img4} alt="" />
                                    <p className="blog-p">
                                        Done Right Decals, in collaboration with the Boston Celtics, has
                                        awarded 18 $25,000 grants to small businesses in a bid to empower
                                        local entrepreneurship. Boston, MA (May 12, 2024) – The grants […]
                                    </p>
                                </div>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="container container-below">
                        <div className="row">
                            <div className="col-md-10">
                                <a href="#" className="news-head">
                                    <h4>
                                        Done Right Decals &amp; Boston Celtics Distribute $25,000 Grants
                                        to Small Businesses
                                    </h4>
                                </a>
                                <i className="fa-solid fa-business-time" />
                                <span>May 12, 2024</span>
                                <i className="fa-solid fa-file" />
                                <span>In the Media</span>
                                <div className="d-flex">
                                    <img src={img5} alt="" />
                                    <p className="blog-p">
                                        Done Right Decals, in collaboration with the Boston Celtics, has
                                        awarded 18 $25,000 grants to small businesses in a bid to empower
                                        local entrepreneurship. Boston, MA (May 12, 2024) – The grants […]
                                    </p>
                                </div>
                                <a href="#" className="btn btn-news">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
            <Footer />
        </>
    );
};
export default News;