import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/Event Promotional product_3.jpg"; 
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const AcrylicSigns = () => {
    const heading = "Enhance Your Branding with Elegant Acrylic Signs";

    const paragraphs = [
        {
            title: "Custom Acrylic Signs for Any Setting",
            text: "Our acrylic signs are perfect for a variety of applications including office signage, business promotions, and event displays. With customizable sizes and finishes, you can create a sign that suits your needs and enhances your space."
        },
        {
            title: "High-Quality and Durable Materials",
            text: "Made from premium acrylic, our signs are designed to be both durable and stylish. They are resistant to fading and damage, ensuring that your signage remains clear and vibrant over time."
        },
        {
            title: "Sleek and Modern Appearance",
            text: "Our acrylic signs offer a sleek and modern look that adds a touch of professionalism to any environment. The clear and polished finish of acrylic provides a high-quality aesthetic that is suitable for both indoor and outdoor use."
        }
    ];

    const listItems = [
        "Customizable sizes and finishes",
        "Durable and high-quality acrylic material",
        "Sleek and modern appearance",
        "Suitable for various settings"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Acrylic Signs"
                description="Explore our range of acrylic signs, designed to provide a stylish and professional appearance. With customizable options and high-quality materials, our acrylic signs are perfect for enhancing your branding and signage needs."
            />
            <ImgWithTextDetailSec
                heading={heading}
                paragraphs={paragraphs}
                imageSrc={Img}
                listItems={listItems}
            />
            <MultipleCollapses />
            <MainCarousel />
            <Footer />
        </>
    );
};

export default AcrylicSigns;
