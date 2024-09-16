import React from "react";
import "./Accessbility.css"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function Accessbility() {
    return (
        <>
            <Header />
            <div className="container-fluid" id="access-container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Done Right Decals Accessibility Statement</h2>
                        <p>
                            At Done Right Decals, we are committed to ensuring that our website and
                            services are accessible to everyone. We strive to meet the highest
                            standards of accessibility to provide an inclusive user experience. Our
                            website adheres to the Web Content Accessibility Guidelines (WCAG) 2.1
                            at both the A and AA levels. We continuously work with accessibility
                            experts to improve our site and exceed these standards.
                        </p>
                        <p>
                            If you have any questions or feedback regarding the accessibility of our
                            website, please contact us at{" "}
                            <a href="mailto:accessibility@donerightdecals.com">
                                accessibility@donerightdecals.com
                            </a>
                            . We are dedicated to addressing all inquiries within 24 hours.
                        </p>
                        <p>
                            For additional assistance or to access information on our website, you
                            can call our Customer Care team at 1-833-232-0232. Our team is available
                            Monday through Friday from 7:00 AM to 3:00 AM, and Saturday through
                            Sunday from 8:00 AM to 8:00 PM (Eastern Time).
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );

};

export default Accessbility;