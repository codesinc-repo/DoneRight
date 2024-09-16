import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const PoleBanners = () => {
    const heading = "Versatile Pole Banners for Effective Advertising";

    const paragraphs = [
        {
            title: "Eye-Catching Pole Banner Designs",
            text: "Our pole banners are perfect for grabbing attention in high-traffic areas. Available in a variety of sizes and designs, these banners are ideal for promoting events, seasonal sales, or enhancing brand visibility in public spaces."
        },
        {
            title: "Durable and Weather-Resistant",
            text: "Made from high-quality materials, our pole banners are designed to endure various weather conditions. They are resistant to fading, tearing, and harsh elements, ensuring long-lasting performance and visibility."
        },
        {
            title: "Customizable for Your Needs",
            text: "Choose from a range of custom options to tailor your pole banners to your specific requirements. With various sizes, finishes, and mounting options, you can create a banner that perfectly aligns with your advertising goals."
        }
    ];

    const listItems = [
        "Available in multiple sizes and designs",
        "Durable and weather-resistant materials",
        "Customizable options for tailored solutions",
        "Effective for high-visibility advertising in public areas"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Pole Banners"
                description="Discover our versatile pole banners, designed for impactful advertising in high-traffic areas. With durable materials and customizable options, these banners are perfect for promoting events, sales, and brand visibility."
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

export default PoleBanners;
