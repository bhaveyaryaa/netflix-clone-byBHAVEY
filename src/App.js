import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner />
    
     <Row title="NETFLIX ORIGINALS"  
     fetchUrl={requests.fetchNetflixOriginals}
     isLargeRow />
     <Row title="Trending Now"  fetchUrl={requests.fetchTrending} />
     <Row title="TopRated"  fetchUrl={requests.fetchTopRated} />
     <Row title="Action"  fetchUrl={requests.fetchActionMovies} />
     <Row title="Comedy"  fetchUrl={requests.fetchComedyMovies} />
     <Row title="Horror"  fetchUrl={requests.fetchHorrorMovies} />
     <Row title="Romance"  fetchUrl={requests.fetchRomanceMovies} />
     <Row title="Documentaries"  fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
