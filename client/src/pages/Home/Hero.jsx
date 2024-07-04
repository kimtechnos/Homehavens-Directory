import React from "react";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <header>
            <h1>
              Discover Your perfect home away
              <br />
              from home
            </h1>
          </header>

          <form className="flex">
            <div className="box">
              <span>lacation/street</span>
              <input type="text" placeholder="location" />
            </div>
            <div className="box">
              <span>Property type</span>
              <input type="text" placeholder="property type" />
            </div>
            <div className="box">
              <span>price</span>
              <input type="text" placeholder="Price range" />
            </div>
            <div className="box">
              <h4>Filter</h4>
            </div>
            <button className="btn1">
              <FaSearch className="serach-icon" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Hero;
