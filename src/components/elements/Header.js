import React from "react";

// Packages
import { Link } from "@reach/router";


// Images
import logo from "../../images/logo.png";
import tmdbLogo from '../../images/tmdb-logo.png';

// Styled Components
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={logo} alt="React Movie" />
        </Link>
        <a
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <StyledTMDBLogo src={tmdbLogo} alt="TMDB Logo" />
        </a>
      </div>
    </StyledHeader>
  );
};

export default Header;
