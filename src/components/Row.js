import React, { useEffect } from "react";

function Row() {
  useEffect(() => {
    const fetchurl = async () => {
      const request = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=ce79f3e685011079a163a28b583b1277&with_genre=35"
      );
      const parsedData = await request.json();
      parsedData.results.map((e) => {
        console.log(e.original_title);
      });
    };
    fetchurl();
  }, []);

  return <div></div>;
}

export default Row;
