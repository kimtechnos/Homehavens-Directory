// src/components/Header/Header.js
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="Navbar">
      <span className="nav-logo">HomeHaven</span>
      <div className={`nav-items ${isOpen ? "open" : ""}`}>
        <Link to="/home" onClick={handleLinkClick}>
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick}>
          About
        </Link>
        <Link to="/services" onClick={handleLinkClick}>
          Homes
        </Link>
        <Link to="/contact" onClick={handleLinkClick}>
          Contact
        </Link>
        {!isAuthenticated ? (
          <>
            <Link to="/" className="nav-signup" onClick={handleLinkClick}>
              Sign up
            </Link>
            <Link to="/login" className="nav-login" onClick={handleLinkClick}>
              Login
            </Link>
          </>
        ) : (
          <button className="nav-login" onClick={logout}>Logout</button>
        )}
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