import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">HomeHaven</span>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/services" onClick={handleLinkClick}>
          Services
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
        <Link to="/singup" className="nav-signup" onClick={handleLinkClick}>
          sing up
        </Link>
        <Link to="/login" className="nav-login" onClick={handleLinkClick}>
          login
        </Link>
      </div>
      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
