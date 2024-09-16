import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const BasicSpotGraphics = () => {
  const heading = "Enhance your brand with simple yet impactful spot graphics.";
  
  const paragraphs = [
    {
      title: "Simple yet effective design",
      text: "Basic spot graphics offer a streamlined approach to enhancing your branding. Designed for a range of surfaces, these graphics provide a straightforward yet impactful way to make your brand visible. Whether you're looking for subtle enhancements or noticeable additions, our basic spot graphics can meet your needs efficiently."
    },
    {
      title: "Practical applications for various surfaces",
      text: "Our basic spot graphics are versatile and suitable for a range of applications. Ideal for adding logos, taglines, or key information, they help maintain brand consistency while being cost-effective. Made from durable materials, these graphics perform well in both indoor and outdoor settings, offering lasting quality and visibility."
    },
    {
      title: "Effortless design and application",
      text: "Creating basic spot graphics is straightforward with our user-friendly process. Select from pre-designed templates or customize your own with ease. Our team is available to assist with the design and application process, ensuring that your graphics are aligned with your brand and meet your expectations."
    }
  ];

  const listItems = [
    "Straightforward and effective designs",
    "Durable and versatile materials",
    "Cost-effective solutions",
    "Easy to apply and remove"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Basic Spot Graphics"
        description="Boost your branding with our basic spot graphics. Designed for simplicity and effectiveness, these graphics provide a practical solution for enhancing visibility and brand consistency."
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

export default BasicSpotGraphics;
