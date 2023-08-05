import React, { useContext } from "react";
import PageTemplate from "../components/templateActorFavourites";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getActor } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouritesIconActor from "../components/cardIcons/removeFromFavouritesActor";
// import WriteReview from "../components/cardIcons/writeReview";

const FavouriteActorsPage = (props) => {
  const { favouritesActors: actorIds } = useContext(MoviesContext);

  // Create an array of queries and run them in parallel.
  const favouriteActorQueries = useQueries(
    actorIds.map((actorId) => {
      return {
        queryKey: ["actor", { id: actorId }],
        queryFn: getActor,
      };
    })
  );
  
  // Check if any of the parallel queries is still loading.
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
        <>
          <RemoveFromFavouritesIconActor actor={actor} />
          {/* <WriteReview actor={actor} /> */}
        </>
      );
    }}
  />

  );
};

export default FavouriteActorsPage;
