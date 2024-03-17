import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  useTheme,
} from "@mui/material";
import LeftDrawer from "../components/LeftDrawer";
import { tokens } from "../theme";

// import { Link } from "react-router-dom";

const LandingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      {/* <LeftDrawer /> */}
      <Container style={{ height: "100vh" }}>
        <Grid
          container
          spacing={3}
          justifyContent="center"
          alignItems="center"
          style={{ height: "100%" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: "100%" }}>
              <CardContent style={{ height: "100%" }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Login as User
                </Typography>
                <Typography variant="body2">
                  Click here to login as a user.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: "100%" }}>
              <CardContent style={{ height: "100%" }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Login as Organiser
                </Typography>
                <Typography variant="body2">
                  Click here to login as an organiser.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card style={{ height: "100%" }}>
              <CardContent style={{ height: "100%" }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Login as Admin
                </Typography>
                <Typography variant="body2">
                  Click here to login as an admin.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LandingPage;
