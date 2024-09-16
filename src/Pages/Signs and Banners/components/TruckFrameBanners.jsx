import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const TruckFrameBanners = () => {
    const heading = "High-Impact Truck Frame Banners for Maximum Exposure";

    const paragraphs = [
        {
            title: "Maximize Your Reach with Truck Frame Banners",
            text: "Our truck frame banners are designed to offer maximum visibility on the road. Ideal for mobile advertising, these banners ensure your message reaches a wide audience while you’re on the move, making every mile count."
        },
        {
            title: "Built for Durability and Longevity",
            text: "Constructed from rugged, weather-resistant materials, our truck frame banners are built to endure the rigors of road travel. They resist tearing, fading, and harsh environmental conditions, maintaining their impact over time."
        },
        {
            title: "Customizable for Your Branding Needs",
            text: "With various sizes and customization options, our truck frame banners can be tailored to your specific branding requirements. Choose from different finishes and designs to create a banner that reflects your brand and message effectively."
        }
    ];

    const listItems = [
        "High visibility for mobile advertising",
        "Durable and weather-resistant materials",
        "Customizable sizes and designs",
        "Effective for reaching a broad audience on the road"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Truck Frame Banners"
                description="Explore our high-impact truck frame banners, designed for maximum visibility and durability. Perfect for mobile advertising, these banners offer customizable options to effectively promote your brand on the go."
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

export default TruckFrameBanners;
