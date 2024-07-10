import "./services.css";
import React from 'react'
import { Link } from "react-router-dom";


const ServicesCard = ({
  homeImg,
  homeTitle,
  homeLocation,
  homeType,
  homePrice,
}) => {
  return (
    <>
      <div className="service-card">
        <div className="service-img">
          <img src={homeImg} alt={homeTitle} />
        </div>
        <div className="service-info">
          <h2>{homeTitle}</h2>
          <p className="location">{homeLocation}</p>
          <p className="type">{homeType}</p>
          <p className="price">{homePrice} $</p>
        </div>
        <Link to="/reviews">writ a review</Link>
      </div>
    </>
  );
};

export default ServicesCard
