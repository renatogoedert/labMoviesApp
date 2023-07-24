import React, { useState } from "react";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([]);
  const [myReviews, setMyReviews] = useState( {} );
  const [mustWatch, setMustWatch] = useState([]);
  const [favouritesActors, setFavouritesActors] = useState([]);

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
    setMyReviews( {...myReviews, [movie.id]: review } )
  };

  const addToFavouritesActors = (actor) => {
    let updatedFavourites = [...favouritesActors];
    if (!favouritesActors.includes(actor.id)) {
      updatedFavourites.push(actor.id);
    }
    setFavouritesActors(updatedFavourites);
  };

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
        removeFromFavouritesActors
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
