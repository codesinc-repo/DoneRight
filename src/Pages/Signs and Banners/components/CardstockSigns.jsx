import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/post 03.jpg";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CardstockSigns = () => {
    const heading = "Elevate Your Marketing with Custom Cardstock Signs";

    const paragraphs = [
        {
            title: "Custom Cardstock Signs for Every Occasion",
            text: "Our cardstock signs are perfect for a wide range of uses, including event promotions, business advertisements, and temporary signage. With customizable options for size, color, and design, you can create signs that effectively communicate your message."
        },
        {
            title: "High-Quality Printing and Materials",
            text: "Made from durable cardstock, our signs offer a high-quality print finish that is ideal for indoor use. They are designed to be vibrant and eye-catching, ensuring that your message stands out in any setting."
        },
        {
            title: "Versatile and Easy to Display",
            text: "Our cardstock signs are versatile and easy to display. They are lightweight and can be easily mounted or placed in various settings, making them a convenient option for temporary signage needs."
        }
    ];

    const listItems = [
        "Customizable sizes, colors, and designs",
        "High-quality cardstock material",
        "Ideal for indoor use",
        "Easy to display and mount"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Cardstock Signs"
                description="Discover our range of custom cardstock signs, designed for effective indoor advertising and promotions. With customizable options and high-quality printing, our cardstock signs are a great choice for temporary and event-specific signage."
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

export default CardstockSigns;
