import React, { useState, useEffect } from "react";
import requests from "../requests";
import Navbar from "./Navbar";

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
      console.log(movie);
    };

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
        backgroundPosition: "center ",
      }}
    >
      <Navbar />
      <div className="banner_content">
        <div className="banner_title">{movie.name}</div>
        <div className="button">
          <button className="play">Play</button>
          <button className="my-list">MyList</button>
        </div>
        <div className="banner_description">{movie.overview}</div>
      </div>
      <div className="banner_fadeBottom"></div>
    </header>
  );
}

export default Banner;
