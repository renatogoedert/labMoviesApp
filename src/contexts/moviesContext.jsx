import React, { useState, useEffect } from "react";
import { supabase } from "../api/supabase";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  useEffect(() => {
    let list = [];
    const fetch = async () => {
      const { data, error } = await supabase
        .from("favouriteActors")
        .select("id");
      data.map((d) => list.push(d.id));
      return list;
    };
    setFavouritesActors(list);
    fetch();
  }, []);

  useEffect(() => {
    let list = [];
    const fetch = async () => {
      const { data, error } = await supabase
        .from("favouriteMovies")
        .select("id");
      data.map((d) => list.push(d.id));
      return list;
    };
    setFavouritesActors(list);
    fetch();
  }, []);


  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);
  const [favouritesActors, setFavouritesActors] = useState([]);

  const addToFavourites = async (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
      const { data, error } = await supabase
        .from("favouriteMovies")
        .insert([{ id: movie.id }]);
      setFavouritesActors(updatedFavourites);
      setFavourites(updatedFavourites);
    } else {
      setFavouritesActors(favourites.filter((aId) => aId !== actor.id));
      const { error } = await supabase
        .from("favouriteMovies")
        .delete()
        .eq("id", movie.id);
      console.log(error);
    }
  };

  const removeFromFavourites = (movie) => {
    setFavourites(favourites.filter((mId) => mId !== movie.id));
  };

  const addToMustWatch = (movie) => {
    let updatedMustWatch = [...mustWatch];
    if (!mustWatch.includes(movie.id)) {
      updatedMustWatch.push(movie.id);
    }
    setMustWatch(updatedMustWatch);
  };

  const addReview = (movie, review) => {
    setMyReviews({ ...myReviews, [movie.id]: review });
  };

  const addToFavouritesActors = async (actor) => {
    let updatedFavourites = [...favouritesActors];
    if (!favouritesActors.includes(actor.id)) {
      updatedFavourites.push(actor.id);
      const { data, error } = await supabase
        .from("favouriteActors")
        .insert([{ id: actor.id }]);
      setFavouritesActors(updatedFavourites);
    } else {
      setFavouritesActors(favouritesActors.filter((aId) => aId !== actor.id));
      const { error } = await supabase
        .from("favouriteActors")
        .delete()
        .eq("id", actor.id);
      console.log(error);
    }
  };

  async function removeFromFavouritesActors(actor) {
    // setFavouritesActors(favouritesActors.filter((aId) => aId !== actor.id));
    // const { error } = await supabase
    //   .from("favouriteActors")
    //   .delete();
    //   console.log(error)
    console.log("context.removefrom favourites");
  }

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        removeFromFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        favouritesActors,
        addToFavouritesActors,
        removeFromFavouritesActors,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
