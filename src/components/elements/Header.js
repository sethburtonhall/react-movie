import React from "react";
import logo from "../../images/logo.png";
import tmdbLogo from '../../images/tmdb-logo.png';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader'

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <StyledRMDBLogo src={logo} alt="React Movie" />
        <StyledTMDBLogo src={tmdbLogo} alt="TMDB Logo" /> 
      </div>
    </StyledHeader>
  );
};

export default Header;
