import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const SidesBack = () => {
  const heading = "Enhance Your Vehicle with Sides + Back Window Tints";

  const paragraphs = [
    {
      title: "Complete Coverage for Sides and Back",
      text: "Our sides + back window tints offer comprehensive coverage for the side and rear windows of your vehicle. This tinting solution enhances your vehicle’s appearance while providing superior UV protection and increased privacy."
    },
    {
      title: "Top-Quality Materials",
      text: "Constructed from high-grade materials, our window tints are built to last. They resist fading and wear, ensuring a long-lasting and effective solution for both aesthetics and functionality."
    },
    {
      title: "Enhanced Privacy and Comfort",
      text: "With our sides + back window tints, you'll benefit from reduced heat and glare inside your vehicle, improving comfort for you and your passengers. The tints also enhance privacy, giving you peace of mind on the road."
    }
  ];

  const listItems = [
    "Full coverage for sides and back windows",
    "Durable and high-quality materials",
    "Reduces heat and glare",
    "Improves privacy and comfort"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Sides + Back Window Tints"
        description="Upgrade your vehicle with our sides + back window tints. Offering full coverage and exceptional quality, these tints provide enhanced comfort, privacy, and a sleek look."
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

export default SidesBack;
