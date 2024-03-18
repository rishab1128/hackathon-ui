import React from "react";
import Laptop from "../assets/laptop.jpg";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import {
  Box,
  Button,
  Typography,
  Container,
  Grid,
  useTheme,
} from "@mui/material";

const Info = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box bgcolor="white" py={16} px={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item md={6} xs={12}>
            <img src={Laptop} alt="/" style={{ width: "100%" }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography
              variant="h4"
              component="p"
              color="#00df9a"
              fontWeight="bold"
              gutterBottom
            >
              WHY US?
            </Typography>
            <Typography
              variant="h2"
              component="h1"
              color="black"
              fontWeight="bold"
              gutterBottom
            >
              Manage Your Events Smartly
            </Typography>
            <Typography variant="h4" color="black" paragraph>
              Events App provides easy-to-use, integrated technology solutions to
              maximise the impact of meetings and events of all sizes. We help
              organisations plan and market events, execute onsite, engage
              audiences and measure and analyse results.
            </Typography>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button variant="contained" size="large">
                Get Started
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Info;
