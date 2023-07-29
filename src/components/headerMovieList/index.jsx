import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Pagination from '@mui/material/Pagination';


const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header = ({ setCurrentPage, currentPage }) => {

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Paper component="div" sx={styles.root}>
           <Pagination size="large" defaultPage={10} color="primary" count={10} page={currentPage} onChange={handleChange} />
    </Paper>
  );
};

export default Header;
