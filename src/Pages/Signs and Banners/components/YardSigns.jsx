import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/Custom Signs & Print Advertising_1.jpg";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const YardSigns = () => {
    const heading = "Enhance Your Space with Custom Yard Signs";

    const paragraphs = [
        {
            title: "Custom Yard Signs for Every Occasion",
            text: "Our custom yard signs are ideal for various applications including real estate, political campaigns, and event promotions. With customizable options for size, shape, and design, you can create a sign that perfectly matches your needs."
        },
        {
            title: "Durable and Weather-Resistant Materials",
            text: "Crafted from high-quality materials, our yard signs are built to withstand the elements. They are resistant to fading, bending, and weather conditions, ensuring your message stays visible and intact."
        },
        {
            title: "Versatile and Easy to Install",
            text: "Our yard signs come with multiple installation options, including stakes and brackets, making them easy to set up in various locations. They are also easy to maintain, offering a practical solution for both short-term and long-term use."
        }
    ];

    const listItems = [
        "Customizable sizes, shapes, and designs",
        "Durable and weather-resistant materials",
        "Various installation options including stakes and brackets",
        "Easy to maintain and long-lasting"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Yard Signs"
                description="Discover our range of customizable yard signs designed for every occasion. Made from durable materials and available in various sizes and shapes, our yard signs offer a versatile and effective solution for advertising and promotions."
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

export default YardSigns;
