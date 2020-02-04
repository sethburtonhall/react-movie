import React from "react";

// Packages
import { Router } from "@reach/router";
import { Helmet } from "react-helmet";

// Components
import Header from "./elements/Header";
import Home from "./Home";
import Movie from "./Movie";
import NotFound from "./NotFound";

// Styles
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>React Movie</title>
        <link
          href="https://fonts.googleapis.com/css?family=Abel"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/856c74694a.js"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
      </Router>
    </div>
  );
};

export default App;
