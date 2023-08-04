import React, { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import {
  Paper,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Button,
} from "@mui/material";

const styles = {
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 1.5,
  },
  item: { m: 1 },
};

const HomePageSearchBar = ({ setSortBy, setYear, setIsAdult, setVoteCount, setVoteAverage }) => {
  const [formData, setFormData] = useState({
    year: 2023,
    sortBy: "popularity.desc",
    voteCount: 0,
    voteAverage: 0,
  });
  const [button, setButton] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setYear(formData.year);
    setSortBy(formData.sortBy);
    setIsAdult(button);
    setVoteCount(formData.voteCount);
    setVoteAverage(formData.voteAverage);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Paper component="div" sx={styles.root}>
        <TextField
          select
          sx={styles.item}
          label="year"
          type="year"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        >
          {Array.from(
            { length: new Date().getFullYear() - 1700 + 1 },
            (_, index) => 1700 + index
          )
            .sort((a, b) => b - a)
            .map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
        </TextField>

        <TextField
          sx={styles.item}
          label="vote"
          type="voteCount"
          id="voteCount"
          name="voteCount"
          value={formData.voteCount}
          onChange={handleChange}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        ></TextField>

        <TextField
          select
          label="voteAverage"
          type="voteAverage"
          id="voteAverage"
          name="voteAverage"
          defaultValue={formData.voteAverage}
          onChange={handleChange}
        >
          {[...Array(11).keys()].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          select
          sx={styles.item}
          label="sortBy"
          type="sortBy"
          id="sortBy"
          name="sortBy"
          value={formData.sortBy}
          onChange={handleChange}
        >
          <MenuItem key={"Popularity Asc"} value={"popularity.asc"}>
            Popularity Asc
          </MenuItem>
          <MenuItem key={"Popularity Desc"} value={"popularity.desc"}>
            Popularity Desc
          </MenuItem>
          <MenuItem key={"Revenue Asc"} value={"revenue.asc"}>
            Revenue Asc
          </MenuItem>
          <MenuItem key={"Revenue Desc"} value={"revenue.desc"}>
            Revenue Desc
          </MenuItem>
          <MenuItem key={"Release Date Asc"} value={"primary_release_date.asc"}>
            Release Date Asc
          </MenuItem>
          <MenuItem
            key={"Release Date Desc"}
            value={"primary_release_date.desc"}
          >
            Release Date Desc
          </MenuItem>
          <MenuItem key={"Vote Average Asc"} value={"vote_average.asc"}>
            Vote Average Asc
          </MenuItem>
          <MenuItem key={"Vote Average Desc"} value={"vote_average.desc"}>
            Vote Average Desc
          </MenuItem>
          <MenuItem key={"Vote Count Asc"} value={"vote_count.asc"}>
            Vote Count Asc
          </MenuItem>
          <MenuItem key={"Vote Count Desc"} value={"vote_count.desc"}>
            Vote Count Desc
          </MenuItem>
        </TextField>

        <FormControlLabel
          label="Adult"
          sx={styles.item}
          control={
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
              checked={formData.isAdult}
              onChange={() => setButton((prevButton) => !prevButton)}
              inputProps={{ "aria-label": "controlled" }}
              sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
            />
          }
        />

        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Paper>
    </form>
  );
};

export default HomePageSearchBar;
