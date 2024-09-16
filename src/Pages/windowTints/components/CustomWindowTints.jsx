import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CustomWindowTints = () => {
  const heading = "Customize Your Space with Premium Window Tints";

  const paragraphs = [
    {
      title: "Tailored Solutions for Unique Needs",
      text: "Our custom window tints offer the flexibility to create designs that perfectly match your specific requirements. Whether you need a unique pattern, logo, or specific shade, our tints provide endless possibilities to enhance your space."
    },
    {
      title: "Versatile and Highly Customizable",
      text: "Choose from a wide range of colors, styles, and levels of opacity to achieve the perfect look and function. Our custom window tints can be designed to fit any window shape and size, making them ideal for both residential and commercial applications."
    },
    {
      title: "Durable and Easy to Maintain",
      text: "Crafted from premium materials, our custom window tints are built to last. They resist fading, bubbling, and peeling, ensuring that your custom design remains vibrant and intact over time. Maintenance is straightforward, making them a practical choice for long-term use."
    }
  ];

  const listItems = [
    "Completely customizable designs",
    "Wide range of colors and styles",
    "Durable and fade-resistant",
    "Perfect for both residential and commercial use"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Window Tints"
        description="Create a unique and personalized look with our custom window tints. Designed to meet your specific needs, these tints offer a blend of style, privacy, and functionality."
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

export default CustomWindowTints;
