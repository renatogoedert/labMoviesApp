import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Stack";
import { Link } from "react-router-dom";

const styles = {
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: 1.5,
    margin: 0,
  },
  chipLabel: {
    margin: 0.5,
  },
  fab: {
    position: "fixed",
    top: 50,
    right: 2,
  },
};

const ActorDetails = ({ actor, actorCredits }) => {
  return (
    <>
      <Typography variant="h5" component="h3">
        Biography
      </Typography>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>

      <Stack direction="row" spacing={2}>
        {actorCredits.cast
          .filter((a) => a.media_type === "movie")
          .sort((a, b) => b.popularity - a.popularity)
          .slice(0, 5)
          .map((m) => (
            <Card key={m.id}>
              <Link to={`/movies/${m.id}`}>
                <Avatar
                  alt={m.name}
                  src={
                    m.poster_path
                      ? `https://image.tmdb.org/t/p/w500/${m.poster_path}`
                      : null
                  }
                  sx={{ width: 70, height: 70 }}
                />
              </Link>
              <Typography variant="button">{m.title} </Typography>
              <Typography variant="caption">{m.character}</Typography>
            </Card>
          ))}
      </Stack>

      <Paper component="ul" sx={styles.chipSet}>
        <li>
          <Chip label="Birth" sx={styles.chipLabel} color="primary" />
        </li>
        <li>
          <Chip label={actor.birthday} />
        </li>
        <li>
          <Chip label={actor.place_of_birth} />
        </li>
      </Paper>
    </>
  );
};
export default ActorDetails;
