import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const HouseWindowTints = () => {
  const heading = "Enhance Your Home with Premium Window Tints";

  const paragraphs = [
    {
      title: "Energy Efficiency and Comfort",
      text: "Our premium window tints are designed to improve your home's energy efficiency, reducing heat gain during the summer and retaining warmth during the winter. Enjoy a more comfortable living environment with lower energy bills."
    },
    {
      title: "UV Protection and Glare Reduction",
      text: "Protect your home's interior from harmful UV rays with our high-quality window tints. These tints also reduce glare, making your living spaces more comfortable and protecting your furniture and decor from fading."
    },
    {
      title: "Privacy and Aesthetic Appeal",
      text: "Enhance the privacy of your home without compromising on natural light. Our window tints provide a sleek, modern appearance that complements any home design, giving you the privacy you need while maintaining an attractive look."
    }
  ];

  const listItems = [
    "Improved energy efficiency",
    "Protection from UV rays",
    "Reduced glare for comfort",
    "Enhanced privacy with style"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="House Window Tints"
        description="Upgrade your home with our premium window tints. Enjoy energy efficiency, UV protection, and enhanced privacy with our stylish and functional window tint solutions."
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

export default HouseWindowTints;
