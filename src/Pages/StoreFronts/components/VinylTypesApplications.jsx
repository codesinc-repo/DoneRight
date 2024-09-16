import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/Store fronts_1.jpg";
import img02 from "../../../images/Store fronts_5.jpg";
import img03 from "../../../images/Store fronts_3.jpg";
// import img04 from "../../../images/full wrap 04.jpg";
// import img05 from "../../../images/full wrap 05.jpeg";
import img06 from "../../../images/Store fronts_8.jpg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const VinylTypesApplications = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>FULL CAR WRAPS</h2>
                <p>
                    Elevate your vehicle's appearance with our premium full car wraps, designed to make a powerful statement and transform your brand's visibility on the road.
                </p>
                <h3 className="mt-2">
                    Discover Our Premium Full Car Wrap Solutions
                </h3>
                <p>
                    Turn heads and leave a lasting impression with our high-quality full car wraps. Offering complete vehicle coverage, our wraps combine vibrant colors, striking designs, and unmatched durability to showcase your brand in the most impactful way possible.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Frosted-Glass-Vinyl"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Frosted Glass Vinyl"
                        description="Enhance your space with frosted glass vinyl that offers a sleek, modern look and excellent privacy."
                        rating={4.5}
                        ratingCount={2100}
                        price="100 starting at $499.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Full-Coverage-One-Way-Vision-Vinyl"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Full Coverage One-Way Vision Vinyl"
                        description="Get full coverage with one-way vision vinyl for maximum privacy and stylish design."
                        rating={4.7}
                        ratingCount={1850}
                        price="100 starting at $549.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Color-Cut-Out-Vinyl"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Color Cut-Out Vinyl"
                        description="Make a statement with color cut-out vinyl that offers vibrant colors and custom designs."
                        rating={4.6}
                        ratingCount={1900}
                        price="100 starting at $599.99"
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

export default VinylTypesApplications;
