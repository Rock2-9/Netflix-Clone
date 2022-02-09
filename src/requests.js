const API_Key = "ce79f3e685011079a163a28b583b1277";

const requests = {
  fetchTrending: `/trending/all/weeek?api_key=${API_Key}&language=en-US`,
  fetchNetflixOriginal: `/discover/tv?api_key=${API_Key}&with_netework=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_genres=99`,
};

export default requests;
