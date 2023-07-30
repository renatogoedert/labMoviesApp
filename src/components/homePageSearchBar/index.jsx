import React from "react";
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

const HomePageSearchBar = ({
  sortBy,
  setSortBy,
  year,
  setYear,
  isAdult,
  setIsAdult,
}) => {
  const handleChange = (event) => {};
  console.log(isAdult);

  return (
    <Paper component="div" sx={styles.root}>
      <TextField
        select
        sx={styles.item}
        label="year"
        type="year"
        id="year"
        name="year"
        defaultValue={year}
        onChange={(event) => setYear(event.target.value)}
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
        select
        sx={styles.item}
        label="sortBy"
        type="sortBy"
        id="sortBy"
        name="sortBy"
        defaultValue={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
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
        <MenuItem key={"Release Date Desc"} value={"primary_release_date.desc"}>
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
            checked={isAdult}
            onChange={(event) => setIsAdult((prevIsAdult) => !prevIsAdult)}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
          />
        }
      />
    </Paper>
  );
};

export default HomePageSearchBar;
