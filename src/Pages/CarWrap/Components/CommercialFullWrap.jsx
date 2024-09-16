import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CommercialFullWrap = () => {
  const heading = "Elevate Your Brand with Comprehensive Full Wraps";

  const paragraphs = [
    {
      title: "Bold and comprehensive designs",
      text: "Our commercial full wraps are designed to transform your vehicle or space into a dynamic advertising medium. With full coverage and vibrant graphics, these wraps offer a bold branding solution that captures attention from every angle. Tailored to your specifications, they provide a striking visual impact that ensures your message is seen."
    },
    {
      title: "Versatile and durable application",
      text: "Maximize your branding potential with our commercial full wraps. Perfect for businesses looking to make a significant impression, these wraps are made from high-quality, weather-resistant vinyl, suitable for a variety of surfaces and environments. Whether for vehicles, buildings, or promotional setups, our wraps deliver both durability and style."
    },
    {
      title: "Streamlined design process",
      text: "Designing your commercial full wrap is straightforward and efficient. Choose from our extensive range of templates or work with our design team to create a custom wrap that aligns perfectly with your brand identity. Our high-resolution printing ensures vivid colors and sharp details, making your full wrap stand out."
    }
  ];

  const listItems = [
    "Comprehensive full coverage",
    "Durable and weather-resistant vinyl",
    "High-impact visual appeal",
    "Customizable to fit your branding needs"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Commercial Full Wrap"
        description="Elevate your branding with our premium commercial full wraps. Designed for maximum impact, these wraps offer complete coverage and vibrant visuals, ensuring your message stands out and makes a memorable impression."
      />
      <ImgWithTextDetailSec
        heading={heading}
        paragraphs={paragraphs}
        imageSrc={Img}
        listItems={listItems}
      />
      <MultipleCollapses
      />
      <MainCarousel />
      <Footer />
    </>
  );
};

export default CommercialFullWrap;
