import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const SidesFront = () => {
  const heading = "Enhance Your Vehicle with Sides + Front Window Tints";

  const paragraphs = [
    {
      title: "Comprehensive Tint Coverage",
      text: "Our sides + front window tints provide complete coverage for your vehicle’s side and front windows, offering both style and protection. This solution enhances your vehicle's appearance while delivering essential UV protection and privacy."
    },
    {
      title: "High-Quality Materials",
      text: "Made from premium materials, our window tints are designed for durability and long-lasting performance. They are engineered to withstand daily wear and tear, ensuring that your tints maintain their appearance and functionality over time."
    },
    {
      title: "Improved Comfort and Privacy",
      text: "With our sides + front window tints, you’ll enjoy reduced heat and glare inside your vehicle, leading to a more comfortable driving experience. The tints also provide enhanced privacy for you and your passengers."
    }
  ];

  const listItems = [
    "Full coverage for sides and front windows",
    "Durable and long-lasting materials",
    "Reduces heat and glare",
    "Enhances privacy and comfort"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Sides + Front Window Tints"
        description="Upgrade your vehicle with our sides + front window tints. Designed for comprehensive coverage, these tints provide improved comfort, privacy, and a sleek appearance."
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

export default SidesFront;
