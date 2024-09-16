import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/spot03.jpeg";
import img02 from "../../../images/sopt-graphic.webp";
import img03 from "../../../images/spot02.jpeg";
import img04 from "../../../images/basic spot.webp";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const SpotGraphicHeading = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>SPOT GRAPHICS</h2>
                <p>
                    Discover our top-quality spot graphics designed to enhance your
                    branding, improve visibility, and create a unique visual impact
                    effortlessly.
                </p>
                <h3 className="mt-2">
                    Explore Our High-Quality Spot Graphics Solutions
                </h3>
                <p>
                    Transform your space with premium spot graphics that offer exceptional
                    branding opportunities, advanced durability, and a sleek, professional
                    appearance.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Custom-Spot-Graphic"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Custom Spot Graphics"
                        description="Enhance your branding with custom spot graphics tailored to your unique needs."
                        rating={4.2}
                        ratingCount={1832}
                        price="100 starting at $24.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Fleet-Spot-Graphics"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Fleet Spot Graphics"
                        description="Create a cohesive and professional look with spot graphics for your entire fleet."
                        rating={4.3}
                        ratingCount={1923}
                        price="100 starting at $34.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Basic-spot-graphics"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Basic Spot Graphics"
                        description="Enhance your branding with simple yet impactful spot graphics for any surface."
                        rating={3.8}
                        ratingCount={1523}
                        price="100 starting at $19.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Trailer-Spot-Graphics"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Trailer Spot Graphics"
                        description="Make your trailers stand out with eye-catching spot graphics designed for durability."
                        rating={4.0}
                        ratingCount={1675}
                        price="100 starting at $27.99"
                    />
                </div>
                {/* Add more PricingCards as needed */}
            </div>


            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Create Spot Graphics That Make a Bold Statement"}
                    paragraphs={"Spot graphics are a powerful way to enhance your brand’s visibility and create a lasting visual impact. Choose from our high-quality materials to design graphics that not only attract attention but also reflect your brand’s unique personality. Opt for durable finishes or vibrant colors to make your spot graphics stand out in any environment.Whether you're looking for sleek, professional designs or bold, eye-catching visuals, our spot graphics solutions offer the versatility and quality you need. With a wide range of customization options, you can ensure your graphics leave a memorable impression on your audience."}
                    imageSrc={img03}
                />
            </div>
            <FAQ />
            <Footer />
        </>
    );
};

export default SpotGraphicHeading;
