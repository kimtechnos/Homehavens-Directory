import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Connect With Us</h4>
            <ul className="list-unstyled">
              <li>
                <FaFacebook />
                <span> Facebook</span>
              </li>
              <li>
                <FaWhatsapp />
                <span> Whatsapp</span>
              </li>
              <li>
                <FaTwitter />
                <span> Twitter</span>
              </li>
            </ul>
          </div>

          <div className="col">
            <h4>Sitemap</h4>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
              <li>Sign In</li>
            </ul>
          </div>

          <div className="col">
            <h4>Homehaven</h4>
            <ul className="list-unstyled">
              <li>
                <FaPhone /> phone: 0769443375
              </li>
              <li>
                <FaEnvelope /> email: homehaven.com
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Havenhomes | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
