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
import { useMutation, useQuery, useQueryClient   } from "react-query";

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

function ActorListPageTemplate({
  actors,
  name,
  action,
  setCurrentPage,
  currentPage,
  token
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


  return (
    <>
      <Grid container sx={styles.root}>
        <Header
          title={name}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Grid item container spacing={5}>

              <ActorList action={action} actors={actors} token={token}/>

        </Grid>
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
export default ActorListPageTemplate;
