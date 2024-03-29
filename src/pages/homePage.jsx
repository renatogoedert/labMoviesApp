import React, { useState } from "react";
import HomePageSearchBar from "../components/homePageSearchBar";
import PageTemplate from "../components/templateMovieListPage";
import { getMovies, getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState(`popularity.desc`);
  const [year, setYear] = useState(2023);
  const [voteCount, setVoteCount] = useState(0);
  const [voteAverage, setVoteAverage] = useState(0);
  const [isAdult, setIsAdult] = useState(false);
  const { data, error, isLoading, isError } = useQuery(
    [
      "movies",
      { currentPage: currentPage },
      { sortBy: sortBy },
      { year: year },
      { isAdult: isAdult },
      { voteCount: voteCount },
      { voteAverage: voteAverage },
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
    <>
      <HomePageSearchBar
        sortBy={sortBy}
        setSortBy={setSortBy}
        year={year}
        setYear={setYear}
        isAdult={isAdult}
        setIsAdult={setIsAdult}
        setVoteCount={setVoteCount}
        setVoteAverage={setVoteAverage}
      />
      <PageTemplate
        title="Discover Movies"
        setCurrentPage={handlePageChange}
        isPlaylist={false}
        currentPage={currentPage}
        movies={movies}
        token={props.token}
        action={(movie) => {
          return (
            <>
              <AddToPlaylistIcon movie={movie} />
              <AddToFavouritesIcon movie={movie} />
            </>
          );
        }}
      />
    </>
  );
};
export default HomePage;
