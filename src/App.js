import Row from "./Row";
import "./App.css";
import requests from "./Requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="MOVIE ORIGINALS"
        fetchUrl={requests.fetchOriginals}
        isLargeRow
      />
      <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
      <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
}

export default App;
