import React, { useContext } from "react";
import PageTemplate from "../components/templateActorFavourites";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";


const FavouriteActorsPage = (props) => {
  const { favouritesActors: actorIds } = useContext(MoviesContext);


  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  
  const isLoading = favouriteActorQueries.find((a) => a.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const actors = favouriteActorQueries.map((q) => q.data);
  
  return (
    <PageTemplate
    title="Favourite Actors"
    actors={actors}
    token={props.token}
    action={(actor) => {
      return (
        <></>
      );
    }}
  />

  );
};

export default FavouriteActorsPage;
