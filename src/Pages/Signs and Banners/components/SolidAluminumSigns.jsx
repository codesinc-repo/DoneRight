import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/Custom Signs & Print Advertising_1.jpg"; 
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const SolidAluminumSigns = () => {
    const heading = "Enhance Your Marketing with Durable Solid Aluminum Signs";

    const paragraphs = [
        {
            title: "Custom Solid Aluminum Signs for Versatile Applications",
            text: "Our solid aluminum signs are perfect for a range of uses including business signage, property identification, and promotional displays. With customizable sizes and finishes, you can create a sign that fits your specific needs."
        },
        {
            title: "High-Quality and Long-Lasting",
            text: "Made from premium aluminum, our signs are designed to be durable and resistant to harsh weather conditions. They offer excellent longevity and maintain their appearance over time, making them a great investment for any application."
        },
        {
            title: "Professional and Sleek Appearance",
            text: "Our solid aluminum signs have a sleek and professional look that enhances the visual appeal of any space. The clean finish and high-quality materials make these signs suitable for both indoor and outdoor use."
        }
    ];

    const listItems = [
        "Customizable sizes and finishes",
        "Durable and weather-resistant aluminum",
        "Professional and sleek appearance",
        "Ideal for both indoor and outdoor use"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Solid Aluminum Signs"
                description="Discover our range of solid aluminum signs, designed for durability and a professional appearance. With customizable options and high-quality materials, these signs are perfect for various applications, both indoors and outdoors."
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

export default SolidAluminumSigns;
