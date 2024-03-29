import { Box, Button } from "@mui/material";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import EventsTable from "../components/EventsTable";
import { useTheme } from "@emotion/react";
import { tokens } from "../theme";

const ViewAllEventsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    {
      field: "action",
      headerName: "Action",
      renderCell: (params) => (
        <Button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Successfully Registered For ${params.row.name}.`);
          }}
          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
          }}
        >
          Register
        </Button>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Header title="EVENTS" subtitle="List of All Events" />
      <EventsTable columns={columns} events={events} />
    </Box>
  );
};

export default ViewAllEventsPage;
