import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const HelpCenter = () => {
    return (
        <>
            <Header />
            <div className="container-fluid py-5">
                <div className="row bg-primary p-5 mt-4">
                    <div className="col-md-6 mx-auto text-center">
                        <h1 className="h3 fw-bold text-light">Help is here.</h1>
                        <input
                            type="text"
                            className="form-control border border-secondary rounded w-100"
                            placeholder="Search for an article or answer"
                        />
                        <h6 href="#" className="text-light mt-4 d-inline-block">
                            Need help tracking an order? <a href="javascript:void(0)"> Find and track an order</a>
                        </h6>
                    </div>
                </div>
                <div className="container">
                    <h2 className="mt-5 h4 fw-semibold text-dark">Popular Questions</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                        <div className="col-lg-4 d-flex gap-4 flex-column">
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                Can I change my order?
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                Where's my order?
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                Where are my designs saved?
                            </button>
                        </div>
                        <div className="col-lg-4 d-flex gap-4 flex-column ">
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                My order hasn't arrived, what can I do?
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                Can I cancel my order?
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                Can you help me edit or fix the design of my product?
                            </button>
                        </div>
                        <div className="col-lg-4 d-flex gap-4 flex-column">
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                My Done Right Decals Account
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                What if I'm not happy with my purchase?
                            </button>
                            <button className="btn btn-light border shadow-sm text-dark rounded py-3">
                                What are your shipping speeds?
                            </button>
                        </div>
                    </div>
                    <h2 className="mt-5 h4 fw-semibold text-dark">Contact us</h2>
                    <div className="row g-4 mt-4">
                        <div className="col-md-4">
                            <div className="card p-4 h-100 shadow-sm rounded">
                                <h3 className="h6 fw-semibold">Phone</h3>
                                <p>
                                    Our specialists are away. Please try again during business hours, or
                                    send us an email.
                                </p>
                                <p>Mon – Fri: 7:00 AM – 3:00 AM EST</p>
                                <p>Sat – Sun: 8:00 AM – 8:00 PM EST</p>
                                <button className="btn btn-dark text-white w-75 ">
                                    Request callback
                                </button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-4 h-100 shadow-sm rounded">
                                <h3 className="h6 fw-semibold">Live Chat</h3>
                                <h3 className="h6 fw-semibold mt-4">Offline</h3>
                                <p>Live chat is not available right now.</p>
                                <button className="btn btn-dark text-white w-75 ">Chat offline</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card p-4 h-100 shadow-sm rounded">
                                <h3 className="h6 fw-semibold">Email</h3>
                                <p>Our Done Right Decals Customer Care Team is here to help.</p>
                                <button className="btn btn-dark text-white w-75 ">Send email</button>
                            </div>
                        </div>
                    </div>
                    <h2 className="mt-5 h4 fw-semibold text-dark">Browse Help Center</h2>
                    <div className="row row-cols-1 row-cols-md-2 g-4 mt-4">
                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">Designing with Done Right Decals</h3>
                            <ul className="list-unstyled ">
                                <li className="py-3 border-bottom">Designing my calendar</li>
                                <li className="py-3 border-bottom">Getting started with design studio</li>
                                <li className="py-3 border-bottom">Designing a Box</li>
                                <li className="py-3 border-bottom">Stamps &amp; Ink</li>
                                <li className="py-3 border-bottom">Designing a die cut sticker</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">
                                Print product details &amp; information
                            </h3>
                            <ul className="list-unstyled">
                                <li className="py-3 border-bottom">Paper Stock Descriptions</li>
                                <li className="py-3 border-bottom">Signage</li>
                                <li className="py-3 border-bottom">Office &amp; Stationery</li>
                                <li className="py-3 border-bottom">Clothing &amp; Bags</li>
                                <li className="py-3 border-bottom">Checks</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row  row-cols-1 row-cols-md-2 g-4 mt-4">


                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">Websites, Domains &amp; Done Right Decals x Wix</h3>
                            <ul className="list-unstyled">
                                <li className="py-3 border-bottom">Done Right Decals x Wix</li>
                                <li className="py-3 border-bottom">Done Right Decals x Wix Plus</li>
                                <li className="py-3 border-bottom">Wix x 99designs by Done Right Decals</li>
                                <li className="py-3 border-bottom">Done Right Decals x Wix: Site Upgrade</li>
                                <li className="py-3 border-bottom">Domains and Mailboxes</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">Order tracking &amp; follow-ups</h3>
                            <ul className="list-unstyled">
                                <li className="py-3 border-bottom">Cancel or Change My Order</li>
                                <li className="py-3 border-bottom">Check Order Status</li>
                                <li className="py-3 border-bottom">Product Quality Problem</li>
                                <li className="py-3 border-bottom">Reordering</li>
                                <li className="py-3 border-bottom">Tracking My Order</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row  row-cols-1 row-cols-md-2 g-4 mt-4">


                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">Account, billing &amp; payments</h3>
                            <ul className="list-unstyled">
                                <li className="py-3 border-bottom">Billing &amp; Invoices</li>
                                <li className="py-3 border-bottom">Sales Tax</li>
                                <li className="py-3 border-bottom">Payment</li>
                                <li className="py-3 border-bottom">Promotions &amp; Credits</li>
                                <li className="py-3 border-bottom">My Done Right Decals Account</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 ">
                            <h3 className="h6 fw-semibold">Design services</h3>
                            <ul className="list-unstyled">
                                <li className="py-3 border-bottom">General Design Services Information</li>
                                <li className="py-3 border-bottom">Logos</li>
                                <li className="py-3 border-bottom">Postcard mailing services</li>
                                <li className="py-3 ">
                                    <a href="#" className="text-muted">
                                        See all →
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    );
}
export default HelpCenter;