import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/window tint 01.jpeg";
import img02 from "../../../images/window tint 02.jpeg";
import img03 from "../../../images/window tint 03.jpeg";
import img04 from "../../../images/window tint 04.jpeg";
import img05 from "../../../images/window tint 05.jpeg";
import img06 from "../../../images/window tint 06.jpeg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const PreCutCarPatterns = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>PRE-CUT CAR PATTERNS</h2>
                <p>
                    Discover our expertly designed pre-cut car patterns that offer a perfect fit and superior protection for your vehicle. Our patterns are meticulously crafted to ensure a seamless installation and enhance your car's appearance with precision.
                </p>
                <h3 className="mt-2">
                    Explore Our Custom Pre-Cut Patterns
                </h3>
                <p>
                    Elevate your car’s look with our range of custom pre-cut patterns. Designed for easy application and precise coverage, these patterns provide excellent protection and a polished, professional finish. Choose from a variety of designs to suit your style and needs.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Shop-All-Patterns"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Shop All Patterns"
                        description="Protect your car with high-quality window tints that provide UV protection and enhance privacy."
                        rating={4.5}
                        ratingCount={2100}
                        price="100 starting at $299.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/All-Around-Front-Back-Sides"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="All around Front, Back, and Sides"
                        description="Upgrade your fleet with premium window tints designed for durability and style."
                        rating={4.7}
                        ratingCount={1850}
                        price="100 starting at $349.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Single-Piece-Visor-Strip-Sunroof"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Single Piece Visor Strip, Sunroof"
                        description="Enhance your commercial space with window tints that provide privacy and a sleek look."
                        rating={4.6}
                        ratingCount={1900}
                        price="100 starting at $399.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Sides-Front"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Sides + Front"
                        description="Improve your home’s energy efficiency and privacy with high-quality window tints."
                        rating={4.6}
                        ratingCount={1700}
                        price="100 starting at $349.99"
                    />

                    {/* Card 05 */}
                    <PricingCards
                        to="/Sides-Back"
                        imageSrc={img05}
                        badgeText="New low price"
                        title="Sides + Back"
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
                    title={"Upgrade Your Vehicle with Custom Pre-Cut Patterns"}
                    paragraphs={"Enhance your vehicle’s appearance with our custom pre-cut car patterns, designed for a precise fit and exceptional protection. Our pre-cut patterns offer an easy installation process and a sleek, professional finish. Whether you're looking to add a unique touch or need reliable protection, our patterns provide the perfect solution. Choose from a variety of styles and finishes to match your personal taste or brand identity, and enjoy a high-quality result that stands out on the road."}
                    imageSrc={img06}
                />
            </div>

            <FAQ />
            <Footer />
        </>
    );
};

export default PreCutCarPatterns;
