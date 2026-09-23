import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";
import TravelPlansPage from "./pages/TravelPlansPage";
import DualPlansPage from "./pages/DualPlansPage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      {/* NAVBAR - appears on every page */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main>
        <Routes>
          {/* HOME */}
          <Route path="/" element={<Home />} />

          {/* DESTINATIONS */}
          <Route
            path="/destinations"
            element={<DestinationsPage />}
          />

          {/* TRAVEL PLANS */}
          <Route
            path="/travel-plans"
            element={<TravelPlansPage />}
          />

          {/* DUAL PLANS */}
          <Route
            path="/dual-plans"
            element={<DualPlansPage />}
          />

          {/* LOGIN / SIGN UP */}
          <Route
            path="/auth"
            element={<AuthPage />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

          {/* UNKNOWN URL */}
          <Route
            path="*"
            element={<Home />}
          />
        </Routes>
      </main>

      {/* FOOTER - appears on every page */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;