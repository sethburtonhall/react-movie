import React, { useState } from "react";

// Config
import {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL
} from "../config";

// Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreButton from "./elements/LoadMoreButton";
import Spinner from "./elements/Spinner";

// Custom Hook
import { useHomeFetch } from "./hooks/useHomeFetch";

// Images
import NoImage from "../images/no_image.jpg";

const Home = () => {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error
    },
    fetchMovies
  ] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL; 
    setSearchTerm(search);
    fetchMovies(endpoint)
  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  }

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  // console.log(movies)

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies}/>
      <Grid header={searchTerm ? "Search Result" : "Popular Movies"}>
        {movies.map((movie, i) => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieTitle={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
      <LoadMoreButton text="Load More" callback={loadMoreMovies}/>
      )}
    </>
  );
};

export default Home;
