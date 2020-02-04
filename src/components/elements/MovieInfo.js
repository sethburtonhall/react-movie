import React from "react";

// Packages
import PropTypes from 'prop-types'

//Components
import MovieThumb from "./MovieThumb";

// Styled Components
import { StyledMovieInfo } from "../styles/StyledMovieInfo";

// Images
import NoImage from "../../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo backdrop={movie.backdrop_path}>
    <div className="movieinfo-content">
      <div className="movieinfo-thumb">
        <MovieThumb
          image={
            movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
      </div>
      <div className="movieinfo-text">
        <h1>{movie.title}</h1>
        <h3>PLOT</h3>
        <p>{movie.overview}</p>
        <div className="rating-director">
          <div>
            <h3>IMDB RATING</h3>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="crew">
            <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.directors.map(e => (
              <p key={e.credit_id}>{e.name}</p>
            ))}
          </div>
          <div className="crew">
            <h3>WRITER{movie.writers.length > 1 ? "S" : ""}</h3>
            {movie.writers.map(e => (
              <p key={e.credit_id}>{e.name}</p>
            ))}
          </div>
          <div className="crew">
            <h3>PRODUCERS{movie.directors.length > 1 ? "S" : ""}</h3>
            {movie.producers.map(e => (
              <p key={e.credit_id}>{e.name}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  </StyledMovieInfo>
);

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
  writers: PropTypes.array,
  producers: PropTypes.array
};

export default MovieInfo;
