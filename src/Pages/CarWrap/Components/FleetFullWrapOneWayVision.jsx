import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import ImageComponent from '../../../Components/ImageComponent';
import MultipleCollapses from '../../../Components/MultipleCollapses';

const FleetFullWrapOneWayVision = () => {
  const heading = "Enhance Your Fleet with One-Way Vision Full Wraps";

  const paragraphs = [
    {
      title: "Comprehensive and functional design",
      text: "Our fleet full wraps with one-way vision provide a unique blend of branding and functionality. These wraps offer complete coverage with a one-way vision feature, allowing you to advertise effectively while maintaining privacy for vehicle occupants. Ideal for fleet vehicles, they provide both visibility and discretion."
    },
    {
      title: "Optimized for fleet applications",
      text: "Perfect for businesses with multiple vehicles, our fleet full wraps with one-way vision ensure a cohesive and professional look across your entire fleet. The one-way vision feature allows for vibrant and engaging graphics on the outside, while providing a clear view from the inside. Crafted from durable vinyl, these wraps are built to withstand various environmental conditions."
    },
    {
      title: "Customizable and easy installation",
      text: "Designing your fleet full wraps is straightforward with our range of customization options. Select from our templates or work with our design team to create a wrap that aligns with your brand’s identity. The one-way vision technology enhances your brand’s visibility while keeping your fleet’s interior comfortable. Installation is efficient, ensuring minimal disruption to your operations."
    }
  ];

  const listItems = [
    "One-way vision technology for privacy and visibility",
    "Durable and weather-resistant vinyl",
    "Cohesive branding for fleet vehicles",
    "Customizable designs for maximum impact"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Fleet Full Wrap with One-Way Vision"
        description="Enhance your fleet with our premium full wraps featuring one-way vision technology. Designed to offer both vibrant branding and privacy, these wraps provide a professional appearance while ensuring comfort for your vehicle occupants."
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

export default FleetFullWrapOneWayVision;
