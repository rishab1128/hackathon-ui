import { Box, Typography, IconButton, Modal } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../theme";
import { mockAdminAllEvents as events } from "../data/mockData";
import Header from "../components/Header";
import { useTheme } from "@mui/material";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

const PendingEventsPage = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [pendingEvents, setPendingEvents] = useState(events);

  const handleApprove = (id) => {
    // Logic to handle approve action
    setPendingEvents(events.filter((event) => event.id !== id));
    setModalContent("Approved");
    setOpenModal(true);
  };

  const handleReject = (id) => {
    // Logic to handle reject action
    setPendingEvents(events.filter((event) => event.id !== id));
    setModalContent("Rejected");
    setOpenModal(true);
  };

  const columns = [
    { field: "id", headerName: "Serial No.", flex: 0.5 },
    { field: "eventId", headerName: "Event ID", flex: 1 },
    { field: "name", headerName: "Event Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
    { field: "organizedBy", headerName: "Organised By", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Box>
          <IconButton
            onClick={() => handleApprove(params.row.id)}
            color="success"
          >
            <CheckIcon />
          </IconButton>
          <IconButton onClick={() => handleReject(params.row.id)} color="error">
            <CloseIcon />
          </IconButton>
        </Box>
      ),
    },
  ];

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box m="20px">
      <Header title="PENDING EVENTS" subtitle="Events awaiting approval" />
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
          rows={pendingEvents}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
      <Modal open={openModal} onClose={handleCloseModal}>
        <Box
          sx={{
            backgroundColor:
              modalContent === "Approved"
                ? colors.greenAccent[100]
                : colors.redAccent[100],
            p: 3,
            borderRadius: 4,
            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Typography variant="body1" color="black">
            {modalContent}
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default PendingEventsPage;
