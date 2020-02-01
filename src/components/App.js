import React, { useState, useEffect } from 'react';
import Header from '../components/Header'
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import Popular from "../components/Popular";
import { Helmet } from "react-helmet";

const TMDB_API = {
  key: "4acf62add903150d27364ad2b1aa80d2",
  base: "https://api.themoviedb.org/"
};

const popularMoviesApi = `${TMDB_API.base}3/discover/movie?api_key=${TMDB_API.key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  async function fetchData() {
    const res = await fetch(popularMoviesApi)
    const data = await res.json()
    setPopularMovies(data.results)
    console.log(data.results)
    // console.log(data.results[0].backdrop_path);
  }
  
  useEffect(() => {
    fetchData()
  }, [setPopularMovies]);

    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Movie</title>
          <script
            src="https://kit.fontawesome.com/856c74694a.js"
            crossorigin="anonymous"
          ></script>
        </Helmet>

        <Header />
        {popularMovies.length > 0 && (
          <Hero heroImage={popularMovies[0]} />
        )}
        <SearchBar />
        <Popular movies={popularMovies} />
      </div>
    );
  };

  export default App