import { Box, Button } from "@mui/material";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";

const ViewRegisteredEvents = () => {
  const columns = [
    { field: "id", headerName: "Serial No.", flex: 0.5 },
    { field: "eventId", headerName: "Event ID", flex: 1 },
    {
      field: "name",
      headerName: "Event Name",
      cellClassName: "name-column--cell",
      flex: 1,
    },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "organizedBy", headerName: "Organised By", flex: 1 },
  ];
  return (
    <Box m="20px">
      <Header title="REGISTERED EVENTS" subtitle="List of Registered Events" />
      <EventsTable columns={columns} events={events} />
    </Box>
  );
};

export default ViewRegisteredEvents;
