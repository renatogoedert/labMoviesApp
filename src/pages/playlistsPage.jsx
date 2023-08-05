import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieFavourites";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import { useRealtime } from "react-supabase";
import { supabase } from "../api/supabase";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const playlistsPage = (props) => {
  const { playlists } = useContext(MoviesContext);
  console.log(playlists)


  // // Create an array of queries and run them in parallel.
  // const favouriteMovieQueries = useQueries(
  //   movieIds.map((movieId) => {
  //     return {
  //       queryKey: ["movie", { id: movieId }],
  //       queryFn: getMovie,
  //     };
  //   })
  // );
  // // Check if any of the parallel queries is still loading.
  // const isLoading = favouriteMovieQueries.find((m) => m.isLoading === true);

  // if (isLoading) {
  //   return <Spinner />;
  // }

  // const movies = favouriteMovieQueries.map((q) => q.data);

  return (
    <Stack spacing={2} direction="row">
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
  </Stack>
    // <PageTemplate
    //   title="Favourite Movies"
    //   movies={movies}
    //   token={props.token}
    //   action={(movie) => {
    //     return (
    //       <>
    //         {/* <WriteReview movie={movie} /> */}
    //         {/* <RemoveFromFavourites movie={movie} /> */}
    //       </>
    //     );
    //   }}
    // />
  );
};

export default playlistsPage;