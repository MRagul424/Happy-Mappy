import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="happy-mappy-footer">

      {/* FOOTER CONTENT */}
      <div className="footer-container">

        {/* SOCIAL MEDIA */}
        <div className="footer-column">
          <h3>Social Media</h3>

          <p className="footer-description">
            Follow Happy Mappy and stay connected with us.
          </p>

          <div className="footer-socials">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3l1-4h-4V9c0-.67.33-1 1-1z"
                />
              </svg>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  ry="5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* TWITTER */}
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social"
              aria-label="Twitter"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-6.39L6.48 22H3.36l7.24-8.28L2.8 2h6.4l4.42 5.84L18.9 2zm-1.1 17.7h1.73L8.26 4.18H6.4L17.8 19.7z"
                />
              </svg>
            </a>

          </div>
        </div>

        {/* CONTACT US */}
        <div className="footer-column">
          <h3>Contact Us</h3>

          <div className="footer-contact">

            <div className="footer-contact-item">
              <MapPin size={19} />
              <span>Tamil Nadu, India</span>
            </div>

            <div className="footer-contact-item">
              <Phone size={19} />
              <span>+91 98765 43210</span>
            </div>

            <div className="footer-contact-item">
              <Mail size={19} />
              <span>happymappy@example.com</span>
            </div>

          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>
            © {new Date().getFullYear()} Happy Mappy. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}