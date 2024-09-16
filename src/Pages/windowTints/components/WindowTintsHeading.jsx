import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/window tint solution.webp";
import img02 from "../../../images/window-tints.jpeg";
import img03 from "../../../images/Dyed-Window-tint.png";
import img04 from "../../../images/Ceramic-Windows-tint.jpg";
import img05 from "../../../images/window tint solution.webp";
import img06 from "../../../images/Ceramic-Windows-tint.jpg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const WindowTintsHeading = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>WINDOW TINTS</h2>
                <p>
                    Enhance your vehicle's and property's look with our top-quality window tints, engineered to provide superior privacy, UV protection, and a sleek aesthetic.
                </p>
                <h3 className="mt-2">
                    Explore Our Premium Window Tint Solutions
                </h3>
                <p>
                    Experience the perfect blend of style and functionality with our advanced window tints. Designed to offer excellent heat rejection, glare reduction, and privacy, our tints are ideal for cars, homes, and commercial spaces, ensuring a polished appearance and improved comfort.
                </p>
            </div>


            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Car-Window-Tints"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Car Window Tints"
                        description="Protect your car with high-quality window tints that provide UV protection and enhance privacy."
                        rating={4.5}
                        ratingCount={2100}
                        price="100 starting at $299.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Fleet-Window-Tints"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Fleet Window Tints"
                        description="Upgrade your fleet with premium window tints designed for durability and style."
                        rating={4.7}
                        ratingCount={1850}
                        price="100 starting at $349.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Commercial-Site-Store-Window-Tints"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Commercial Site/Store Window Tints"
                        description="Enhance your commercial space with window tints that provide privacy and a sleek look."
                        rating={4.6}
                        ratingCount={1900}
                        price="100 starting at $399.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/House-Window-Tints"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="House Window Tints"
                        description="Improve your home’s energy efficiency and privacy with high-quality window tints."
                        rating={4.6}
                        ratingCount={1700}
                        price="100 starting at $349.99"
                    />

                    {/* Card 05 */}
                    <PricingCards
                        to="/Custom-Window-Tints"
                        imageSrc={img05}
                        badgeText="New low price"
                        title="Custom Window Tints"
                        description="Get custom-designed window tints tailored to your specific needs and preferences."
                        rating={4.8}
                        ratingCount={1600}
                        price="100 starting at $399.99"
                    />
                </div>
                {/* Add more PricingCards as needed */}
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Transform Your Vehicle with a Stunning Full Wrap"}
                    paragraphs={"Elevate your vehicle’s appearance with our premium full wraps, designed to turn heads and make a bold statement. Our high-quality wraps offer a complete transformation, allowing you to showcase your brand or personal style with a seamless, professional finish. Choose from a variety of finishes and colors to achieve the exact look you desire. Whether you're aiming for a sleek, modern design or a vibrant, eye-catching graphic, our full wraps provide the versatility and durability needed to make a lasting impression. Discover the perfect wrap solution to enhance your vehicle’s visual appeal and drive your message home."}
                    imageSrc={img06}
                />
            </div>

            <FAQ />
            <Footer />
        </>
    );
};

export default WindowTintsHeading;
