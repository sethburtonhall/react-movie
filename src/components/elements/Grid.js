import React from "react";

// Packages
import PropTypes from 'prop-types'

// Styled Components
import { StyledGrid, StyledGridContent } from "../styles/StyledGrid";

const Grid = ({ header, children }) => {
  
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>{children}</StyledGridContent>
    </StyledGrid>
  );
};

Grid.propTypes = {
  header: PropTypes.string
};

export default Grid;
