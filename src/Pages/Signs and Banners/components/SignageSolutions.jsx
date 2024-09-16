import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/Custom Signs & Print Advertising_1.jpg";
import img02 from "../../../images/Custom Signs & Print Advertising_3.jpg";
import img03 from "../../../images/Custom Signs & Print Advertising_5.jpg";
import img06 from "../../../images/Custom Signs & Print Advertising_4.jpg";
import img04 from "../../../images/Apparel & Merch_6.jpg";
import img05 from "../../../images/Apparel & Merch_1.jpg";
import img07 from "../../../images/Apparel & Merch_2.jpg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const SignageSolutions = () => {
    return (
        <>
            <Header />
            <div className="title-section text-start g-0 p-3 container mt-4">
                <h2>Explore Our Range of Signage Solutions</h2>
                <p>
                    Discover a variety of signage solutions designed to meet your needs. From vibrant yard signs to versatile sidewalk A-frame signs, we offer high-quality options for every application.
                </p>
                <h3 className="mt-2">
                    Find the Perfect Signage for Your Project
                </h3>
                <p>
                    Whether you need to promote your business, guide customers, or make a statement, our diverse signage options provide the durability and visual impact you need. Explore our offerings and choose the perfect solution for your project.
                </p>
            </div>

            <div className="container">
                <div className="row mt-5">
                    {/* Card 01 */}
                    <PricingCards
                        to="/Yard-Signs"
                        imageSrc={img01}
                        badgeText="New low price"
                        title="Yard Signs"
                        description="Promote your event or business with eye-catching yard signs that offer visibility and durability."
                        rating={4.5}
                        ratingCount={2100}
                        price="Starting at $499.99"
                    />

                    {/* Card 02 */}
                    <PricingCards
                        to="/Sidewalk-AFrame-Signs"
                        imageSrc={img02}
                        badgeText="New low price"
                        title="Sidewalk A-Frame Signs"
                        description="Enhance visibility with weather-resistant sidewalk A-frame signs perfect for directing traffic and advertising."
                        rating={4.7}
                        ratingCount={1850}
                        price="Starting at $549.99"
                    />
                     {/* Card 03 */}
                     <PricingCards
                        to="/Poster"
                        imageSrc={img03}
                        badgeText="New low price"
                        title="Poster"
                        description="Enhance visibility with weather-resistant Poster perfect for directing traffic and advertising."
                        rating={4.7}
                        ratingCount={1850}
                        price="Starting at $549.99"
                    />
                    
                    {/* Card 05 */}
                    <PricingCards
                        to="/Truck-Frame-Banners"
                        imageSrc={img04}
                        badgeText="New low price"
                        title="Truck Frame Banners"
                        description="Advertise on the move with truck frame banners that offer high visibility and durability."
                        rating={4.6}
                        ratingCount={1900}
                        price="Starting at $599.99"
                    />

                    {/* Card 06 */}
                    <PricingCards
                        to="/Solid-Aluminum-Signs"
                        imageSrc={img06}
                        badgeText="New low price"
                        title="Solid Aluminum Signs"
                        description="Durable and stylish, solid aluminum signs provide a professional look for any business or event."
                        rating={4.6}
                        ratingCount={1900}
                        price="Starting at $599.99"
                    />

                    {/* Card 07 */}
                    <PricingCards
                        to="/Acrylic-Signs"
                        imageSrc={img05}
                        badgeText="New low price"
                        title="Acrylic Signs"
                        description="Add a touch of elegance with acrylic signs, ideal for interior and exterior signage needs."
                        rating={4.6}
                        ratingCount={1900}
                        price="Starting at $599.99"
                    />

                    {/* Card 08 */}
                    <PricingCards
                        to="/Cardstock-Signs"
                        imageSrc={img07}
                        badgeText="New low price"
                        title="Cardstock Signs"
                        description="Affordable and versatile, cardstock signs are perfect for temporary displays and promotions."
                        rating={4.6}
                        ratingCount={1900}
                        price="Starting at $599.99"
                    />
                </div>
            </div>

            <div className="mt-4 p-3">
                <SimpleImgWithText
                    title="Elevate Your Advertising with Premium Signage"
                    paragraphs="Discover our range of high-quality signage solutions designed to meet various needs. From durable yard signs to eye-catching pole banners and professional-grade aluminum signs, we provide customizable options that enhance visibility and make a lasting impression. Choose the ideal signage for your project and showcase your message with confidence."
                    imageSrc={img06}
                />
            </div>

            <FAQ />
            <Footer />
        </>
    );
};

export default SignageSolutions;
