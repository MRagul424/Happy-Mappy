import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  CalendarDays,
  CheckCircle,
  MapPin,
  Clock,
  CreditCard,
  Minus,
  Plus,
  Trash2,
  Users,
  X,
  Smartphone,
  Building2,
  WalletCards,
  Eye,
} from "lucide-react";

import {
  useNavigate,
} from "react-router-dom";

import {
  getMyPlans,
  removeMyPlan,
} from "../utils/myPlanStorage";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5000").replace(/\/+$/, "");

function getStoredUser() {
  try {
    const raw = localStorage.getItem("happyMappyCurrentUser");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function getAuthToken() {
  const user = getStoredUser();
  return (
    localStorage.getItem("happyMappyToken") ||
    localStorage.getItem("token") ||
    user?.token ||
    user?.accessToken ||
    ""
  );
}

function getPlanKey(plan) {
  return String(
    plan?.savedPlanKey ||
      plan?.id ||
      `${plan?.title || "plan"}-${plan?.destination || plan?.destinationName || ""}`
  );
}

function isPastTripDate(dateValue) {
  if (!dateValue) return true;
  const parts = String(dateValue).slice(0, 10).split("-").map(Number);
  if (parts.length !== 3 || parts.some((part) => !Number.isFinite(part))) return true;
  const selected = new Date(parts[0], parts[1] - 1, parts[2]);
  selected.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today;
}

async function apiRequest(path, options = {}) {
  const token = getAuthToken();
  if (!token) {
    throw new Error("Your login token was not found. Please log out and log in again.");
  }

  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...(options.headers || {}),
    },
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || data.error || `Request failed (${response.status})`);
  }
  return data;
}

