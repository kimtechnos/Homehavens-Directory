import "./services.css";
import React from "react";
import { Link } from "react-router-dom";

const ServicesCard = ({
  homeImg,
  homeTitle,
  homeLocation,
  homeType,
  homePrice,
  id,
  onDelete,
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
        <button className="delete-btn" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
      <Link to="/reviews">Write a review</Link>
    </div>
  );
};

export default ServicesCard;
