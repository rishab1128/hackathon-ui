import { Box } from "@mui/material";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";

const ViewUpcomingEvents = () => {
  return (
    <Box m="20px">
      <Header title="UPCOMING EVENTS" subtitle="List of Upcoming Events" />
      <EventsTable events={events} />
    </Box>
  );
};

export default ViewUpcomingEvents;
