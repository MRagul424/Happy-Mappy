import { useEffect, useRef, useState } from "react";
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
  Mail,
  Phone,
} from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const profileRef = useRef(null);

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
     CLOSE PROFILE WHEN CLICKING OUTSIDE
  ===================================================== */

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfile(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  /* =====================================================
     LOGOUT
  ===================================================== */

  const handleLogout = () => {
    localStorage.removeItem("happyMappyCurrentUser");

    setShowLogoutPopup(false);
    setShowProfile(false);
    setMenuOpen(false);

    navigate("/");
  };

  /* =====================================================
     CLOSE MOBILE MENU
  ===================================================== */

  const closeMenu = () => {
    setMenuOpen(false);
    setShowProfile(false);
  };

  /* =====================================================
     OPEN LOGIN
  ===================================================== */

  const openLogin = () => {
    setMenuOpen(false);
    navigate("/auth");
  };

  /* =====================================================
     PROFILE TOGGLE
  ===================================================== */

  const toggleProfile = () => {
    setShowProfile((previous) => !previous);
  };

  /* =====================================================
     USER DETAILS
  ===================================================== */

  const userName =
    currentUser?.name || "User";

  const userEmail =
    currentUser?.email ||
    currentUser?.Email ||
    "Email not available";

  const userPhone =
    currentUser?.phone ||
    currentUser?.contact ||
    currentUser?.contactNumber ||
    currentUser?.mobile ||
    "Contact number not available";

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

                {/* =====================================
                    USER PROFILE BUTTON + DROPDOWN
                ===================================== */}

                <div
                  className="profile-wrapper"
                  ref={profileRef}
                >

                  <button
                    type="button"
                    className="user-display"
                    onClick={toggleProfile}
                    aria-expanded={showProfile}
                    aria-label="Open profile"
                  >
                    <User size={18} />

                    <span>
                      {userName}
                    </span>
                  </button>

                  {/* =================================
                      PROFILE DROPDOWN
                  ================================= */}

                  {showProfile && (
                    <div className="profile-dropdown">

                      {/* PROFILE HEADER */}

                      <div className="profile-header">

                        <div className="profile-avatar">
                          <User size={26} />
                        </div>

                        <div className="profile-title">
                          <h3>
                            {userName}
                          </h3>

                          <span>
                            Happy Mappy User
                          </span>
                        </div>

                      </div>

                      {/* PROFILE DETAILS */}

                      <div className="profile-details">

                        {/* NAME */}

                        <div className="profile-detail">

                          <div className="profile-detail-icon">
                            <User size={17} />
                          </div>

                          <div>
                            <small>
                              Name
                            </small>

                            <p>
                              {userName}
                            </p>
                          </div>

                        </div>

                        {/* EMAIL */}

                        <div className="profile-detail">

                          <div className="profile-detail-icon">
                            <Mail size={17} />
                          </div>

                          <div>
                            <small>
                              Email
                            </small>

                            <p>
                              {userEmail}
                            </p>
                          </div>

                        </div>

                        {/* CONTACT */}

                        <div className="profile-detail">

                          <div className="profile-detail-icon">
                            <Phone size={17} />
                          </div>

                          <div>
                            <small>
                              Contact Number
                            </small>

                            <p>
                              {userPhone}
                            </p>
                          </div>

                        </div>

                      </div>

                    </div>
                  )}

                </div>

                {/* =====================================
                    LOGOUT
                ===================================== */}

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

              /* =======================================
                 LOGIN
              ======================================= */

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
                MOBILE PROFILE
            =========================================== */}

            {currentUser && (
              <div className="mobile-profile">

                <div className="mobile-profile-header">

                  <div className="mobile-profile-avatar">
                    <User size={22} />
                  </div>

                  <div>
                    <strong>
                      {userName}
                    </strong>

                    <span>
                      Happy Mappy User
                    </span>
                  </div>

                </div>

                <div className="mobile-profile-details">

                  <div>
                    <Mail size={16} />

                    <span>
                      {userEmail}
                    </span>
                  </div>

                  <div>
                    <Phone size={16} />

                    <span>
                      {userPhone}
                    </span>
                  </div>

                </div>

              </div>
            )}

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