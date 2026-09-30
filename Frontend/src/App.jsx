import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import DestinationsPage from "./pages/DestinationsPage";
import TravelPlansPage from "./pages/TravelPlansPage";
import DualPlansPage from "./pages/DualPlansPage";
import MyPlanPage from "./pages/MyPlanPage";
import AuthPage from "./pages/AuthPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";
import "./index.css";
import "./styles.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        {/* =====================================================
            NAVBAR
        ===================================================== */}

        <Navbar />

        {/* =====================================================
            ROUTES
        ===================================================== */}

        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

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

          {/* MY PLAN */}
          <Route
            path="/my-plan"
            element={<MyPlanPage />}
          />

          {/* AUTHENTICATION */}
          <Route
            path="/auth"
            element={<AuthPage />}
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Routes>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;