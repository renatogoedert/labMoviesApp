import React, { useState } from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import FantasyMovieForm from "../components/fantasyMovieForm";
import dayjs from "dayjs";
import FantasyMovieCast from "../components/fantasyMovieCast";
import {
  Stack,
  Popper,
  Popover,
  Typography,
  FormGroup,
  Button,
  Paper,
  Pagination,
} from "@mui/material";

const FantasyMovie = () => {
  const [genre, setGenre] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [movie, setMovie] = useState({
    genres: [],
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
    if (e.target.name === "revenue") {
      setMovie((prevMovie) => ({
        ...prevMovie,
        [e.target.name]: e.target.value.replace(/\B(?=(\d{3})+(?!\d))/g, ","),
      }));
    } else if (e.target.name === "genres") {
      const {
        target: { value },
      } = e;
      setGenre(typeof value === "string" ? value.split(",") : value);
      let genreArray = value.map((value) => ({
        name: value,
      }));
      setMovie((prevMovie) => ({
        ...prevMovie,
        [e.target.name]: genreArray,
      }));
    } else {
      setMovie((prevMovie) => ({
        ...prevMovie,
        [e.target.name]: [e.target.value],
      }));
    }
  };

  const handleDateChange = (newDate) => {
    setMovie((prevMovie) => ({
      ...prevMovie,
      release_date: dayjs(newDate).format("YYYY-MM-DD"),
    }));
  };

  const [movieCredits, setMovieCredits] = useState({
    cast: [
      {
        id: "",
        name: "",
        profile_path: "",
        character: "",
        display: true,
      },
    ],
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} movieCredits={movieCredits} />

            <Stack direction="row" spacing={2} sx={{ marginTop: "30px" }}>
              <FantasyMovieForm
                handleDateChange={handleDateChange}
                handleChange={handleChange}
                genre={genre}
              />
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
                sx={{ height: "10ch", width: "25ch" }}
              >
                Add Cast
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
                  <FantasyMovieCast
                    movieCredits={movieCredits}
                    setMovieCredits={setMovieCredits}
                  />
                </Stack>
              </Popover>
            </Stack>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default FantasyMovie;
