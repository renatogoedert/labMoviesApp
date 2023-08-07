import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import LoadingButton from "@mui/lab/LoadingButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);

  const onUserSelect = async (e) => {
    e.preventDefault();
    setLoading(true);
    await context.addToFavourites(movie);
    setLoading(false);
  };

  // if(!context.addToFavourites(movie)){console.log("hh")};

  return (
    <LoadingButton
      loading={loading}
      aria-label="add to favorites"
      onClick={onUserSelect}
    >
      <FavoriteIcon fontSize="large" />
    </LoadingButton>
  );
};

export default AddToFavouritesIcon;
