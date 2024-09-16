import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const ShopAllPatterns = () => {
  const heading = "Explore Our Diverse Patterns for Window Tints";

  const paragraphs = [
    {
      title: "Extensive Pattern Options",
      text: "Browse through our extensive collection of pre-cut patterns designed to meet various needs. Whether you are looking for a sleek and modern look or a vibrant and eye-catching design, we offer a wide range of patterns to suit every style."
    },
    {
      title: "High-Quality Materials",
      text: "Each pattern is crafted from premium materials that ensure durability and longevity. Our patterns are designed to withstand environmental conditions and maintain their aesthetic appeal over time."
    },
    {
      title: "Easy to Apply and Maintain",
      text: "Our patterns are pre-cut for a perfect fit and easy installation. With minimal maintenance required, you can enjoy the enhanced look and protection of your windows without hassle."
    }
  ];

  const listItems = [
    "Diverse pattern options",
    "Crafted from premium materials",
    "Easy to apply and maintain",
    "Durable and long-lasting"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Shop All Patterns"
        description="Discover our wide range of pre-cut window tint patterns. From modern designs to vibrant options, find the perfect pattern to enhance the look of your vehicle or space."
      />
      <ImgWithTextDetailSec
        heading={heading}
        paragraphs={paragraphs}
        imageSrc={Img}
        listItems={listItems}
      />
      <MultipleCollapses/>
      <MainCarousel/>
      <Footer />
    </>
  );
};

export default ShopAllPatterns;
