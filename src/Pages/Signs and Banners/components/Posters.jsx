import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/Custom Signs & Print Advertising_6.jpg"; 
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const Poster = () => {
    const heading = "Enhance Your Marketing with Custom Posters";

    const paragraphs = [
        {
            title: "Custom Posters for Any Event",
            text: "Our custom posters are perfect for promoting events, businesses, or special occasions. With a variety of sizes and finishes, you can create eye-catching posters that effectively convey your message and attract attention."
        },
        {
            title: "High-Quality Printing and Materials",
            text: "We use high-quality printing techniques and materials to ensure that your posters are vibrant, durable, and long-lasting. Our posters are designed to look great indoors or outdoors, maintaining their quality over time."
        },
        {
            title: "Versatile and Easy to Display",
            text: "Our posters come in various formats and are easy to display in different settings. Whether you need posters for a gallery, storefront, or event, our products are designed for easy mounting and visibility."
        }
    ];

    const listItems = [
        "Customizable sizes and finishes",
        "High-quality printing and materials",
        "Suitable for various display settings",
        "Easy to mount and display"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Custom Posters"
                description="Discover our range of custom posters, ideal for any event or promotional need. With high-quality materials and vibrant printing, our posters provide an effective way to capture attention and communicate your message."
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

export default Poster;
