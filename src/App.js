import LandingPage from "./pages/LandingPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import OrganizerDashboard from "./pages/OraganizerDashboard";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useState } from "react";
import BarGraphPage from "./pages/BarGraphPage";
import React from "react";
import CreateEventPage from "./pages/CreateEventPage";
import ViewAllEventsPage from "./pages/ViewAllEventsPage";
import ViewEventsPage from "./pages/ViewEventsPage";
import PieChartPage from "./pages/PieChartPage";
import LineChartPage from "./pages/LineChartPage";
import CalendarPage from "./pages/CalendarPage";
import AdminDashboard from "./pages/AdminDashboard";
import PendingEventsPage from "./pages/PendingEventsPage";
import OrganisersInfoPage from "./pages/OrganisersInfoPage";
import UserDashboard from "./pages/UserDashboard";
import ViewUpcomingEvents from "./pages/ViewUpcomingEvents";
import ViewRegisteredEvents from "./pages/ViewRegisteredEvents";
import AdminViewAllEvents from "./pages/AdminViewAllEvents";
import LoginPage from "./pages/LoginPage";
// import LandingPage2 from "./pages/LandingPage2";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Function to determine the current page based on the URL
  const getCurrentPage = () => {
    const path = window.location.pathname;
    if (path.startsWith("/organiser")) {
      return "OrganiserDashboard";
    } else if (path.startsWith("/admin")) {
      return "AdminDashboard";
    } else if (path.startsWith("/user")) {
      return "UserDashboard";
    } else {
      return "LandingPage";
    }
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {getCurrentPage() !== "LandingPage" && (
            <Sidebar
              isSidebar={isSidebar}
              currentPage={getCurrentPage()} // Pass the currentPage prop
            />
          )}

          <main className="content">
            <Topbar
              setIsSidebar={setIsSidebar}
              currentPage={getCurrentPage()}
            />
            <Routes>
              <Route path="*" element={<LandingPage />} />

              {/* LOGIN */}
              <Route path="/login/user" element={<LoginPage />} />
              <Route path="/login/admin" element={<LoginPage />} />
              <Route path="/login/organiser" element={<LoginPage />} />

              {/* ORGANISER */}
              <Route
                path="/organiser/dashboard"
                element={<OrganizerDashboard />}
              />
              <Route path="/organiser/view-bar" element={<BarGraphPage />} />
              <Route path="/organiser/view-pie" element={<PieChartPage />} />
              <Route path="/organiser/view-line" element={<LineChartPage />} />
              <Route
                path="/organiser/view-calendar"
                element={<CalendarPage />}
              />
              <Route
                path="/organiser/create-event"
                element={<CreateEventPage />}
              />
              <Route
                path="/organiser/view-events"
                element={<ViewEventsPage />}
              />

              {/* ADMIN */}
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route
                path="/admin/all-events"
                element={<AdminViewAllEvents />}
              />
              <Route
                path="/admin/pending-events"
                element={<PendingEventsPage />}
              />
              <Route
                path="/admin/organisers-info"
                element={<OrganisersInfoPage />}
              />
              <Route path="/admin/view-bar" element={<BarGraphPage />} />
              <Route path="/admin/view-pie" element={<PieChartPage />} />
              <Route path="/admin/view-line" element={<LineChartPage />} />

              {/* USER */}
              <Route
                path="/user/dashboard"
                element={<Navigate to="/user/all-events" />}
              />
              <Route path="/user/all-events" element={<ViewAllEventsPage />} />
              <Route
                path="/user/upcoming-events"
                element={<ViewUpcomingEvents />}
              />
              <Route
                path="/user/registered-events"
                element={<ViewRegisteredEvents />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
