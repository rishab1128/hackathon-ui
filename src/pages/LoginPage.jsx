import React, { useState } from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const getLoginPage = () => {
    const path = window.location.pathname;
    if (path.startsWith("/login/organiser")) {
      return "Organiser";
    } else if (path.startsWith("/login/admin")) {
      return "Admin";
    } else if (path.startsWith("/login/user")) {
      return "User";
    } else {
      return "LandingPage";
    }
  };

  const currentPage = getLoginPage();

  const handleLogin = () => {
    if (currentPage === "User") navigate("/user/dashboard");
    else if (currentPage === "Organiser") navigate("/organiser/dashboard");
    else if (currentPage === "Admin") navigate("/admin/dashboard", { state: { parentBaseRoute: "login" } });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        p={3}
        bgcolor="background.paper"
        boxShadow={3}
        borderRadius={4}
        maxWidth={400}
      >
        <Typography variant="h5" gutterBottom>
          {currentPage === "User" ? "User" : currentPage} Login
        </Typography>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Login ID"
            variant="outlined"
            value={loginId}
            onChange={(e) => setLoginId(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;
