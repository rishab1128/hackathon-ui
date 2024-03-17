import EventIcon from "@mui/icons-material/Event";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  useTheme
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../components/Header";
import StatBox from "../components/StatBox";
import { tokens } from "../theme";

const AdminDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample event data
  const events = [
    // Existing events
    {
      id: 1,
      eventId: "E001",
      name: "Event 1",
      category: "Sports",
      date: "2022-10-10",
      status: "upcoming",
      type: "In-Person",
    },
    // Add 15 more events
    {
      id: 2,
      eventId: "E002",
      name: "Event 2",
      category: "Technical",
      date: "2022-11-15",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 3,
      eventId: "E003",
      name: "Event 3",
      category: "Non-Technical",
      date: "2023-01-20",
      status: "upcoming",
      type: "In-Person",
    },
    {
      id: 4,
      eventId: "E004",
      name: "Event 4",
      category: "Cultural",
      date: "2023-02-25",
      status: "live",
      type: "Virtual",
    },
    {
      id: 5,
      eventId: "E005",
      name: "Event 5",
      category: "Sports",
      date: "2023-03-30",
      status: "upcoming",
      type: "In-Person",
    },
    // Add more events as needed
    {
      id: 6,
      eventId: "E006",
      name: "Event 6",
      category: "Technical",
      date: "2023-04-10",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 7,
      eventId: "E007",
      name: "Event 7",
      category: "Sports",
      date: "2023-05-15",
      status: "upcoming",
      type: "In-Person",
    },
    {
      id: 8,
      eventId: "E008",
      name: "Event 8",
      category: "Cultural",
      date: "2023-06-20",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 9,
      eventId: "E009",
      name: "Event 9",
      category: "Non-Technical",
      date: "2023-07-25",
      status: "live",
      type: "In-Person",
    },
    {
      id: 10,
      eventId: "E010",
      name: "Event 10",
      category: "Sports",
      date: "2023-08-30",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 11,
      eventId: "E011",
      name: "Event 11",
      category: "Technical",
      date: "2023-09-05",
      status: "upcoming",
      type: "In-Person",
    },
    {
      id: 12,
      eventId: "E012",
      name: "Event 12",
      category: "Cultural",
      date: "2023-10-10",
      status: "upcoming",
      type: "Virtual",
    },
    {
      id: 13,
      eventId: "E013",
      name: "Event 13",
      category: "Non-Technical",
      date: "2023-11-15",
      status: "upcoming",
      type: "In-Person",
    },
    {
      id: 14,
      eventId: "E014",
      name: "Event 14",
      category: "Sports",
      date: "2023-12-20",
      status: "Past",
      type: "Virtual",
    },
    {
      id: 15,
      eventId: "E015",
      name: "Event 15",
      category: "Technical",
      date: "2024-01-25",
      status: "Past",
      type: "In-Person",
    },
  ];

  const columns = [
    { field: "id", headerName: "Serial No.", flex: 0.5 },
    { field: "eventId", headerName: "Event ID", flex: 1 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "type", headerName: "Type", flex: 1 },
  ];

  const navigate = useNavigate();

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Admin Dashboard"
          subtitle="Welcome to your Administrator Dashboard"
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => {
              navigate("/admin/pending-events");
            }}
          >
            <VisibilityIcon sx={{ mr: "10px" }} />
            View Pending Events
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1050"
            subtitle="Total Events Organised"
            progress="0.75"
            increase="+14%"
            icon={
              <EventIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="200"
            subtitle="Total Organisers"
            progress="0.50"
            increase="+21%"
            icon={
              <ManageAccountsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="800"
            subtitle="Participant retention"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="278"
            subtitle="New Participants"
            progress="0.80"
            increase="+43%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
      </Box>
      <Box m="20px">
        <Header title="All Events" subtitle="Events organized so far" />
        <Box
          m="40px 0 0 0"
          height="55vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
              fontSize: "16px"
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
              fontSize: "16px"
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
            // pageSize={10}
            rowsPerPageOptions={[10, 20, 30, 40]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AdminDashboard;
