import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CustomFullWrap = () => {
  const heading = "Transform Your Space with Custom Full Wraps";

  const paragraphs = [
    {
      title: "Comprehensive coverage and impact",
      text: "Our custom full wraps are designed to cover every inch of your surface, providing a complete and seamless branding solution. Whether you’re wrapping a vehicle, storefront, or any other large surface, these wraps ensure maximum visibility and a polished, professional look."
    },
    {
      title: "Tailored to your specifications",
      text: "We offer a range of customization options to fit your specific needs. Choose from various finishes, colors, and textures to create a full wrap that perfectly aligns with your brand identity. Our high-quality materials and precise printing ensure that your wrap looks sharp and vibrant."
    },
    {
      title: "Durable and versatile",
      text: "Our full wraps are made from durable, high-quality vinyl that withstands various environmental conditions. Ideal for both indoor and outdoor applications, these wraps are built to last and maintain their visual appeal over time. They’re perfect for vehicles, walls, windows, and more."
    }
  ];

  const listItems = [
    "Complete surface coverage",
    "Customizable finishes and colors",
    "Durable and long-lasting vinyl",
    "Ideal for various applications"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Full Wrap"
        description="Elevate your branding with our custom full wraps. Designed to provide comprehensive coverage and a professional appearance, these wraps offer a powerful and versatile solution for transforming your space."
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

export default CustomFullWrap;
