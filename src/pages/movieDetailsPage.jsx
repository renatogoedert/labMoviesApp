import React from "react";
import { useParams } from "react-router-dom";
import {useLocation} from 'react-router-dom';
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner';

const MovieDetailsPage = (props) => {
  const { id } = useParams();
  const location = useLocation()

  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const movies = props

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie} movies={movies}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;
