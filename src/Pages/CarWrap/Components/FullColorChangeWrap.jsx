import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FullColorChangeWrap = () => {
  const heading = "Revolutionize Your Look with Full Color Change Wraps";

  const paragraphs = [
    {
      title: "Transformative and bold designs",
      text: "Our full color change wraps offer a complete overhaul for your vehicle’s appearance. Whether you're looking to switch up the color or create a dramatic visual impact, these wraps provide a vibrant and eye-catching solution. Designed for full coverage, they ensure a seamless and professional finish."
    },
    {
      title: "Versatile and customizable",
      text: "Choose from an extensive range of colors and finishes to achieve your desired look. Our full color change wraps are perfect for personalizing your vehicle, enhancing its appearance, or giving it a fresh new look. With high-quality vinyl and precise application, you can trust our wraps to deliver exceptional results."
    },
    {
      title: "Durable and long-lasting",
      text: "Crafted from premium vinyl, our full color change wraps are built to last. They offer excellent resistance to weather conditions and everyday wear and tear, ensuring your vehicle maintains its new look over time. Easy to maintain and remove, these wraps provide both style and practicality."
    }
  ];

  const listItems = [
    "Complete color transformation",
    "Wide range of colors and finishes",
    "Durable and weather-resistant vinyl",
    "Seamless and professional application"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Full Color Change Wrap"
        description="Revolutionize the look of your vehicle with our premium full color change wraps. Designed to provide a complete transformation, these wraps deliver a bold and vibrant appearance that is both durable and stylish."
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

export default FullColorChangeWrap;
