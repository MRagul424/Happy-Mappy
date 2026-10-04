import {
  useEffect,
  useState,
} from "react";

import {
  Eye,
  EyeOff,
  Lock,
  Mail,
  Phone,
  Plane,
  User,
  ArrowRight,
  Map,
  CheckCircle,
  AlertCircle,
  X,
  LoaderCircle,
} from "lucide-react";

import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

/* ==================================================
   HAPPY MAPPY BACKEND
================================================== */

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000";

/* ==================================================
   SAFE API RESPONSE HANDLER
================================================== */

const readApiResponse = async (response) => {
  const contentType =
    response.headers.get("content-type") || "";

  if (
    contentType.includes("application/json")
  ) {
    try {
      return await response.json();
    } catch (error) {
      console.error(
        "API JSON Parse Error:",
        error
      );

      return {};
    }
  }

  return {};
};

/* ==================================================
   API ERROR MESSAGE HELPER
================================================== */

const getApiErrorMessage = (
  response,
  data,
  fallbackMessage
) => {
  if (
    data &&
    typeof data.message === "string" &&
    data.message.trim()
  ) {
    return data.message;
  }

  switch (response.status) {
    case 400:
      return "Please check the information you entered and try again.";

    case 401:
      return "Invalid email or password. Please check your login details and try again.";

    case 403:
      return "You are not allowed to perform this action.";

    case 404:
      return "The requested service could not be found. Please try again later.";

    case 409:
      return "An account with this email already exists.";

    case 413:
      return "The request is too large. Please check your information and try again.";

    case 429:
      return "Too many requests. Please wait a moment and try again.";

    case 500:
      return "Server error. Please try again later.";

    case 503:
      return "Happy Mappy services are temporarily unavailable. Please try again later.";

    default:
      return fallbackMessage;
  }
};

/* ==================================================
   NETWORK ERROR MESSAGE
================================================== */

const getNetworkErrorMessage = () => {
  return "Unable to connect to the Happy Mappy server. Please make sure the backend is running and try again.";
};

