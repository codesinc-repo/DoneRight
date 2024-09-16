import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FleetWindowTints = () => {
  const heading = "Enhance Your Fleet with Premium Window Tints";

  const paragraphs = [
    {
      title: "Uniform and Professional Appearance",
      text: "Our fleet window tints provide a consistent look across all your vehicles, ensuring that your brand appears cohesive and professional. These tints are perfect for companies looking to enhance their fleet’s image while providing additional privacy."
    },
    {
      title: "Durability and UV Protection",
      text: "Designed to withstand harsh conditions, our window tints protect your fleet’s interiors from harmful UV rays and reduce glare. This not only enhances comfort but also helps preserve the condition of your vehicles over time."
    },
    {
      title: "Cost-Effective and Customizable",
      text: "Our fleet window tints are available in various shades and can be customized to meet your specific needs. They offer a cost-effective solution for enhancing the appearance and functionality of your fleet vehicles."
    }
  ];

  const listItems = [
    "Consistent and professional fleet appearance",
    "UV protection and glare reduction",
    "Durable and long-lasting materials",
    "Cost-effective and customizable options"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Fleet Window Tints"
        description="Upgrade your fleet with our high-quality window tints, offering uniform appearance, UV protection, and long-lasting durability."
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

export default FleetWindowTints;
