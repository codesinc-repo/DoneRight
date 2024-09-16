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

const PromotionalItem = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>Promote Your Brand with Custom Promotional Items</h2>
                <p>
                    Explore our wide range of promotional items designed to boost your brand’s visibility, engage your audience, and leave a lasting impression with high-quality products that carry your message far and wide.
                </p>
                <h3 className="mt-2">
                    Discover Our Premium Promotional Products
                </h3>
                <p>
                    Elevate your marketing strategy with our top-notch promotional items. From branded merchandise to innovative giveaways, our products combine style, utility, and durability to effectively promote your brand.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Custom-Promotional-Items"
                        imageSrc={img01}
                        badgeText="Popular Choice"
                        title="Custom Promotional Items"
                        description="Design unique promotional items that leave a lasting impact on your audience and elevate your brand’s presence."
                        rating={4.5}
                        ratingCount={2001}
                        price="Starting at $9.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Branded-Merchandise"
                        imageSrc={img02}
                        badgeText="Best Seller"
                        title="Branded Merchandise"
                        description="Choose from a wide range of branded merchandise to increase brand recognition and customer loyalty."
                        rating={4.7}
                        ratingCount={2153}
                        price="Starting at $12.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/Innovative-Giveaways"
                        imageSrc={img03}
                        badgeText="New Arrival"
                        title="Innovative Giveaways"
                        description="Stand out with creative and innovative giveaways that capture attention and promote your brand."
                        rating={4.4}
                        ratingCount={1873}
                        price="Starting at $14.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Eco-Friendly-Products"
                        imageSrc={img04}
                        badgeText="Eco-Friendly"
                        title="Eco-Friendly Products"
                        description="Promote your brand while staying environmentally conscious with our range of eco-friendly promotional products."
                        rating={4.6}
                        ratingCount={1720}
                        price="Starting at $11.99"
                    />
                </div>
                {/* Add more PricingCards as needed */}
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Make a Lasting Impression with Promotional Items"}
                    paragraphs={"Promotional items are a powerful marketing tool that extends your brand’s reach and impact. Our selection of promotional products offers you the opportunity to connect with your audience in a tangible way. Whether it’s through branded merchandise, innovative giveaways, or eco-friendly products, we provide options that resonate with your customers and keep your brand top of mind. Let us help you create promotional items that not only represent your brand but also leave a lasting impression."}
                    imageSrc={img03}
                />
            </div>
            <FAQ />
            <Footer />
        </>
    );
};

export default PromotionalItem;
