import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";
import { supabase } from "../../api/supabase";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);


  const handleClick = async (e) => {
    console.log(e)
    // await supabase
    // .from("favouriteMovies")
    // .delete()
    // .eq("id", id);
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={handleClick}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesIcon;
