import React from 'react';

import { StyledLoadMoreButton } from "../styles/StyledLoadMoreButton";

const LoadMoreButton = ({ text, callback }) => {
  return (
    <StyledLoadMoreButton type="button" onClick={callback}>
      {text}
    </StyledLoadMoreButton>
  );
}

export default LoadMoreButton