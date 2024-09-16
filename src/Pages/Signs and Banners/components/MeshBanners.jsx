import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const MeshBanners = () => {
    const heading = "Discover the Benefits of Mesh Banners";

    const paragraphs = [
        {
            title: "Breathable and Lightweight",
            text: "Mesh banners are designed with a perforated material that allows air to pass through, reducing wind resistance and making them ideal for outdoor use. Their lightweight nature makes them easy to handle and install."
        },
        {
            title: "High Visibility and Impact",
            text: "Despite their lightweight construction, mesh banners provide high visibility and impact. The perforations help to display vibrant colors and clear graphics, making your message stand out even in windy conditions."
        },
        {
            title: "Durable and Weather-Resistant",
            text: "Crafted from durable materials, our mesh banners are built to withstand harsh weather conditions. They are resistant to tearing and fading, ensuring a long-lasting display for your advertising needs."
        }
    ];

    const listItems = [
        "Breathable material for reduced wind resistance",
        "Lightweight and easy to handle",
        "High visibility with vibrant colors",
        "Durable and resistant to weather conditions"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Mesh Banners"
                description="Explore our high-quality mesh banners, designed for optimal performance in outdoor environments. With features like breathability and durability, our mesh banners offer a practical solution for effective advertising."
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

export default MeshBanners;
