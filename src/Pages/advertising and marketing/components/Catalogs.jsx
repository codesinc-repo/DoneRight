import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const Catalog = () => {
  const heading = "Showcase Your Offerings with Custom Catalogs";

  const paragraphs = [
    {
      title: "Comprehensive Product Listings",
      text: "Catalogs are an essential tool for presenting your entire product or service range in an organized and visually appealing way. They provide customers with detailed information, helping them make informed decisions and increasing your chances of making a sale."
    },
    {
      title: "Custom Designs Tailored to Your Brand",
      text: "Our catalogs are designed to reflect your brand's identity and communicate your offerings effectively. With customizable layouts, styles, and finishes, you can create a catalog that not only informs but also captivates your audience."
    },
    {
      title: "High-Quality Printing for a Professional Look",
      text: "We use top-quality materials and advanced printing techniques to ensure that your catalogs are not just informative, but also visually striking. Our catalogs are crafted to impress and provide a tactile experience that online content can't match."
    }
  ];

  const listItems = [
    "Detailed product or service listings",
    "Customizable designs and layouts",
    "High-quality printing",
    "Ideal for showcasing a wide range of offerings"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Catalogs"
        description="Elevate your marketing strategy with our custom catalogs. Perfect for showcasing your products or services, these catalogs offer a professional and comprehensive way to communicate with your customers."
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

export default Catalog;
