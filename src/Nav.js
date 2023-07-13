import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="NETFLIX"
      />
      <div className="nav_menu">
        <span id="option">HOME</span>
        <span id="option">TRENDING</span>
        <span id="option">TOP RATED</span>
        <span
          id="option"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          MOVIE
          {showDropdown && (
            <div className="dropdown_movie">
              <span>ACTION</span>
              <span>COMEDY</span>
              <span>HORROR</span>
              <span>ROMANCE</span>
              <span>DOCUMENT</span>
            </div>
          )}
        </span>
      </div>
      <img
        className="nav_avatar"
        src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
        alt="AVATAR"
      />
    </div>
  );
}

export default Nav;
