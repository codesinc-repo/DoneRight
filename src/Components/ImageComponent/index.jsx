import React, { useState } from "react";
import CarImg01 from "../../images/card-2.jpg";
import CarImg02 from "../../images/card-3.webp";
import CarImg03 from "../../images/card-4.jpg";
import CarImg04 from "../../images/card-6.jpg";
import CarImg05 from "../../images/card-7.jpg";

const ImageComponent = () => {
    const [bgImage, setBgImage] = useState(" ");

    const handleImageClick = (imageUrl) => {
        setBgImage(`url(${imageUrl})`);
        console.log(`Background Image Set to: ${imageUrl}`);
    };

    return (
        <div className="column">
            <div
                id="img-holder"
                style={{
                    backgroundImage: bgImage,
                    width: "100%",
                    height: "300px",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="left-icon">
                <div>
                    <img
                        onClick={() => handleImageClick(CarImg01)}
                        src={CarImg01}
                        id="left-circle"
                        alt="Car 1"
                    />
                </div>
                <div>
                    <img
                        onClick={() => handleImageClick(CarImg02)}
                        src={CarImg02}
                        id="left-circle"
                        alt="Car 2"
                    />
                </div>
                <div>
                    <img
                        onClick={() => handleImageClick(CarImg03)}
                        src={CarImg03}
                        id="left-circle"
                        alt="Car 3"
                    />
                </div>
                <div>
                    <img
                        onClick={() => handleImageClick(CarImg04)}
                        src={CarImg04}
                        id="left-circle"
                        alt="Car 4"
                    />
                </div>
                <div>
                    <img
                        onClick={() => handleImageClick(CarImg05)}
                        src={CarImg05}
                        id="left-circle"
                        alt="Car 5"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageComponent;
