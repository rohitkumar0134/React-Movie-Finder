import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import RemoveFavourites from "../components/RemoveFavourites";

const Favourites = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const movieFavourites = JSON.parse(localStorage.getItem("favourites"));

    if (movieFavourites === null) {
      setFavourites([]);
    } else {
      setFavourites(movieFavourites);
    }
    // setFavourites(movieFavourites);
    console.log(movieFavourites);
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("favourites", JSON.stringify(items));
  };

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== movie.id
    );

    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const navigateTodetails = (movie) => {
    if (movie.name === undefined) {
      console.log(movie.name);
      navigate(`/movie/${movie.id}`);
    } else {
      console.log(movie.name);
      navigate(`/tv/${movie.id}`);
    }
  };

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Favourites" />
        </div>

        <div className="row">
          <MovieList
            movies={favourites}
            handleFavouritesClick={removeFavouriteMovie}
            favouriteComponent={RemoveFavourites}
            navigateTodetails={navigateTodetails}
          />
        </div>
      </div>
    </>
  );
};

export default Favourites;
