import { Box } from "@mui/material";
import Header from "../components/Header";
import PieChart from "../components/PieChart";

const PieChartPage = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Category wise participation" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default PieChartPage;
