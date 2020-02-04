import React from "react";

// Packages
import { Link } from "@reach/router";
import PropTypes from 'prop-types'

// Styled Components
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, movieTitle, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img className="clickable" src={image} alt={movieTitle} />
        </Link>
      ) : (
        <img src={image} alt={movieTitle} />
      )}
    </StyledMovieThumb>
  );
};

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  movieTitle: PropTypes.string,
  clickable: PropTypes.bool
};

export default MovieThumb;
