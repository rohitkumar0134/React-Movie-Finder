import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Castcard from "../components/Castcard";
import Reviewcard from "../components/Reviewcard";
import "../App.css";

const DetailPage = ({ match }) => {
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchMovie = async () => {
      const movieResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=07f4323b010be8895c703bb15c10e7d1&language=en-US`
      );
      setMovie(movieResponse.data);

      const creditsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=07f4323b010be8895c703bb15c10e7d1&language=en-US`
      );
      console.log(creditsResponse);
      setCredits(creditsResponse.data.cast);

      const reviewsResponse = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=07f4323b010be8895c703bb15c10e7d1&language=en-US&page=1`
      );
      setReviews(reviewsResponse.data.results);
    };
    fetchMovie();
  }, [id]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              className="w-75 p-3"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
          <div className="col-md-6">
            <div className="col-md-12">
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </div>
      {credits.length > 0 && (
        <div>
          <br />
          <h2>Cast </h2>
          <div className="card-group card-group-scroll">
            {credits.map((cast) => (
              <div className="card">
                <Castcard key={cast.id} cast={cast} />
              </div>
            ))}
          </div>
        </div>
      )}
      {reviews.length > 0 && (
        <div>
          <h2>Reviews:</h2>
          <div className="card-group card-group-scroll scroller">
            {reviews.map((review) => (
              <div className="card">
                <Reviewcard key={review.id} review={review} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
