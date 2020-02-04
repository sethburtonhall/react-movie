import React from "react";
import { Helmet } from "react-helmet";
import Header from "./elements/Header"
import Home from "./Home"
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
      <Home />
    </div>
  );
}

export default App;
