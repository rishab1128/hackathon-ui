import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EditIcon from "@mui/icons-material/Edit";
import GoLiveIcon from "@mui/icons-material/Send";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  IconButton,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useTheme
} from "@mui/material";
import { useState } from "react";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import { mockOrganizedEvents } from "../data/mockData";
import { tokens } from "../theme";

const OrganizerDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample event data
  const events = [
    {
      serialNo: 1,
      eventId: "E001",
      name: "Event 1",
      category: "Sports",
      date: "2022-10-10",
      status: "upcoming",
      type: "In-Person",
    },
    {
      serialNo: 2,
      eventId: "E002",
      name: "Event 2",
      category: "Technical",
      date: "2022-11-15",
      status: "upcoming",
      type: "Virtual",
    },
    {
      serialNo: 3,
      eventId: "E003",
      name: "Event 3",
      category: "Non-Technical",
      date: "2023-01-20",
      status: "upcoming",
      type: "In-Person",
    },
    {
      serialNo: 4,
      eventId: "E004",
      name: "Event 4",
      category: "Cultural",
      date: "2023-02-25",
      status: "live",
      type: "Virtual",
    },
    {
      serialNo: 5,
      eventId: "E005",
      name: "Event 5",
      category: "Sports",
      date: "2023-03-30",
      status: "upcoming",
      type: "In-Person",
    },
    // Add more events as needed
  ];

  // State for modal
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate();

  const handleViewClick = (event) => {
    setSelectedEvent(event);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="Organizer Dashboard"
          subtitle="Welcome to your Organizer Dashboard"
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
              navigate("/organiser/create-event")
            }}
          >
            <AddIcon sx={{ mr: "10px" }} />
            Create Event
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Line Chart*/}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Events Organised
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                156
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isOrganizerDashboard={true} />
          </Box>
        </Box>

        {/* Recent Events Organized */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Recent Events Organized
            </Typography>
          </Box>
          {mockOrganizedEvents.map((events, i) => (
            <Box
              key={`${events.name}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {events.name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{events.date}</Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Events table */}
      <Box mt="20px" width="100%" overflowX="auto">
        <TableContainer>
          <Table sx={{ minWidth: 650 }} border={1}>
            <TableHead>
              <TableRow>
                <TableCell colSpan={8}>
                  <Typography variant="h3" fontWeight="600">
                    Upcoming Events
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Serial No
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Event ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Category
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Date
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Status
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Type
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="h4" fontWeight="600">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => (
                <TableRow key={index}>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.serialNo}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.eventId}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.name}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.category}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.date}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.status}</Typography></TableCell>
                  <TableCell><Typography variant="h5" fontWeight="600">{event.type}</Typography></TableCell>
                  <TableCell>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleViewClick(event);
                      }}
                    >
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add logic for edit action here
                      }}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add logic for delete action here
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                    {event.status !== "live" ? (
                      <IconButton disabled>
                        <GoLiveIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add logic for go live action here
                        }}
                      >
                        <GoLiveIcon />
                      </IconButton>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Event Details Modal */}

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
          <Typography variant="body1" color="black">
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
        </Box>
      </Modal>
    </Box>
  );
};

export default OrganizerDashboard;
