import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrganizerDashboard from "./pages/OraganizerDashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<LandingPage />} />
        <Route path="/organiser/dashboard" element={<OrganizerDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
