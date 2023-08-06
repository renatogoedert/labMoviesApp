import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const AddToPlaylistIcon = ({ movie }) => {
  const { addMovieToPlaylist } = useContext(MoviesContext);

  const onUserSelect = (e) => {
    e.preventDefault();
    console.log(movie.id);
    addMovieToPlaylist(movie.id)
  };
  return (
    <IconButton aria-label="add to playlist" onClick={onUserSelect}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToPlaylistIcon;
