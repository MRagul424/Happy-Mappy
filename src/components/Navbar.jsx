import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogIn, LogOut, User } from "lucide-react";

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const currentUser = localStorage.getItem("happyMappyCurrentUser");

  const handleLogout = () => {
    localStorage.removeItem("happyMappyCurrentUser");
    setShowLogoutPopup(false);
    setMenuOpen(false);

    navigate("/");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">

          {/* LOGO */}
          <Link to="/" className="brand-logo-link">
  <img
    src="/images/logo1.png"
    alt="Happy Mappy"
    className="brand-logo"
  />

  <span className="brand-name">Happy Mappy</span>
</Link>

          {/* DESKTOP MENU */}
          <div className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>

            <Link to="/destinations" className="nav-link">
              Destinations
            </Link>

            <Link to="/explore" className="nav-link">
              Explore
            </Link>

            <Link to="/travel-plans" className="nav-link">
              Travel Plans
            </Link>

            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="nav-actions">

            {currentUser ? (
              <>
                <div className="user-display">
                  <User size={18} />
                  <span>
                    {JSON.parse(currentUser)?.name || "User"}
                  </span>
                </div>

                <button
                  className="logout-btn"
                  onClick={() => setShowLogoutPopup(true)}
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </>
            ) : (
              <button
                className="login-btn"
                onClick={() => navigate("/auth")}
              >
                <LogIn size={17} />
                Login
              </button>
            )}
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="mobile-menu">

            <Link to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link to="/destinations" onClick={closeMenu}>
              Destinations
            </Link>

            <Link to="/explore" onClick={closeMenu}>
              Explore
            </Link>

            <Link to="/travel-plans" onClick={closeMenu}>
              Travel Plans
            </Link>

            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>

            {currentUser ? (
              <button
                className="mobile-logout-btn"
                onClick={() => {
                  setMenuOpen(false);
                  setShowLogoutPopup(true);
                }}
              >
                <LogOut size={18} />
                Logout
              </button>
            ) : (
              <button
                className="mobile-login-btn"
                onClick={() => {
                  setMenuOpen(false);
                  navigate("/auth");
                }}
              >
                <LogIn size={18} />
                Login
              </button>
            )}
          </div>
        )}
      </nav>

      {/* LOGOUT POPUP */}
      {showLogoutPopup && (
        <div className="popup-overlay">
          <div className="logout-popup">

            <div className="popup-icon">
              <LogOut size={28} />
            </div>

            <h2>Logout from Happy Mappy?</h2>

            <p>
              Are you sure you want to logout from your account?
            </p>

            <div className="popup-buttons">
              <button
                className="cancel-popup-btn"
                onClick={() => setShowLogoutPopup(false)}
              >
                Cancel
              </button>

              <button
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