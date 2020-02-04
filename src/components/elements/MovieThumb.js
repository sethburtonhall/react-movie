import React from "react";
import { StyledMovieThumb } from "../styles/StyledMovieThumb";

const MovieThumb = ({ image, movieId, movieTitle, clickable }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <a href={`/${movieId}`}>
          <img className="clickable" src={image} alt={movieTitle} />
        </a>
      ) : (
        <img src={image} alt={movieTitle} />
      )}
    </StyledMovieThumb>
  );
};

export default MovieThumb;
