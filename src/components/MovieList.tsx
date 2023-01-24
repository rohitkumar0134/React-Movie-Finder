import { useEffect } from "react";
import Button from "react-bootstrap/Button";

const MovieList = (props) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="card" key={movie.id}>
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
            alt={`${movie.title} poster`}
          />
          <div
            className="overlay d-flex align-items-center justify-content-center"
            onClick={() => props.handleFavouritesClick(movie)}
          >
            <FavouriteComponent />
          </div>
          <Button
            variant="primary"
            onClick={() => props.navigateTodetails(movie)}
          >
            Read More
          </Button>
        </div>
      ))}
    </>
  );
};

export default MovieList;
