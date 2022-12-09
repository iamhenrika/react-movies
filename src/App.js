import { useState, useEffect } from "react";
import "./App.css";
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

function App() {
  //State to hold movie data
  const [movie, setMovie] = useState(null);
  //variable with your apiKey
  const apiKey = process.env.REACT_APP_API_KEY;

  //Function to getMovies
  const getMovie = async (searchTerm) => {
    // make fetch request and store response
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
    );

    // Parse JSON response into a javascript object
    const data = await response.json();
    //set the Movie state to the movie
    setMovie(data);
  };

  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Mr. Smith Goes to Washington");
  }, []);

  return (
    <div className="App">
      <Form getMovie={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}

export default App;
