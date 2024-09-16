import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp"; // Ensure this image is relevant for 3/4 Car Wrap
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const ThreeByFour = () => {
  const heading = "Transform Your Vehicle with a Premium 3/4 Car Wrap";
  
  const paragraphs = [
    {
      title: "Bold and striking designs",
      text: "Our 3/4 car wraps are designed to provide a significant visual impact. Covering three-quarters of your vehicle, these wraps offer a bold and professional look. With various design options and adaptability for different surfaces, they are crafted to make a strong statement and maximize effectiveness."
    },
    {
      title: "Versatile branding opportunities",
      text: "Enhance your brand visibility with a 3/4 car wrap tailored to your needs. These wraps can showcase your logo, business name, or other key elements prominently. Made from high-quality vinyl, they are durable and suitable for both indoor and outdoor settings, providing long-lasting performance."
    },
    {
      title: "Seamless customization process",
      text: "Customizing your 3/4 car wrap is easy and efficient. Select from a variety of templates or design your own from scratch. Incorporate your brand colors, logo, and other visual elements to create a wrap that stands out. Our team is here to help you throughout the process to ensure your wrap meets your expectations."
    }
  ];

  const listItems = [
    "Bold and striking designs",
    "Durable high-quality vinyl",
    "Flexible application options",
    "Full-color, vivid printing"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="3/4 Car Wrap"
        description="Transform your vehicle with our premium 3/4 car wraps. Covering three-quarters of your car, these wraps offer a bold and impactful visual presence, ensuring your brand stands out effectively."
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

export default ThreeByFour;
