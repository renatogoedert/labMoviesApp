import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylistsIcon = ({ movie, name }) => {
  const { deleteMoviePlaylist } = useContext(MoviesContext);

  const handleClick = async (e) => {
    deleteMoviePlaylist(movie.id, name);
  };

  return (
    <IconButton aria-label="remove from favorites" onClick={handleClick}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistsIcon;
