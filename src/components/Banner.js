import React, { useState, useEffect } from "react";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await fetch(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginal}`
      );
      const Data = await request.json();

      setMovie(
        Data.results[Math.floor(Math.random() * Data.results.length - 1)]
      );
    };
    fetchData();
  }, [movie]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
        backgroundPosition: "center ",
      }}
    >
      <div className="banner_contents"></div>
    </header>
  );
}

export default Banner;
