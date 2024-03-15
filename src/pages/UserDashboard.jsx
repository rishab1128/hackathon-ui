import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import Sidebar from "../components/global/Sidebar";
import { useState } from "react";
import EventCard from "../components/EventCard";

const categories = ["All", "Sports", "Technical", "Cultural", "Non Technical"];
const events = {
  Sports: [
    {
      id: "1",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "2",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "3",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Bengaluru, India",
    },
  ],
  Technical: [
    {
      id: "1",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "2",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "3",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Bengaluru, India",
    },
  ],
  Cultural: [
    {
      id: "1",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "2",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Hyderabad,India",
    },
    {
      id: "3",
      title: "Urjja",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      date: "15/03/2024",
      location: "Bengaluru, India",
    },
  ],
};

const UserDashboard = () => {
  return (
    <Box display="flex" height="100vh" overflow={"hidden"}>
      <Sidebar />
      <Box
        m="20px"
        width="100%"
        sx={{
          overflow: "auto",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Upcoming Events" />
        </Box>
        <Box gap={5}>
          {Object.keys(events).map((category) => (
            <div key={category}>
              <Typography fontSize={35}>{category}</Typography>
              <Box
                display="flex"
                flexWrap="wrap"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                p="20px 2px"
              >
                {/* ROW 1 */}
                {events[category].map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </Box>
            </div>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default UserDashboard;
