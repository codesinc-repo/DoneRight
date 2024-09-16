import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const Brochures = () => {
  const heading = "Elevate Your Brand with Custom Brochures";

  const paragraphs = [
    {
      title: "Comprehensive and Informative",
      text: "Brochures are a versatile tool that allows you to present detailed information about your products, services, or company in a structured and visually appealing format. Perfect for trade shows, presentations, or as handouts, they help you communicate your message effectively."
    },
    {
      title: "Tailored Designs to Reflect Your Brand",
      text: "Our brochures are customizable to match your brand identity. Choose from various sizes, folds, paper types, and finishes to create a brochure that not only looks professional but also resonates with your target audience."
    },
    {
      title: "High-Quality Printing for a Lasting Impression",
      text: "We use top-notch printing technology and premium materials to ensure your brochures make a strong impact. From vivid images to sharp text, our brochures are crafted to showcase your brand in the best light possible."
    }
  ];

  const listItems = [
    "Versatile marketing tool",
    "Customizable designs and layouts",
    "High-quality, durable printing",
    "Ideal for detailed presentations"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Brochures"
        description="Enhance your marketing strategy with our custom brochures. Designed to be informative and visually appealing, these brochures are the perfect way to present your brand's story in detail."
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

export default Brochures;
