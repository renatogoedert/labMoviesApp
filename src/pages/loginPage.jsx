import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

const Login = ({ setToken }) => {
  let navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      console.log(data);
      setToken(data);
      navigate("/");
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
          Don't have an account?<Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
