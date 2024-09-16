import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const Posters = () => {
  const heading = "Make a Bold Statement with Custom Posters";

  const paragraphs = [
    {
      title: "Visual Impact That Captures Attention",
      text: "Posters are an effective way to convey your message with striking visuals and bold designs. Whether promoting a product, event, or brand, custom posters are designed to grab attention and leave a lasting impression on your audience."
    },
    {
      title: "Customizable to Fit Your Needs",
      text: "Our posters come in a variety of sizes, materials, and finishes, allowing you to create a design that perfectly aligns with your brand identity. From vibrant colors to detailed graphics, your posters will stand out in any setting."
    },
    {
      title: "High-Quality Printing for Lasting Appeal",
      text: "We use state-of-the-art printing technology to ensure your posters look professional and high-quality. Whether displayed indoors or outdoors, our posters are designed to maintain their visual appeal over time."
    }
  ];

  const listItems = [
    "Eye-catching designs",
    "Customizable sizes and materials",
    "High-quality, durable printing",
    "Perfect for promotions and events"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Custom Posters"
        description="Enhance your marketing efforts with our custom posters. Designed to capture attention and convey your message with impact, these posters are the ideal solution for making a bold statement."
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

export default Posters;
