import React, { useContext, useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import { useQueries } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavourites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";
import { useRealtime } from "react-supabase";
import { supabase } from "../api/supabase";
import {
  FormControl,
  TextField,
  Box,
  MenuItem,
  InputAdornment,
  Select,
  OutlinedInput,
  Chip,
} from "@mui/material";

const playlistsPage = (props) => {
  const [name, setName] = useState("test");
  const { playlists } = useContext(MoviesContext);

  let names = playlists.map((p) => p.name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  let movieIds = playlists.find((p) => p.name === name).moviesId;

  // Create an array of queries and run them in parallel.
  const movieQueries = useQueries(
    movieIds.map((movieId) => {
      return {
        queryKey: [name, { id: movieId }],
        queryFn: getMovie,
      };
    })
  );
  // Check if any of the parallel queries is still loading.
  const isLoading = movieQueries.find((m) => m.isLoading === true);

  

  if (isLoading) {
    return <Spinner />;
  }

  let movies = movieQueries.map((q) => q.data);

  console.log(movies);

  return (
    <><TextField
      select
      label="Playlist"
      type="name"
      id="name"
      name="name"
      value={name}
      onChange={handleChange}
    >
      {names.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
    <PageTemplate
        title="Favourite Movies"
        movies={movies}
        token={props.token}
        action={(movie) => {
          return (
            <>
              {/* <WriteReview movie={movie} /> */}
              {/* <RemoveFromFavourites movie={movie} /> */}
            </>
          );
        } } /></>
  );
};

export default playlistsPage;
