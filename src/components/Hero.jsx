import React from "react";
import {ReactTyped} from "react-typed";
import { Link } from "react-router-dom";
import { Box, Button, Typography, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box color="white" py={12}>
      <Container maxWidth="md" textAlign="center">
        <Typography variant="h4" fontWeight="bold" color="#00df9a" gutterBottom>
          SECURE YOUR MONEY WITH IBS
        </Typography>
        <Typography variant="h2" component="h1" fontWeight="bold" mb={4}>
          <span style={{ fontSize: "4rem" }}>EASY </span>
          <ReactTyped
            strings={["EVENTS APP"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </Typography>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          color="textSecondary"
          mb={4}
        >
          Manage your finances from anywhere, anytime.
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary" size="large">
            GET STARTED
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Hero;
