import React from 'react';

const Popular = ({ movies }) => {
  return (
    <div className="popular-movies">
      <div className="wrapper">
        <div>Popular Movies</div>
        <div className="popular-movies-flex">
          {movies.map(movie => (
            <div key={movie.id} className="movie">
              <img
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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