import * as React from "react";
import {
  FormControl,
  TextField,
  Box,
  MenuItem,
  InputAdornment,
  Select,
  OutlinedInput,
  Chip  
} from "@mui/material";
import StarRate from "@mui/icons-material/StarRate";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import MonetizationIcon from "@mui/icons-material/MonetizationOn";
import { NumericFormat } from "react-number-format";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner';

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
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
      thousandSeparator
      valueIsNumericString
    />
  );
});

const DurationNumericFormatCustom = React.forwardRef(
  function NumericFormatCustom(props, ref) {
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
          return formattedValue < 300;
        }}
      />
    );
  }
);

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const FantasyMovieForm = ({ genre, handleChange, handleDateChange }) => {
  const { data, error, isLoading, isError } = useQuery("genres", getGenres);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
    >
      <FormControl>
        <TextField
          label="title"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
        />

        <TextField
          InputProps={{
            inputComponent: DurationNumericFormatCustom,
            startAdornment: (
              <InputAdornment position="start">
                <AccessTimeIcon />
              </InputAdornment>
            ),
          }}
          label="runtime"
          type="runtime"
          id="runtime"
          name="runtime"
          onChange={handleChange}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DatePicker label="Date" onChange={handleDateChange} />
          </DemoContainer>
        </LocalizationProvider>

        <TextField
          InputProps={{
            inputComponent: NumericFormatCustom,
            startAdornment: (
              <InputAdornment position="start">
                <MonetizationIcon />
              </InputAdornment>
            ),
          }}
          label="revenue"
          type="revenue"
          id="revenue"
          name="revenue"
          onChange={handleChange}
        />

        <TextField
          select
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <StarRate />
              </InputAdornment>
            ),
          }}
          label="vote_average"
          type="vote_average"
          id="vote_average"
          name="vote_average"
          defaultValue={7}
          onChange={handleChange}
        >
          {[...Array(11).keys()].map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          multiline
          rows={4}
          label="overview"
          type="overview"
          id="overview"
          name="overview"
          onChange={handleChange}
        />

        <Select
          multiple
          label="genres"
          type="genres"
          id="genres"
          name="genres"
          value={genre}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {genres.map((genre) => (
              <MenuItem key={genre.id} value={genre.name}>
                {genre.name}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FantasyMovieForm;
