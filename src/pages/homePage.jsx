import React, { useState } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies, getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites';

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState("popularity.desc");
  const [year, setYear] = useState("");
  const [isAdult, setIsAdult] = useState("false")
  const { data, error, isLoading, isError } = useQuery(
    [
      "movies", 
      {currentPage: currentPage}, 
      {sortBy: sortBy},
      {year: year},
      {isAdult: isAdult}
    ], 
    getMovies
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  const movies = data ? data.results : [];

  return (
    <PageTemplate
      title="Discover Movies"
      setCurrentPage={handlePageChange}
      currentPage={currentPage}
      movies={movies}
      action={(movie) => {
        return <AddToFavouritesIcon movie={movie} />
      }}
    />
  );
};
export default HomePage;

