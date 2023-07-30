import React from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

import {
  FormControl,
  TextField,
  Box,
  Checkbox,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { NumericFormat } from "react-number-format";

const HomePageSearchBar = () => {
  let sortBy = "";
  const YearNumericFormatCustom = React.forwardRef(function NumericFormatCustom(
    props,
    ref
  ) {
    const { onChange, ...other } = props;

    return (
      <NumericFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        allowNegative={false}
        decimalScale={0}
        valueIsNumericString
        isAllowed={(values) => {
          const { formattedValue } = values;
          return formattedValue <= new Date().getFullYear();
        }}
      />
    );
  });

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Box
    sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      >
      <TextField
        select
        label="year"
        type="year"
        id="year"
        name="year"
        defaultValue={7}
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
        select
        value={sortBy}
        label="sortBy"
        type="sortBy"
        id="sortBy"
        name="sortBy"
        onChange={handleChange}
      >
        <MenuItem value={"popularity.asc"}>Popularity Asc</MenuItem>
        <MenuItem value={"popularity.desc"}>Popularity Desc</MenuItem>
        <MenuItem value={"revenue.asc"}>Revenue Asc</MenuItem>
        <MenuItem value={"revenue.desc"}>Revenue Desc</MenuItem>
        <MenuItem value={"primary_release_date.asc"}>Release Date Asc</MenuItem>
        <MenuItem value={"primary_release_date.desc"}>
          Release Date Desc
        </MenuItem>
        <MenuItem value={"vote_average.asc"}>Vote Average Asc</MenuItem>
        <MenuItem value={"vote_average.desc"}>Vote Average Desc</MenuItem>
        <MenuItem value={"vote_count.asc"}>Vote Count Asc</MenuItem>
        <MenuItem value={"vote_count.desc"}>Vote Count Desc</MenuItem>
      </TextField>

      <FormControlLabel
        label="Adult"
        control={
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite />}
            // checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 35 } }}
          />
        }
      />
    </Box>
  );
};

export default HomePageSearchBar;
