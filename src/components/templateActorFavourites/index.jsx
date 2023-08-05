import React, { useState } from "react";
import Header from "../headerMovieList";
//import FilterCard from "../filterMoviesCard";
import Grid from "@mui/material/Grid";
import Fab from "@mui/material/Fab";
import Drawer from "@mui/material/Drawer";
import ActorList from "../actorList";
import { closestCenter, DndContext } from "@dnd-kit/core";
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

function ActorFavouritesPageTemplate({
  actors,
  token,
  action,
  setCurrentPage,
  currentPage,
}) {
  // const [titleFilter, setTitleFilter] = useState("");
  // const [genreFilter, setGenreFilter] = useState("0");
  // const [drawerOpen, setDrawerOpen] = useState(false);

  // const genreId = Number(genreFilter);

  // let displayedMovies = movies
  //   .filter((m) => {
  //     return m.title.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
  //   })
  //   .filter((m) => {
  //     return genreId > 0 ? m.genre_ids.includes(genreId) : true;
  //   });

  // const handleChange = (type, value) => {
  //   if (type === "title") setTitleFilter(value);
  //   else setGenreFilter(value);
  // };
  const [favActors, setFavActors] = useState(actors);
  const [inputValue, setInputValue] = useState("");

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setFavActors((favActors) => {
      const oldIndex = favActors.findIndex((actor) => actor.id === active.id);
      const newIndex = favActors.findIndex((actor) => actor.id === over.id);
      return arrayMove(favActors, oldIndex, newIndex);
    });
  };

  return (
    <>
      <Grid container sx={styles.root}>
        {/* <Header
          title={name}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        /> */}
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={favActors}
            strategy={verticalListSortingStrategy}
          >
            <Grid item container spacing={5}>
              <ActorList action={action} actors={favActors} token={token} />
            </Grid>
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
        />
      </Drawer> */}
    </>
  );
}
export default ActorFavouritesPageTemplate;
