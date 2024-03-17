import { Box } from "@mui/material";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

const LineChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Monthly participation" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default LineChartPage;
