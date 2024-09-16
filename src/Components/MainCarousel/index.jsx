import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; 
import { Link } from "react-router-dom"; 
import image1 from '../../images/35  tint.jpg';
import image2 from '../../images/12.png';
import image3 from '../../images/20_-tint.jpg';
import image4 from '../../images/12.png';
import image5 from '../../images/1by2 img03.webp';
import image6 from '../../images/1by2 img04.webp';
import image7 from '../../images/Apparel & Merch_3.jpg';
import image8 from '../../images/Apparel & Merch_4.jpg';
import image9 from '../../images/window tint 06.jpeg';
import image10 from '../../images/window tint 01.jpeg';
import './MainCarousel.css';

function MainCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleItems, setVisibleItems] = useState(7);

    const items = [
        { image: image1, altText: 'Image 1', title: 'Title 1', link: '#' },
        { image: image2, altText: 'Image 2', title: 'Title 2', link: '#' },
        { image: image3, altText: 'Image 3', title: 'Title 3', link: '#' },
        { image: image4, altText: 'Image 4', title: 'Title 4', link: '#' },
        { image: image5, altText: 'Image 5', title: 'Title 5', link: '#' },
        { image: image6, altText: 'Image 6', title: 'Title 6', link: '#' },
        { image: image7, altText: 'Image 7', title: 'Title 7', link: '#' },
        { image: image8, altText: 'Image 8', title: 'Title 8', link: '#' },
        { image: image9, altText: 'Image 9', title: 'Title 9', link: '#' },
        { image: image10, altText: 'Image 10', title: 'Title 10', link: '#' },
    ];

    useEffect(() => {
        const updateVisibleItems = () => {
            if (window.innerWidth >= 1200) {
                setVisibleItems(7);
            } else if (window.innerWidth >= 992) {
                setVisibleItems(5);
            } else if (window.innerWidth >= 768) {
                setVisibleItems(3);
            } else {
                setVisibleItems(1);
            }
        };

        updateVisibleItems();
        window.addEventListener('resize', updateVisibleItems);

        return () => window.removeEventListener('resize', updateVisibleItems);
    }, []);

    const updateCarousel = () => {
        const slicedItems = items.slice(currentIndex, currentIndex + visibleItems);
        return slicedItems.map((item, index) => (
            <div className="item" key={index}>
                <div className="carousel-slide">
                    <div className="carousel-tile" style={{ background: 'none' }}>
                        <div className="carousel-tile-image">
                            <span className="carousel-image-wrapper">
                                <img src={item.image} loading="lazy" alt={item.altText} />
                            </span>
                        </div>
                        <div className="carousel-tile-contents">
                            <Link to={item.link} className="carousel-link">
                                <div className="carousel-tile-name">
                                    <div className="carousel-title">{item.title}</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ));
    };

    const nextSlide = () => {
        if (currentIndex + visibleItems < items.length) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(Math.max(0, items.length - visibleItems));
        }
    };

    return (
        <div className="carousel-container">
            <button className="prev" onClick={prevSlide}>
                <FaArrowLeft size={20} color="#000" />
            </button>
            <div className="carousel-content">
                {updateCarousel()}
            </div>
            <button className="next" onClick={nextSlide}>
                <FaArrowRight size={20} color="#000" />
            </button>
        </div>
    );
}

export default MainCarousel;
