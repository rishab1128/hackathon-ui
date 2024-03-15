import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizerDashboard from "./pages/OraganizerDashboard";
import UserDashboard from "./pages/UserDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/organiser/dashboard" element={<OrganizerDashboard />} />
        <Route path="/events" element={<UserDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
