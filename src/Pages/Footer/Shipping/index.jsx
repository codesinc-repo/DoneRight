import React from "react";
import "./Shipping.css"
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";

const Shipping = () => {
    return (
        <>
            <Header />
            <div className="container-fluid p-4 ">
                <h2 className="fw-bold mb-4">
                    Everything you need to know about our shipping
                </h2>
                <p className="mb-4">
                    We want you to get your package as quickly and affordably as possible,
                    whether you ordered way in advance or need your product ASAP. Free standard
                    shipping on orders $100+.
                </p>
                <h3 className="h5 fw-semibold mb-2">Shipping Options</h3>
                <table className="table table-bordered border-custom">
                    <thead>
                        <tr>
                            <th>Order Total</th>
                            <th>Standard 8 business days</th>
                            <th>Priority 4-6 business days</th>
                            <th>Express 3-4 business days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$0.00 - $25.00</td>
                            <td>$5.99</td>
                            <td>$9.99</td>
                            <td>$18.99</td>
                        </tr>
                        <tr>
                            <td>$25.01 - $50.00</td>
                            <td>$7.99</td>
                            <td>$12.99</td>
                            <td>$22.99</td>
                        </tr>
                        <tr>
                            <td>$50.01 - $75.00</td>
                            <td>$9.99</td>
                            <td>$17.99</td>
                            <td>$32.99</td>
                        </tr>
                        <tr>
                            <td>$75.01 - $100.00</td>
                            <td>$11.99</td>
                            <td>$18.99</td>
                            <td>$34.99</td>
                        </tr>
                        <tr>
                            <td>$100.01 - $200.00</td>
                            <td>$20.99</td>
                            <td>$33.99</td>
                            <td>$49.99</td>
                        </tr>
                        <tr>
                            <td>$200.01 - $600.00</td>
                            <td>Free</td>
                            <td>$24.99</td>
                            <td>$49.99</td>
                        </tr>
                        <tr>
                            <td>Over $600.00</td>
                            <td>Free</td>
                            <td>$44.99</td>
                            <td>$74.99</td>
                        </tr>
                    </tbody>
                </table>
                <h3 className="h5 fw-semibold mt-4 mb-2">Exceptions</h3>
                <p className="mb-4">
                    Some products and destinations are not available in all shipping speeds.
                    Most, but not all, of these are listed right here.
                </p>
                <ul className="list-group mb-4">
                    <li className="list-group-item">Clothing &amp; bags: 10+ business days</li>
                    <li className="list-group-item">Promotional products: 10+ business days</li>
                    <li className="list-group-item">Sample kits: 14 business days</li>
                    <li className="list-group-item">Checks: 6-8 business days</li>
                </ul>
                <h3 className="h5 fw-semibold mt-4 mb-2">
                    Puerto Rico &amp; International Pricing
                </h3>
                <table className="table table-bordered border-custom mb-4">
                    <thead>
                        <tr>
                            <th>Order Total</th>
                            <th>Standard 8 business days</th>
                            <th>Priority 6 business days</th>
                            <th>Express 3-4 business days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$0.00 - $250.00</td>
                            <td>$20.89</td>
                            <td>$30.89</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>$250.01 - $600.00</td>
                            <td>$25.99</td>
                            <td>$35.99</td>
                            <td>N/A</td>
                        </tr>
                        <tr>
                            <td>Over $600.00</td>
                            <td>$39.99</td>
                            <td>$59.99</td>
                            <td>N/A</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );

}
export default Shipping;