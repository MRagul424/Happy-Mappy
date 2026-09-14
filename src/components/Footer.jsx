import { Mail, Plane } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-icon">
              <Plane size={20} />
            </span>

            Travel<span>Planner</span>
          </div>

          <p>
            Your personal travel companion for discovering beautiful
            destinations and creating unforgettable journeys.
          </p>
        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <a href="/destinations">
            Destinations
          </a>

          <a href="/travel-plans">
            Travel Plans
          </a>

          <a href="/explore">
            Explore
          </a>
        </div>

        <div className="footer-column">
          <h4>Company</h4>

          <a href="/auth">
            Login
          </a>

          <a href="#contact">
            Contact
          </a>

          <a href="#privacy">
            Privacy Policy
          </a>
        </div>

        <div className="footer-column">
          <h4>Need Help?</h4>

          <p>
            Have questions about your next trip?
          </p>

          <a
            href="mailto:support@travelplanner.com"
            className="footer-contact"
          >
            <Mail size={16} />
            Contact Support
          </a>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 TravelPlanner. All rights reserved.
        </p>

        <p>
          Made with ❤️ for travelers
        </p>
      </div>
    </footer>
  );
}