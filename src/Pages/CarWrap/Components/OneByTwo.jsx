import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp"; // Ensure this image is relevant for 1/2 Car Wrap
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const OneByTwo = () => {
  const heading = "Transform Your Vehicle with a Premium 1/2 Car Wrap";
  
  const paragraphs = [
    {
      title: "Bold and impactful designs",
      text: "Our 1/2 car wraps are designed to provide a significant visual impact. Whether you're aiming to cover half of your vehicle or create a bold statement, these wraps deliver a professional and eye-catching result. With various design options and adaptability for different surfaces, they are made for maximum effectiveness."
    },
    {
      title: "Versatile branding applications",
      text: "Enhance your brand visibility with a 1/2 car wrap tailored to your needs. Highlight your logo, business name, or other key elements in a way that complements your brand’s identity. Made from high-quality vinyl, these wraps are durable and suitable for both indoor and outdoor settings, offering a long-lasting performance."
    },
    {
      title: "Effortless design process",
      text: "Customizing your 1/2 car wrap is simple and efficient. Choose from a variety of templates or create a design from scratch. Incorporate your brand colors, logo, and other visual elements to make the wrap uniquely yours. Our team is here to assist you throughout the process to ensure your wrap meets your expectations."
    }
  ];

  const listItems = [
    "Bold and impactful designs",
    "Durable high-quality vinyl",
    "Flexible application options",
    "Full-color, vivid printing"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="1/2 Car Wrap"
        description="Transform your vehicle with our premium 1/2 car wraps. Designed to cover half of your car, these wraps offer a bold and impactful visual presence, ensuring your brand stands out effectively."
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

export default OneByTwo;
