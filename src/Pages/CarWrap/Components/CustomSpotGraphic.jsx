import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CustomSpotGraphic = () => {
  const heading = "Elevate your brand with premium custom spot graphics.";
  
  const paragraphs = [
    {
      title: "Tailored and striking designs",
      text: "Our custom spot graphics are crafted to fit your specific branding requirements. Whether you're aiming to accentuate a particular area or make a significant visual impact, our solutions provide a professional and eye-catching result. With various size options and adaptability for different surfaces, these graphics are designed for maximum effectiveness."
    },
    {
      title: "Flexible branding applications",
      text: "Boost your brand visibility with custom spot graphics tailored to your needs. These graphics can highlight your logo, business name, or other key elements in a way that complements your brand’s identity. Made from high-quality vinyl, they are durable and suitable for both indoor and outdoor settings, with options for single- or double-sided display."
    },
    {
      title: "Effortless customization process",
      text: "Designing your custom spot graphics is straightforward and efficient. Choose from a range of templates or create your own design from scratch. Incorporate your brand colors, logo, and other visual elements to make the design uniquely yours. Our team is here to assist you throughout the process to ensure your graphics meet your expectations."
    }
  ];

  const listItems = [
    "Tailored and impactful designs",
    "Durable high-quality vinyl",
    "Flexible display options",
    "Full-color, vivid printing"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Spot Graphics"
        description="Elevate your brand with our premium custom spot graphics. Designed to meet your specific needs, these graphics provide a professional and striking presence, ensuring your brand stands out effectively."
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

export default CustomSpotGraphic;
