import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Fab from "@mui/material/Fab";



const styles = {
  title: {
    flexGrow: 1,
  },
};

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const SiteHeader = ({ token }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const menuOptions = token
    ? [
        { label: "Home", path: "/" },
        { label: "Favorites", path: "/movies/favourites" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Top Rated", path: "/movies/toprated" },
        { label: "Actors", path: "/actors" },
        { label: "Fav Actors", path: "/actors/favourites" },
        { label: "Fantasy Movie", path: "/fantasymovie" },
        { label: "Playlists", path: "/playlists" },
      ]
    : [
        { label: "Home", path: "/" },
        { label: "Upcoming", path: "/movies/upcoming" },
        { label: "Top Rated", path: "/movies/toprated" },
        { label: "Actors", path: "/actors" },
        { label: "Fantasy Movie", path: "/fantasymovie" },
      ];

  const handleMenuSelect = (pageURL) => {
    navigate(pageURL);
    setAnchorEl(false);
    // window.location.reload();
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/");
    location.reload();
  }

  function handleLoginCLick() {
    navigate("/login");
  }

  return (
    <>
      <AppBar position="fixed" elevation={0} color="primary">
        <Toolbar>
          <Typography variant="h4" sx={styles.title}>
            TMDB Client
          </Typography>
          <Typography variant="h6" sx={styles.title}>
            All you ever wanted to know about Movies!
          </Typography>
          {isMobile ? (
            <>
              <IconButton
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                size="large"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuOptions.map((opt) => (
                  <MenuItem
                    key={opt.label}
                    onClick={() => handleMenuSelect(opt.path)}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              {token ? (
                <Fab
                  color="error"
                  variant="extended"
                  onClick={handleLogout}
                >
                  Logout
                </Fab>
              ) : (
                <Fab
                  variant="extended"
                  color="info"
                  onClick={handleLoginCLick}
                >
                  Login
                </Fab>
              )}
              </Menu>
            </>
          ) : (
            <>
              {menuOptions.map((opt) => (
                <Button
                  key={opt.label}
                  color="inherit"
                  onClick={() => handleMenuSelect(opt.path)}
                >
                  {opt.label}
                </Button>
              ))}
              {token ? (
                <Fab
                  color="error"
                  variant="extended"
                  onClick={handleLogout}
                >
                  Logout
                </Fab>
              ) : (
                <Fab
                  variant="extended"
                  color="info"
                  onClick={handleLoginCLick}
                >
                  Login
                </Fab>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
};

export default SiteHeader;
