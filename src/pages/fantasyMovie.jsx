import React, { useState } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";

const FantasyMovie = () => {
  const [movie, setMovie] = useState( {
    genres: [
      {
        id: 14,
        name: "Fantasy",
      },
      {
        id: 12,
        name: "Adventure",
      },
      {
        id: 878,
        name: "Science Fiction",
      },
      {
        id: 28,
        name: "Action",
      },
    ],
    id: 181808,
    original_language: "en",
    overview:
      "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    release_date: "2017-12-13",
    revenue: 1332459537,
    runtime: 152,
    title: "Star Wars: The Last Jedi",
    vote_average: 7,
    vote_count: 9692,
  });

  const handleChange = (e) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      [e.target.name]: e.target.value,
    }));
  };


  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
            <form>
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={handleChange}
              />
            </form>
            <form>
              <label htmlFor="overview">Overview:</label>
              <input
                type="overview"
                id="titoverviewle"
                name="overview"
                onChange={handleChange}
              />
            </form>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default FantasyMovie;

