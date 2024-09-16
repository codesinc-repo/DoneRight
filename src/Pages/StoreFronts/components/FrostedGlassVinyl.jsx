import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FrostedGlassVinyl = () => {
  const heading = "Elevate Your Space with Frosted Glass Vinyl";

  const paragraphs = [
    {
      title: "Elegant and Modern Design",
      text: "Our frosted glass vinyl adds a touch of elegance and modernity to any space. Perfect for creating a sleek, frosted appearance on windows or glass surfaces, it enhances privacy while maintaining a stylish look."
    },
    {
      title: "Versatile Applications",
      text: "Ideal for both residential and commercial settings, our frosted glass vinyl can be used on a variety of surfaces. From office partitions to home windows, it provides a refined and versatile solution for any space."
    },
    {
      title: "Durable and Easy to Maintain",
      text: "Crafted from high-quality materials, our frosted glass vinyl is durable and easy to clean. It withstands everyday wear and tear, ensuring that your surfaces look pristine with minimal upkeep."
    }
  ];

  const listItems = [
    "Elegant frosted appearance",
    "Versatile for various surfaces",
    "Durable and easy to maintain",
    "Enhances privacy while allowing light"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Frosted Glass Vinyl"
        description="Transform your space with our frosted glass vinyl. Perfect for adding a modern, elegant touch to windows and glass surfaces, it combines style with functionality."
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

export default FrostedGlassVinyl;
