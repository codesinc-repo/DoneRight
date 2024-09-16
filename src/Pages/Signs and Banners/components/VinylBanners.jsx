import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const VinylBanners = () => {
    const heading = "Enhance Your Space with Vinyl Banners";

    const paragraphs = [
        {
            title: "Custom Vinyl Banners for Any Event",
            text: "Our vinyl banners are perfect for any event or promotion. With customizable options for size, color, and design, you can create a banner that perfectly fits your needs, whether it's for a trade show, grand opening, or special occasion."
        },
        {
            title: "High-Quality and Durable Materials",
            text: "Made from premium vinyl, our banners are built to last. They are resistant to fading, tearing, and weather conditions, ensuring that your message remains vibrant and intact even in challenging environments."
        },
        {
            title: "Easy to Install and Maintain",
            text: "Our vinyl banners are designed for easy installation, with options for grommets or pole pockets. They are also simple to clean and maintain, making them a practical choice for both short-term and long-term use."
        }
    ];

    const listItems = [
        "Customizable sizes, colors, and designs",
        "Durable and weather-resistant vinyl material",
        "Easy installation with grommets or pole pockets",
        "Low maintenance and long-lasting"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Vinyl Banners"
                description="Explore our high-quality vinyl banners, perfect for any event or promotion. With customizable options and durable materials, our banners offer a versatile solution for your advertising needs."
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

export default VinylBanners;
