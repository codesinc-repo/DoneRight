import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CarWindowTints = () => {
  const heading = "Enhance Your Vehicle with Premium Car Window Tints";

  const paragraphs = [
    {
      title: "Superior UV Protection and Comfort",
      text: "Our premium car window tints are designed to block harmful UV rays, reduce glare, and maintain a comfortable interior temperature. Experience enhanced comfort and protection while driving, without compromising on style."
    },
    {
      title: "Sleek and Stylish Appearance",
      text: "Achieve a sleek and polished look for your vehicle with our high-quality window tints. Available in various shades, these tints not only enhance privacy but also add a touch of sophistication to your car's appearance."
    },
    {
      title: "Durable and Long-Lasting",
      text: "Crafted from top-grade materials, our car window tints are built to last, providing excellent performance and durability. They are resistant to fading, bubbling, and peeling, ensuring that your car retains its premium look over time."
    }
  ];

  const listItems = [
    "Blocks harmful UV rays",
    "Reduces glare and heat",
    "Enhances privacy and security",
    "Stylish and sleek appearance",
    "Long-lasting and fade-resistant"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Premium Car Window Tints"
        description="Elevate your driving experience with our premium car window tints. Offering superior UV protection, enhanced privacy, and a sleek appearance, our tints are designed for durability and long-lasting performance."
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

export default CarWindowTints;
