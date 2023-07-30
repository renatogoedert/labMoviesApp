import React, { useContext, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
// import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const styles = {
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

export default function ActorCard({ actor, action }) {
  const { favouritesActors, addToFavouritesActors } = useContext(MoviesContext);
  // const { mustWatch, addToMustWatch } = useContext(MoviesContext);

  if (favouritesActors.find((id) => id === actor.id)) {
    actor.favourite = true;
  } else {
    actor.favourite = false;
  }

  // if (mustWatch.find((id) => id === movie.id)) {
  //   movie.mustWatch = true;
  // } else {
  //   movie.mustWatch = false
  // }
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: actor.id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="actor"
    >
      <Card sx={styles.card}>
        <CardHeader
          sx={styles.header}
          avatar={
            actor.favourite ? (
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
            ) : null
          }
          title={
            <Typography variant="h5" component="p">
              {actor.name}{" "}
            </Typography>
          }
        />
        <CardMedia
          sx={styles.media}
          image={
            actor.profile_path
              ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
              : img
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                {actor.gender === 1 ? (
                  <FemaleIcon fontSize="large" />
                ) : (
                  <MaleIcon fontSize="large" />
                )}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {actor.popularity}{" "}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          {action(actor)}
          <Link to={`${actor.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
