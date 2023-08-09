import React, { useState } from "react";
import Header from "../headerMovieList";
import Grid from "@mui/material/Grid";
import ActorList from "../actorList";

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
  token,
}) {
  return (
    <>
      <Grid container sx={styles.root}>
        <Header
          title={name}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Grid item container spacing={5}>
          <ActorList action={action} actors={actors} token={token} />
        </Grid>
      </Grid>
    </>
  );
}
export default ActorListPageTemplate;
