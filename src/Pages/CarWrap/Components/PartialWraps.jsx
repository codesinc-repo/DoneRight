import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/partial warp03.webp";
import img02 from "../../../images/partial warp02.webp";
import img03 from "../../../images/partial warp01.webp";
import img04 from "../../../images/partial warp04.webp";
import img05 from "../../../images/partial warp05.webp";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const PartialWraps = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>PARTIAL WRAPS</h2>
                <p>
                    Explore our premium partial wraps designed to provide flexible and striking branding solutions for your vehicle or space.
                    Our wraps enhance visibility while offering a professional and customized look.
                </p>
                <h3 className="mt-2">
                    Discover Our Superior Partial Wrap Solutions
                </h3>
                <p>
                    Elevate your branding with our high-quality partial wraps. Perfect for creating a dynamic visual impact,
                    they offer advanced durability and a tailored appearance that suits your specific needs.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/One-By-Eight"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="1/8 Wrap"
                        description="Enhance your vehicle with our 1/8 wrap, offering a subtle yet impactful branding solution."
                        rating={4.5}
                        ratingCount={2100}
                        price="1/8 Wrap starting at $24.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/One-By-Four"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="1/4 Wrap"
                        description="Transform your vehicle with a 1/4 wrap for a more noticeable branding impact."
                        rating={4.6}
                        ratingCount={1800}
                        price="1/4 Wrap starting at $34.99"
                    />

                    {/* Card 03 */}
                    <PricingCards
                        to="/One-By-Two"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="1/2 Wrap"
                        description="Make a strong statement with our 1/2 wrap, perfect for enhancing visibility and branding."
                        rating={4.3}
                        ratingCount={1500}
                        price="1/2 Wrap starting at $49.99"
                    />

                    {/* Card 04 */}
                    <PricingCards
                        to="/Three-By-Four"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="3/4 Wrap"
                        description="Get maximum visibility with our 3/4 wrap, designed to make your branding stand out."
                        rating={4.7}
                        ratingCount={2000}
                        price="3/4 Wrap starting at $69.99"
                    />
                </div>
                {/* Add more PricingCards as needed */}
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title={"Create Partial Wraps That Transform Your Space"}
                    paragraphs={"Partial wraps offer a versatile and impactful way to enhance your branding. Choose from our premium materials to design wraps that make a statement while providing a professional appearance. Opt for finishes that reflect your brand’s personality and ensure durability in various environments. Whether you need a subtle touch or a more prominent presence, our partial wraps deliver the quality and customization you need. With numerous options available, you can create a partial wrap that leaves a lasting impression and elevates your brand."}
                    imageSrc={img05}
                />
            </div>

            <FAQ />
            <Footer />
        </>
    );
};

export default PartialWraps;
