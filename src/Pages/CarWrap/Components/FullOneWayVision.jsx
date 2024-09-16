import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FullOneWayVision = () => {
  const heading = "Maximize Privacy and Branding with Full One-Way Vision Wraps";

  const paragraphs = [
    {
      title: "Effective privacy and branding solution",
      text: "Our full one-way vision wraps are designed to provide both privacy and impactful branding. Ideal for windows and glass surfaces, these wraps allow visibility from the inside while ensuring a branded and opaque appearance from the outside. Perfect for offices, vehicles, and storefronts."
    },
    {
      title: "High-quality and durable material",
      text: "Crafted from premium one-way vision vinyl, these wraps are built to withstand various weather conditions and daily wear. They offer excellent durability and longevity, maintaining their appearance and functionality over time."
    },
    {
      title: "Customizable for your needs",
      text: "Customize your full one-way vision wraps with your brand’s graphics, colors, and logos. Whether you need a complete window coverage or partial wraps, our solution is versatile and tailored to your specific requirements. Our team is ready to assist you in achieving the perfect design."
    }
  ];

  const listItems = [
    "Enhanced privacy with one-way vision",
    "Durable, high-quality vinyl",
    "Customizable with brand graphics",
    "Ideal for windows and glass surfaces"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Full One-Way Vision Wrap"
        description="Maximize privacy and branding with our premium full one-way vision wraps. Designed to offer both privacy and visibility, these wraps ensure a professional and branded appearance for windows and glass surfaces."
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

export default FullOneWayVision;
