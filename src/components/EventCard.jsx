import React from "react";
import { redirect } from "react-router-dom";
import { Box, Button, Typography, useTheme } from "@mui/material";
import StatBox from "./StatBox";
import { tokens } from "../theme";

const EventCard = ({ event }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      pt={2}
      minWidth="150px"
      backgroundColor={colors.primary[400]}
      alignItems="center"
      justifyContent="center"
    >
      <Typography pb={1} px={2} fontSize={25}>
        {event.title}
      </Typography>
      <Typography px={2}>{event.date}</Typography>
      <Typography px={2}>{event.location}</Typography>
      <Box display={"flex"} justifyContent={"stretch"} mt={2}>
        <Button
          onClick={() => {
            if (window.confirm("Are you sure to register in this event.")) {
              //call api
              redirect("/events/registered");
            }
          }}
          style={{
            width: "100%",
            backgroundColor: colors.greenAccent[600],
            color: colors.primary[100],
            fontWeight: "600",
          }}
        >
          Register
        </Button>
      </Box>
    </Box>
  );
};

export default EventCard;
