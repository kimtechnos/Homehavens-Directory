import "./services.css";
import React from 'react'


const ServicesCard = ({
  homeImg,
  homeTitle,
  homeLocation,
  homeType,
  homePrice,
}) => {
  return (
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
    </div>
  );
};

export default ServicesCard
