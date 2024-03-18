import { Box } from "@mui/material";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";

const ViewRegisteredEvents = () => {
  return (
    <Box m="20px">
      <Header title="REGISTERED EVENTS" subtitle="List of Registered Events" />
      <EventsTable events={events} />
    </Box>
  );
};

export default ViewRegisteredEvents;
