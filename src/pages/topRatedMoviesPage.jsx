import React, { useState } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { getTopRatedMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

const TopRatedMovies = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(
    ["topRated", {currentPage: currentPage}],
    getTopRatedMovies
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

  const topRatedMovies = data ? data.results : [];

  return (
    <PageTemplate
      title="Top Rated Movies"
      setCurrentPage={handlePageChange}
      currentPage={currentPage}
      movies={topRatedMovies}
       action={(movie) => {
         return <AddToPlaylistIcon movie={movie} />
       }}
    />
  );
};
export default TopRatedMovies;