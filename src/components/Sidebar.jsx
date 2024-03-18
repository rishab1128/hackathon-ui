import { Box, Typography, useTheme, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Link } from "react-router-dom";
import { tokens } from "../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import userLogo from "../assets/user.png";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = ({ currentPage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* Sidebar content based on the current page */}
          {currentPage === "LandingPage" && (
            <>
              {/* <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      EMS WEB APP
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
            </>
          )}

          {currentPage === "OrganiserDashboard" && (
            <>
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      ORGANISER
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={userLogo}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      MARK Z
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      WF SR. EMPLOYEE
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/organiser/dashboard"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Actions
                </Typography>
                <Item
                  title="Create Event"
                  to="/organiser/create-event"
                  icon={<AddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="View Events"
                  to="/organiser/view-events"
                  icon={<VisibilityIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Reports & Stats
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/organiser/view-bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/organiser/view-pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/organiser/view-line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Schedule
                </Typography>
                <Item
                  title="Calendar"
                  to="/organiser/view-calendar"
                  icon={<CalendarTodayOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </>
          )}

          {currentPage === "AdminDashboard" && (
            <>
              <MenuItem
                onClick={() => setIsCollapsed(!isCollapsed)}
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                  margin: "10px 0 20px 0",
                  color: colors.grey[100],
                }}
              >
                {!isCollapsed && (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    ml="15px"
                  >
                    <Typography variant="h3" color={colors.grey[100]}>
                      ADMIN
                    </Typography>
                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                      <MenuOutlinedIcon />
                    </IconButton>
                  </Box>
                )}
              </MenuItem>
              {!isCollapsed && (
                <Box mb="25px">
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      alt="profile-user"
                      width="100px"
                      height="100px"
                      src={userLogo}
                      style={{ cursor: "pointer", borderRadius: "50%" }}
                    />
                  </Box>
                  <Box textAlign="center">
                    <Typography
                      variant="h2"
                      color={colors.grey[100]}
                      fontWeight="bold"
                      sx={{ m: "10px 0 0 0" }}
                    >
                      ADMIN 1
                    </Typography>
                    <Typography variant="h5" color={colors.greenAccent[500]}>
                      WF SR. ADMIN
                    </Typography>
                  </Box>
                </Box>
              )}
              <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item
                  title="Dashboard"
                  to="/admin/dashboard"
                  icon={<HomeOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Actions
                </Typography>
                <Item
                  title="View All Events"
                  to="/admin/all-events"
                  icon={<VisibilityIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="View Pending Events"
                  to="/admin/pending-events"
                  icon={<PendingActionsIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Reports & Stats
                </Typography>
                <Item
                  title="Bar Chart"
                  to="/admin/view-bar"
                  icon={<BarChartOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Pie Chart"
                  to="/admin/view-pie"
                  icon={<PieChartOutlineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Line Chart"
                  to="/admin/view-line"
                  icon={<TimelineOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Typography
                  variant="h6"
                  color={colors.grey[300]}
                  sx={{ m: "15px 0 5px 20px" }}
                >
                  Info
                </Typography>
                <Item
                  title="Organisers Info"
                  to="admin/organisers-info"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Box>
            </>
          )}

          {/* {currentPage === "UserDashboard" && (
            // Render User Dashboard content
          )} */}
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