export default function AuthPage() {
  const navigate = useNavigate();
  const location = useLocation();

  /* ==================================================
     LOGIN / SIGNUP
  ================================================== */

  const [isRegister, setIsRegister] =
    useState(false);

  /* ==================================================
     LOADING STATE
  ================================================== */

  const [isLoading, setIsLoading] =
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
  ================================================== */

  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
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
    if (location.state?.requireLogin) {
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
    const action = popup.action;

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

    /* ================================================
       CONTACT NUMBER
       Allow only numbers
       Maximum 10 digits
    ================================================ */

    if (name === "contact") {
      const onlyNumbers = value
        .replace(/\D/g, "")
        .slice(0, 10);

      setForm((current) => ({
        ...current,
        contact: onlyNumbers,
      }));

      return;
    }

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  /* ==================================================
     RESET FORM
  ================================================== */

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: "",
    });

    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  /* ==================================================
     SUBMIT
  ================================================== */

  const handleSubmit = async (event) => {
    event.preventDefault();

    /* ==================================================
       PREVENT DUPLICATE SUBMISSIONS
    ================================================== */

    if (isLoading) {
      return;
    }

    const email =
      form.email
        .trim()
        .toLowerCase();

    /* ==================================================
       SIGN UP
    ================================================== */

    if (isRegister) {
      /* ================================================
         NAME VALIDATION
      ================================================ */

      if (!form.name.trim()) {
        showPopup({
          type: "error",
          title: "Name Required",
          message:
            "Please enter your full name.",
          buttonText: "Try Again",
        });

        return;
      }

      /* ================================================
         CONTACT VALIDATION
      ================================================ */

      if (form.contact.length !== 10) {
        showPopup({
          type: "error",
          title: "Invalid Contact Number",
          message:
            "Please enter a valid 10-digit contact number.",
          buttonText: "Try Again",
        });

        return;
      }

      /* ================================================
         PASSWORD MATCH
      ================================================ */

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

      /* ================================================
         PASSWORD LENGTH
      ================================================ */

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

      /* ================================================
         START REGISTRATION LOADING
      ================================================ */

      setIsLoading(true);

      /* ================================================
         REGISTER WITH BACKEND
      ================================================ */

      try {
        const response = await fetch(
          `${API_BASE_URL}/api/auth/register`,
          {
            method: "POST",

            headers: {
              "Content-Type": "application/json",
            },

            body: JSON.stringify({
              name: form.name.trim(),
              email,
              contact: form.contact,
              password: form.password,
            }),
          }
        );

        /* ==============================================
           SAFE RESPONSE READING
        ============================================== */

        const data =
          await readApiResponse(response);

        /* ==============================================
           BACKEND ERROR
        ============================================== */

        if (!response.ok) {
          setIsLoading(false);

          const errorMessage =
            getApiErrorMessage(
              response,
              data,
              "Unable to create your account. Please try again."
            );

          showPopup({
            type:
              response.status === 409
                ? "warning"
                : "error",

            title:
              response.status === 409
                ? "Account Already Exists"
                : response.status === 503
                ? "Service Temporarily Unavailable"
                : "Registration Failed",

            message: errorMessage,

            buttonText:
              response.status === 409
                ? "Go to Sign In"
                : "Try Again",

            action:
              response.status === 409
                ? () => {
                    setIsRegister(false);

                    setForm({
                      name: "",
                      email,
                      contact: "",
                      password: "",
                      confirmPassword: "",
                    });
                  }
                : null,
          });

          return;
        }

        /* ==============================================
           CHECK TOKEN
        ============================================== */

        if (!data.token || !data.user) {
          setIsLoading(false);

          showPopup({
            type: "error",
            title: "Registration Error",
            message:
              "Your account may have been created, but the login session could not be created. Please try signing in.",
            buttonText: "OK",
          });

          return;
        }

        /* ==============================================
           SAVE JWT TOKEN
        ============================================== */

        localStorage.setItem(
          "happyMappyToken",
          data.token
        );

        /* ==============================================
           SAVE CURRENT USER
        ============================================== */

        const currentUser = {
          id: data.user.id,
          name: data.user.name,
          email: data.user.email,
          contact: data.user.contact || "",
        };

        localStorage.setItem(
          "happyMappyCurrentUser",
          JSON.stringify(currentUser)
        );

        /* ==============================================
           AUTH CHANGE EVENT
        ============================================== */

        window.dispatchEvent(
          new Event(
            "happyMappyAuthChanged"
          )
        );

        /* ==============================================
           STOP LOADING
        ============================================== */

        setIsLoading(false);

        /* ==============================================
           SUCCESS POPUP
        ============================================== */

        showPopup({
          type: "success",
          title: "Account Created!",
          message:
            `Welcome ${data.user.name}! Your Happy Mappy account has been created successfully. You are now logged in.`,
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

        /* ==============================================
           CLEAR FORM
        ============================================== */

        resetForm();
      } catch (error) {
        console.error(
          "Registration Error:",
          error
        );

        setIsLoading(false);

        showPopup({
          type: "error",
          title: "Connection Error",
          message:
            getNetworkErrorMessage(),
          buttonText: "Try Again",
        });
      }

      return;
    }

    /* ==================================================
       LOGIN
    ================================================== */

    /* ==================================================
       LOGIN VALIDATION
    ================================================== */

    if (!email || !form.password) {
      showPopup({
        type: "error",
        title: "Login Details Required",
        message:
          "Please enter your email and password.",
        buttonText: "Try Again",
      });

      return;
    }

    /* ==================================================
       START LOGIN LOADING
    ================================================== */

    setIsLoading(true);

    /* ==================================================
       LOGIN WITH BACKEND
    ================================================== */

    try {
      const response = await fetch(
        `${API_BASE_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            password: form.password,
          }),
        }
      );

      /* ================================================
         SAFE RESPONSE READING
      ================================================ */

      const data =
        await readApiResponse(response);

      /* ================================================
         LOGIN ERROR
      ================================================ */

      if (!response.ok) {
        setIsLoading(false);

        const errorMessage =
          getApiErrorMessage(
            response,
            data,
            "Invalid email or password. Please check your login details and try again."
          );

        showPopup({
          type:
            response.status === 503
              ? "warning"
              : "error",

          title:
            response.status === 401
              ? "Invalid Login Details"
              : response.status === 503
              ? "Service Temporarily Unavailable"
              : "Login Failed",

          message: errorMessage,

          buttonText: "Try Again",
        });

        return;
      }

      /* ================================================
         CHECK TOKEN + USER
      ================================================ */

      if (!data.token || !data.user) {
        setIsLoading(false);

        showPopup({
          type: "error",
          title: "Login Error",
          message:
            "Login was successful, but the login session could not be created. Please try again.",
          buttonText: "Try Again",
        });

        return;
      }

      /* ================================================
         SAVE JWT TOKEN
      ================================================ */

      localStorage.setItem(
        "happyMappyToken",
        data.token
      );

      /* ================================================
         SAVE CURRENT USER
      ================================================ */

      const currentUser = {
        id: data.user.id,
        name: data.user.name,
        email: data.user.email,
        contact: data.user.contact || "",
      };

      localStorage.setItem(
        "happyMappyCurrentUser",
        JSON.stringify(currentUser)
      );

      /* ================================================
         AUTH CHANGE EVENT
      ================================================ */

      window.dispatchEvent(
        new Event(
          "happyMappyAuthChanged"
        )
      );

      /* ================================================
         RETURN LOCATION
      ================================================ */

      const returnPath =
        location.state?.from || "/";

      /* ================================================
         STOP LOADING
      ================================================ */

      setIsLoading(false);

      /* ================================================
         SUCCESS POPUP
      ================================================ */

      showPopup({
        type: "success",
        title: "Welcome Back!",
        message:
          `Hi ${data.user.name}! You have successfully logged in to Happy Mappy.`,
        buttonText: "Continue",
        action: () => {
          navigate(returnPath, {
            replace: true,
          });
        },
      });

      /* ================================================
         CLEAR FORM
      ================================================ */

      resetForm();
    } catch (error) {
      console.error(
        "Login Error:",
        error
      );

      setIsLoading(false);

      showPopup({
        type: "error",
        title: "Connection Error",
        message:
          getNetworkErrorMessage(),
        buttonText: "Try Again",
      });
    }
  };

  /* ==================================================
     SWITCH MODE
  ================================================== */

  const switchMode = () => {
    if (isLoading) {
      return;
    }

    setIsRegister(
      (current) => !current
    );

    setForm({
      name: "",
      email: "",
      contact: "",
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
              disabled={isLoading}
              onClick={() => {
                if (isRegister && !isLoading) {
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
              disabled={isLoading}
              onClick={() => {
                if (!isRegister && !isLoading) {
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
            aria-busy={isLoading}
          >

            {/* ================================================
                NAME
            ================================================ */}

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
                    disabled={isLoading}
                  />

                </div>

              </div>
            )}

            {/* ================================================
                EMAIL
            ================================================ */}

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
                  disabled={isLoading}
                />

              </div>

            </div>

            {/* ================================================
                CONTACT NUMBER
            ================================================ */}

            {isRegister && (
              <div className="form-group">

                <label htmlFor="contact">
                  Contact Number
                </label>

                <div className="input-wrapper">

                  <Phone size={18} />

                  <input
                    id="contact"
                    name="contact"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Enter your 10-digit contact number"
                    value={form.contact}
                    onChange={handleChange}
                    maxLength={10}
                    pattern="[0-9]{10}"
                    required
                    disabled={isLoading}
                  />

                </div>

              </div>
            )}

            {/* ================================================
                PASSWORD
            ================================================ */}

            <div className="form-group">

              <div className="form-label-row">

                <label htmlFor="password">
                  Password
                </label>

                {!isRegister && (
                  <button
                    type="button"
                    className="forgot-password"
                    disabled={isLoading}
                    onClick={() => {
                      if (isLoading) {
                        return;
                      }

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
                  disabled={isLoading}
                />

                <button
                  type="button"
                  className="password-toggle"
                  disabled={isLoading}
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

            {/* ================================================
                CONFIRM PASSWORD
            ================================================ */}

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
                    disabled={isLoading}
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    disabled={isLoading}
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

            {/* ================================================
                TERMS
            ================================================ */}

            {isRegister && (
              <label className="auth-checkbox">

                <input
                  type="checkbox"
                  required
                  disabled={isLoading}
                />

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

            {/* ================================================
                SUBMIT
            ================================================ */}

            <button
              type="submit"
              className="primary-button auth-submit"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <LoaderCircle
                    size={17}
                    style={{
                      animation:
                        "happyMappySpin 1s linear infinite",
                    }}
                  />

                  <span>
                    {isRegister
                      ? "Creating Account..."
                      : "Signing In..."}
                  </span>
                </>
              ) : (
                <>
                  <span>
                    {isRegister
                      ? "Create Account"
                      : "Sign In"}
                  </span>

                  <ArrowRight size={17} />
                </>
              )}
            </button>

          </form>

          {/* ==================================================
              SWITCH
          ================================================== */}

          <div className="auth-switch">

            <span>
              {isRegister
                ? "Already have an account?"
                : "Don't have an account?"}
            </span>

            <button
              type="button"
              onClick={switchMode}
              disabled={isLoading}
            >
              {isRegister
                ? "Sign In"
                : "Sign Up"}
            </button>

          </div>

          <Link
            to="/"
            className="auth-home-link"
            onClick={(event) => {
              if (isLoading) {
                event.preventDefault();
              }
            }}
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

      {/* ==================================================
          LOADING SPINNER ANIMATION
      ================================================== */}

      <style>
        {`
          @keyframes happyMappySpin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </main>
  );
}