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

const PrintAdvertising = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>Print Advertising Solutions</h2>
                <p>
                    Explore our diverse range of print advertising options designed to enhance your brand visibility, engage your audience, and make a memorable impression with high-quality materials and innovative designs.
                </p>
                <h3 className="mt-2">
                    Discover Our Premium Print Advertising Services
                </h3>
                <p>
                    Elevate your marketing efforts with our top-notch print advertising solutions. From eye-catching flyers to versatile catalogs, we offer services that combine style, durability, and effectiveness.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Flyers"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Flyers"
                        description="Create customized flyers that effectively communicate your message and boost your brand’s visibility."
                        rating={4.2}
                        ratingCount={1832}
                        price="100 starting at $24.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Posters"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Posters"
                        description="Design impactful posters that capture attention and promote your message with style."
                        rating={4.3}
                        ratingCount={1923}
                        price="100 starting at $34.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Brochures"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Brochures"
                        description="Enhance your marketing strategy with professionally designed brochures for effective communication."
                        rating={3.8}
                        ratingCount={1523}
                        price="100 starting at $19.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Catalogs"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Catalogs"
                        description="Showcase your products and services with our high-quality catalogs that leave a lasting impression."
                        rating={4.0}
                        ratingCount={1675}
                        price="100 starting at $27.99"
                    />
                </div>
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Elevate Your Brand with Professional Print Advertising"}
                    paragraphs={"Print advertising remains a powerful tool for reaching your target audience and making a lasting impact. Our print advertising solutions provide you with high-quality materials and innovative designs to ensure your message stands out. Whether you need vibrant flyers, striking posters, or comprehensive catalogs, we offer a range of options to meet your needs. Choose from our selection to create print ads that capture attention, enhance your brand image, and effectively communicate your message."}
                    imageSrc={img03}
                />
            </div>
            <FAQ />
            <Footer />
        </>
    );
};

export default PrintAdvertising;
