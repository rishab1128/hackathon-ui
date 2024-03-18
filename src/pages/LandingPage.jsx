import { Box, useTheme, Typography } from "@mui/material";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { tokens } from "../theme";
import Footer from "../components/Footer";
import Info from "../components/Info";
import Hero from "../components/Hero";
import WfLogo from "../assets/wf-logo.svg";

const LandingPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box
        position="absolute"
        top={0}
        left={0}
        p={2}
        zIndex={9999} // Ensure it appears above other content
      >
        <Typography
          variant="h1"
          component="div"
          fontWeight="bold"
          color="white"
        >
          Wells Fargo
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        flexDirection="column" // Center the text vertically
        style={{
          backgroundImage: `url(${WfLogo})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <ReactTyped
          strings={["EVENTS WEB APP"]}
          typeSpeed={120}
          backSpeed={140}
          loop
          style={{
            fontSize: "48px", // Adjust the font size as needed
            fontWeight: "bold", // Make the text bold
            color: "white", // Set text color to white
          }}
        />
        {/* Faded text */}
        <Box
          mt={2}
          style={{ color: "#ffffff80", fontSize: "24px", textAlign: "center" }}
        >
          Event planning and marketing in one place
        </Box>
      </Box>
      <Info />
      <Footer />
    </>
  );
};

export default LandingPage;
