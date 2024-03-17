import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizerDashboard from "./pages/OraganizerDashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import BarGraphPage from "./pages/BarGraphPage";
import React from "react";
import CreateEventPage from "./pages/CreateEventPage";
import ViewEventsPage from "./pages/ViewEventsPage";
import PieChartPage from "./pages/PieChartPage";
import LineChartPage from "./pages/LineChartPage";
import CalendarPage from "./pages/CalendarPage";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar
            isSidebar={isSidebar}
            isOrganizerDashboard={window.location.pathname.startsWith(
              "/organiser"
            )}
          />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="*" element={<LandingPage />} />
              <Route
                path="/organiser/dashboard"
                element={<OrganizerDashboard />}
              />
              <Route path="/organiser/view-bar" element={<BarGraphPage />} />
              <Route path="/organiser/view-pie" element={<PieChartPage />} />
              <Route path="/organiser/view-line" element={<LineChartPage />} />
              <Route path="/organiser/view-calendar" element={<CalendarPage />} />
              <Route
                path="/organiser/create-event"
                element={<CreateEventPage />}
              />
              <Route
                path="/organiser/view-events"
                element={<ViewEventsPage />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
