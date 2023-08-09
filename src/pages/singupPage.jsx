import React, { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../api/supabase";
import {
  Paper,
  TextField,
  Box,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);

  console.log(formData);

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          },
        },
      });
      if (error) throw error;
      alert("Check your email for verification link");
    } catch (error) {
      alert(error);
    }
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        p: 10,
      }}
    >
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <Stack
            direction="column"
            spacing={2}
            sx={{
              "& .MuiButton-root": { m: 2, width: "45ch", height: "7ch" },
              "& .MuiTextField-root": { m: 2, width: "45ch" },
            }}
          >
            <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle color="primary" fontSize="large" />
                </InputAdornment>
              ),
            }}
              placeholder="Fullname"
              name="fullName"
              onChange={handleChange}
            />
            <TextField
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AlternateEmailIcon color="primary" fontSize="large" />
                  </InputAdornment>
                ),
              }}
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />

            <TextField
              placeholder="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
        <Typography
          variant="h6"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          Already have an account?<Link to="/login">Login</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Signup;
