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
    marginBottom: 1.5,
  },
};

const Header = ({ title, setCurrentPage, currentPage }) => {

  const handleGoBack = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
  };

  const handleGoForward = () => {
    setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
  };

  return (
    <Paper component="div" sx={styles.root}>
      <IconButton disabled={currentPage===1} aria-label="go back" onClick={handleGoBack}>
        <ArrowBackIcon color={currentPage===1 ? "disabled" : "primary"} fontSize="large" />
      </IconButton>


      <IconButton disabled={currentPage===10} aria-label="go forward" onClick={handleGoForward}>
        <ArrowForwardIcon color={currentPage===10 ? "disabled" : "primary"} fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default Header;

