import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  const [favouritesActors, setFavourites] = useState([]);
  // const [myReviews, setMyReviews] = useState( {} );
  // const [mustWatch, setMustWatch] = useState([]);

  const addToFavourites = (actor) => {
    let updatedFavourites = [...favouritesActors];
    if (!favouritesActors.includes(actor.id)) {
      updatedFavourites.push(actor.id);
    }
    setFavourites(updatedFavourites);
  };

  const removeFromFavourites = (actor) => {
    setFavourites(favouritesActors.filter((aId) => aId !== actor.id));
  };

  // const addToMustWatch = (movie) => {
  //   let updatedMustWatch = [...mustWatch];
  //   if (!mustWatch.includes(movie.id)) {
  //     updatedMustWatch.push(movie.id);
  //   }
  //   setMustWatch(updatedMustWatch);
  // };

  // const addReview = (movie, review) => {   
  //   setMyReviews( {...myReviews, [movie.id]: review } )
  // };

 return (
    <ActorsContext.Provider
      value={{
        favouritesActors,
        addToFavourites,
        removeFromFavourites,
      }}>
      {props.children}
    </ActorsContext.Provider>
  );
};

export default ActorsContextProvider;