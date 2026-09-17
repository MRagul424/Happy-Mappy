import { useState } from "react";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Plane,
  User,
  ArrowRight,
  Map,
  CheckCircle,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function AuthPage() {
  const [isRegister, setIsRegister] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrorMessage("");
    setSuccessMessage("");

    if (isRegister) {
      if (form.password !== form.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        return;
      }

      setSuccessMessage(
        `Welcome, ${form.name}! Your account has been created successfully.`
      );
    } else {
      setSuccessMessage(
        `Login successful! Welcome back, ${form.email}.`
      );
    }

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  const switchMode = () => {
    setIsRegister((current) => !current);

    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);

    setSuccessMessage("");
    setErrorMessage("");
  };

  const closePopup = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <main className="auth-page">
      <div className="auth-container">
        {/* ==================================================
            LEFT TRAVEL PANEL
        ================================================== */}

        <div className="auth-travel-panel">
          <div className="auth-travel-overlay"></div>

          <div className="auth-travel-content">
            <div className="auth-brand-mark">
              <span>
                <Plane size={21} />
              </span>

              <strong>
                Travel<span>Planner</span>
              </strong>
            </div>

            <div className="auth-travel-text">
              <span className="auth-small-label">
                PLAN • EXPLORE • TRAVEL
              </span>

              <h2>
                Your next journey
                <br />
                starts here.
              </h2>

              <p>
                Discover beautiful destinations, choose
                your travel plan and explore your journey
                with Travel Planner.
              </p>
            </div>

            <div className="auth-travel-features">
              <div>
                <Map size={18} />

                <span>Discover destinations</span>
              </div>

              <div>
                <Plane size={18} />

                <span>Plan your journey</span>
              </div>

              <div>
                <ArrowRight size={18} />

                <span>Travel with confidence</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            AUTH FORM PANEL
        ================================================== */}

        <div className="auth-form-panel">
          {/* MOBILE BRAND */}

          <div className="auth-mobile-brand">
            <span>
              <Plane size={20} />
            </span>

            <strong>
              Travel<span>Planner</span>
            </strong>
          </div>

          {/* HEADING */}

          <div className="auth-heading">
            <span className="auth-form-label">
              {isRegister ? "Create Account" : "Welcome Back"}
            </span>

            <h1>
              {isRegister
                ? "Start your journey"
                : "Sign in to continue"}
            </h1>

            <p>
              {isRegister
                ? "Create your account and start planning your next adventure."
                : "Sign in to access your travel plans and continue exploring."}
            </p>
          </div>

          {/* SIGN IN / SIGN UP SWITCH */}

          <div className="auth-mode-switch">
            <button
              type="button"
              className={!isRegister ? "active" : ""}
              onClick={() => {
                if (isRegister) {
                  switchMode();
                }
              }}
            >
              Sign In
            </button>

            <button
              type="button"
              className={isRegister ? "active" : ""}
              onClick={() => {
                if (!isRegister) {
                  switchMode();
                }
              }}
            >
              Sign Up
            </button>
          </div>

          {/* FORM */}

          <form className="auth-form" onSubmit={handleSubmit}>
            {/* NAME */}

            {isRegister && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>

                <div className="input-wrapper">
                  <User size={18} />

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            )}

            {/* EMAIL */}

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <div className="input-wrapper">
                <Mail size={18} />

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* PASSWORD */}

            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">Password</label>

                {!isRegister && (
                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() =>
                      setErrorMessage(
                        "Password reset will be available soon."
                      )
                    }
                  >
                    Forgot password?
                  </button>
                )}
              </div>

              <div className="input-wrapper">
                <Lock size={18} />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                />

                <button
                  type="button"
                  className="password-toggle"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}

            {isRegister && (
              <div className="form-group">
                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <div className="input-wrapper">
                  <Lock size={18} />

                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="Confirm your password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    minLength={6}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* TERMS */}

            {isRegister && (
              <label className="auth-checkbox">
                <input type="checkbox" required />

                <span>
                  I agree to the{" "}
                  <a
                    href="#terms"
                    onClick={(event) =>
                      event.preventDefault()
                    }
                  >
                    Terms & Conditions
                  </a>
                </span>
              </label>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="primary-button auth-submit"
            >
              {isRegister ? "Create Account" : "Sign In"}

              <ArrowRight size={17} />
            </button>
          </form>

          {/* SWITCH TEXT */}

          <div className="auth-switch">
            <span>
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button type="button" onClick={switchMode}>
              {isRegister ? "Sign In" : "Sign Up"}
            </button>
          </div>

          {/* HOME */}

          <Link to="/" className="auth-home-link">
            Continue without login
          </Link>
        </div>
      </div>

      {/* ==================================================
          SUCCESS POPUP
      ================================================== */}

      {successMessage && (
        <div className="auth-popup-overlay">
          <div
            className="auth-popup success-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-popup-title"
          >
            <button
              type="button"
              className="auth-popup-close"
              onClick={closePopup}
              aria-label="Close success message"
            >
              <X size={20} />
            </button>

            <div className="auth-popup-icon success-icon">
              <CheckCircle size={42} />
            </div>

            <h2 id="success-popup-title">
              Success!
            </h2>

            <p>{successMessage}</p>

            <button
              type="button"
              className="primary-button auth-popup-button"
              onClick={closePopup}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* ==================================================
          ERROR POPUP
      ================================================== */}

      {errorMessage && (
        <div className="auth-popup-overlay">
          <div
            className="auth-popup error-popup"
            role="dialog"
            aria-modal="true"
            aria-labelledby="error-popup-title"
          >
            <button
              type="button"
              className="auth-popup-close"
              onClick={closePopup}
              aria-label="Close error message"
            >
              <X size={20} />
            </button>

            <div className="auth-popup-icon error-icon">
              <X size={42} />
            </div>

            <h2 id="error-popup-title">
              Please Check
            </h2>

            <p>{errorMessage}</p>

            <button
              type="button"
              className="primary-button auth-popup-button"
              onClick={closePopup}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
    </main>
  );
}