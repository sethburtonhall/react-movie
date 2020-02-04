import React from 'react';
import { IMAGE_BASE_URL,POSTER_SIZE } from '../../config';

const Popular = ({ movies }) => {
  return (
    <div className="popular-movies">
      <div className="wrapper">
        <h1>Most Popular</h1>
        <div className="popular-movies-flex">
          {movies.movies.slice(0, 18).map(movie => (
            <div key={movie.id} className="movie">
              <img
                className="movie-poster"
                src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular