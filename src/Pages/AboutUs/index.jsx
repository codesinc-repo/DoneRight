import React from "react";
import TopHeader from "../../Components/TopHeader";
import '../../Components/Header/Header.css';
import MultipleCollapses from "../../Components/MultipleCollapses";
function AboutUs(){
    return (
        <div>
            <TopHeader/>
            <h1>About Us Page</h1>
            <MultipleCollapses
            />
        </div>
    )
};
export default AboutUs;