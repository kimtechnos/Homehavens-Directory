import React from "react";
import "./banner.css";

const Banner = ({ name, title, cover }) => {
  return (
    <>
      <div className="banner">
        <div className="container">
          <span>{name}</span>
          <h1>{title}</h1>
        </div>
        <img src={cover} alt="Banner" />
      </div>
    </>
  );
};

export default Banner;
