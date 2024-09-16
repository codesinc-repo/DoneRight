import React from "react";
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

function DataSaleOutput() {
    return (
        <>
        <Header/>
            <div className="data-sale-output">
                <div className="container-fluid text-dark p-5 notice-container">
                    <div className="row">
                        <h1 className="mt-4">Notice of Right to Opt Out</h1>
                        <div className="col-md-12 mt-3">
                            <p>
                                As a resident of California, Virginia, Connecticut, Colorado, Utah, or
                                Nevada, you have the right, under applicable state laws, to request
                                that we do not sell or share your personal information with third
                                parties for monetary consideration or targeted advertising purposes.
                                You can make this request by clicking the "Do Not Sell or Share My
                                Personal Information" link below. At Done Right Decal Company, we do
                                not sell your personal information for money, but we may share it with
                                partners like advertising affiliates to show relevant ads based on
                                your interests. We do not knowingly collect, sell, or share personal
                                information from individuals under 16 years of age.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Warning Personal Information */}
                <div className="container-fluid warning-container mt-5">
                    <div className="row">
                        <h4 className="text-center warning-h">
                            <a className="text-dark" href="#">
                                Do Not Sell or Share My Personal Information
                            </a>
                        </h4>
                        <div className="col-md-12 mt-5">
                            <ul>
                                <p>
                                    If you are a resident of California, Virginia, Connecticut,
                                    Colorado, Utah, or Nevada, you can submit a request to opt out of
                                    data sale or sharing using the following methods:
                                </p>
                                <li>
                                    <span>On Done Right Decal Company Websites: </span>
                                    <p>
                                        To opt out of the sale or sharing of your personal information,
                                        please click the "Do Not Sell or Share My Personal Information"
                                        link above and follow the instructions in the pop-up. You can
                                        update your preferences at any time.
                                    </p>
                                    <p>
                                        We use cookies and similar technologies to show interest-based
                                        ads. If you use a different device or browser, or clear your
                                        cookies, you'll need to resubmit your request as we rely on
                                        cookies to store your "opt-out" preferences.
                                    </p>
                                    <p>
                                        You may also authorize an agent to submit a request on your behalf
                                        if you provide signed written permission. Authorized agents can
                                        contact our Customer Service team to submit requests.
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Using Browser Controls:</span>
                                    <p>
                                        Preventing your browser from accepting new third-party cookies can
                                        help stop the collection of personal information used for
                                        "selling" or "sharing". The Help menu of most browsers will guide
                                        you on enabling or preventing cookies. You can also manage cookies
                                        used by add-ons like Flash cookies through their settings or the
                                        manufacturer's website.
                                    </p>
                                    <p>
                                        Disabling all cookies might affect some features on the Done Right
                                        Decal Company website, such as keeping you signed in to your
                                        account.
                                    </p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <span>Opt-Out Preference Signal:</span>
                                    <p>
                                        You can use an Opt-Out Preference Signal, like the Global Privacy
                                        Control (GPC), to opt out of the sale or sharing of your personal
                                        information. We process GPC signals as valid requests to opt out.
                                        Without a Done Right Decal Company account or if not logged in,
                                        your request will only be linked to your browser identifier. To
                                        make the connection with your account, you need to log in.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Personal Information Categories Container */}
                <div className="container-fluid" id="container-ca">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>
                                Categories of Personal Information Sold or Shared in the Last 12
                                Months
                            </h2>
                            <p>
                                In the past twelve months, Done Right Decal Company has sold or shared
                                the following categories of personal information:
                            </p>
                            <ul>
                                <li>Contact Information</li>
                                <li>Site Navigation and Usage Data</li>
                                <li>IP Address, Browser Settings, and Related Information</li>
                            </ul>
                            <h2>Where to Learn More</h2>
                            <p>
                                For more details about how we use, share, and protect your
                                information, and to understand your choices, please review our{" "}
                                <a href="">Privacy and Cookie Policy.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
<Footer/>
        </>
    );

}
export default DataSaleOutput;