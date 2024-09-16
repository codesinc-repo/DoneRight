import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const WrapOneWayVision = () => {
  const heading = "Enhance Privacy and Branding with One-Way Vision Wraps";

  const paragraphs = [
    {
      title: "Effective privacy and branding",
      text: "Our one-way vision wraps offer an excellent solution for enhancing privacy while showcasing your brand. Designed for windows and glass surfaces, these wraps allow visibility from the inside while providing a branded and opaque look from the outside. Perfect for offices, vehicles, and storefronts."
    },
    {
      title: "Durable and high-quality materials",
      text: "Made from top-grade one-way vision vinyl, these wraps are built to withstand various environmental conditions and daily use. They offer long-lasting performance, maintaining their visual appeal and effectiveness over time."
    },
    {
      title: "Customizable to fit your needs",
      text: "Personalize your one-way vision wraps with your brand’s graphics, colors, and logos. Whether you need full coverage or partial wraps, our solution can be tailored to your specifications. Our team is ready to assist you in creating the perfect design to meet your requirements."
    }
  ];

  const listItems = [
    "Privacy with one-way vision",
    "Durable, high-quality vinyl",
    "Customizable with brand graphics",
    "Ideal for windows and glass surfaces"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="One-Way Vision Wrap"
        description="Enhance privacy and branding with our premium one-way vision wraps. Designed to provide both privacy and visibility, these wraps ensure a professional and branded appearance for windows and glass surfaces."
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

export default WrapOneWayVision;
