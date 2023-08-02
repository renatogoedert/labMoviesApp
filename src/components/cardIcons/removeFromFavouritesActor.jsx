import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouritesIconActor = ({ actor }) => {
  const context = useContext(MoviesContext);

  async function onUserRequest() {
    const { data, error } = await supabase
      .from("favouriteActors")
      .delete()
      .eq("id", actor.id);
    console.log(error);
  }

  return (
    <IconButton aria-label="remove from favorites" onClick={onUserRequest}>
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavouritesIconActor;
