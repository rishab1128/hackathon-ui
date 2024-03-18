import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import Header from "./Header";

const Topbar = ({ currentPage }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const navigate = useNavigate();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center" p={2}>
      <Box display="flex" alignItems="center">
        {currentPage !== "LandingPage" && (
          <>
            {/* ICONS */}
            <Box display="flex">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  navigate("/");
                }}
              >
                <PersonOutlinedIcon />
              </IconButton>
            </Box>
          </>
        )}

        {currentPage === "LandingPage" && (
          <>
            <Box display="flex">
              <Stack direction="row" spacing={2}>
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
                      navigate("/login/user");
                    }}
                  >
                    <PersonIcon sx={{ mr: "10px" }} />
                    User
                  </Button>
                </Box>
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
                      navigate("/login/organiser");
                    }}
                  >
                    <PersonAddAlt1Icon sx={{ mr: "10px" }} />
                    Organiser
                  </Button>
                </Box>
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
                      navigate("/login/admin");
                    }}
                  >
                    <AdminPanelSettingsIcon sx={{ mr: "10px" }} />
                    Admin
                  </Button>
                </Box>
              </Stack>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
