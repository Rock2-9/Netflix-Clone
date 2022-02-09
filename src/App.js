import "./App.css";
import Banner from "./components/Banner";
import Row from "./components/Row";
import requests from "./requests";
function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        category_url={requests.fetchNetflixOriginal}
        title="NETFLIX ORIGINALS"
        isLarge={true}
      />
      <Row category_url={requests.fetchTrending} title="Trending Movies" />

      <Row category_url={requests.fetchTopRated} title="Top Rated Movies" />
      <Row category_url={requests.fetchActionMovies} title="Acton Movies" />
      <Row category_url={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row category_url={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row category_url={requests.fetchRomanceMovies} title="Romantic Movies" />
      <Row
        category_url={requests.fetchDocumentaries}
        title="Documentary Movies"
      />
    </div>
  );
}

export default App;
