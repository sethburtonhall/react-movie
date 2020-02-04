import React from 'react';

// Packages
import PropTypes from 'prop-types'

// Styled Components
import { StyledLoadMoreButton } from "../styles/StyledLoadMoreButton";

const LoadMoreButton = ({ text, callback }) => {
  return (
    <StyledLoadMoreButton type="button" onClick={callback}>
      {text}
    </StyledLoadMoreButton>
  );
}

LoadMoreButton.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
};

export default LoadMoreButton