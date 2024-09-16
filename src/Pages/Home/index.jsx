import React from "react";
import Header from "../../Components/Header";
import Footer from '../../Components/Footer';
import Mainbanner from "../../Components/Mainbanner";
import MainCarousel from "../../Components/MainCarousel";
import Deals from "../../Components/Deals";
import TextWithImg from "../../Components/TextWithImg";
import BrandedMerch from "../../Components/BrandedMerch";
import textImg from '../../images/mockup hanging.jpg'
import ToolBusiness from "../../Components/ToolBusiness";
import RichText from "../../Components/richText";



function Home() {
    return (
        <>
            < Header />
            <div class="alert alert-dark alert-dismissible fade show" role="alert">
                <strong>Get Vinyl Banners </strong>start at just 10% off select 
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
            <Mainbanner />
            <MainCarousel />
            <Deals />
            <div className="container my-3">
                <h2>Save on stationery, gifts and more</h2>
            </div>
            <TextWithImg
                eyebrowText="Semi-Annual Sale"
                title="Up to 50% off invites & announcements"
                description1="Whether you're planning a wedding, baby shower or birthday party, find your dream invites in our custom collection."
                description2="Ends July 25"
                promoCode="PROMO2024"
                buttonText="Shop now"
                footnote="Discount will automatically be applied to your cart. Not combinable with promo codes."
                imgSrc={textImg}
                imgAlt="Sale Banner"
            />
            <BrandedMerch />
            <ToolBusiness />
            <div className=" container my-4">
                <h2>Made by you, Made With Done Right Decals</h2>
                <p>We love to see your custom creations. Post a photo on social media and add @Done Right Decals and Made With Done Right Decals for a chance to be featured here.</p>
            </div>
            <RichText />
            <Footer />
        </>
    );
}
export default Home;