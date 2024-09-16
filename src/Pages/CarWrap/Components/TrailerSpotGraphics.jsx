import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const TrailerSpotGraphics = () => {
  const heading = "Transform your trailers with eye-catching spot graphics.";
  
  const paragraphs = [
    {
      title: "Bold and durable designs",
      text: "Our trailer spot graphics are crafted to create a striking visual impact while withstanding the rigors of road travel. Designed to highlight your brand or message, these graphics ensure your trailers stand out with a professional and eye-catching appearance. Available in various sizes and options, they provide a robust and attractive solution for your trailer graphics needs."
    },
    {
      title: "Customizable for your trailer's needs",
      text: "Tailor your trailer spot graphics to fit your specific requirements. Whether you want to display your logo, promotional messages, or other branding elements, our high-quality vinyl ensures that your graphics remain vibrant and durable in all weather conditions. With options for different display scenarios, you can achieve the perfect look for your trailers."
    },
    {
      title: "Effortless design and application",
      text: "Creating customized trailer spot graphics is easy with our streamlined process. Choose from our pre-designed templates or design your own from scratch. Our team is available to assist you with integrating your brand elements, ensuring that your graphics are perfectly aligned with your brand's identity and ready for application."
    }
  ];

  const listItems = [
    "Bold and weather-resistant designs",
    "Customizable to fit various trailer sizes",
    "High-quality vinyl for durability",
    "Easy to apply and maintain"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Trailer Spot Graphics"
        description="Enhance your trailers with custom spot graphics designed for maximum visibility and durability. Our graphics provide a bold, professional appearance that helps your brand stand out on the road."
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

export default TrailerSpotGraphics;
