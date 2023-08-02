import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import MovieList from "../movieList";
import { TroubleshootSharp } from "@mui/icons-material";
import { closestCenter, DndContext } from "@dnd-kit/core";
import Draggable from 'react-draggable';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const styles = {
  root: {
    padding: "20px",
  },
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
  vote_average,
  setCurrentPage,
  currentPage,
}) {
  // const [titleFilter, setTitleFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");
  // const [ratingFilter, setRatingFilter] = useState("0");
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const genreId = Number(genreFilter);

  // let displayedMovies = movies
  //   .filter((m) => {
  //     return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  //   })
  //   .filter((m) => {
  //     return ratingFilter > 0 ? m.vote_average >= ratingFilter : true;
  //   });

  // const handleChange = (type, value) => {
  //   if (type === "title") setTitleFilter(value);
  //   else if (type === "genre") setGenreFilter(value);
  //   else setRatingFilter(value);
  // };

  const [favMovies, setFavMovies] = useState(movies);
  const [inputValue, setInputValue] = useState("");

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setFavMovies((favMovies) => {
      const oldIndex = favMovies.findIndex((movie) => movie.id === active.id);
      const newIndex = favMovies.findIndex((movie) => movie.id === over.id);
      return arrayMove(favMovies, oldIndex, newIndex);
    });
  };

  return (
    <>
      <Grid container sx={styles.root}>

        {/* <Grid item xs={12}>
          <Header
            title={title}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </Grid> */}

        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
         <SortableContext
            items={favMovies}
            strategy={verticalListSortingStrategy}
          > 
          {/* <Draggable> */}
            <Grid item container spacing={5}>
              <MovieList action={action} movies={favMovies} />
            </Grid>
            {/* </Draggable> */}
          </SortableContext> 
         </DndContext>

      </Grid>
      {/* <Fab
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
      </Drawer> */}
    </>
  );
}
export default MovieListPageTemplate;
