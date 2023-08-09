import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import MovieList from "../movieList";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

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

function MovieListPageTemplate({ movies, action, token }) {
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
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={favMovies}
            strategy={verticalListSortingStrategy}
          >
            <Grid item container spacing={5}>
              <MovieList action={action} movies={favMovies} token={token} />
            </Grid>
          </SortableContext>
        </DndContext>
      </Grid>
    </>
  );
}
export default MovieListPageTemplate;
