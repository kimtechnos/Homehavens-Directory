import React from "react";
import "./property.css";
import PropertyCard from "./PropertyCard";

const Property = () => {
  return (
    <>
      <section className="properties-background">
        <div className="container">
          <h1>Our Properties</h1>
          <PropertyCard />
        </div>
      </section>
    </>
  );
};

export default Property;
