import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const OneByEight = () => {
  const heading = "Transform Your Space with 1/8 Wraps";

  const paragraphs = [
    {
      title: "Subtle yet impactful designs",
      text: "Our 1/8 wraps are designed to provide a subtle yet effective branding solution. Ideal for enhancing specific areas or adding a touch of visual interest, these wraps ensure a professional and eye-catching appearance. With customizable sizes and options for various surfaces, our 1/8 wraps are crafted for maximum impact."
    },
    {
      title: "Versatile branding applications",
      text: "Enhance your brand visibility with our 1/8 wraps. Perfect for highlighting your logo, business name, or other key elements in a refined way that complements your brand’s identity. Made from high-quality vinyl, these wraps are durable for both indoor and outdoor use, with options for flexible display scenarios."
    },
    {
      title: "Easy customization process",
      text: "Creating your 1/8 wraps is simple and efficient. Choose from a variety of templates or design your own from scratch. Integrate your brand colors, logo, and other visual elements to make the wrap uniquely yours. Our team is here to assist you throughout the process to ensure your wraps meet your expectations."
    }
  ];

  const listItems = [
    "Subtle and impactful designs",
    "Durable high-quality vinyl",
    "Flexible application options",
    "Full-color, vivid printing"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="1/8 Wrap"
        description="Transform your space with our premium 1/8 wraps. Designed to offer a subtle yet effective branding solution, these wraps ensure a professional and striking presence, making your brand stand out with ease."
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

export default OneByEight;
