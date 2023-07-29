import React, { useState } from "react";
import { useQuery } from "react-query";
import { getActors } from "../../api/tmdb-api";
import Spinner from "../spinner";
import {
  Stack,
  TextField,
  Avatar,
  Typography,
  FormGroup,
  Button,
  Input,
} from "@mui/material";

const FantasyMovieCast = ({ movieCredits, setMovieCredits }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError } = useQuery(
    ["actors", { currentPage: currentPage }],
    getActors
  );
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  const actors = data ? data.results : [];

  return (
    <Stack direction="row" spacing={2}>
      {actors.slice(0, 5).map((a) => (
        <form key={a.name} action={handleClick}>
          <FormGroup>
            <Avatar
              alt={a.name}
              src={
                a.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${a.profile_path}`
                  : null
              }
              sx={{ width: 70, height: 70 }}
            />
            <Typography variant="button">{a.name} </Typography>
            <TextField id="standard-basic" label="Cast As" variant="standard" />
            <Button type="submit">Submit</Button>
          </FormGroup>
        </form>
      ))}
    </Stack>
  );
};

export default FantasyMovieCast;
