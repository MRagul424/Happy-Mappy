import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";
import TravelPlansPage from "./pages/TravelPlansPage";
import DualPlansPage from "./pages/DualPlansPage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      {/* Navbar appears on every page */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<DestinationsPage />}
        />

        <Route
          path="/travel-plans"
          element={<TravelPlansPage />}
        />

        <Route
          path="/dual-plans"
          element={<DualPlansPage />}
        />

        <Route
          path="/auth"
          element={<AuthPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* Unknown URL */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;