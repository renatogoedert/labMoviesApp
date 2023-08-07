import React, { useContext, useState } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@mui/material/IconButton";
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import {
  Typography,
  Menu,
  Popover,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

const AddToPlaylistIcon = ({ movie }) => {
  const { addMovieToPlaylist, getPlaylistsNames } = useContext(MoviesContext);
  const [names, setNames] = useState([]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = async (event) => {
    setAnchorEl(event.currentTarget);
    setNames(await getPlaylistsNames());
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleMenuItemClick = (event, index) => {
    event.preventDefault();
    addMovieToPlaylist(movie.id, names[index]);
    setAnchorEl(null);
    
  };
  return (
    <>
      <IconButton aria-label="add to playlist" onClick={handleClick}>
        <QueuePlayNextIcon color="primary" fontSize="large" />
      </IconButton>
      <Menu
        label="menu"
        type="menu"
        id="menu"
        name="menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        // defaultValue={formData.voteAverage}
        // onChange={handleChange}
      >
        {names.map((option, index) => (
          <MenuItem key={option} value={option} onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default AddToPlaylistIcon;

// onClick={onUserSelect}
