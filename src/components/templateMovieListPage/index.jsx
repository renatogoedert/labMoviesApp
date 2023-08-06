import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import { TroubleshootSharp } from "@mui/icons-material";


const styles = {
  fab: {
    marginTop: 8,
    position: "fixed",
    top: 2,
    right: 2,
  },
};

function MovieListPageTemplate({
  movies,
  title,
  action,
  isPlaylist,
  setCurrentPage,
  currentPage,
  token,
  setName,
  theme,
}) {
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [ratingFilter, setRatingFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const genreId = Number(genreFilter);

  let displayedMovies = movies?movies
    .filter((m) => {
      return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((m) => {
      return genreId > 0 ? m.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return ratingFilter > 0 ? m.vote_average >= ratingFilter : true;
    }):null;

  const handleChange = (type, value) => {
    if (type === "title") setTitleFilter(value);
    else if (type === "genre") setGenreFilter(value);
    else setRatingFilter(value);
  };

  return (
    <>
      <Grid container sx={{padding: "20px", backgroundColor: theme}}>
        <Grid item xs={12}>
          {isPlaylist ? null : (
            <Header
              title={title}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          )}
        </Grid>
        <Grid item container spacing={5}>
          <MovieList action={action} movies={displayedMovies} token={token} />
        </Grid>
      </Grid>
      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        sx={styles.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          ratingFilter={ratingFilter}
        />
      </Drawer>
    </>
  );
}
export default MovieListPageTemplate;
