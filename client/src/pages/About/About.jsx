import React from "react";
import Banner from "../../componenents/Banner/Banner";
import img from "../../assets/red-vector-illustration-banner-rent-260nw-1639612453.webp";
import img2 from "../../assets/property-2.jpg";
import "./about.css";
const About = () => {
  return (
    <>
      <Banner name="About Us" title="who are we?" cover={img} />
      <section>
        <div class="container-about">
          <div class="left-row">
            <h2>About us</h2>
            <p class="subtitle">About home havens</p>
            <p>
              At Home Havens, we believe that a home is more than just a place
              it's a sanctuary, a space where memories are made, and a
              reflection of your lifestyle.
            </p>
            <p>
              We are dedicated to helping you find the perfect haven that suits
              your needs and desires.We are dedicated to helping you find the
              perfect haven that suits your needs and desires.
            </p>
            <button class="button">Read more</button>
          </div>
          <div class="right-row">
            <img src={img2} alt="House" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
