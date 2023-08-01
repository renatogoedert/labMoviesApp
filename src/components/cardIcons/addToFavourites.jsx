import React, { useContext, useState  } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { supabase } from '../../api/supabase';


const AddToFavouritesIcon = ({ movie }) => {
  const context = useContext(MoviesContext);
  const [text, setText] = useState('Hi!');
  const [loading, setLoading] = useState(false);
  // const toast = useToast();

  async function onUserSelect(e) {
    e.preventDefault();
    setLoading(true);
    const { data, error } = await supabase.from('favouriteMovies').insert([{ movie }]);
    setLoading(false);
    setText('');

    // toast({
    //   title: error || 'Task added!',
    //   position: 'top',
    //   status: error ? 'error' : 'success',
    //   duration: 2000,
    //   isClosable: true,
    // });
  }

  // const onUserSelect = (e) => {
  //   e.preventDefault();
  //   context.addToFavourites(movie);
  // };

  return (
    <IconButton aria-label="add to favorites" onClick={onUserSelect}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesIcon;
