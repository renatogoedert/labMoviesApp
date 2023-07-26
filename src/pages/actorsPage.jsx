import React, { useState } from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIconActor from '../components/cardIcons/addToFavouritesActor';

const ActorPage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(
    ["actors", {currentPage: currentPage}],
    getActors
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
  
  const actors = data ? data.results : [];

  console.log(actors)

  return (
    <PageTemplate
      title="Discover Actors"
      setCurrentPage={handlePageChange}
      currentPage={currentPage}
      actors={actors}
       action={(actor) => {
         return <AddToFavouritesIconActor actor={actor} />
       }}
    />
  );
};
export default ActorPage;
