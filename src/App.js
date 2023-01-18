import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import MovieList from "./component/movieList/MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Naruto Shippuden",
      rating: 5,
      img: "https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg",
    },
  ]);

  const deleteMovieHandler = (id) => {
    setMovies(movies.filter((item) => item.id !== id));
  };

  const moviesAdd = (data) => {
    const moviesList = [...movies];
    moviesList.push(data);
    setMovies(moviesList);
  };

  return (
    <div>
      <Header moviesAdd={moviesAdd} />
      <MovieList movies={movies} deleteMovieHandler={deleteMovieHandler} />
    </div>
  );
}

export default App;
