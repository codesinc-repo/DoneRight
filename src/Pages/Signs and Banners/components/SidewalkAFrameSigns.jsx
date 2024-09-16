import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/Custom Signs & Print Advertising_4.jpg"; 
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const SidewalkAFrameSigns = () => {
    const heading = "Enhance Your Visibility with Custom Sidewalk A-Frame Signs";

    const paragraphs = [
        {
            title: "Custom Sidewalk A-Frame Signs for Maximum Impact",
            text: "Our sidewalk A-frame signs are perfect for attracting attention in high-traffic areas. Ideal for businesses, events, and promotions, these signs offer a customizable solution with various sizes and designs to meet your needs."
        },
        {
            title: "Sturdy and Weather-Resistant Construction",
            text: "Built with durable materials, our A-frame signs are designed to withstand various weather conditions. Their sturdy construction ensures stability and visibility, even in windy or rainy conditions."
        },
        {
            title: "Easy to Set Up and Use",
            text: "Our sidewalk A-frame signs are user-friendly and quick to set up. They come with convenient features such as easy-to-change inserts and portability, making them ideal for temporary or permanent placements."
        }
    ];

    const listItems = [
        "Customizable sizes and designs",
        "Durable and weather-resistant materials",
        "User-friendly setup with easy-to-change inserts",
        "Portable and ideal for high-traffic areas"
    ];

    return (
        <>
            <Header />
            <DetailSection
                title="Sidewalk A-Frame Signs"
                description="Explore our range of sidewalk A-frame signs designed to attract attention and enhance visibility. Made from durable materials and available in various customizable options, our A-frame signs are perfect for promoting your business or event."
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

export default SidewalkAFrameSigns;
