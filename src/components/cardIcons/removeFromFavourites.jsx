import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  async function onUserRequest(e) {
    console.log("HHH")
    e.preventDefault();
    console.log()
    const { error } = await supabase
    .from("favouriteMovies")
    .delete()
    .eq("id", movie.id);
  console.log(error);
  };

  const onUserSelect = (e) => {
    console.log("HHH");
  };

return (
  <IconButton
    aria-label="remove from favorites"
    onClick={context.removeFromFavourites(movie)}
  >
    <DeleteIcon color="primary" fontSize="large" />
  </IconButton>
);
};

export default RemoveFromFavouritesIcon;
