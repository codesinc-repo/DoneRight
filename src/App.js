import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import UploadDesignTemplate from "./Pages/UploadDesignTemplate";
import SpotGraphicHeading from './Pages/CarWrap/Components/SpotGraphicsHeading';
import CustomSpotGraphic from './Pages/CarWrap/Components/CustomSpotGraphic';
import BasicSpotGraphics from './Pages/CarWrap/Components/BasicSpotGraphics';
import FleetSpotGraphics from './Pages/CarWrap/Components/FleetSpotGraphics';
import TrailerSpotGraphics from './Pages/CarWrap/Components/TrailerSpotGraphics';
import PartialWraps from './Pages/CarWrap/Components/PartialWraps';
import OneByEight from './Pages/CarWrap/Components/OneByEight';
import OneByFour from './Pages/CarWrap/Components/OneByFour';
import OneByTwo from './Pages/CarWrap/Components/OneByTwo';
import ThreeByFour from './Pages/CarWrap/Components/ThreeByFour';
import FullWraps from './Pages/CarWrap/Components/FullWraps';
import CustomFullWrap from './Pages/CarWrap/Components/CustomFullWrap';
import FullOneWayVision from './Pages/CarWrap/Components/FullOneWayVision';
import WrapOneWayVision from './Pages/CarWrap/Components/WrapOneWayVision';
import FullColorChangeWrap from './Pages/CarWrap/Components/FullColorChangeWrap';
import CommercialFullWrap from './Pages/CarWrap/Components/CommercialFullWrap';
import FleetFullWrapOneWayVision from './Pages/CarWrap/Components/FleetFullWrapOneWayVision';
import UserDashboard from './Pages/UserDashboard';
import AboutUs from './Pages/AboutUs';
import Login from "./Pages/Authentication/login"
import Register from "./Pages/Authentication/Register"

// Store Fronts
import VinylTypesApplications from './Pages/StoreFronts/components/VinylTypesApplications'
import FrostedGlassVinyl from './Pages/StoreFronts/components/FrostedGlassVinyl'
import ColorCutOutVinyl from './Pages/StoreFronts/components/ColorCutOutVinyl'
import FullCoverageOneWayVisionVinyl from './Pages/StoreFronts/components/FullCoverageOneWayVisionVinyl'
// Window Tints
import WindowTintsHeading from './Pages/windowTints/components/WindowTintsHeading'
import CarWindowTints from './Pages/windowTints/components/CarWindowTints'
import CommercialSiteWindowTints from './Pages/windowTints/components/CommercialSiteWindowTints'
import CustomWindowTints from './Pages/windowTints/components/CustomWindowTints'
import FleetWindowTints from './Pages/windowTints/components/FleetWindowTints'
import HouseWindowTints from './Pages/windowTints/components/HouseWindowTints'
// pre cut car pattern
import PreCutCarPatterns from './Pages/windowTints/components/PreCutCarPatterns'
import AllAroundFrontBackSides from './Pages/windowTints/components/AllAroundFrontBackSides'
import ShopAllPatterns from './Pages/windowTints/components/ShopAllPatterns'
import SinglePieceVisorStripSunroof from './Pages/windowTints/components/SinglePieceVisorStripSunroof'
import SidesFront from './Pages/windowTints/components/SidesFront'
import SidesBack from './Pages/windowTints/components/SidesBack'

