import { useEffect, useState } from "react";

import {
  MapPin,
  LogIn,
  LogOut,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // ==================================================
  // CHECK LOGIN STATUS
  // ==================================================

  useEffect(() => {
    const loggedIn =
      localStorage.getItem(
        "travelPlannerLoggedIn"
      ) === "true";

    setIsLoggedIn(loggedIn);
  }, [location]);

  // ==================================================
  // LOGOUT
  // ==================================================

  const handleLogout = () => {
    // Remove current login session
    localStorage.removeItem(
      "travelPlannerLoggedIn"
    );

    // Remove current logged-in user
    localStorage.removeItem(
      "currentUser"
    );

    // Remove pending plan
    // so an old plan will not be selected
    // after logging in again.
    localStorage.removeItem(
      "travelPlannerPendingPlan"
    );

    // Immediately change button to Login
    setIsLoggedIn(false);

    // Go back to Home
    navigate("/");
  };

  return (
    <header className="navbar">

      {/* ==================================================
          LOGO
      ================================================== */}

      <Link
        to="/"
        className="navbar-logo"
      >
        <span className="navbar-logo-icon">
          <MapPin size={21} />
        </span>

        <span className="navbar-logo-text">
          Travel<span>Planner</span>
        </span>
      </Link>

      {/* ==================================================
          NAVIGATION
      ================================================== */}

      <nav className="navbar-links">

        <Link
          to="/"
          className={
            location.pathname === "/"
              ? "active"
              : ""
          }
        >
          Home
        </Link>

        <Link
          to="/destinations"
          className={
            location.pathname === "/destinations"
              ? "active"
              : ""
          }
        >
          Destinations
        </Link>

        <Link
          to="/travel-plans"
          className={
            location.pathname === "/travel-plans"
              ? "active"
              : ""
          }
        >
          Travel Plans
        </Link>

        <Link
          to="/explore"
          className={
            location.pathname === "/explore"
              ? "active"
              : ""
          }
        >
          Explore
        </Link>

        {/* <Link
          to="/about"
          className={
            location.pathname === "/about"
              ? "active"
              : ""
          }
        >
          About
        </Link> */}

        <Link
          to="/contact"
          className={
            location.pathname === "/contact"
              ? "active"
              : ""
          }
        >
          Contact
        </Link>

        {/* ==================================================
            LOGIN / LOGOUT
        ================================================== */}

        {isLoggedIn ? (
          <button
            type="button"
            className="navbar-login"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Logout
          </button>
        ) : (
          <Link
            to="/auth"
            className="navbar-login"
          >
            <LogIn size={17} />
            Login
          </Link>
        )}

      </nav>
    </header>
  );
}