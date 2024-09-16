import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp"; // Ensure this image is relevant for 1/4 Car Wrap
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const OneByFour = () => {
  const heading = "Transform Your Vehicle with a Premium 1/4 Car Wrap";

  const paragraphs = [
    {
      title: "Bold and impactful designs",
      text: "Our 1/4 car wraps are crafted to make a significant impact with a bold design. Whether you're looking to enhance a specific section of your vehicle or make a strong visual statement, these wraps provide a professional and eye-catching result. With options for various finishes and adaptability for different car surfaces, our wraps are designed for maximum visibility."
    },
    {
      title: "Versatile branding applications",
      text: "Elevate your brand visibility with a 1/4 car wrap tailored to your needs. These wraps can highlight your logo, business name, or other key elements in a way that complements your brand’s identity. Made from high-quality vinyl, they are durable and suitable for both indoor and outdoor settings, providing long-lasting performance."
    },
    {
      title: "Simple and effective customization",
      text: "Customizing your 1/4 car wrap is easy and efficient. Choose from a variety of templates or create your own design from scratch. Incorporate your brand colors, logo, and other visual elements to make the wrap uniquely yours. Our team is here to assist you throughout the process to ensure your wrap meets your expectations."
    }
  ];

  const listItems = [
    "Bold and eye-catching designs",
    "Durable high-quality vinyl",
    "Flexible application options",
    "Full-color, vivid printing"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="1/4 Car Wrap"
        description="Transform your vehicle with our premium 1/4 car wraps. Designed to offer a bold and impactful visual statement, these wraps ensure your vehicle stands out with a professional and striking presence."
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

export default OneByFour;