// Sign and Banner 
import BannerTypes from './Pages/Signs and Banners/components/BannerTypes';
import VinylBanners from './Pages/Signs and Banners/components/VinylBanners';
import MeshBanners from './Pages/Signs and Banners/components/MeshBanners';
import ConstructionSiteMeshFenceBanners from './Pages/Signs and Banners/components/ConstructionSiteMeshFenceBanners';
import PoleBanners from './Pages/Signs and Banners/components/PoleBanners';
import TruckFrameBanners from './Pages/Signs and Banners/components/TruckFrameBanners';
import SignageSolutions from './Pages/Signs and Banners/components/SignageSolutions';
import YardSigns from './Pages/Signs and Banners/components/YardSigns';
import SidewalkAFrameSigns from './Pages/Signs and Banners/components/SidewalkAFrameSigns';
import SolidAluminumSigns from './Pages/Signs and Banners/components/SolidAluminumSigns';
import AcrylicSigns from './Pages/Signs and Banners/components/AcrylicSigns';
import CardstockSigns from './Pages/Signs and Banners/components/CardstockSigns';
import Poster from './Pages/Signs and Banners/components/Posters';
// Print and Advertising
import PrintAdvertisingHeading from './Pages/advertising and marketing/components/PrintAdvertingHeading';
import Flyers from './Pages/advertising and marketing/components/Flyers';
import Posters from './Pages/advertising and marketing/components/poster';
import Brochures from './Pages/advertising and marketing/components/Bruchors';
import PromotionalItem from './Pages/advertising and marketing/components/PromotionalItem';
import Catolog from './Pages/advertising and marketing/components/Catalogs';
import MainHeading from './Pages/MainHeading';
//  Footer Pages
import About from './Pages/Footer/About';
import PromotionalItemsHeading from './Pages/advertising and marketing/components/PromotionalItemsHeading';
import BrandedMerchandise from './Pages/advertising and marketing/components/BrandedMerchandise';
import BusinessCards from './Pages/advertising and marketing/components/BusinessCards';
import Pens from './Pages/advertising and marketing/components/Pens';
import Notebooks from './Pages/advertising and marketing/components/Notebooks';
import WebsiteDoneRightDecals from './Pages/WebsiteDoneRightDecals';
import LogoDesign from './Pages/LogoDesign';
import Accessbility from './Pages/Footer/Accessbility';
import Career from './Pages/Footer/Career';
import DataSaleOutput from './Pages/Footer/DataSaleOutput';
import News from './Pages/Footer/News';
import ResellerProgram from './Pages/Footer/ResellerProgram';
import Sustainability from './Pages/Footer/Sustainability';
// import AmbassadorProgram from './Pages/Footer/AmbassadorProgram';
import Shipping from './Pages/Footer/Shipping';
import HelpCenter from './Pages/Footer/HelpCenter';
import Hub from './Pages/Footer/Hub';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About-us" element={<AboutUs />} />
        <Route exact path="/WebsiteDoneRightDecals" element={<WebsiteDoneRightDecals />} />
        <Route exact path="/LogoDesign" element={<LogoDesign />} />
        <Route exact path="/Spot-Graphics-Heading" element={<SpotGraphicHeading />} />
        <Route exact path="/Custom-Spot-Graphics" element={<CustomSpotGraphic />} />
        <Route exact path="/Basic-Spot-Graphics" element={<BasicSpotGraphics />} />
        <Route exact path="/Fleet-Spot-Graphics" element={<FleetSpotGraphics />} />
        <Route exact path="/Trailer-Spot-Graphics" element={<TrailerSpotGraphics />} />
        {/* Main Heading  */}
        <Route exact path="/MainHeading" element={<MainHeading />} />
        {/* UserDashboard  */}
        <Route exact path="/UserDashboard" element={<UserDashboard />} />
        {/* partial Wraps */}
        <Route exact path="/Partial-Wraps" element={<PartialWraps />} />
        <Route exact path="/One-By-Eight" element={<OneByEight />} />
        <Route exact path="/One-By-Four" element={<OneByFour />} />
        <Route exact path="/One-By-Two" element={<OneByTwo />} />
        <Route exact path="/Three-By-Four" element={<ThreeByFour />} />
        {/* Full Wrap */}
        <Route exact path="/Full-Wraps" element={<FullWraps />} />
        <Route exact path="/Custom-Full-Wrap" element={<CustomFullWrap />} />
        <Route exact path="/Full-Color-Change-Wrap" element={<FullColorChangeWrap />} />
        <Route exact path="/Wrap-One-Way-Vision" element={<WrapOneWayVision />} />
        <Route exact path="/Full-One-Way-Vision" element={<FullOneWayVision />} />
        <Route exact path="/Commercial-Full-Wrap" element={<CommercialFullWrap />} />
        <Route exact path="/Fleet-Full-Wrap-One-Way-Vision" element={<FleetFullWrapOneWayVision />} />
        {/* Store Fronts */}
        <Route exact path="/Vinyl-Types-Applications" element={<VinylTypesApplications />} />
        <Route exact path="/Frosted-Glass-Vinyl" element={<FrostedGlassVinyl />} />
        <Route exact path="/Full-Coverage-One-Way-Vision-Vinyl" element={<FullCoverageOneWayVisionVinyl />} />
        <Route exact path="/Color-Cut-Out-Vinyl" element={<ColorCutOutVinyl />} />
        {/* Window Tints */}
        <Route exact path="/Window-Tints-Heading" element={<WindowTintsHeading />} />
        <Route exact path="/Car-Window-Tints" element={<CarWindowTints />} />
        <Route exact path="/Commercial-Site-Window-Tints" element={<CommercialSiteWindowTints />} />
        <Route exact path="/Custom-Window-Tints" element={<CustomWindowTints />} />
        <Route exact path="/Fleet-Window-Tints" element={<FleetWindowTints />} />
        <Route exact path="/House-Window-Tints" element={<HouseWindowTints />} />
        {/* pre cut car pattern */}
        <Route exact path="/Pre-Cut-Car-Patterns" element={<PreCutCarPatterns />} />
        <Route exact path="/Shop-All-Patterns" element={<ShopAllPatterns />} />
        <Route exact path="/All-Around-Front-Back-Sides" element={<AllAroundFrontBackSides />} />
        <Route exact path="/Single-Piece-Visor-Strip-Sunroof" element={<SinglePieceVisorStripSunroof />} />
        <Route exact path="/Sides-Front" element={<SidesFront />} />
        <Route exact path="/Sides-Back" element={<SidesBack />} />
        {/*  */}
        {/* <Route exact path="/House-Window-Tints" element={<HouseWindowTints />} /> */}
        {/* Sign and Banner  */}
        <Route exact path="/Banner-Types" element={<BannerTypes />} />
        <Route exact path="/Vinyl-Banners" element={<VinylBanners />} />
        <Route exact path="/Mesh-Banners" element={<MeshBanners />} />
        <Route exact path="/Construction-Site-Mesh-Fence-Banners" element={<ConstructionSiteMeshFenceBanners />} />
        <Route exact path="/Pole-Banners" element={<PoleBanners />} />
        <Route exact path="/Truck-Frame-Banners" element={<TruckFrameBanners />} />
        <Route exact path="/Signage-Solutions" element={<SignageSolutions />} />
        <Route exact path="/Yard-Signs" element={<YardSigns />} />
        <Route exact path="/Sidewalk-AFrame-Signs" element={<SidewalkAFrameSigns />} />
        <Route exact path="/Solid-Aluminum-Signs" element={<SolidAluminumSigns />} />
        <Route exact path="/Acrylic-Signs" element={<AcrylicSigns/>} />
        <Route exact path="/Cardstock-Signs" element={<CardstockSigns/>} />
        <Route exact path="/Poster" element={<Poster/>} />
        {/* {/Advertising and marketing/} */}
        <Route exact path="print-advertising-heading" element={<PrintAdvertisingHeading />} />
        <Route exact path="Flyers" element={<Flyers />} />
        <Route exact path="Posters" element={<Posters />} />
        <Route exact path="Brochurs" element={<Brochures />} />
        <Route exact path="Catalogs" element={<Catolog />} />
        <Route exact path="Promotional-item" element={<PromotionalItem />} />
        <Route exact path="Promotional-item-Heading" element={<PromotionalItemsHeading />} />
        <Route exact path="Branded-Merchandise" element={<BrandedMerchandise />} />
        <Route exact path="Business-Cards" element={<BusinessCards />} />
        <Route exact path="Pens" element={<Pens />} />
        <Route exact path="Notebooks" element={<Notebooks />} />
        {/* Upload Design Template  */}
        <Route exact path="/Upload-Design-Template" element={<UploadDesignTemplate />} />
        {/* Footer */}
        <Route exact path="Footer/About" element={<About />} />
        <Route exact path="Footer/Accessbility" element={<Accessbility/>} />
        <Route exact path="Footer/Career" element={<Career/>} />
        <Route exact path="Footer/DataSaleOutput" element={<DataSaleOutput/>} />
        <Route exact path="Footer/News" element={<News/>} />
        <Route exact path="Footer/ResellerProgram" element={<ResellerProgram/>} />
        <Route exact path="Footer/Sustainability" element={<Sustainability/>} />
        {/* <Route exact path="Footer/AmbassadorProgram" element={<AmbassadorProgram/>} /> */}
        <Route exact path="Footer/Shipping" element={<Shipping/>} />
        <Route exact path="Footer/HelpCenter" element={<HelpCenter/>} />
        <Route exact path="Footer/Hub" element={<Hub/>} />

        {/* authentication */}
        <Route exact path="SignIn" element={<Login />} />
        <Route exact path="SignUp" element={<Register/>} />


      </Routes>
    </Router>
  );
}

export default App;