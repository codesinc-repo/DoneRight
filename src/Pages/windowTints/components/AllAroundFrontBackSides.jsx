import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const AllAroundFrontBackSides = () => {
  const heading = "Complete Coverage with All-Around Front, Back, and Sides Patterns";

  const paragraphs = [
    {
      title: "Comprehensive Vehicle Coverage",
      text: "Our all-around front, back, and sides patterns ensure complete coverage for your vehicle, providing a uniform look that protects every angle. Designed for a precise fit, these patterns deliver a professional and seamless appearance."
    },
    {
      title: "High-Quality Materials",
      text: "Constructed from top-grade materials, our patterns offer durability and resistance to wear. They are engineered to withstand various environmental factors while maintaining their appearance, making them an excellent choice for long-term use."
    },
    {
      title: "Easy Installation and Maintenance",
      text: "With our pre-cut patterns, installation is straightforward and hassle-free. The patterns are designed for easy application, and their maintenance is minimal, allowing you to keep your vehicle looking sharp with less effort."
    }
  ];

  const listItems = [
    "Complete front, back, and sides coverage",
    "Durable and high-quality materials",
    "Easy to install and maintain",
    "Professional and seamless appearance"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="All-Around Front, Back, and Sides Patterns"
        description="Get complete coverage for your vehicle with our all-around front, back, and sides patterns. These pre-cut patterns offer a seamless, professional finish with durability and easy maintenance."
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

export default AllAroundFrontBackSides;
