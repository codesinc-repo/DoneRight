import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const ColorCutOutVinyl = () => {
  const heading = "Transform Your Space with Color Cut-Out Vinyl";

  const paragraphs = [
    {
      title: "Bold and Unique Designs",
      text: "Our color cut-out vinyl offers a distinctive and eye-catching way to showcase your style. With custom designs and vibrant colors, you can create striking visual effects that set your space apart from the rest."
    },
    {
      title: "Highly Customizable",
      text: "Choose from a wide range of colors and design options to achieve a personalized look. Our color cut-out vinyl allows for intricate patterns and details, perfect for creating a standout feature or accent in any setting."
    },
    {
      title: "Durable and Easy to Maintain",
      text: "Made from high-quality materials, our color cut-out vinyl is built to endure. It resists fading and wear, ensuring that your designs stay vibrant and intact. Maintenance is simple, making it a practical choice for both residential and commercial applications."
    }
  ];

  const listItems = [
    "Customizable color and design options",
    "Eye-catching and unique visual effects",
    "Durable and resistant to wear",
    "Simple maintenance and easy application"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Color Cut-Out Vinyl"
        description="Enhance your space with our vibrant color cut-out vinyl. Perfect for creating custom designs and adding a unique touch, this vinyl combines durability with stunning visual appeal."
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

export default ColorCutOutVinyl;
