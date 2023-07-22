import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const styles = {
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: 1.5,
  },
};

const Header = (props) => {
  const { title, setCurrentPage } = props;

  const handleGoBack = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const handleGoForward = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton aria-label="go back" onClick={handleGoBack}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <IconButton aria-label="go forward" onClick={handleGoForward}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;
