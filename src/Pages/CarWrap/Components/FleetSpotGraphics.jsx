import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FleetSpotGraphics = () => {
  const heading = "Transform your fleet with cohesive spot graphics.";
  
  const paragraphs = [
    {
      title: "Unified and professional design",
      text: "Fleet spot graphics are designed to create a consistent and professional appearance for your entire fleet. Whether you need to display your company logo, contact information, or a distinctive design, our solutions ensure that your fleet presents a unified and polished look. With options for various vehicle types and sizes, our graphics make a strong impression on the road."
    },
    {
      title: "Durable and high-quality materials",
      text: "Our fleet spot graphics are made from high-quality vinyl, providing durability and resistance to the elements. These graphics are suitable for both indoor and outdoor use, ensuring that your branding remains visible and vibrant in all conditions. With options for single- or double-sided displays, you can achieve maximum visibility and impact for your fleet."
    },
    {
      title: "Customizable to fit your needs",
      text: "Designing your fleet spot graphics is straightforward with our easy-to-use process. Choose from a variety of templates or create a custom design tailored to your branding needs. Our team is available to assist you in integrating your brand colors, logo, and other elements to ensure that your graphics align with your brand identity and make a lasting impression."
    }
  ];

  const listItems = [
    "Consistent fleet branding",
    "High-quality and durable materials",
    "Customizable designs",
    "Options for maximum visibility"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Fleet Spot Graphics"
        description="Enhance your fleet with custom spot graphics designed for a unified and professional look. Our high-quality solutions ensure durability and maximum visibility, making your brand stand out on the road."
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

export default FleetSpotGraphics;
