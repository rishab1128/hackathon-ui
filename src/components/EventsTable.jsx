import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box, Modal, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../theme";

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

const EventsTable = ({ events }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // State for modal
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEvent = (
    params, // GridRowParams
    event, // MuiEvent<React.MouseEvent<HTMLElement>>
    details // GridCallbackDetails
  ) => {
    setSelectedEvent(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
          onRowClick={handleEvent}
          rows={events}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            backgroundColor: "#fff",
            boxShadow: 14,
            padding: 3,
            borderRadius: 4,
            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
          }}
        >
          <Typography variant="body1" gutterBottom color="black">
            {selectedEvent?.eventId}
          </Typography>
          <Typography variant="h4" gutterBottom color="black">
            {selectedEvent?.name}
          </Typography>
          <Typography variant="body1" color="black">
            {selectedEvent?.date}
          </Typography>
          <Typography variant="body1" color="black">
            {selectedEvent?.category}
          </Typography>
          <Typography variant="body1" color="black">
            {selectedEvent?.type}
          </Typography>
          <Typography variant="body1" color="black">
            {selectedEvent?.status}
          </Typography>
          <Typography variant="body1" color="black">
            {selectedEvent?.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default EventsTable;
