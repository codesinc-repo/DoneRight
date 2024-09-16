import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const CommercialSiteWindowTints = () => {
  const heading = "Enhance Your Commercial Space with Premium Window Tints";

  const paragraphs = [
    {
      title: "Increased Privacy and Security",
      text: "Our commercial window tints provide excellent privacy for your business while still allowing natural light to enter. They help protect your assets and create a more secure environment for both employees and customers."
    },
    {
      title: "Energy Efficiency and Comfort",
      text: "Reduce energy costs and improve the comfort of your commercial space with our window tints. They block harmful UV rays and help maintain a consistent indoor temperature, making your business more energy-efficient."
    },
    {
      title: "Professional and Sleek Appearance",
      text: "Our window tints offer a sleek and professional look that enhances the aesthetic of any commercial building. They are available in various shades to match your branding and design preferences."
    }
  ];

  const listItems = [
    "Enhanced privacy and security",
    "Improved energy efficiency",
    "Blocks harmful UV rays",
    "Professional and sleek appearance",
    "Durable and easy to maintain"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Commercial Site/Store Window Tints"
        description="Upgrade your commercial space with our high-quality window tints. Designed for privacy, energy efficiency, and a professional look, these tints offer a durable solution for any business."
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

export default CommercialSiteWindowTints;
