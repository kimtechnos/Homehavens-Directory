import React from "react";
import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import Banner from "../../componenents/Banner/Banner";

const Services = () => {
  return (
    <>
      <Banner name="About Us" title="who are we?" cover={img} />
      <div>
        <h3>Services</h3>
      </div>
    </>
  );
};

export default Services;
