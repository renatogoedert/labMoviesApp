import React, { useState, useEffect } from "react";
import { supabase } from "../api/supabase";

export const MoviesContext = React.createContext(null);

const MoviesContextProvider = (props) => {
  useEffect(() => {
    let list = [];
    const fetch = async () => {
      const { data, error } = await supabase
        .from("favouriteMovies")
        .select("id");
      data.map((d) => list.push(d.id));
      setFavourites(list);
    };
    fetch();
  }, []);

  useEffect(() => {
    let list = [];
    const fetch = async () => {
      const { data, error } = await supabase
        .from("favouriteActors")
        .select("id");
      data.map((d) => list.push(d.id));
      setFavouritesActors(list);
    };
    fetch();
  }, []);

  useEffect(() => {
    let list = [];
    const fetch = async () => {
      const { data, error } = await supabase.from("playlists").select("*");
      data.map((d) => list.push(d));
      setPlaylists(list);
    };
    fetch();
  }, []);
  
  const getFavourites = async () => {
    let list = [];
    const { data, error } = await supabase.from("favouriteMovies").select("id");
    data.map((d) => list.push(d.id));
    return list;
  };

  const getFavouritesActors = async () => {
    let list = [];
    const { data, error } = await supabase.from("favouriteActors").select("id");
    data.map((d) => list.push(d.id));
    return list;
  };

  const getPlaylists = async () => {
    let list = [];
    const { data, error } = await supabase.from("playlists").select("*");
    data.map((d) => list.push(d));
    return list;
  };

  const getPlaylistsNames = async () => {
    let list = [];
    const { data, error } = await supabase.from("playlists").select("name");
    data.map((d) => list.push(d.name));
    return list;
  };

  const [favourites, setFavourites] = useState([]);
  const [playlists, setPlaylists] = useState([]);
  const [myReviews, setMyReviews] = useState({});
  const [mustWatch, setMustWatch] = useState([]);
  const [favouritesActors, setFavouritesActors] = useState([]);

  const addToFavourites = async (movie) => {
    if (!favourites.includes(movie.id)) {
      const { data, error } = await supabase
        .from("favouriteMovies")
        .insert([{ id: movie.id }]);
      setFavourites(await getFavourites());
      return false;
    } else {
      setFavourites(favourites.filter((aId) => aId !== movie.id));
      const { error } = await supabase
        .from("favouriteMovies")
        .delete()
        .eq("id", movie.id);
      console.log(error);
    }
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
    if (!favouritesActors.includes(actor.id)) {
      const { data, error } = await supabase
        .from("favouriteActors")
        .insert([{ id: actor.id }]);
      setFavouritesActors(await getFavouritesActors());
    } else {
      setFavouritesActors(favouritesActors.filter((aId) => aId !== actor.id));
      const { error } = await supabase
        .from("favouriteActors")
        .delete()
        .eq("id", actor.id);
      console.log(error);
    }
  };

  const addToPlaylists = async (form) => {
    let haveTrue = false;
    playlists.map((p) =>
      p.name.includes(form.name) ? (haveTrue = true) : null
    );
    if (!haveTrue) {
      const { data, error } = await supabase
        .from("playlists")
        .insert([{ name: form.name, theme: form.theme }]);
      return true;
    } else {
      return false;
    }
  };

  const addMovieToPlaylist = async (movieId, playlistName) => {
    let list = [];
    const { data, error } = await supabase
      .from("playlists")
      .select("moviesId")
      .eq("name", [playlistName]);
    data.map((d) => (d.moviesId ? (list = d.moviesId) : null));
    if (!list || !list.includes(movieId)) {
      list.push(movieId);
      const { data, error } = await supabase
        .from("playlists")
        .update({ moviesId: list })
        .eq("name", [playlistName])
        .select();
    } else {
      console.log("error");
    }
    setPlaylists(await getPlaylists());
  };

  const deleteMoviePlaylist = async (movieId, playlistName) => {
    const { data, error } = await supabase
      .from("playlists")
      .select("moviesId")
      .eq("name", [playlistName]);
    let list = data[0].moviesId.filter((mId) => {
      return mId !== movieId;
    });
    const {} = await supabase
      .from("playlists")
      .update({ moviesId: list })
      .eq("name", [playlistName])
      .select();
    setPlaylists(await getPlaylists());
  };

  return (
    <MoviesContext.Provider
      value={{
        favourites,
        addToFavourites,
        addReview,
        mustWatch,
        addToMustWatch,
        favouritesActors,
        addToFavouritesActors,
        playlists,
        setPlaylists,
        addToPlaylists,
        addMovieToPlaylist,
        getPlaylistsNames,
        deleteMoviePlaylist,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
