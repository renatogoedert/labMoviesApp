import React from "react";
import PageTemplate from "../components/templateActorListPage";
import { getActors } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import AddToFavouritesIconActor from '../components/cardIcons/addToFavouritesActor';

const ActorPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("actors", getActors);

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
      actors={actors}
       action={(actor) => {
         return <AddToFavouritesIconActor actor={actor} />
       }}
    />
  );
};
export default ActorPage;
