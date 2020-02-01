import React from "react";
import logo from "../images/logo.png";
import tmdbLogo from '../images/tmdb-logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header-content wrapper">
        <div className="logo">
          <img src={logo} alt="React Movie" />
        </div>
        <div className="tmdb-logo">
          <img src={tmdbLogo} alt="TMDB Logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
