import React from "react";
import { useParams } from "react-router-dom";
import ActorDetails from "../components/actorDetails";
import PageTemplate from "../components/templateActorPage";
import { getActor } from '../api/tmdb-api'
import { getActorCredits } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const ActorDetailsPage = () => {
  const { id } = useParams();

  const { data: actor, error, isLoading, isError } = useQuery(
    ["actorDetails", { id: id }],
    getActor
  );

  const { data: actorCredits } = useQuery(
    ["actorCredits", { id: id }],
    getActorCredits
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      {actor ? (
        <>
          <PageTemplate actor={actor}>
            <ActorDetails actor={actor} actorCredits={actorCredits}/>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for actor details</p>
      )}
    </>
  );
};

export default ActorDetailsPage;