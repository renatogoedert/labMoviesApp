import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
};

const ActorHeader = (props) => {
  const actor = props.actor;
  // const favourites = JSON.parse(localStorage.getItem("favourites"));
  // const isFavourite = favourites.map((m) => m.id  ).includes(movie.id);

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back">
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      {/* {isFavourite  ?
        (<Avatar sx={styles.avatar}>
              <FavoriteIcon />
            </Avatar>
        ) : ( null)
      } */}
        
      <Typography variant="h5" component="p">
        {actor.name}{" "}
      </Typography>
        
      <IconButton aria-label="go forward">
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default ActorHeader;
