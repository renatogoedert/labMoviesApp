import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import Grid from "@mui/material/Grid";
import img from "../../images/film-poster-placeholder.png";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import { closestCenter, DndContext } from "@dnd-kit/core";
import AddToPlaylistsIcon from "../cardIcons/addToPlaylist";
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

export default function MovieCard({ movie, action, token }) {
  const { favourites, addToFavourites } = useContext(MoviesContext);
  const { mustWatch, addToMustWatch } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false;
  }

  if (mustWatch.find((id) => id === movie.id)) {
    movie.mustWatch = true;
  } else {
    movie.mustWatch = false;
  }
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: movie.id });
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
      className="movie"
    >
      <Card sx={styles.card}>
      
        <CardHeader
          sx={styles.header}
          avatar={
            token && movie.favourite ? (
              <Avatar sx={styles.avatar}>
                <FavoriteIcon />
              </Avatar>
            ) : movie.mustWatch ? (
              <Avatar sx={styles.avatar}>
                <PlaylistAddIcon />
              </Avatar>
            ) : null
          }
          title={
            <Typography variant="h5" component="p">
              {movie.title}{" "}
            </Typography>
          }
        />
        <CardMedia
          sx={styles.media}
          image={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : img
          }
        />
        <CardContent>
          <Grid container>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <CalendarIcon fontSize="small" />
                {movie.release_date}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" component="p">
                <StarRateIcon fontSize="small" />
                {"  "} {movie.vote_average}{" "}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions disableSpacing>
          {token&&<>
          {action(movie)}
          </>}
          <Link to={`/movies/${movie.id}`}>
            <Button variant="outlined" size="medium" color="primary">
              More Info ...
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
