import React from "react";
import { mockAdminAllEvents as events } from "../data/mockData";

import { Box } from "@mui/material";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";

const UserDashboard = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Header title="User Dashboard" subtitle="Welcome to User Dashboard" />
      <EventsTable events={events} />
    </Box>
  );
};

export default UserDashboard;
