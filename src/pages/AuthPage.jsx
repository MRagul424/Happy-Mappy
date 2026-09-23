import {
  useEffect,
  useState,
} from "react";

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
  AlertCircle,
  X,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";


export default function AuthPage() {

  const navigate = useNavigate();
  const location = useLocation();
  /* ==================================================
     LOGIN / SIGNUP
  ================================================== */
  const [isRegister, setIsRegister] =
    useState(false);
  /* ==================================================
     PASSWORD VISIBILITY
  ================================================== */
  const [showPassword, setShowPassword] =
    useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  /* ==================================================
     FORM
  ================================================= */
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  /* ==================================================
     POPUP
  ================================================== */
  const [popup, setPopup] = useState({
    show: false,
    type: "success",
    title: "",
    message: "",
    buttonText: "OK",
    action: null,
  });
  /* ==================================================
     LOGIN REQUIRED POPUP
  ================================================== */
  useEffect(() => {
    if (
      location.state?.requireLogin
    ) {
      setPopup({
        show: true,
        type: "warning",
        title: "Please Login First",
        message:
          "You need to login to your Happy Mappy account before selecting a travel plan.",
        buttonText: "Continue",
        action: null,
      });
    }
  }, [location.state]);
  /* ==================================================
     SHOW POPUP
  ================================================== */
  const showPopup = ({
    type = "success",
    title = "",
    message = "",
    buttonText = "OK",
    action = null,
  }) => {
    setPopup({
      show: true,
      type,
      title,
      message,
      buttonText,
      action,
    });
  };
  /* ==================================================
     CLOSE POPUP
  ================================================== */
  const closePopup = () => {
    const action =
      popup.action;
    setPopup({
      show: false,
      type: "success",
      title: "",
      message: "",
      buttonText: "OK",
      action: null,
    });
    if (action) {
      action();
    }
  };
  /* ==================================================
     INPUT CHANGE
  ================================================== */
  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;
    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };
  /* ==================================================
     SUBMIT
  ================================================== */
  const handleSubmit = (event) => {
    event.preventDefault();
    const email =
      form.email
        .trim()
        .toLowerCase();
    /* ==================================================
       SIGN UP
    ================================================== */
    if (isRegister) {
      if (
        form.password !==
        form.confirmPassword
      ) {
        showPopup({
          type: "error",
          title: "Passwords Don't Match",
          message:
            "Please enter the same password in both password fields.",
          buttonText: "Try Again",
        });
        return;
      }
      if (form.password.length < 6) {
        showPopup({
          type: "error",
          title: "Password Too Short",
          message:
            "Your password must contain at least 6 characters.",
          buttonText: "Try Again",
        });
        return;
      }
      const existingUsers =
        JSON.parse(
          localStorage.getItem(
            "happyMappyUsers"
          ) || "[]"
        );
      const userExists =
        existingUsers.some(
          (user) =>
            user.email === email
        );
      if (userExists) {
        showPopup({
          type: "warning",
          title: "Account Already Exists",
          message:
            "An account with this email already exists. Please sign in instead.",
          buttonText: "Go to Sign In",
          action: () => {
            setIsRegister(false);
            setForm({
              name: "",
              email: email,
              password: "",
              confirmPassword: "",
            });
          },
        });
        return;
      }
      const newUser = {
        id: Date.now(),
        name: form.name.trim(),
        email,
        password: form.password,
      };
      localStorage.setItem(
        "happyMappyUsers",
        JSON.stringify([
          ...existingUsers,
          newUser,
        ])
      );
      /* ==================================================
         AUTOMATIC LOGIN AFTER SIGN UP
      ================================================== */
      const currentUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };
      localStorage.setItem(
        "happyMappyCurrentUser",
        JSON.stringify(currentUser)
      );
      window.dispatchEvent(
        new Event("happyMappyAuthChanged")
      );
      /* ==================================================
         SHOW SUCCESS POPUP
      ================================================== */
      showPopup({
        type: "success",
        title: "Account Created!",
        message:
          `Welcome ${newUser.name}! Your Happy Mappy account has been created successfully. You are now logged in.`,
        buttonText: "Continue",
        action: () => {
          navigate(
            location.state?.from || "/",
            {
              replace: true,
            }
          );
        },
      });
      setForm({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setShowPassword(false);
      setShowConfirmPassword(false);
      return;
    }
    /* ==================================================
       LOGIN
    ================================================== */
    const existingUsers =
      JSON.parse(
        localStorage.getItem(
          "happyMappyUsers"
        ) || "[]"
      );
    const user =
      existingUsers.find(
        (account) =>
          account.email === email &&
          account.password === form.password
      );
    if (!user) {
      showPopup({
        type: "error",
        title: "Login Failed",
        message:
          "Invalid email or password. Please check your login details and try again.",
        buttonText: "Try Again",
      });
      return;
    }
    /* ==================================================
       SAVE CURRENT USER
    ================================================== */
    const currentUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    localStorage.setItem(
      "happyMappyCurrentUser",
      JSON.stringify(currentUser)
    );
    window.dispatchEvent(
      new Event("happyMappyAuthChanged")
    );
    /* ==================================================
       RETURN LOCATION
    ================================================== */
    const returnPath =
      location.state?.from ||
      "/";
    showPopup({
      type: "success",
      title: "Welcome Back!",
      message:
        `Hi ${user.name}! You have successfully logged in to Happy Mappy.`,
      buttonText: "Continue",
      action: () => {
        navigate(returnPath, {
          replace: true,
        });
      },
    });
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };
  /* ==================================================
     SWITCH MODE
  ================================================== */
  const switchMode = () => {
    setIsRegister(
      (current) => !current
    );
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };
  return (
    <main className="auth-page">
      <div className="auth-container">
        {/* ==================================================
            LEFT PANEL
        ================================================== */}
        <div className="auth-travel-panel">
          <div className="auth-travel-overlay"></div>
          <div className="auth-travel-content">
            <div className="auth-brand-mark">
              <span>
                <Plane size={21} />
              </span>
              <strong>
                Happy <span>Mappy</span>
              </strong>
            </div>
            <div className="auth-travel-text">
              <span className="auth-small-label">
                PLAN • EXPLORE • TRAVEL
              </span>
              <h2>
                Your next journey
                starts here.
              </h2>
              <p>
                Discover beautiful
                destinations, choose
                your travel plan and
                explore your journey
                with Happy Mappy.
              </p>
            </div>
            <div className="auth-travel-features">
              <div>
                <Map size={18} />
                <span>
                  Discover destinations
                </span>
              </div>
              <div>
                <Plane size={18} />
                <span>
                  Plan your journey
                </span>
              </div>
              <div>
                <ArrowRight size={18} />
                <span>
                  Travel with confidence
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* ==================================================
            FORM PANEL
        ================================================== */}
        <div className="auth-form-panel">
          <div className="auth-mobile-brand">
            <span>
              <Plane size={20} />
            </span>
            <strong>
              Happy <span>Mappy</span>
            </strong>
          </div>
          <div className="auth-heading">
            <span className="auth-form-label">
              {isRegister
                ? "Create Account"
                : "Welcome Back"}
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
          {/* ==================================================
              MODE SWITCH
          ================================================== */}
          <div className="auth-mode-switch">
            <button
              type="button"
              className={
                !isRegister
                  ? "active"
                  : ""
              }
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
              className={
                isRegister
                  ? "active"
                  : ""
              }
              onClick={() => {
                if (!isRegister) {
                  switchMode();
                }
              }}
            >
              Sign Up
            </button>
          </div>
          {/* ==================================================
              FORM
          ================================================== */}
          <form
            className="auth-form"
            onSubmit={handleSubmit}
          >
            {isRegister && (
              <div className="form-group">
                <label htmlFor="name">
                  Full Name
                </label>
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
            <div className="form-group">
              <label htmlFor="email">
                Email Address
              </label>
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
            <div className="form-group">
              <div className="form-label-row">
                <label htmlFor="password">
                  Password
                </label>
                {!isRegister && (
                  <button
                    type="button"
                    className="forgot-password"
                    onClick={() => {
                      showPopup({
                        type: "info",
                        title: "Forgot Password?",
                        message:
                          "Password reset is not connected to a backend yet. Please contact Happy Mappy support.",
                        buttonText: "OK",
                      });
                    }}
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
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
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
                    setShowPassword(
                      (current) =>
                        !current
                    )
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
                    value={
                      form.confirmPassword
                    }
                    onChange={handleChange}
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) =>
                          !current
                      )
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
            {isRegister && (
              <label className="auth-checkbox">
                <input
                  type="checkbox"
                  required
                />
                <span>
                  I agree to the
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
            <button
              type="submit"
              className="primary-button auth-submit"
            >
              {isRegister
                ? "Create Account"
                : "Sign In"}
              <ArrowRight size={17} />
            </button>
          </form>
          <div className="auth-switch">
            <span>
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>
            <button
              type="button"
              onClick={switchMode}
            >
              {isRegister
                ? "Sign In"
                : "Sign Up"}
            </button>
          </div>
          <Link
            to="/"
            className="auth-home-link"
          >
            Continue without login
          </Link>
        </div>
      </div>
      {/* ==================================================
          CUSTOM AUTH POPUP
      ================================================== */}
      {popup.show && (
        <div
          className="auth-popup-overlay"
          onClick={closePopup}
        >
          <div
            className={`auth-popup auth-popup-${popup.type}`}
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            <button
              type="button"
              className="auth-popup-close"
              onClick={closePopup}
            >
              <X size={19} />
            </button>
            <div className="auth-popup-icon">
              {popup.type === "success" && (
                <CheckCircle size={32} />
              )}
              {popup.type === "error" && (
                <AlertCircle size={32} />
              )}
              {popup.type === "warning" && (
                <AlertCircle size={32} />
              )}
              {popup.type === "info" && (
                <Mail size={30} />
              )}
            </div>
            <h2>
              {popup.title}
            </h2>
            <p>
              {popup.message}
            </p>
            <button
              type="button"
              className="auth-popup-button"
              onClick={closePopup}
            >
              {popup.buttonText}
            </button>
          </div>
        </div>
      )}
    </main>
  );
}