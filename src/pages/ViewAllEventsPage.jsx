import { Box } from "@mui/material";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";

const ViewAllEventsPage = () => {
  return (
    <Box m="20px">
      <Header title="EVENTS" subtitle="List of All Events" />
      <EventsTable events={events} />
    </Box>
  );
};

export default ViewAllEventsPage;
