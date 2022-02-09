import React, { useEffect, useState } from "react";
import "./row.css";

function Row(props) {
  const { category_url, title, isLarge } = props;
  const [movie, setMovie] = useState({ img_url: [], movie_title: [] });
  const base_url = "https://api.themoviedb.org/3";
  const fetchUrl = async () => {
    const request = await fetch(`${base_url}${category_url}`);
    const parsedData = await request.json();
    const movie_title = parsedData.results.map((e) => {
      return e.original_title;
    });
    const poster_path = parsedData.results.map((e) => {
      return e.poster_path;
    });

    setMovie({ img_url: poster_path, movie_title: movie_title });
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <div className="movie">
        <div className={isLarge ? "movie_large_content" : "movie_content"}>
          {movie.img_url.map((x) => (
            <img
              className="img_row"
              src={`https://image.tmdb.org/t/p/w500${x}`}
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Row;
