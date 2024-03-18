import { Box, Typography, Link, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../theme";

const Footer = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      bgcolor={colors.grey[900]}
      color={colors.grey[100]}
      py={4}
      px={2}
      textAlign="center"
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Events App. All rights reserved.
      </Typography>
      <Typography variant="body2">
        Built with Material-UI.{" "}
        <Link href="https://mui.com" color="inherit" underline="always">
          Learn More
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