export default function MyPlanPage() {
  const navigate = useNavigate();

  /* ============================================================
     USER
  ============================================================ */

  const getCurrentUser = () => getStoredUser();

  const currentUser =
    getCurrentUser();

  /* ============================================================
     STATE
  ============================================================ */

  const [plans, setPlans] =
    useState([]);

  const [selectedPlan, setSelectedPlan] =
    useState(null);

  const [people, setPeople] =
    useState(1);

  const [tripDate, setTripDate] =
    useState("");

  const [showPayment, setShowPayment] =
    useState(false);

  const [showPaymentConfirm, setShowPaymentConfirm] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("upi");

  const [paymentValue, setPaymentValue] =
    useState("");

  const [paymentSuccess, setPaymentSuccess] =
    useState(false);

  const [paymentError, setPaymentError] =
    useState("");

  const [tripConfirmed, setTripConfirmed] =
    useState(false);

  const [bookingReference, setBookingReference] =
    useState("");

  const [bookings, setBookings] = useState([]);
  const [viewBooking, setViewBooking] = useState(null);
  const [loadingBookings, setLoadingBookings] = useState(false);
  const [savingBooking, setSavingBooking] = useState(false);
  const [bookingLoadError, setBookingLoadError] = useState("");

  /* ============================================================
     LOAD PLANS
  ============================================================ */

  const loadPlans = () => {
    setPlans(getMyPlans());
  };

  const loadBookings = async () => {
    if (!getAuthToken()) {
      setBookings([]);
      setBookingLoadError("Your login token was not found. Please log out and log in again.");
      return;
    }

    setLoadingBookings(true);
    setBookingLoadError("");
    try {
      const data = await apiRequest("/api/bookings");
      const list = Array.isArray(data) ? data : data.bookings || data.data || [];
      setBookings(list);
    } catch (error) {
      setBookingLoadError(error.message || "Unable to load your bookings.");
    } finally {
      setLoadingBookings(false);
    }
  };

  const findBookingForPlan = (plan) => {
    const key = getPlanKey(plan);
    return bookings.find((booking) =>
      String(booking.planKey || "") === key &&
      !["cancelled", "canceled"].includes(String(booking.bookingStatus || "").toLowerCase())
    );
  };

  useEffect(() => {
    loadPlans();
    loadBookings();

    const handleChange = () => {
      loadPlans();
    };

    window.addEventListener(
      "happyMappyPlansChanged",
      handleChange
    );

    window.addEventListener(
      "storage",
      handleChange
    );

    return () => {
      window.removeEventListener(
        "happyMappyPlansChanged",
        handleChange
      );

      window.removeEventListener(
        "storage",
        handleChange
      );
    };
  }, []);

  /* ============================================================
     FORMAT PRICE
  ============================================================ */

  const formatPrice = (amount) => {
    return `₹${Number(
      amount || 0
    ).toLocaleString("en-IN")}`;
  };

  const formatTripDate = (dateValue) => {
    if (!dateValue) return "Not selected";

    // Handle MongoDB ISO dates (2026-10-02T00:00:00.000Z)
    // by removing the time portion before formatting.
    const rawValue = String(dateValue).trim();
    const datePart = rawValue.split("T")[0];
    const isoMatch = datePart.match(/^(\d{4})-(\d{2})-(\d{2})$/);
    if (isoMatch) {
      return `${isoMatch[3]}/${isoMatch[2]}/${isoMatch[1]}`;
    }

    // If it is already formatted as DD/MM/YYYY, leave it readable.
    const displayMatch = datePart.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (displayMatch) return datePart;

    const parsed = new Date(rawValue);
    if (!Number.isNaN(parsed.getTime())) {
      return parsed.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        timeZone: "UTC",
      });
    }

    return rawValue;
  };

  /* ============================================================
     GET PRICE PER PERSON
  ============================================================ */

  const getNumericAmount = (value) => {
    if (typeof value === "number" && Number.isFinite(value)) {
      return value;
    }

    if (typeof value === "string") {
      const cleaned = value.replace(/[^0-9.]/g, "");
      const parsed = Number(cleaned);

      return Number.isFinite(parsed) ? parsed : 0;
    }

    return 0;
  };

  const getPricePerPerson = (plan) => {
    if (!plan) {
      return 0;
    }

    const possiblePrices = [
      plan.pricePerPerson,
      plan.price,
      plan.totalAmount,
      plan.baseAmount,
      plan.amount,
      plan.cost,
      plan.price?.perPerson,
      plan.pricing?.pricePerPerson,
      plan.pricing?.perPerson,
      plan.pricing?.price,
      plan.pricing?.total,
    ];

    for (const value of possiblePrices) {
      const amount = getNumericAmount(value);

      if (amount > 0) {
        return amount;
      }
    }

    return 0;
  };

  /* ============================================================
     DISCOUNT RATE
  ============================================================ */

  const discountRate = useMemo(() => {
    if (people >= 11) {
      return 15;
    }

    if (people >= 8) {
      return 10;
    }

    if (people >= 5) {
      return 5;
    }

    return 0;
  }, [people]);

  /* ============================================================
     BOOKING CALCULATION
  ============================================================ */

  const pricePerPerson =
    getPricePerPerson(
      selectedPlan
    );

  const subtotal =
    pricePerPerson *
    people;

  const discountAmount =
    subtotal *
    (discountRate / 100);

  const totalAmount =
    subtotal -
    discountAmount;

  /* ============================================================
     CHANGE PEOPLE
  ============================================================ */

  const decreasePeople = () => {
    setPeople(
      (current) =>
        Math.max(
          1,
          current - 1
        )
    );
  };

  const increasePeople = () => {
    setPeople(
      (current) =>
        Math.min(
          100,
          current + 1
        )
    );
  };

  const handlePeopleInput = (
    event
  ) => {
    const value =
      Number(
        event.target.value
      );

    if (!Number.isFinite(value)) {
      setPeople(1);
      return;
    }

    setPeople(
      Math.min(
        100,
        Math.max(
          1,
          value
        )
      )
    );
  };

  /* ============================================================
     REMOVE PLAN
  ============================================================ */

  const handleRemovePlan = (plan) => {
    // Remove only this plan from the user's saved My Plan list.
    // The booking record in MongoDB is intentionally left untouched.
    removeMyPlan(plan);
    setPlans(getMyPlans());

    window.dispatchEvent(
      new Event("happyMappyPlansChanged")
    );
  };

  /* ============================================================
     BUY PLAN
  ============================================================ */

  const handleBuyPlan = (
    plan
  ) => {
    const existingBooking = findBookingForPlan(plan);
    if (existingBooking) {
      setViewBooking(existingBooking);
      return;
    }

    setSelectedPlan(plan);

    setPeople(1);

    setTripDate("");

    setShowPayment(false);

    setShowPaymentConfirm(false);

    setPaymentSuccess(false);

    setPaymentError("");

    setTripConfirmed(false);

    setPaymentMethod("upi");

    setPaymentValue("");

    setBookingReference(
      `HM-${Date.now().toString().slice(-6)}`
    );
  };

  /* ============================================================
     CLOSE BOOKING
  ============================================================ */

  const closeBooking = () => {
    setSelectedPlan(null);

    setShowPayment(false);

    setShowPaymentConfirm(false);

    setPaymentSuccess(false);

    setPaymentError("");

    setTripConfirmed(false);

    setPaymentValue("");

    setPaymentMethod("upi");

    setBookingReference("");
  };

  /* ============================================================
     PROCEED PAYMENT
  ============================================================ */

  const handleProceedPayment = () => {
    setPaymentError("");

    if (!tripDate) {
      setPaymentError("Date not selected");
      return;
    }

    if (isPastTripDate(tripDate)) {
      setPaymentError("Please select today or a future date.");
      return;
    }

    if (!Number.isInteger(Number(people)) || people < 1 || people > 100) {
      setPaymentError("Please select a valid number of people (1–100).");
      return;
    }

    if (pricePerPerson <= 0) {
      setPaymentError("This plan does not have a valid price yet. Please choose another plan.");
      return;
    }

    setShowPayment(true);
  };

  /* ============================================================
     DEMO PAYMENT
  ============================================================ */

  const handleDemoPayment = () => {
    const value = paymentValue.trim();

    setPaymentError("");

    if (paymentMethod === "upi") {
      if (!value) {
        setPaymentError("Please enter your UPI ID before continuing.");
        return;
      }

      if (!/^[^\s@]+@[A-Za-z0-9._-]+$/.test(value)) {
        setPaymentError(
          "Invalid UPI ID. Please enter a valid UPI ID such as example@upi."
        );
        return;
      }
    }

    if (paymentMethod === "netbanking") {
      if (!value) {
        setPaymentError("Please select your bank before continuing.");
        return;
      }
    }

    if (paymentMethod === "card") {
      if (!/^\d{16}$/.test(value)) {
        setPaymentError(
          "Invalid card number. Please enter a valid 16-digit demo card number."
        );
        return;
      }
    }

    setShowPaymentConfirm(true);
  };

  const handleConfirmPayment = () => {
    setShowPaymentConfirm(false);
    setShowPayment(false);
    setPaymentSuccess(true);
  };

  const paymentMethodLabel =
    paymentMethod === "upi"
      ? "UPI"
      : paymentMethod === "netbanking"
        ? "Net Banking"
        : "Debit / Credit Card";

  const paymentDetailLabel =
    paymentMethod === "upi"
      ? paymentValue || "Not available"
      : paymentMethod === "netbanking"
        ? paymentValue || "Not available"
        : paymentValue
          ? `•••• •••• •••• ${paymentValue.slice(-4)}`
          : "Not available";

  /* ============================================================
     CONFIRM TRIP
  ============================================================ */

  const handleConfirmTrip = async () => {
    if (!selectedPlan || savingBooking) return;

    setSavingBooking(true);
    setPaymentError("");

    const payload = {
      planKey: getPlanKey(selectedPlan),
      planTitle: selectedPlan.title || "Happy Mappy Trip",
      destination: selectedPlan.destination || selectedPlan.destinationName || "Travel Destination",
      tripDate,
      people: Number(people),
      pricePerPerson: Number(pricePerPerson),
      paymentMethod,
      // Store only a masked card identifier; never send/store the full card number.
      paymentDetail:
        paymentMethod === "card"
          ? `•••• ${paymentValue.slice(-4)}`
          : paymentValue.trim(),
    };

    try {
      const data = await apiRequest("/api/bookings", {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const savedBooking = data.booking || data.data || data;
      if (!savedBooking.bookingReference) {
        throw new Error("The server did not return a booking reference.");
      }

      setBookingReference(savedBooking.bookingReference);
      setBookings((previous) => [
        savedBooking,
        ...previous.filter(
          (item) => String(item.bookingReference || "") !== String(savedBooking.bookingReference)
        ),
      ]);
      // Refresh from MongoDB after the successful save. A refresh failure
      // must not undo the booking confirmation that the POST already returned.
      await loadBookings();
      setTripConfirmed(true);
    } catch (error) {
      setPaymentError(`Your booking could not be saved: ${error.message}`);
    } finally {
      setSavingBooking(false);
    }
  };

  /* ============================================================
     LOGIN REQUIRED
  ============================================================ */

  if (!currentUser) {
    return (
      <div
        className="my-plan-page"
        style={{
          background: "#f8fafc",
        }}
      >
        <div className="my-plan-login-box">

          <div className="my-plan-empty-icon">
            <Users size={38} />
          </div>

          <h1>
            My Plan
          </h1>

          <p>
            Please login to view and
            manage your saved travel plans.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate("/auth")
            }
          >
            Login to Continue
          </button>

        </div>
      </div>
    );
  }

  return (
    <div
      className="my-plan-page"
      style={{
        background: "#f8fafc",
        margin: 0,
        padding: 0,
      }}
    >

      <style>{`
        /* =====================================================
           MY PLAN VISUAL FIXES
           These rules intentionally stay scoped to My Plan.
        ===================================================== */
        .my-plan-page {
          min-height: calc(100vh - 80px);
          width: 100%;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
          background: #f8fafc !important;
          background-repeat: no-repeat !important;
          background-size: cover !important;
          background-position: center center !important;
          background-attachment: fixed !important;
        }

        .my-plan-header,
        .my-plan-grid,
        .my-plan-empty {
          position: relative;
          z-index: 1;
        }

        /* User details: one item per line */
        .booking-user-grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
          width: 100% !important;
        }

        .booking-user-grid > div {
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 18px !important;
          width: 100% !important;
          padding: 11px 13px !important;
          background: #f8fafc !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 10px !important;
          box-sizing: border-box !important;
        }

        .booking-user-grid small {
          color: #64748b !important;
          font-weight: 700 !important;
          flex-shrink: 0 !important;
        }

        .booking-user-grid strong {
          color: #0f172a !important;
          text-align: right !important;
          overflow-wrap: anywhere !important;
        }

        /* Small people +/- control */
        .people-control {
          display: inline-flex !important;
          align-items: center !important;
          gap: 7px !important;
          width: auto !important;
        }

        .people-control button {
          width: 34px !important;
          height: 34px !important;
          min-width: 34px !important;
          padding: 0 !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 8px !important;
          background: #087d57 !important;
          color: #ffffff !important;
          border: none !important;
          cursor: pointer !important;
        }

        .people-control input {
          width: 58px !important;
          height: 34px !important;
          min-width: 58px !important;
          padding: 4px 6px !important;
          box-sizing: border-box !important;
          text-align: center !important;
          color: #0f172a !important;
          background: #ffffff !important;
          -webkit-text-fill-color: #0f172a !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 8px !important;
          opacity: 1 !important;
          caret-color: #0f172a !important;
        }

        /* Date input: visible text + native browser calendar */
        .booking-date {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          width: 100% !important;
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 10px !important;
          padding: 10px 12px !important;
          box-sizing: border-box !important;
        }

        .booking-date input {
          flex: 1 !important;
          width: 100% !important;
          min-width: 0 !important;
          border: none !important;
          outline: none !important;
          background: #ffffff !important;
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
          color-scheme: light !important;
          opacity: 1 !important;
          cursor: pointer !important;
          font-size: 14px !important;
        }

        .booking-date input::-webkit-calendar-picker-indicator {
          opacity: 1 !important;
          cursor: pointer !important;
        }

        /* Payment fields: dark readable text on white controls */
        .payment-input-area input,
        .payment-input-area select {
          width: 100% !important;
          min-height: 44px !important;
          box-sizing: border-box !important;
          padding: 10px 12px !important;
          color: #0f172a !important;
          -webkit-text-fill-color: #0f172a !important;
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          border-radius: 9px !important;
          opacity: 1 !important;
          outline: none !important;
          caret-color: #0f172a !important;
          cursor: text !important;
        }

        .payment-input-area select {
          cursor: pointer !important;
          color-scheme: light !important;
        }

        .payment-input-area select option {
          color: #0f172a !important;
          background: #ffffff !important;
        }

        .payment-input-area input::placeholder {
          color: #94a3b8 !important;
          opacity: 1 !important;
        }

        /* Make modal controls reliably clickable above overlays */
        .my-plan-booking-modal,
        .payment-modal,
        .payment-confirm-modal,
        .payment-success-modal,
        .trip-success-modal {
          position: relative;
          z-index: 2;
        }

        /* Keep every popup fully usable on smaller screens */
        .my-plan-overlay {
          position: fixed !important;
          inset: 0 !important;
          z-index: 9999 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 24px !important;
          overflow-y: auto !important;
          box-sizing: border-box !important;
          background: rgba(15, 23, 42, 0.58) !important;
          backdrop-filter: blur(5px);
        }

        .my-plan-booking-modal,
        .payment-modal,
        .payment-confirm-modal,
        .payment-success-modal,
        .payment-error-modal,
        .trip-success-modal {
          max-height: calc(100vh - 48px) !important;
          overflow-y: auto !important;
          scrollbar-width: thin;
        }

        .trip-success-modal {
          margin: auto !important;
        }

        /* Confirmation + success popups */
        .payment-confirm-modal,
        .payment-success-modal {
          width: min(430px, 94vw);
          background: #ffffff;
          border-radius: 18px;
          padding: 28px;
          text-align: center;
          box-shadow: 0 25px 70px rgba(15, 23, 42, 0.30);
          box-sizing: border-box;
        }

        .payment-confirm-icon,
        .payment-success-icon {
          width: 58px;
          height: 58px;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #e8f7f1;
          color: #087d57;
        }

        .payment-confirm-modal h3,
        .payment-success-modal h3 {
          margin: 0 0 8px;
          color: #0f172a;
          font-size: 22px;
        }

        .payment-confirm-modal p,
        .payment-success-modal p {
          margin: 0 0 18px;
          color: #64748b;
          line-height: 1.6;
          font-size: 14px;
        }

        .payment-confirm-actions {
          display: flex;
          gap: 10px;
          justify-content: center;
        }

        .payment-confirm-actions button {
          flex: 1;
          min-height: 42px;
          border-radius: 9px;
          border: none;
          cursor: pointer;
          font-weight: 800;
        }

        .payment-cancel-btn {
          background: #e2e8f0;
          color: #334155;
        }

        .payment-confirm-btn,
        .payment-success-modal button {
          background: #087d57;
          color: #ffffff;
        }

        .payment-success-modal button {
          width: 100%;
          min-height: 44px;
          border: none;
          border-radius: 9px;
          cursor: pointer;
          font-weight: 800;
          padding: 10px 14px;
        }

        @media (max-width: 600px) {
          .booking-user-grid > div {
            align-items: flex-start !important;
            flex-direction: column !important;
            gap: 4px !important;
          }

          .booking-user-grid strong {
            text-align: left !important;
          }

          .payment-confirm-actions {
            flex-direction: column;
          }
        }

        /* =====================================================
           MY PLAN PAGE - MATCH THE CLEAN SITE DESIGN
        ===================================================== */
        .my-plan-page .my-plan-header {
          width: min(1200px, 90%);
          margin: 0 auto;
          padding: 58px 0 34px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .my-plan-page .my-plan-header h1 {
          margin: 7px 0 8px;
          color: #172033 !important;
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 900;
          line-height: 1.08;
          text-shadow: none !important;
        }

        .my-plan-page .my-plan-header p {
          color: #64748b !important;
          font-size: 15px;
        }

        .my-plan-page .my-plan-label {
          color: #0f766e !important;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .my-plan-page .my-plan-user {
          background: #ffffff !important;
          color: #172033 !important;
          border: 1px solid #e2e8f0 !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        .my-plan-page .my-plan-grid {
          width: min(1200px, 90%);
          margin: 0 auto;
        }

        /* More colourful booking modal */
        .my-plan-booking-modal {
          border: 1px solid #dbeafe !important;
          box-shadow: 0 30px 90px rgba(15, 23, 42, 0.32) !important;
        }

        .my-plan-booking-header {
          padding: 22px 24px !important;
          margin: -32px -32px 24px !important;
          border-radius: 20px 20px 0 0;
          background: linear-gradient(135deg, #ecfeff, #eff6ff);
          border-bottom: 1px solid #dbeafe;
        }

        .my-plan-booking-header h2 {
          color: #0f172a !important;
        }

        .booking-section {
          padding: 18px;
          border: 1px solid #e2e8f0;
          border-radius: 15px;
          background: #f8fafc;
        }

        .booking-section h3 {
          color: #0f766e !important;
        }

        .payment-modal {
          border: 1px solid #bfdbfe !important;
          box-shadow: 0 30px 90px rgba(15, 23, 42, 0.34) !important;
        }

        .payment-header {
          padding: 20px;
          border-radius: 14px;
          background: linear-gradient(135deg, #ecfeff, #eef2ff);
          margin-bottom: 20px;
        }

        .payment-methods button.active {
          color: #ffffff !important;
          background: linear-gradient(135deg, #0f766e, #0891b2) !important;
          border-color: #0f766e !important;
          box-shadow: 0 8px 20px rgba(15, 118, 110, 0.20);
        }

        .payment-total {
          border: 1px solid #a7f3d0 !important;
          background: linear-gradient(135deg, #ecfdf5, #f0fdfa) !important;
        }

        .demo-pay-btn {
          background: linear-gradient(135deg, #0f766e, #0891b2) !important;
          box-shadow: 0 10px 24px rgba(8, 145, 178, 0.22);
        }

        /* Invalid payment popup */
        .payment-error-modal {
          width: min(430px, 94vw);
          padding: 30px;
          text-align: center;
          background: #ffffff;
          border: 1px solid #fecaca;
          border-radius: 20px;
          box-shadow: 0 30px 90px rgba(15, 23, 42, 0.34);
        }

        .payment-error-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #dc2626;
          background: #fee2e2;
          box-shadow: 0 0 0 8px #fff1f2;
        }

        .payment-error-label {
          display: block;
          margin-bottom: 7px;
          color: #dc2626;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.4px;
        }

        .payment-error-modal h3 {
          margin: 0 0 8px;
          color: #0f172a;
          font-size: 23px;
        }

        .payment-error-modal p {
          margin: 0 0 20px;
          color: #64748b;
          line-height: 1.6;
        }

        .payment-error-modal button {
          width: 100%;
          min-height: 44px;
          border: 0;
          border-radius: 10px;
          color: #ffffff;
          background: #dc2626;
          font-weight: 800;
        }

        /* Attractive trip confirmation */
        .trip-success-modal {
          width: min(600px, 94vw) !important;
          overflow: hidden !important;
          padding: 0 !important;
          border: 1px solid #a7f3d0 !important;
          background: #ffffff !important;
          box-shadow: 0 35px 100px rgba(15, 23, 42, 0.36) !important;
          text-align: center;
        }

        .trip-success-icon {
          width: 82px !important;
          height: 82px !important;
          margin: 30px auto 15px !important;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #047857 !important;
          background: #d1fae5 !important;
          box-shadow: 0 0 0 10px #ecfdf5;
        }

        .trip-success-modal h2 {
          margin: 0 20px 8px !important;
          color: #0f172a !important;
          font-size: 30px !important;
          font-weight: 900 !important;
        }

        .trip-success-modal > p {
          margin: 0 25px 22px !important;
          color: #64748b !important;
        }

        .trip-confirmed-details {
          margin: 0 24px 22px;
          padding: 16px;
          text-align: left;
          border: 1px solid #dbeafe;
          border-radius: 16px;
          background: linear-gradient(135deg, #f8fafc, #eff6ff);
        }

        .trip-confirmed-plan {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 14px;
          margin-bottom: 14px;
          border-bottom: 1px solid #dbeafe;
        }

        .trip-confirmed-detail-icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 12px;
          color: #0f766e;
          background: #ccfbf1;
        }

        .trip-confirmed-plan span,
        .trip-confirmed-detail-grid span,
        .trip-booking-reference span {
          display: block;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
        }

        .trip-confirmed-plan strong {
          display: block;
          margin-top: 2px;
          color: #0f172a;
          font-size: 16px;
        }

        .trip-confirmed-detail-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .trip-confirmed-detail-grid > div {
          padding: 12px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
        }

        .trip-confirmed-detail-grid svg {
          margin-bottom: 6px;
          color: #0891b2;
        }

        .trip-confirmed-detail-grid strong {
          display: block;
          margin-top: 2px;
          color: #0f172a;
          font-size: 13px;
        }

        .trip-booking-reference {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          background: #0f172a;
        }

        .trip-booking-reference span {
          color: #cbd5e1;
        }

        /* CHANGE 1: Smaller booking reference text */
        .trip-booking-reference strong {
          color: #99f6e4;
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.3px;
          max-width: 150px;
          overflow-wrap: anywhere;
          word-break: break-word;
          text-align: right;
        }

        .trip-confirmed-contact {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
          margin-top: 10px;
        }

        .trip-confirmed-contact > div {
          padding: 11px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
        }

        .trip-confirmed-contact span,
        .trip-total-banner span {
          display: block;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
        }

        .trip-confirmed-contact strong {
          display: block;
          margin-top: 3px;
          color: #0f172a;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        .trip-payment-details {
          margin-top: 12px;
          padding: 14px;
          border: 1px solid #bae6fd;
          border-radius: 13px;
          background: linear-gradient(135deg, #f0fdfa, #eff6ff);
        }

        .trip-payment-details-header {
          display: flex;
          align-items: center;
          gap: 10px;
          padding-bottom: 10px;
          margin-bottom: 8px;
          border-bottom: 1px solid #dbeafe;
          color: #0f766e;
        }

        .trip-payment-details-header span {
          display: block;
          color: #64748b;
          font-size: 10px;
          font-weight: 700;
        }

        .trip-payment-details-header strong {
          display: block;
          margin-top: 2px;
          color: #0f172a;
          font-size: 14px;
        }

        .trip-payment-detail-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 7px 0;
        }

        .trip-payment-detail-row span {
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
        }

        .trip-payment-detail-row strong {
          color: #0f172a;
          font-size: 12px;
          text-align: right;
          overflow-wrap: anywhere;
        }

        .trip-payment-detail-row .trip-payment-paid {
          color: #047857;
        }

        .trip-total-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-top: 12px;
          padding: 14px 16px;
          border-radius: 13px;
          color: #ffffff;
          background: linear-gradient(135deg, #0f766e, #0891b2);
        }

        .trip-total-banner span {
          color: #ccfbf1;
        }

        .trip-total-banner small {
          display: block;
          margin-top: 3px;
          color: #e0f2fe;
          font-size: 10px;
        }

        .trip-total-banner strong {
          color: #ffffff;
          font-size: 20px;
          white-space: nowrap;
        }

        .trip-payment-status {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-top: 13px;
          color: #047857;
          font-size: 12px;
          font-weight: 800;
        }

        .trip-success-modal > button {
          width: calc(100% - 48px);
          margin: 0 24px 24px;
          background: linear-gradient(135deg, #0f766e, #0891b2) !important;
          box-shadow: 0 10px 24px rgba(8, 145, 178, 0.20);
        }

        @media (max-width: 600px) {
          .my-plan-page .my-plan-header {
            width: 92%;
            padding-top: 40px;
          }

          .trip-confirmed-detail-grid,
          .trip-confirmed-contact {
            grid-template-columns: 1fr;
          }

          .trip-booking-reference {
            align-items: flex-start;
            flex-direction: column;
          }

          .trip-booking-reference strong {
            max-width: 100%;
            text-align: left;
          }
        }

        /* =====================================================
           MY PLAN - DESTINATIONS PAGE STYLE
        ===================================================== */

        .my-plan-page {
          background: #f8fafc !important;
          background-image: none !important;
          min-height: 100vh !important;
          width: 100% !important;
          max-width: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .my-plan-hero {
          position: relative;
          width: 100%;
          max-width: none;
          height: 340px;
          min-height: 340px;
          margin: 0 !important;
          padding: 0 20px !important;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-image: url("/images/myplan-bg.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
        }

        .my-plan-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.04),
            rgba(0, 74, 110, 0.10)
          );
          pointer-events: none;
        }

        .my-plan-hero-content {
          position: relative;
          z-index: 1;
          width: min(850px, 90%);
          margin: auto;
          text-align: center;
          color: #ffffff;
          padding: 0;
        }

        .my-plan-hero-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          margin-bottom: 14px;
          color: #0077ff !important;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          text-shadow: 0 1px 3px rgba(255, 255, 255, 0.85);
        }

        .my-plan-hero-badge svg {
          color: #0077ff !important;
          stroke-width: 2.8;
        }

        .my-plan-hero-content h1 {
          margin: 0;
          color: #ffffff !important;
          font-size: clamp(38px, 5vw, 55px);
          line-height: 1.08;
          font-weight: 900;
          text-shadow: 0 3px 10px rgba(0, 55, 85, 0.30);
        }

        .my-plan-hero-content p {
          max-width: 650px;
          margin: 14px auto 0;
          color: rgba(255, 255, 255, 0.88) !important;
          font-size: 17px;
          line-height: 1.65;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
        }

        .my-plan-main-content {
          width: 100%;
          background: #f8fafc;
          padding: 0 0 70px;
        }

        .my-plan-page .my-plan-header {
          width: min(1100px, 86%);
          margin: 0 auto;
          padding: 58px 0 28px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
        }

        .my-plan-page .my-plan-header h1 {
          margin: 8px 0 9px;
          color: #064e3b !important;
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 900;
          line-height: 1.1;
        }

        .my-plan-page .my-plan-header p {
          margin: 0;
          color: #64748b !important;
          font-size: 14px;
          line-height: 1.6;
        }

        .my-plan-page .my-plan-label {
          color: #008b68 !important;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1.5px;
        }

        .my-plan-page .my-plan-user {
          display: none !important;
          flex-shrink: 0;
          background: #ffffff !important;
          color: #064e3b !important;
          border: 1px solid #dbe7e5 !important;
          border-radius: 999px !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08);
        }

        .my-plan-page .my-plan-grid {
          width: min(1100px, 86%);
          margin: 0 auto;
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
          gap: 20px !important;
          align-items: start;
        }

        .my-plan-page .my-plan-card {
          overflow: hidden;
          min-width: 0;
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 12px !important;
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.08) !important;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        .my-plan-page .my-plan-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 32px rgba(15, 23, 42, 0.12) !important;
        }

        .my-plan-page .my-plan-image {
          position: relative;
          height: 205px !important;
          overflow: hidden;
          border-radius: 0 !important;
        }

        .my-plan-page .my-plan-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
        }

        .my-plan-page .my-plan-image > span {
          position: absolute;
          top: 12px;
          left: 12px;
          padding: 6px 10px;
          border-radius: 999px;
          color: #ffffff !important;
          background: #087d57 !important;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.6px;
        }

        .my-plan-page .my-plan-card-content {
          padding: 17px 18px 18px !important;
        }

        .my-plan-page .my-plan-card-content h2 {
          margin: 0 0 8px;
          color: #0f172a !important;
          font-size: 19px;
          font-weight: 850;
        }

        .my-plan-page .my-plan-destination {
          margin: 0 0 12px;
          color: #087d57 !important;
          font-size: 14px;
          font-weight: 800;
        }

        .my-plan-page .my-plan-meta {
          display: flex;
          gap: 8px;
          margin-bottom: 13px;
        }

        .my-plan-page .my-plan-meta span {
          padding: 7px 9px;
          color: #334155 !important;
          background: #f1f5f9 !important;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 700;
        }

        .my-plan-page .my-plan-price {
          padding-top: 12px;
          border-top: 1px solid #e2e8f0;
        }

        .my-plan-page .my-plan-price small {
          display: block;
          margin-bottom: 3px;
          color: #64748b !important;
          font-size: 10px;
        }

        .my-plan-page .my-plan-price strong {
          color: #007d60 !important;
          font-size: 18px;
        }

        .my-plan-page .my-plan-actions {
          display: flex;
          gap: 9px;
          margin-top: 15px;
        }

        .my-plan-page .my-plan-actions button {
          flex: 1;
          min-height: 40px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 11px;
          font-weight: 800;
        }

        .my-plan-page .my-plan-remove-btn {
          color: #dc2626 !important;
          background: #fff1f2 !important;
          border: 1px solid #fecdd3 !important;
        }

        .my-plan-page .my-plan-buy-btn {
          color: #ffffff !important;
          background: linear-gradient(135deg, #087d57, #0891b2) !important;
          border: none !important;
        }

        .my-plan-page .my-plan-empty {
          width: min(800px, 86%);
          margin: 0 auto 50px;
          padding: 45px 25px;
          text-align: center;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(15, 23, 42, 0.07);
        }

        /* Confirmation popup: scroll inside the popup, never behind the browser. */
        .trip-confirmation-overlay {
          align-items: flex-start !important;
          justify-content: center !important;
          padding: 24px !important;
        }

        .trip-confirmation-overlay .trip-success-modal {
          width: min(680px, 94vw) !important;
          max-height: calc(100vh - 48px) !important;
          margin: 0 auto !important;
          overflow-y: auto !important;
          box-sizing: border-box !important;
          scrollbar-width: thin;
          scrollbar-color: #94a3b8 transparent;
        }

        .trip-confirmation-overlay .trip-success-modal::-webkit-scrollbar {
          width: 7px;
        }

        .trip-confirmation-overlay .trip-success-modal::-webkit-scrollbar-thumb {
          background: #94a3b8;
          border-radius: 20px;
        }

        .trip-confirmation-overlay .trip-success-modal::-webkit-scrollbar-track {
          background: transparent;
        }

        .trip-confirmation-overlay .trip-success-modal .trip-confirmed-details {
          padding-bottom: 6px;
        }

        .trip-confirmation-overlay .trip-confirmed-contact {
          grid-template-columns: 1fr !important;
        }

        @media (max-width: 900px) {
          .my-plan-page .my-plan-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        /* =====================================================
           MY PLAN - MATCH DESTINATIONS BLUE & TURQUOISE THEME
        ===================================================== */

        .my-plan-page {
          background: #e8f8fb !important;
        }

        .my-plan-main-content {
          background: linear-gradient(
            180deg,
            #dff7fb 0%,
            #effbfc 45%,
            #f8fafc 100%
          ) !important;
        }

        .my-plan-hero::after {
          background: linear-gradient(
            180deg,
            rgba(0, 190, 220, 0.18),
            rgba(0, 105, 145, 0.32)
          ) !important;
        }

        .my-plan-page .my-plan-label {
          color: #009fbd !important;
        }

        .my-plan-page .my-plan-price strong,
        .my-plan-page .my-plan-destination {
          color: #008da8 !important;
        }

        .my-plan-page .my-plan-buy-btn,
        .my-plan-page .proceed-payment-btn {
          background: linear-gradient(
            135deg,
            #06b6d4,
            #087dba
          ) !important;
        }

        /* =====================================================
           MOBILE RESPONSIVE DESIGN
        ===================================================== */

        @media (max-width: 650px) {
          .my-plan-hero {
            height: 280px;
            min-height: 280px;
          }

          .my-plan-hero-content h1 {
            font-size: 36px;
          }

          .my-plan-hero-content p {
            font-size: 13px;
          }

          .my-plan-page .my-plan-header {
            width: 90%;
            padding-top: 38px;
            align-items: flex-start;
            flex-direction: column;
          }

          .my-plan-page .my-plan-grid {
            width: 90%;
            grid-template-columns: 1fr !important;
          }

          .my-plan-page .my-plan-image {
            height: 220px !important;
          }

          .trip-confirmation-overlay {
            padding: 12px !important;
          }

          .trip-confirmation-overlay .trip-success-modal {
            width: 96vw !important;
            max-height: calc(100vh - 24px) !important;
          }
        }

        /* Booking details modal: keep the close icon in the top-right corner. */
        .my-plan-page .booking-details-modal {
          position: relative !important;
          padding-top: 48px !important;
        }

        .my-plan-page .booking-details-modal .booking-details-close {
          position: absolute !important;
          top: 12px !important;
          right: 12px !important;
          left: auto !important;
          bottom: auto !important;
          z-index: 20 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 36px !important;
          min-width: 36px !important;
          max-width: 36px !important;
          height: 36px !important;
          min-height: 36px !important;
          max-height: 36px !important;
          margin: 0 !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 50% !important;
          color: #334155 !important;
          background: #e2e8f0 !important;
          box-shadow: none !important;
          line-height: 1 !important;
          cursor: pointer !important;
        }

        .my-plan-page .booking-details-modal .booking-details-close svg {
          width: 20px !important;
          height: 20px !important;
          flex-shrink: 0 !important;
        }

      `}</style>

      {/* ======================================================
          MY PLAN HERO - SAME VISUAL STRUCTURE AS DESTINATIONS
      ====================================================== */}

      <section className="my-plan-hero">

        <div className="my-plan-hero-content">

          <span className="my-plan-hero-badge">
            <MapPin size={15} />
            MY PLANS
          </span>

          <h1>
            My Travel Plans
          </h1>

          <p>
            View your saved journeys, manage your trips and
            get ready for your next adventure.
          </p>

        </div>

      </section>

      <main className="my-plan-main-content">

        {/* ======================================================
            HEADER
        ====================================================== */}

        <section className="my-plan-header">

          <div>
            <span className="my-plan-label">
              HAPPY MAPPY
            </span>

            <h1>
              Your Saved Travel Plans
            </h1>

            <p>
              Your saved journeys are ready for you.
              Choose a plan and book your next adventure.
            </p>
          </div>

          <div className="my-plan-user">

            <Users size={20} />

            <span>
              {currentUser.name ||
                currentUser.username ||
                currentUser.email ||
                "Traveler"}
            </span>

          </div>

        </section>

        {loadingBookings && (
          <p className="my-plan-loading" style={{ textAlign: "center" }}>
            Loading your bookings…
          </p>
        )}

        {bookingLoadError && (
          <div className="my-plan-api-error" role="alert">
            {bookingLoadError}
            <button type="button" onClick={loadBookings}>Retry</button>
          </div>
        )}

        {/* ======================================================
            EMPTY STATE
        ====================================================== */}

        {plans.length === 0 ? (
          <section className="my-plan-empty">

            <div className="my-plan-empty-icon">
              <CalendarDays size={42} />
            </div>

            <h2>
              No Plans Saved Yet
            </h2>

            <p>
              Select a travel plan from
              Travel Plans or Dual Plans
              and it will appear here.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/travel-plans")
              }
            >
              Explore Travel Plans
            </button>

          </section>
        ) : (

          /* ====================================================
             PLAN LIST
          ==================================================== */

          <section className="my-plan-grid">

            {plans.map(
              (plan, index) => {

                const price =
                  getPricePerPerson(
                    plan
                  );
                const existingBooking = findBookingForPlan(plan);

                return (
                  <article
                    className="my-plan-card"
                    key={
                      plan.savedPlanKey ||
                      plan.id ||
                      `${plan.title}-${index}`
                    }
                  >

                    {/* IMAGE */}

                    <div className="my-plan-image">

                      {plan.image ? (
                        <img
                          src={plan.image}
                          alt={
                            plan.title ||
                            "Travel plan"
                          }
                        />
                      ) : (
                        <div className="my-plan-image-placeholder">
                          Happy Mappy
                        </div>
                      )}

                      <span>
                        {existingBooking ? "BOOKING CONFIRMED" : "SAVED PLAN"}
                      </span>

                    </div>

                    {/* CONTENT */}

                    <div className="my-plan-card-content">

                      <h2>
                        {plan.title ||
                          "Travel Plan"}
                      </h2>

                      <p className="my-plan-destination">
                        {plan.destination ||
                          plan.destinationName ||
                          "Travel Destination"}
                      </p>

                      <div className="my-plan-meta">

                        {plan.days && (
                          <span>
                            {plan.days}{" "}
                            Days
                          </span>
                        )}

                        {plan.nights !==
                          undefined && (
                          <span>
                            {plan.nights}{" "}
                            Nights
                          </span>
                        )}

                      </div>

                      <div className="my-plan-price">

                        <small>
                          Price / person
                        </small>

                        <strong>
                          {formatPrice(
                            price
                          )}
                        </strong>

                      </div>

                      <div className="my-plan-actions">
                        <button
                          type="button"
                          className="my-plan-remove-btn"
                          onClick={() => handleRemovePlan(plan)}
                        >
                          <Trash2 size={17} />
                          Remove Plan
                        </button>

                        {existingBooking ? (
                          <button
                            type="button"
                            className="my-plan-buy-btn"
                            onClick={() => setViewBooking(existingBooking)}
                          >
                            <Eye size={17} />
                            View Booking
                          </button>
                        ) : (
                          <button
                            type="button"
                            className="my-plan-buy-btn"
                            onClick={() => handleBuyPlan(plan)}
                          >
                            Buy Plan
                          </button>
                        )}
                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </section>
        )}

        {/* ======================================================
            BOOKING MODAL
        ====================================================== */}

        {selectedPlan && (
          <div
            className="my-plan-overlay"
            onClick={
              closeBooking
            }
          >

            <div
              className="my-plan-booking-modal"
              onClick={(event) =>
                event.stopPropagation()
              }
            >

              <button
                type="button"
                className="my-plan-close"
                onClick={
                  closeBooking
                }
              >
                <X size={22} />
              </button>

              <div className="my-plan-booking-header">

                <span>
                  TRIP BOOKING
                </span>

                <h2>
                  {selectedPlan.title}
                </h2>

                <p>
                  Complete your trip details
                  before proceeding to payment.
                </p>

              </div>

              {/* USER DETAILS */}

              <div className="booking-section">

                <h3>
                  User Details
                </h3>

                <div className="booking-user-grid">

                  <div>
                    <small>
                      Full Name
                    </small>

                    <strong>
                      {currentUser.name ||
                        currentUser.username ||
                        "Traveler"}
                    </strong>
                  </div>

                  <div>
                    <small>
                      Email Address
                    </small>

                    <strong>
                      {currentUser.email ||
                        "Not available"}
                    </strong>
                  </div>

                  <div>
                    <small>
                      Phone Number
                    </small>

                    <strong>
                      {currentUser.contact ||
                        currentUser.phone ||
                        currentUser.mobile ||
                        "Not available"}
                    </strong>
                  </div>

                </div>

              </div>

              {/* PEOPLE */}

              <div className="booking-section">

                <h3>
                  Number of People
                </h3>

                <div className="people-control">

                  <button
                    type="button"
                    onClick={
                      decreasePeople
                    }
                  >
                    <Minus size={18} />
                  </button>

                  <input
                    type="number"
                    min="1"
                    max="100"
                    value={people}
                    onChange={
                      handlePeopleInput
                    }
                  />

                  <button
                    type="button"
                    onClick={
                      increasePeople
                    }
                  >
                    <Plus size={18} />
                  </button>

                </div>

                <small>
                  Maximum 100 people
                </small>

              </div>

              {/* DATE */}

              <div className="booking-section">

                <h3>
                  Select Trip Date
                </h3>

                <div className="booking-date">

                  <CalendarDays
                    size={19}
                  />

                  <input
                    type="date"
                    min={(() => {
                      const today = new Date();
                      const year = today.getFullYear();
                      const month = String(today.getMonth() + 1).padStart(2, "0");
                      const day = String(today.getDate()).padStart(2, "0");
                      return `${year}-${month}-${day}`;
                    })()}
                    value={tripDate}
                    onChange={(event) => {
                      setTripDate(event.target.value);
                      setPaymentError("");
                    }}
                  />

                </div>

              </div>

              {/* PRICE */}

              <div className="booking-price-box">

                <div>
                  <span>
                    Price per person
                  </span>

                  <strong>
                    {formatPrice(
                      pricePerPerson
                    )}
                  </strong>
                </div>

                <div>
                  <span>
                    Number of people
                  </span>

                  <strong>
                    {people}
                  </strong>
                </div>

                <div>
                  <span>
                    Subtotal
                  </span>

                  <strong>
                    {formatPrice(
                      subtotal
                    )}
                  </strong>
                </div>

                {discountRate > 0 && (
                  <div className="booking-discount">

                    <span>
                      Group Discount (
                      {discountRate}%)
                    </span>

                    <strong>
                      -{" "}
                      {formatPrice(
                        discountAmount
                      )}
                    </strong>

                  </div>
                )}

                <div className="booking-total">

                  <span>
                    Total Trip Amount
                  </span>

                  <strong>
                    {formatPrice(
                      totalAmount
                    )}
                  </strong>

                </div>

              </div>

              {discountRate > 0 && (
                <div className="discount-success">
                  <CheckCircle
                    size={18}
                  />

                  {discountRate}% group
                  discount applied!
                </div>
              )}

              {/* PAYMENT BUTTON */}

              <button
                type="button"
                className="proceed-payment-btn"
                onClick={
                  handleProceedPayment
                }
              >
                Proceed Payment
              </button>

            </div>

          </div>
        )}

        {/* ======================================================
            PAYMENT MODAL
        ====================================================== */}

        {showPayment &&
          selectedPlan && (
            <div className="my-plan-overlay">

              <div className="payment-modal">

                <button
                  type="button"
                  className="my-plan-close"
                  onClick={() =>
                    setShowPayment(false)
                  }
                >
                  <X size={22} />
                </button>

                <div className="payment-header">

                  <span>
                    DEMO PAYMENT
                  </span>

                  <h2>
                    Choose Payment Method
                  </h2>

                  <p>
                    This is a demo payment
                    interface. No real money
                    will be transferred.
                  </p>

                </div>

                <div className="payment-methods">

                  <button
                    type="button"
                    className={
                      paymentMethod === "upi"
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setPaymentMethod("upi");
                      setPaymentValue("");
                      setPaymentError("");
                    }}
                  >
                    <Smartphone
                      size={20}
                    />

                    UPI
                  </button>

                  <button
                    type="button"
                    className={
                      paymentMethod ===
                      "netbanking"
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setPaymentMethod("netbanking");
                      setPaymentValue("");
                      setPaymentError("");
                    }}
                  >
                    <Building2
                      size={20}
                    />

                    Net Banking
                  </button>

                  <button
                    type="button"
                    className={
                      paymentMethod === "card"
                        ? "active"
                        : ""
                    }
                    onClick={() => {
                      setPaymentMethod("card");
                      setPaymentValue("");
                      setPaymentError("");
                    }}
                  >
                    <CreditCard
                      size={20}
                    />

                    Card
                  </button>

                </div>

                {/* UPI */}

                {paymentMethod === "upi" && (
                  <div className="payment-input-area">

                    <label>
                      UPI ID
                    </label>

                    <input
                      type="text"
                      placeholder="example@upi"
                      value={
                        paymentValue
                      }
                      onChange={(event) =>
                        setPaymentValue(
                          event.target.value
                        )
                      }
                    />

                  </div>
                )}

                {/* NET BANKING */}

                {paymentMethod ===
                  "netbanking" && (
                  <div className="payment-input-area">

                    <label>
                      Bank
                    </label>

                    <select
                      value={
                        paymentValue
                      }
                      onChange={(event) =>
                        setPaymentValue(
                          event.target.value
                        )
                      }
                    >
                      <option value="">
                        Select Bank
                      </option>

                      <option value="SBI">
                        State Bank of India
                      </option>

                      <option value="HDFC">
                        HDFC Bank
                      </option>

                      <option value="ICICI">
                        ICICI Bank
                      </option>

                      <option value="AXIS">
                        Axis Bank
                      </option>

                    </select>

                  </div>
                )}

                {/* CARD */}

                {paymentMethod === "card" && (
                  <div className="payment-input-area">

                    <label>
                      Demo Card Number
                    </label>

                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength="16"
                      placeholder="1234567890123456"
                      value={
                        paymentValue
                      }
                      onChange={(event) =>
                        setPaymentValue(
                          event.target.value
                            .replace(
                              /\D/g,
                              ""
                            )
                            .slice(
                              0,
                              16
                            )
                        )
                      }
                    />

                  </div>
                )}

                <div className="payment-total">

                  <span>
                    Amount to Pay
                  </span>

                  <strong>
                    {formatPrice(
                      totalAmount
                    )}
                  </strong>

                </div>

                {!paymentSuccess ? (
                  <button
                    type="button"
                    className="demo-pay-btn"
                    onClick={
                      handleDemoPayment
                    }
                  >
                    <WalletCards
                      size={18}
                    />

                    Pay{" "}
                    {formatPrice(
                      totalAmount
                    )}
                  </button>
                ) : (
                  <div className="payment-success">

                    <CheckCircle
                      size={45}
                    />

                    <h3>
                      Demo Payment Successful
                    </h3>

                    <p>
                      Your demo payment was
                      processed successfully.
                    </p>

                    <button
                      type="button"
                      className="confirm-trip-btn"
                      onClick={handleConfirmTrip}
                      disabled={savingBooking}
                    >
                      {savingBooking ? "Saving Booking…" : "Confirm Trip"}
                    </button>

                  </div>
                )}

              </div>

            </div>
          )}

        {/* ======================================================
            PAYMENT VALIDATION ERROR POPUP
        ====================================================== */}

        {paymentError && selectedPlan && (
          <div className="my-plan-overlay">

            <div className="payment-error-modal">

              <div className="payment-error-icon">
                <X size={30} />
              </div>

              <span className="payment-error-label">
                {paymentError === "Date not selected" ? "TRIP DATE" : "PAYMENT CHECK"}
              </span>

              <h3>
                {paymentError === "Date not selected"
                  ? "Date not selected"
                  : "Invalid Payment Details"}
              </h3>

              <p>
                {paymentError === "Date not selected"
                  ? "Please select your trip date from the calendar before proceeding to payment."
                  : paymentError}
              </p>

              <button
                type="button"
                onClick={() => setPaymentError("")}
              >
                Try Again
              </button>

            </div>

          </div>
        )}

        {/* ======================================================
            PAYMENT CONFIRMATION POPUP
        ====================================================== */}

        {showPaymentConfirm &&
          selectedPlan && (
            <div className="my-plan-overlay">

              <div className="payment-confirm-modal">

                <div className="payment-confirm-icon">
                  <WalletCards size={30} />
                </div>

                <h3>
                  Confirm Payment
                </h3>

                <p>
                  Are you sure you want to pay {formatPrice(totalAmount)} for this trip?
                </p>

                <div className="payment-confirm-actions">

                  <button
                    type="button"
                    className="payment-cancel-btn"
                    onClick={() =>
                      setShowPaymentConfirm(false)
                    }
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    className="payment-confirm-btn"
                    onClick={handleConfirmPayment}
                  >
                    Confirm & Pay
                  </button>

                </div>

              </div>

            </div>
          )}

        {/* ======================================================
            PAYMENT SUCCESS POPUP
        ====================================================== */}

        {paymentSuccess &&
          selectedPlan &&
          !tripConfirmed && (
            <div className="my-plan-overlay">

              <div className="payment-success-modal">

                <div className="payment-success-icon">
                  <CheckCircle size={32} />
                </div>

                <h3>
                  Payment Successful!
                </h3>

                <p>
                  Your payment of {formatPrice(totalAmount)} was processed successfully.
                </p>

                <button
                  type="button"
                  onClick={handleConfirmTrip}
                  disabled={savingBooking}
                >
                  {savingBooking ? "Saving Booking…" : "Confirm Trip"}
                </button>

              </div>

            </div>
          )}

        {/* ======================================================
            FINAL SUCCESS
        ====================================================== */}

        {tripConfirmed &&
          selectedPlan && (
            <div className="my-plan-overlay trip-confirmation-overlay">

              <div className="trip-success-modal">

                <div className="trip-success-icon">
                  <CheckCircle
                    size={50}
                  />
                </div>

                <h2>
                  Trip Confirmed!
                </h2>

                <p>
                  Your booking has been saved to your Happy Mappy account. This was a demo payment only; no real money was transferred.
                </p>

                <div className="trip-confirmed-details">

                  <div className="trip-confirmed-plan">
                    <div className="trip-confirmed-detail-icon">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span>Travel Plan</span>
                      <strong>{selectedPlan.title || "Happy Mappy Trip"}</strong>
                    </div>
                  </div>

                  <div className="trip-confirmed-detail-grid">

                    <div>
                      <CalendarDays size={18} />
                      <span>Trip Date</span>
                      <strong>{formatTripDate(tripDate)}</strong>
                    </div>

                    <div>
                      <Users size={18} />
                      <span>Travelers</span>
                      <strong>{people} {people === 1 ? "Person" : "People"}</strong>
                    </div>

                    <div>
                      <Clock size={18} />
                      <span>Duration</span>
                      <strong>
                        {selectedPlan.days || 1} {Number(selectedPlan.days) === 1 ? "Day" : "Days"}
                        {selectedPlan.nights !== undefined ? ` · ${selectedPlan.nights} ${Number(selectedPlan.nights) === 1 ? "Night" : "Nights"}` : ""}
                      </strong>
                    </div>

                    <div>
                      <WalletCards size={18} />
                      <span>Price / Person</span>
                      <strong>{formatPrice(pricePerPerson)}</strong>
                    </div>

                    <div>
                      <CreditCard size={18} />
                      <span>Subtotal</span>
                      <strong>{formatPrice(subtotal)}</strong>
                    </div>

                    <div>
                      <CheckCircle size={18} />
                      <span>Group Discount</span>
                      <strong>{discountRate > 0 ? `${discountRate}% · -${formatPrice(discountAmount)}` : "No discount"}</strong>
                    </div>

                    <div>
                      <MapPin size={18} />
                      <span>Destination</span>
                      <strong>{selectedPlan.destination || selectedPlan.destinationName || "Happy Mappy Destination"}</strong>
                    </div>

                    <div>
                      <Users size={18} />
                      <span>Booked For</span>
                      <strong>{currentUser.name || currentUser.username || currentUser.email || "Traveler"}</strong>
                    </div>

                  </div>

                  <div className="trip-confirmed-contact">
                    <div>
                      <span>Email</span>
                      <strong>{currentUser.email || "Not available"}</strong>
                    </div>
                    <div>
                      <span>Phone</span>
                      <strong>{currentUser.contact || currentUser.phone || currentUser.mobile || "Not available"}</strong>
                    </div>
                  </div>

                  <div className="trip-payment-details">
                    <div className="trip-payment-details-header">
                      <CreditCard size={18} />
                      <div>
                        <span>Payment Details</span>
                        <strong>{paymentMethodLabel}</strong>
                      </div>
                    </div>

                    <div className="trip-payment-detail-row">
                      <span>Payment method</span>
                      <strong>{paymentMethodLabel}</strong>
                    </div>

                    <div className="trip-payment-detail-row">
                      <span>{paymentMethod === "upi" ? "UPI ID" : paymentMethod === "netbanking" ? "Bank" : "Card Number"}</span>
                      <strong>{paymentDetailLabel}</strong>
                    </div>

                    <div className="trip-payment-detail-row">
                      <span>Payment status</span>
                      <strong className="trip-payment-paid">Payment successful</strong>
                    </div>

                    <div className="trip-payment-detail-row">
                      <span>Trip amount</span>
                      <strong>{formatPrice(totalAmount)}</strong>
                    </div>
                  </div>

                  <div className="trip-booking-reference">
                    <span>Booking Reference</span>
                    <strong>{bookingReference || "HM-PENDING"}</strong>
                  </div>

                  <div className="trip-payment-status">
                    <CheckCircle size={17} />
                    <span>Payment successful</span>
                  </div>

                  <div className="trip-total-banner">
                    <div>
                      <span>Total Trip Amount</span>
                      <small>Happy Mappy booking</small>
                    </div>
                    <strong>{formatPrice(totalAmount)}</strong>
                  </div>

                </div>

                <button
                  type="button"
                  onClick={() => {
                    setTripConfirmed(false);
                    setShowPayment(false);
                    setShowPaymentConfirm(false);
                    setSelectedPlan(null);
                    setPaymentSuccess(false);
                    setPaymentError("");
                    setPaymentValue("");
                    setPaymentMethod("upi");
                    setBookingReference("");
                  }}
                >
                  Done
                </button>

              </div>

            </div>
          )}

        {/* ======================================================
            VIEW BOOKING DETAILS
        ====================================================== */}

        {viewBooking && (
          <div
            className="my-plan-overlay"
            onClick={() => setViewBooking(null)}
          >
            <div
              className="payment-success-modal booking-details-modal"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="my-plan-close booking-details-close"
                onClick={() => setViewBooking(null)}
                aria-label="Close booking details"
              >
                <X size={22} />
              </button>

              <div className="payment-success-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Booking Details</h3>
              <p>Your booking information saved in MongoDB.</p>

              <div className="booking-user-grid">
                <div><small>Travel Plan</small><strong>{viewBooking.planTitle || "Travel Plan"}</strong></div>
                <div><small>Destination</small><strong>{viewBooking.destination || "Not available"}</strong></div>
                <div><small>Booking Reference</small><strong>{viewBooking.bookingReference || "Not available"}</strong></div>
                <div><small>Trip Date</small><strong>{formatTripDate(viewBooking.tripDate)}</strong></div>
                <div><small>Travelers</small><strong>{viewBooking.people || 1}</strong></div>
                <div><small>Price per person</small><strong>{formatPrice(viewBooking.pricePerPerson)}</strong></div>
                <div><small>Subtotal</small><strong>{formatPrice(viewBooking.subtotal)}</strong></div>
                <div><small>Group discount</small><strong>{Number(viewBooking.discountRate || 0)}% · {formatPrice(viewBooking.discountAmount)}</strong></div>
                <div><small>Total amount</small><strong>{formatPrice(viewBooking.totalAmount)}</strong></div>
                <div><small>Booking status</small><strong>{viewBooking.bookingStatus || "confirmed"}</strong></div>

                <div>
                  <small>Payment method</small>
                  <strong>
                    {viewBooking.paymentMethod === "upi"
                      ? "UPI"
                      : viewBooking.paymentMethod === "netbanking"
                        ? "Net Banking"
                        : viewBooking.paymentMethod === "card"
                          ? "Debit / Credit Card"
                          : "Not recorded"}
                  </strong>
                </div>

                {/* CHANGE 2: Display the actual saved payment detail */}
                <div>
                  <small>
                    {viewBooking.paymentMethod === "upi"
                      ? "UPI ID"
                      : viewBooking.paymentMethod === "netbanking"
                        ? "Bank name"
                        : viewBooking.paymentMethod === "card"
                          ? "Card number"
                          : "Payment mode"}
                  </small>

                  <strong>
                    {viewBooking.paymentMethod === "netbanking"
                      ? ({
                          SBI: "State Bank of India",
                          HDFC: "HDFC Bank",
                          ICICI: "ICICI Bank",
                          AXIS: "Axis Bank",
                        }[String(viewBooking.paymentDetail || "").toUpperCase()] ||
                        viewBooking.paymentDetail ||
                        "Bank name not recorded")
                      : viewBooking.paymentMethod === "upi"
                        ? viewBooking.paymentDetail || "UPI ID not recorded"
                        : viewBooking.paymentMethod === "card"
                          ? (() => {
                              const savedCard = String(viewBooking.paymentDetail || "");
                              const digits = savedCard.replace(/\D/g, "");

                              return digits.length >= 4
                                ? `•••• ${digits.slice(-4)}`
                                : savedCard || "Card number not recorded";
                            })()
                          : "Not recorded"}
                  </strong>
                </div>

                <div>
                  <small>Payment status</small>
                  <strong className="trip-payment-paid">Payment successful</strong>
                </div>
              </div>

              <button type="button" onClick={() => setViewBooking(null)}>
                Close
              </button>
            </div>
          </div>
        )}

      </main>

    </div>
  );
}