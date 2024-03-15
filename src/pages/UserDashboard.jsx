import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockTransactions } from "../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../components/Header";
import LineChart from "../components/LineChart";
import GeographyChart from "../components/GeographyChart";
import BarChart from "../components/BarChart";
import StatBox from "../components/StatBox";
import ProgressCircle from "../components/ProgressCircle";
import Sidebar from "../components/global/Sidebar";
import { useState } from "react";
import { MenuItem } from "react-pro-sidebar";

const categories = ["All", "Sports", "Technical", "Cultural", "Non Technical"];
const events = [
  {
    title: "Urjja",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    date: "15/03/2024",
    location: "Hyderabad,India",
  },
  {
    title: "Urjja",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    date: "15/03/2024",
    location: "Hyderabad,India",
  },
  {
    title: "Urjja",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    date: "15/03/2024",
    location: "Hyderabad,India",
  },
];

const UserDashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("All");

  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box m="20px" width="100%">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="Upcoming Events" />
        </Box>
        <Box gap={5}>
          {categories.map((category) => (
            <div>
              <Typography fontSize={35}>{category}</Typography>
              <Box
                display="flex"
                flexWrap={true}
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
                p="20px 2px"
              >
                {/* ROW 1 */}
                {events.map((event) => (
                  <Box
                    gridColumn="span 3"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <StatBox
                      title="12,361"
                      subtitle="Emails Sent"
                      progress="0.75"
                      increase="+14%"
                      icon={
                        <EmailIcon
                          sx={{
                            color: colors.greenAccent[600],
                            fontSize: "26px",
                          }}
                        />
                      }
                    />
                  </Box>
                ))}
              </Box>
            </div>
          ))}
        </Box>

        {/*Events cards */}
      </Box>
    </Box>
  );
};

export default UserDashboard;
