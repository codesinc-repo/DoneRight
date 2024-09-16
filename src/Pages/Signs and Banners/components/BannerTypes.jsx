import React from "react";
import Header from "../../../Components/Header";
import PricingCards from "../../../Components/PricingCards";
import SimpleImgWithText from "../../../Components/SimpleImgWithText";
import img01 from "../../../images/Custom Signs & Print Advertising_1.jpg";
import img02 from "../../../images/Custom Signs & Print Advertising_3.jpg";
import img03 from "../../../images/Custom Signs & Print Advertising_5.jpg";
import img06 from "../../../images/Custom Signs & Print Advertising_4.jpg";
import img04 from "../../../images/Custom Signs & Print Advertising_6.jpg";
import FAQ from "../../../Components/FAQ";
import Footer from "../../../Components/Footer";

const BannerTypes = () => {
  return (
    <>
      <Header />
      <div className="title-section text-start g-0 p-3 container mt-4">
        <h2>Explore Our Range of Banner Types</h2>
        <p>
          Discover a variety of banner solutions designed to meet your needs. From eye-catching Vinyl Banners to versatile mesh fence banners, we offer high-quality options for every application.
        </p>
        <h3 className="mt-2">
          Find the Perfect Banner for Your Project
        </h3>
        <p>
          Whether you need to promote your business, enhance your space, or make a statement, our diverse banner options provide the durability and visual impact you need. Explore our offerings and choose the perfect solution for your project.
        </p>
      </div>

      <div className="container">
        <div className="row mt-5">
          {/* Card 01 */}
          <PricingCards
            to="/Vinyl-Banners"
            imageSrc={img01}
            badgeText="New low price"
            title="Vinyl Banners"
            description="Transform your vehicle with vibrant, high-quality Vinyl Banners that make a bold statement on the road."
            rating={4.5}
            ratingCount={2100}
            price="Starting at $499.99"
          />

          {/* Card 02 */}
          <PricingCards
            to="/Mesh-Banners"
            imageSrc={img02}
            badgeText="New low price"
            title="Mesh Banners"
            description="Enhance visibility and security at construction sites with durable, weather-resistant Mesh Banners."
            rating={4.7}
            ratingCount={1850}
            price="Starting at $549.99"
          />

          {/* Card 03 */}
          <PricingCards
            to="/Construction-Site-Mesh-Fence-Banners"
            imageSrc={img03}
            badgeText="New low price"
            title="Construction Site Mesh Fence Banners"
            description="Grab attention in high-traffic areas with versatile, customizable Construction Site Mesh Fence Banners designed for effective advertising."
            rating={4.6}
            ratingCount={1900}
            price="Starting at $599.99"
          />

          <PricingCards
            to="/Pole-Banners"
            imageSrc={img06}
            badgeText="New low price"
            title="Pole Banners"
            description="Grab attention in high-traffic areas with versatile, customizable Pole Banners designed for effective advertising."
            rating={4.6}
            ratingCount={1900}
            price="Starting at $599.99"
          />
          <PricingCards
            to="/Truck-Frame-Banners"
            imageSrc={img04}
            badgeText="New low price"
            title="Truck Frame Banners"
            description="Grab attention in high-traffic areas with versatile, customizable Truck Frame Banners designed for effective advertising."
            rating={4.6}
            ratingCount={1900}
            price="Starting at $599.99"
          />
        </div>
      </div>

      <div className="mt-4 p-3">
        <SimpleImgWithText
          title="Elevate Your Advertising with Premium Banners"
          paragraphs="Discover our range of high-quality banners designed to meet various needs. From Vinyl Banners to mesh fence banners and pole banners, we provide durable and customizable options that enhance visibility and make a lasting impression. Choose the ideal banner for your project and showcase your message with confidence."
          imageSrc={img06}
        />
      </div>

      <FAQ />
      <Footer />
    </>
  );
};

export default BannerTypes;
