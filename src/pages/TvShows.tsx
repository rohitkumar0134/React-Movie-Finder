import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MovieList from "../components/MovieList";
import MovieListHeading from "../components/MovieListHeading";
import SearchBox from "../components/SearchBox";
import AddFavourites from "../components/AddFavourite";

const Movies = () => {
  const [Tvshow, settvshow] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [favourites, setFavourites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await axios.get(
        "https://api.themoviedb.org/3/tv/popular?api_key=07f4323b010be8895c703bb15c10e7d1"
      );
      settvshow(data.results);
    };
    fetchMovies();
  }, []);

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

  const handleSubmit = () => {
    console.log(searchValue);
    axios
      .get(
        `https://api.themoviedb.org/3/search/tv?api_key=07f4323b010be8895c703bb15c10e7d1&query=${searchValue}`
      )
      .then((response) => {
        settvshow(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addFavouriteMovie = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  };

  const navigateTodetails = (movie) => {
    navigate(`/tv/${movie.id}`);
  };

  return (
    <>
      <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Tv Shows" />
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleSubmit={handleSubmit}
          />
        </div>
        <div className="row">
          <MovieList
            movies={Tvshow}
            favouriteComponent={AddFavourites}
            handleFavouritesClick={addFavouriteMovie}
            navigateTodetails={navigateTodetails}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
