import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="happy-mappy-footer">

      {/* FOOTER TOP */}
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-column footer-brand-column">

          <Link to="/" className="footer-logo-link">
            <img
              src="/images/logo1.png"
              alt="Happy Mappy"
              className="footer-logo"
            />
          </Link>

          <p className="footer-description">
            Explore beautiful destinations, discover amazing places,
            and create unforgettable travel memories with Happy Mappy.
          </p>

          {/* SOCIAL MEDIA */}
          <div className="footer-socials">

            <a
              href="#"
              className="footer-social"
              aria-label="Facebook"
            >
              <Facebook size={19} />
            </a>

            <a
              href="#"
              className="footer-social"
              aria-label="Instagram"
            >
              <Instagram size={19} />
            </a>

            <a
              href="#"
              className="footer-social"
              aria-label="Twitter"
            >
              <Twitter size={19} />
            </a>

          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/destinations">
              Destinations
            </Link>

            <Link to="/explore">
              Explore
            </Link>

            <Link to="/travel-plans">
              Travel Plans
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>
        </div>

        {/* TRAVEL */}
        <div className="footer-column">

          <h3>Travel With Us</h3>

          <div className="footer-links">

            <Link to="/destinations">
              Popular Destinations
            </Link>

            <Link to="/explore">
              Combination Plans
            </Link>

            <Link to="/travel-plans">
              Trip Plans
            </Link>

            <Link to="/auth">
              Login
            </Link>

          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-column">

          <h3>Contact Us</h3>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <MapPin size={19} />

              <span>
                Tamil Nadu, India
              </span>
            </div>

            <div className="footer-contact-item">
              <Phone size={19} />

              <span>
                +91 98765 43210
              </span>
            </div>

            <div className="footer-contact-item">
              <Mail size={19} />

              <span>
                happymappy@example.com
              </span>
            </div>

          </div>

        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="footer-newsletter">

        <div className="newsletter-content">

          <div>
            <h3>Ready for your next adventure?</h3>

            <p>
              Discover new places and plan your perfect trip with Happy Mappy.
            </p>
          </div>

          <Link
            to="/destinations"
            className="footer-explore-btn"
          >
            Explore Now
          </Link>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">

        <div className="footer-bottom-content">

          <p>
            © {new Date().getFullYear()} Happy Mappy. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/">
              Privacy
            </Link>

            <Link to="/">
              Terms
            </Link>
          </div>

          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>

      </div>

    </footer>
  );
}