import { Link, NavLink } from "react-router-dom";
import { Plane } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="navbar-logo-icon">
          <Plane size={20} />
        </span>

        <span className="navbar-logo-text">
          Travel<span>Planner</span>
        </span>
      </Link>

      <div className="navbar-links">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/destinations">
          Destinations
        </NavLink>

        <NavLink to="/travel-plans">
          Travel Plans
        </NavLink>

          <NavLink to="/explore">
            Explore
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>
      </div>


      <Link to="/auth" className="navbar-login">
        Login
      </Link>
    </nav>
  );
}