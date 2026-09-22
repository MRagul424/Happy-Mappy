import { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  Menu,
  X,
  LogIn,
  LogOut,
  User,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  /* =====================================================
     CURRENT USER
  ===================================================== */

  const currentUserRaw = localStorage.getItem(
    "happyMappyCurrentUser"
  );

  let currentUser = null;

  try {
    currentUser = currentUserRaw
      ? JSON.parse(currentUserRaw)
      : null;
  } catch {
    currentUser = null;
  }

  /* =====================================================
     LOGOUT
  ===================================================== */

  const handleLogout = () => {
    localStorage.removeItem("happyMappyCurrentUser");

    setShowLogoutPopup(false);
    setMenuOpen(false);

    navigate("/");
  };

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /* =====================================================
     OPEN LOGIN
  ===================================================== */

  const openLogin = () => {
    setMenuOpen(false);
    navigate("/auth");
  };

  return (
    <>
      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav className="navbar">

        <div className="navbar-container">

          {/* =============================================
              LOGO
          ============================================= */}

          <Link
            to="/"
            className="brand-logo-link"
            onClick={closeMenu}
          >
            <img
              src="/images/logo1.png"
              alt="Happy Mappy"
              className="brand-logo"
            />

            <span className="brand-name">
              Happy Mappy
            </span>
          </Link>


          {/* =============================================
              DESKTOP NAVIGATION
              
              ORDER:
              Home
              Destinations
              Travel Plans
              Dual Plans
              Contact
          ============================================= */}

          <div className="nav-links">

            <Link
              to="/"
              className="nav-link"
            >
              Home
            </Link>

            <Link
              to="/destinations"
              className="nav-link"
            >
              Destinations
            </Link>

            <Link
              to="/travel-plans"
              className="nav-link"
            >
              Travel Plans
            </Link>

            <Link
              to="/dual-plans"
              className="nav-link"
            >
              Dual Plans
            </Link>

            <Link
              to="/contact"
              className="nav-link"
            >
              Contact
            </Link>

          </div>


          {/* =============================================
              RIGHT SIDE
          ============================================= */}

          <div className="nav-actions">

            {currentUser ? (
              <>
                {/* USER */}

                <div className="user-display">

                  <User size={18} />

                  <span>
                    {currentUser?.name || "User"}
                  </span>

                </div>


                {/* LOGOUT */}

                <button
                  type="button"
                  className="logout-btn"
                  onClick={() =>
                    setShowLogoutPopup(true)
                  }
                >
                  <LogOut size={17} />

                  <span>
                    Logout
                  </span>
                </button>
              </>
            ) : (
              /* LOGIN */

              <button
                type="button"
                className="login-btn"
                onClick={openLogin}
              >
                <LogIn size={17} />

                <span>
                  Login
                </span>
              </button>
            )}

          </div>


          {/* =============================================
              MOBILE MENU BUTTON
          ============================================= */}

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        {menuOpen && (
          <div className="mobile-menu">

            {/* HOME */}

            <Link
              to="/"
              onClick={closeMenu}
            >
              Home
            </Link>


            {/* DESTINATIONS */}

            <Link
              to="/destinations"
              onClick={closeMenu}
            >
              Destinations
            </Link>


            {/* TRAVEL PLANS */}

            <Link
              to="/travel-plans"
              onClick={closeMenu}
            >
              Travel Plans
            </Link>


            {/* DUAL PLANS */}

            <Link
              to="/dual-plans"
              onClick={closeMenu}
            >
              Dual Plans
            </Link>


            {/* CONTACT */}

            <Link
              to="/contact"
              onClick={closeMenu}
            >
              Contact
            </Link>


            {/* ===========================================
                MOBILE LOGIN / LOGOUT
            =========================================== */}

            {currentUser ? (

              <button
                type="button"
                className="mobile-logout-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setShowLogoutPopup(true);
                }}
              >
                <LogOut size={18} />

                <span>
                  Logout
                </span>
              </button>

            ) : (

              <button
                type="button"
                className="mobile-login-btn"
                onClick={openLogin}
              >
                <LogIn size={18} />

                <span>
                  Login
                </span>
              </button>

            )}

          </div>
        )}

      </nav>


      {/* =================================================
          LOGOUT CONFIRMATION POPUP
      ================================================= */}

      {showLogoutPopup && (

        <div
          className="popup-overlay"
          onClick={() =>
            setShowLogoutPopup(false)
          }
        >

          <div
            className="logout-popup"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            {/* POPUP ICON */}

            <div className="popup-icon">
              <LogOut size={28} />
            </div>


            {/* TITLE */}

            <h2>
              Logout from Happy Mappy?
            </h2>


            {/* MESSAGE */}

            <p>
              Are you sure you want to logout
              from your account?
            </p>


            {/* BUTTONS */}

            <div className="popup-buttons">

              {/* CANCEL */}

              <button
                type="button"
                className="cancel-popup-btn"
                onClick={() =>
                  setShowLogoutPopup(false)
                }
              >
                Cancel
              </button>


              {/* CONFIRM */}

              <button
                type="button"
                className="confirm-logout-btn"
                onClick={handleLogout}
              >
                Yes, Logout
              </button>

            </div>

          </div>

        </div>

      )}

    </>
  );
}