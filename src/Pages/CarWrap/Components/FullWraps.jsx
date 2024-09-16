import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/full wrap 01.jpg";
import img02 from "../../../images/full wrap 02.jpg";
import img03 from "../../../images/full wrap 03.jpg";
import img04 from "../../../images/full wrap 04.jpg";
import img05 from "../../../images/full wrap 05.jpeg";
import img06 from "../../../images/full wrap 06.jpeg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const FullWraps = () => {
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
                        to="/Custom-Full-Wrap"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Custom Full Wrap"
                        description="Transform your vehicle with a custom full wrap designed to make a statement and enhance your branding."
                        rating={4.5}
                        ratingCount={2100}
                        price="100 starting at $499.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Full-Color-Change-Wrap"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Full Color Change Wrap"
                        description="Revamp your vehicle’s appearance with a full color change wrap that offers a bold new look and complete customization."
                        rating={4.7}
                        ratingCount={1850}
                        price="100 starting at $549.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Commercial-Full-Wrap"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Commercial Full Wrap"
                        description="Enhance your business’s visibility with a commercial full wrap that delivers a professional and impactful advertisement."
                        rating={4.6}
                        ratingCount={1900}
                        price="100 starting at $599.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Fleet-Full-Wrap-One-Way-Vision"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Fleet Full Wrap with One-Way Vision"
                        description="Achieve a unified look for your fleet with full wraps featuring one-way vision, ideal for both branding and privacy."
                        rating={4.4}
                        ratingCount={1750}
                        price="100 starting at $649.99"
                    />

                    {/* Card 05 */}
                    <PricingCards
                        to="/Full-One-Way-Vision"
                        imageSrc={img05}
                        badgeText="New low price"
                        title="Full One-Way Vision"
                        description="Opt for full one-way vision wraps to maintain privacy while showcasing your brand on the exterior of your vehicle."
                        rating={4.3}
                        ratingCount={1600}
                        price="100 starting at $699.99"
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

export default FullWraps;
