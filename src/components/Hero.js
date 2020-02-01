import React from "react";

const Hero = ({ heroImage }) => {
  const backgroundUrl = `https://image.tmdb.org/t/p/original${heroImage.backdrop_path}`

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
    </div>
  );
};

export default Hero;
