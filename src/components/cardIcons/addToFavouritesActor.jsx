import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import LoadingButton from "@mui/lab/LoadingButton";
import FavoriteIcon from "@mui/icons-material/Favorite";

const AddToFavouritesIconActor = ({ actor }) => {
  const context = useContext(MoviesContext);
  const [loading, setLoading] = useState(false);

  const onUserSelect = async (e) => {
    e.preventDefault();
    setLoading(true);
    await context.addToFavouritesActors(actor);
    setLoading(false);
  };
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

export default AddToFavouritesIconActor;