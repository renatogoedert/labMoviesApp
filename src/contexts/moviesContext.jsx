import React, { useState, useEffect } from "react";
import { supabase } from "../api/supabase";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);
  const [favouritesActors, setFavouritesActors] = useState([
    // useEffect(() => {
    //   let list = []
    //   const fetch = async() => {
    //     const { data, error } = await supabase.from('favouriteActors').select("id")
    //     data.map((d) => (
    //       list.push(d.id)
    //     ))
    //     return list
    //   }
    //   console.log(list)
    //   fetch()
    // },[])
  ]);

  const addToFavourites = (movie) => {
    let updatedFavourites = [...favourites];
    if (!favourites.includes(movie.id)) {
      updatedFavourites.push(movie.id);
    }
    setFavourites(updatedFavourites);
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

  async function addToFavouritesActors(actor) {
    let updatedFavourites = [...favouritesActors];
    if (!favouritesActors.includes(actor.id)) {
      updatedFavourites.push(actor.id);
      const { data, error } = await supabase
        .from("favouriteActors")
        .insert([{ id: actor.id }]);
      console.log(data);
    }
    console.log(updatedFavourites);
    setFavouritesActors(updatedFavourites);
  }

  const removeFromFavouritesActors = (actor) => {
    setFavouritesActors(favouritesActors.filter((aId) => aId !== actor.id));
  };

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
