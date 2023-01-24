import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movies from "./pages/Movies";
import TvShows from "./pages/TvShows";
import TvDetails from "./pages/TvDetails";
import MovieDetails from "./pages/MovieDetails";
import Favourites from "./pages/Favourites";
import NavigationBar from "./components/NavigationBar";

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/tv" element={<TvShows />} />
        <Route path="/tv/:id" element={<TvDetails />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favourite" element={<Favourites />} />
      </Routes>
    </Router>
  );
};

export default App;
