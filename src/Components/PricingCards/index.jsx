import React from 'react';
import { Link } from "react-router-dom"; 

const PricingCards = ({ 
  to, 
  imageSrc, 
  badgeText, 
  title, 
  description, 
  rating, 
  ratingCount, 
  price 
}) => {
  return (
    <div className="col-lg-3 col-sm-12 mb-4">
      <div className="card h-100 border-0"> {/* border-0 class ensures no border is applied */}
        <Link className="text-dark text-decoration-none" to={to}>
          <div className="card-image">
            <img src={imageSrc} className="card-img-top" alt="Card Image" />
            {badgeText && <span className="badge">{badgeText}</span>}
          </div>
          <div className="card-body py-2">
            <h6 className="card-title">{title}</h6>
            <p className="card-text" style={{fontSize:"14px"}}>{description}</p>
            <div className="rating"style={{fontSize:"14px"}}>
              <span className="stars text-warning">{"★".repeat(Math.floor(rating)) + "☆".repeat(5 - Math.floor(rating))}</span>
              <span className="rating-value">{rating}</span>
              <span className="rating-count">({ratingCount})</span>
            </div>
            <p className="price" style={{fontSize:"14px"}}>{price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PricingCards;
