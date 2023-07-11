import React, { useState } from "react";

export const ActorsContext = React.createContext(null);

const ActorsContextProvider = (props) => {
  // const [favourites, setFavourites] = useState([]);
  // const [myReviews, setMyReviews] = useState( {} );
  // const [mustWatch, setMustWatch] = useState([]);

  // const addToFavourites = (movie) => {
  //   let updatedFavourites = [...favourites];
  //   if (!favourites.includes(movie.id)) {
  //     updatedFavourites.push(movie.id);
  //   }
  //   setFavourites(updatedFavourites);
  // };

  // const removeFromFavourites = (movie) => {
  //   setFavourites(favourites.filter((mId) => mId !== movie.id));
  // };

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
    <ActorsContext.Provider>
      {props.children}
    </ActorsContext.Provider>
  );
};

export default MoviesContextProvider;