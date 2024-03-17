import { Box } from "@mui/material";
import Header from "../components/Header";
import BarChart from "../components/BarChart";
import React from "react";


const BarGraphPage = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Location wise participation" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default BarGraphPage;
