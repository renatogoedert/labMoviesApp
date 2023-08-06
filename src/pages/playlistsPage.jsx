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
  Paper,
  TextField,
  Button,
  MenuItem,
  Typography,
  Select,
  OutlinedInput,
  Chip,
} from "@mui/material";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  item1: { m: 1},
  item2: { m: 1 },
};

const playlistsPage = (props) => {
  const [name, setName] = useState("test");
  const { playlists, addToPlaylists } = useContext(MoviesContext);
  const [formData, setFormData] = useState({
    name: "Playlist Name",
    theme: "coral",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  let names = playlists.filter((p) => (p.moviesId)).map((p) => p.name);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  let movieIds = playlists.find((p) => p.name === name).moviesId;

  let theme = playlists.find((p) => p.name === name).theme;

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

  const handleSubmit = (event) => {
    event.preventDefault();
    addToPlaylists(formData);
  };

  // const theme = "blue"

  return (
    <>
      <Paper component="div" sx={styles.root}>
        <TextField
          select
          sx={styles.item1}
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
        <Typography sx={styles.item2}>Create New Playlist</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Playlist Name"
            type="name"
            sx={styles.item2}
            id="name"
            name="name"
            value={formData.year}
            onChange={handleFormChange}
          ></TextField>
          <TextField
            label="Theme"
            type="theme"
            sx={styles.item2}
            id="theme"
            name="theme"
            value={formData.year}
            onChange={handleFormChange}
          ></TextField>
          <Button sx={styles.item2} variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </form>
      </Paper>
      <PageTemplate
        title="Favourite Movies"
        movies={movies}
        isPlaylist={true}
        theme={theme}
        token={props.token}
        action={(movie) => {
          return (
            <>
              {/* <WriteReview movie={movie} /> */}
              {/* <RemoveFromFavourites movie={movie} /> */}
            </>
          );
        }}
      />
    </>
  );
};

export default playlistsPage;