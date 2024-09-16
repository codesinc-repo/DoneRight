import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const BrandedMerchandise = () => {
  const heading = "Maximize Your Reach with Custom Flyers";

  const paragraphs = [
    {
      title: "Effective and Affordable Marketing",
      text: "Flyers are a cost-effective way to reach your target audience with impactful marketing messages. Whether you're promoting an event, launching a new product, or announcing a special offer, custom flyers deliver your message directly into the hands of your customers."
    },
    {
      title: "Custom Designs that Stand Out",
      text: "Our flyers are designed to catch the eye and hold attention. With a range of customization options including sizes, paper types, and finishes, you can create a flyer that perfectly represents your brand and communicates your message clearly and effectively."
    },
    {
      title: "High-Quality Printing",
      text: "We use premium materials and advanced printing techniques to ensure your flyers look professional and polished. From vibrant colors to crisp text, our flyers are crafted to make a lasting impression."
    }
  ];

  const listItems = [
    "Cost-effective marketing tool",
    "Customizable designs and sizes",
    "High-quality printing",
    "Perfect for promotions and events"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Flyers"
        description="Boost your marketing efforts with our custom flyers. Designed to be eye-catching and effective, these flyers offer an affordable way to communicate your message to a wide audience."
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

export default BrandedMerchandise;
