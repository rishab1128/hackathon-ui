import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import { useTheme } from "@mui/material";

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
  ];

  return (
    <Box m="20px">
      <Header title="EVENTS" subtitle="List of All Events" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
            fontSize: "16px",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={events}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ViewAllEventsPage;
