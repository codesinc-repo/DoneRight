import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./UserDashboard.css";
import Header from "../../Components/Header";
import sideimage from "../../images/Advertising office maketing_5.jpg";
import Footer from "../../Components/Footer";

function UserDashboard() {
    useEffect(() => {
        const sections = document.querySelectorAll('.content-section');
        const navLinks = document.querySelectorAll('.nav-link');

        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');

                const targetSection = document.querySelector(this.getAttribute('to'));
                if (targetSection) { // Check if targetSection exists
                    sections.forEach(section => section.style.display = 'none');
                    targetSection.style.display = 'block';
                }
            });
        });

        // Show the first section by default
        const defaultLink = document.querySelector('.nav-link.active');
        if (defaultLink) {
            defaultLink.click();
        }

        // Clean up event listeners on component unmount
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', () => { });
            });
        };
    }, []);


    return (
        <>
            <Header />
            <div className="container-fluid dashboard_user ">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 col-lg-2 bg-light sidebar py-1">
                        <h2 className="mt-3">Account</h2>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link active" to="account-snapshot-section">
                                    Dashboard
                                </Link>
                            </li>
                            <hr />
                            <h5>Workspace</h5>
                            <li className="nav-item">
                                <Link className="nav-link" to="my-projects-section">
                                    My Projects
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="my-design-services-section">
                                    My Design Services
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="websites-digital-section">
                                    Websites &amp; Digital
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="brand-kit-section">
                                    Brand Kit
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="my-uploads-section">
                                    My Uploads
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="favorite-templates-section">
                                    Favorite Templates
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="mailing-lists-section">
                                    Mailing Lists
                                </Link>
                            </li>
                            <hr />
                            <h5>Orders</h5>
                            <li className="nav-item">
                                <Link className="nav-link" to="order-history-section">
                                    Order History &amp; Reorder
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="subscriptions-section">
                                    Subscriptions
                                </Link>
                            </li>
                            <hr />
                            <h5>Settings</h5>
                            <li className="nav-item">
                                <Link className="nav-link" to="account-settings-section">
                                    Account Settings
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="payment-delivery-section">
                                    Payment &amp; Delivery
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Main Content */}
                    <div className="col-md-9 col-lg-10 py-1 px-5" id="dashboard-content">
                        <div className="content-section" id="account-snapshot-section">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-between align-items-center mt-3">
                                    <h1>Hello, Muhammad.</h1>
                                    <button className="btn btn-outline-secondary">
                                        Account settings
                                    </button>
                                </div>
                                <p>Here's what’s going on in your account.</p>
                            </div>
                            <div className="row mt-4">
                                {/* Account Snapshot */}
                                <div className="col-md-8 ">
                                    <h3>Account Snapshot</h3>
                                    <div className="row mx-auto">
                                        <div className="col-md-6 mb-3">
                                            <div className="card p-3">
                                                <h5>Print Projects</h5>
                                                <Link to="">Start a project</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card p-3">
                                                <h5>Design Services</h5>
                                                <Link to="">Start a project</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card p-3">
                                                <h5>Websites</h5>
                                                <Link to="">Create a website</Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="card p-3">
                                                <h5>Brand Kits</h5>
                                                <Link to="">Create Brand Kit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Orders */}
                                <div className="col-md-4">
                                    <h3>Orders</h3>
                                    <p>
                                        You don’t have any orders yet. When you’ve placed your first
                                        order, you’ll see it here.
                                        <Link to="" className="text-dark">
                                            Continue Shopping
                                        </Link>
                                    </p>
                                </div>
                                {/* Latest Projects */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <h3>Latest Projects</h3>
                                        <Link to="" className=" text-dark float-end">
                                            View all
                                        </Link>
                                        {/* Add projects content here */}
                                    </div>
                                </div>
                                {/* New Section: Personalize your recommendations */}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <h3>Personalize your recommendations</h3>
                                        <p>
                                            Create a Brand Kit to keep track of your logo, colors, fonts,
                                            and more. Get recommendations based on your brand and style
                                            across VistaPrint.
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <h5>Brand Kit Information</h5>
                                                <input
                                                    type="text"
                                                    className="form-control mb-3"
                                                    placeholder="Business name"
                                                />
                                                <div className="upload-section mb-3">
                                                    <Link to="">Upload or choose logo</Link>
                                                </div>
                                                <button className="btn btn-primary w-100">
                                                    Create Brand Kit
                                                </button>
                                            </div>
                                            <div className="col-md-6">
                                                <img
                                                    src={sideimage}
                                                    alt="Brand Kit Preview"
                                                    className="img-fluid"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="my-projects-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>My Projects</h3>
                            <p>Here are your projects...</p>
                        </div>
                        {/* My Design Services Section */}
                        <div
                            id="my-design-services-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>My Design Services</h3>
                            <p>Here are your design services...</p>
                        </div>
                        {/* Websites & Digital Section */}
                        <div
                            id="websites-digital-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Websites &amp; Digital</h3>
                            <p>Create and manage your websites...</p>
                        </div>
                        {/* Brand Kit Section */}
                        <div
                            id="brand-kit-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Brand Kit</h3>
                            <p>Manage your brand assets...</p>
                        </div>
                        {/* My Uploads Section */}
                        <div
                            id="my-uploads-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>My Uploads</h3>
                            <p>View and manage your uploads...</p>
                        </div>
                        {/* Favorite Templates Section */}
                        <div
                            id="favorite-templates-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Favorite Templates</h3>
                            <p>Your favorite templates...</p>
                        </div>
                        {/* Mailing Lists Section */}
                        <div
                            id="mailing-lists-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Mailing Lists</h3>
                            <p>Manage your mailing lists...</p>
                        </div>
                        {/* Order History & Reorder Section */}
                        <div
                            id="order-history-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Order History &amp; Reorder</h3>
                            <p>View your order history...</p>
                        </div>
                        {/* Subscriptions Section */}
                        <div
                            id="subscriptions-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Subscriptions</h3>
                            <p>Manage your subscriptions...</p>
                        </div>
                        {/* Account Settings Section */}
                        <div
                            id="account-settings-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Account Settings</h3>
                            <p>Update your account settings...</p>
                        </div>
                        {/* Payment & Delivery Section */}
                        <div
                            id="payment-delivery-section"
                            className="content-section"
                            style={{ display: "none" }}
                        >
                            <h3>Payment &amp; Delivery</h3>
                            <p>Manage your payment and delivery...</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default UserDashboard;
