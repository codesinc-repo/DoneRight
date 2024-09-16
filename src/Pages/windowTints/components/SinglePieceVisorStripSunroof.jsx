import React from 'react';
import Header from "../../../Components/Header";
import Footer from "../../../Components/Footer";
import DetailSection from "../../../Components/DetailSection";
import MainCarousel from "../../../Components/MainCarousel";
import Img from "../../../images/1by2 img04.webp";
import ImgWithTextDetailSec from "../../../Components/ImgWithTextDetailSec";
import MultipleCollapses from '../../../Components/MultipleCollapses';

const SinglePieceVisorStripSunroof = () => {
  const heading = "Enhance Your Vehicle with a Single Piece Visor Strip and Sunroof Tint";

  const paragraphs = [
    {
      title: "Sleek and Functional Design",
      text: "Our single piece visor strip and sunroof tints provide a streamlined look that enhances your vehicle’s appearance while offering practical benefits. The single piece design ensures a seamless application, improving both aesthetics and function."
    },
    {
      title: "Optimal UV Protection",
      text: "Designed to block harmful UV rays, our tints help keep the interior of your vehicle cooler and protect your dashboard and upholstery from fading. Enjoy added comfort and longevity with our high-quality tint solutions."
    },
    {
      title: "Easy Installation and Maintenance",
      text: "Our visor strip and sunroof tints are crafted for easy installation, with a user-friendly application process. They are also simple to maintain, ensuring that you can keep your vehicle looking sharp with minimal effort."
    }
  ];

  const listItems = [
    "Seamless single piece design",
    "Provides optimal UV protection",
    "Enhances vehicle appearance",
    "Easy to install and maintain"
  ];

  return (
    <>
      <Header />
      <DetailSection
        title="Single Piece Visor Strip and Sunroof Tint"
        description="Upgrade your vehicle with our single piece visor strip and sunroof tint. Designed for both style and function, these tints provide a sleek look while offering essential UV protection and easy maintenance."
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

export default SinglePieceVisorStripSunroof;
