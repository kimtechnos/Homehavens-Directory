import React from 'react'
import "./footer.css"
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col">
              <h4>Connect With US</h4>
              <h1 className="list-unstyled">
                <li>
                  <FaFacebook />
                  FACEBOOK
                </li>
                <li><FaWhatsapp/>Whatsap</li>
                <li><FaTwitter/>X</li>
              </h1>
            </div>

            <div className="col">
              <h4>sitmap</h4>
              <ui className="list-unstyled">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Services</li>
                <li>sign in</li>
              </ui>
            </div>

            <div className="col">
              <h4>Homehaven</h4>
              <ui className="list-unstyled">
                <li><FaPhone/>phone: 0769443375</li>
                <li><FaEnvelope/>email: homehaven.com</li>
              </ui>
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
    </div>
  );
}

export default Footer;
