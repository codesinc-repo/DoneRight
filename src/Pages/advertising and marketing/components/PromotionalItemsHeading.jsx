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

const PromotionalItemsHeading = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>Promotional Items Solutions</h2>
                <p>
                    Discover our wide array of promotional items designed to boost your brand's visibility, engage your target audience, and leave a lasting impression with high-quality, customizable products.
                </p>
                <h3 className="mt-2">
                    Explore Our Premium Promotional Items Services
                </h3>
                <p>
                    Enhance your marketing strategies with our exceptional promotional items. From unique giveaways to branded merchandise, we offer products that blend creativity, functionality, and impact.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        href="/Business-Cards"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Business Cards"
                        description="Create professional business cards that make a lasting impression and represent your brand."
                        rating={4.5}
                        ratingCount={2100}
                        price="100 starting at $19.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        href="/BrandedMerchandise"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Branded Merchandise"
                        description="Promote your brand with custom branded merchandise that stands out."
                        rating={4.4}
                        ratingCount={1850}
                        price="Starting at $99.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        href="/Pens"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Pens"
                        description="Personalized pens that are perfect for promoting your business or event."
                        rating={4.1}
                        ratingCount={1780}
                        price="100 starting at $29.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        href="/Notebooks"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Notebooks"
                        description="Customized notebooks that keep your brand in front of your customers."
                        rating={4.3}
                        ratingCount={1905}
                        price="100 starting at $39.99"
                    />
                </div>
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Elevate Your Brand with Custom Promotional Items"}
                    paragraphs={"Promotional items are a powerful way to connect with your audience and leave a memorable impression. Our promotional item solutions offer a variety of high-quality, customizable products designed to enhance your brand visibility and engagement. Whether you need unique giveaways, branded merchandise, or corporate gifts, we provide options that perfectly align with your brand identity. Choose from our selection to create promotional items that not only attract attention but also reinforce your brand's message."}
                    imageSrc={img03}
                />
            </div>

            <FAQ />
            <Footer />
        </>
    );
};

export default PromotionalItemsHeading;
