import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const ConstructionSiteMeshFenceBanners = () => {
    const heading = "Durable Mesh Fence Banners for Construction Sites";

    const paragraphs = [
        {
            title: "High-Visibility Construction Site Banners",
            text: "Our mesh fence banners are designed to provide high visibility and security at construction sites. They offer a practical solution for displaying advertisements, safety messages, or company branding while maintaining an open view through the mesh."
        },
        {
            title: "Weather-Resistant and Durable",
            text: "Constructed from high-quality mesh material, our fence banners are built to withstand harsh weather conditions. They are resistant to tearing and fading, ensuring that your message remains effective throughout the duration of the construction project."
        },
        {
            title: "Customizable to Your Needs",
            text: "Choose from a range of sizes and designs to create a banner that fits your specific requirements. Our mesh banners can be customized with your branding, safety information, or promotional messages, providing flexibility and impact."
        }
    ];

    const listItems = [
        "High-visibility mesh material",
        "Durable and weather-resistant",
        "Customizable sizes and designs",
        "Ideal for construction site security and advertising"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Construction Site Mesh Fence Banners"
                description="Explore our mesh fence banners designed specifically for construction sites. With high-visibility, weather-resistant materials, and customizable options, these banners are perfect for advertising, branding, and site security."
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

export default ConstructionSiteMeshFenceBanners;
