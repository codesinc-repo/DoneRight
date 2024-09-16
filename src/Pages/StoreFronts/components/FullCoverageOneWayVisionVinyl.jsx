import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FullCoverageOneWayVisionVinyl = () => {
  const heading = "Enhance Your Fleet with Full Coverage One-Way Vision Vinyl";

  const paragraphs = [
    {
      title: "Optimal Privacy and Visibility",
      text: "Our full coverage one-way vision vinyl provides an ideal solution for fleet vehicles, offering privacy while allowing visibility from the inside. This vinyl ensures your branding is visible from the outside while maintaining a sleek and professional appearance."
    },
    {
      title: "Professional and Uniform Look",
      text: "Designed to give your fleet a cohesive and polished look, this vinyl is perfect for companies looking to enhance their vehicle branding. With its high-quality finish and uniform application, it creates a strong visual impact that communicates professionalism and consistency."
    },
    {
      title: "Durable and Long-Lasting",
      text: "Made from premium materials, our one-way vision vinyl is built to withstand various weather conditions and daily wear. It offers exceptional durability and longevity, ensuring that your fleet’s appearance remains impressive over time."
    }
  ];

  const listItems = [
    "Enhanced privacy with one-way vision",
    "Uniform and professional appearance",
    "Durable and weather-resistant material",
    "Ideal for fleet branding and advertising"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Full Coverage One-Way Vision Vinyl"
        description="Upgrade your fleet with our high-quality full coverage one-way vision vinyl. Perfect for maintaining privacy and delivering a professional look, this vinyl is durable and designed for long-lasting performance."
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

export default FullCoverageOneWayVisionVinyl;
