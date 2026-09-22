import { useMemo, useState } from "react";

import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  IndianRupee,
  MapPin,
  Search,
  Ticket,
  Utensils,
  X,
  CheckCircle,
} from "lucide-react";

import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";

import dualPlans from "../data/dualPlans";

export default function DualPlansPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedDestination =
    searchParams.get("destination") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [selectedPlan, setSelectedPlan] =
    useState(null);

  const [selectedDuration, setSelectedDuration] =
    useState(2);

  const [successPlan, setSuccessPlan] =
    useState(null);

  /*
   * =========================================================
   * DUMMY IMAGE URL
   *
   * Replace this URL later with your own image.
   * =========================================================
   */
  const fallbackImage =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8DWpSKp3wxiMc4uz38BhH_Pdmjqv1avxC25V4Jb4QVw&s=10";

  /*
   * =========================================================
   * FORMAT AMOUNT
   * =========================================================
   */
  const formatAmount = (amount) => {
    const value = Number(amount || 0);

    if (!Number.isFinite(value) || value === 0) {
      return "Free";
    }

    return `₹${value.toLocaleString("en-IN")}`;
  };

  /*
   * =========================================================
   * NORMALIZE TEXT
   * =========================================================
   */
  const normalize = (value) =>
    String(value || "")
      .trim()
      .toLowerCase();

  /*
   * =========================================================
   * GET DURATION DATA
   * =========================================================
   */
  const getDurationData = (plan, duration) => {
    if (!plan) {
      return null;
    }

    /*
     * First check durationOptions.
     */
    if (
      plan.durationOptions &&
      plan.durationOptions[duration]
    ) {
      return plan.durationOptions[duration];
    }

    /*
     * Then check durations.
     */
    if (
      plan.durations &&
      plan.durations[duration]
    ) {
      return plan.durations[duration];
    }

    /*
     * Finally use the plan's default data.
     */
    return {
      days: plan.days || duration,

      nights:
        plan.nights !== undefined
          ? plan.nights
          : Math.max(
              (plan.days || duration) - 1,
              0
            ),

      price: plan.price || 0,

      baseAmount: plan.baseAmount || 0,

      baseAmountPerDay:
        plan.baseAmountPerDay || 0,

      baseIncludes:
        Array.isArray(plan.baseIncludes)
          ? plan.baseIncludes
          : [],

      itinerary:
        Array.isArray(plan.itinerary)
          ? plan.itinerary
          : [],

      highlights:
        Array.isArray(plan.highlights)
          ? plan.highlights
          : [],

      placeAmount:
        plan.placeAmount || 0,
    };
  };

  /*
   * =========================================================
   * GET PLACES
   * =========================================================
   */
  const getPlaces = (plan) => {
    if (
      Array.isArray(plan?.places) &&
      plan.places.length
    ) {
      return plan.places;
    }

    if (
      Array.isArray(plan?.destinations) &&
      plan.destinations.length
    ) {
      return plan.destinations;
    }

    if (plan?.destination) {
      return String(plan.destination)
        .split("+")
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  };

  /*
   * =========================================================
   * CATEGORIES
   * =========================================================
   */
  const categories = useMemo(() => {
    const values = dualPlans
      .map((plan) => plan.category)
      .filter(Boolean);

    return [
      "All",
      ...new Set(values),
    ];
  }, []);

  /*
   * =========================================================
   * FILTER PLANS
   * =========================================================
   */
  const pagePlans = useMemo(() => {
    const destinationText =
      normalize(selectedDestination);

    const searchText =
      normalize(search);

    return dualPlans.filter((plan) => {
      const places = getPlaces(plan);

      const searchableText = [
        plan.title,
        plan.destination,
        plan.destinationName,
        plan.category,
        ...places,
      ]
        .filter(Boolean)
        .map(normalize)
        .join(" ");

      const matchesSearch =
        !searchText ||
        searchableText.includes(searchText);

      const matchesCategory =
        category === "All" ||
        plan.category === category;

      const matchesDestination =
        !destinationText ||
        places.some(
          (place) =>
            normalize(place).includes(
              destinationText
            ) ||
            destinationText.includes(
              normalize(place)
            )
        ) ||
        normalize(
          plan.destination
        ).includes(destinationText);

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination
      );
    });
  }, [
    search,
    category,
    selectedDestination,
  ]);

  /*
   * =========================================================
   * GET HIGHLIGHTS
   * =========================================================
   */
  const getHighlights = (
    plan,
    duration = 2
  ) => {
    const durationData =
      getDurationData(
        plan,
        duration
      );

    if (
      Array.isArray(
        durationData?.highlights
      ) &&
      durationData.highlights.length
    ) {
      return durationData.highlights;
    }

    if (
      Array.isArray(plan?.highlights) &&
      plan.highlights.length
    ) {
      return plan.highlights;
    }

    return [];
  };

  /*
   * =========================================================
   * GET ITINERARY
   * =========================================================
   */
  const getItinerary = (
    plan,
    duration = 2
  ) => {
    const durationData =
      getDurationData(
        plan,
        duration
      );

    if (
      Array.isArray(
        durationData?.itinerary
      )
    ) {
      return durationData.itinerary;
    }

    return [];
  };

  /*
   * =========================================================
   * BUILD POPUP DATA
   * =========================================================
   */
  const buildPopupPlan = (
    plan,
    duration
  ) => {
    const durationData =
      getDurationData(
        plan,
        duration
      );

    return {
      ...plan,
      ...durationData,

      image:
        plan.image ||
        fallbackImage,

      durationOptions:
        plan.durationOptions ||
        plan.durations ||
        {},
    };
  };

  /*
   * =========================================================
   * OPEN POPUP
   * =========================================================
   */
  const openPlanPopup = (plan, duration = 2) => {
    setSelectedDuration(duration);

    setSelectedPlan(
      buildPopupPlan(
        plan,
        duration
      )
    );
  };

  /*
   * =========================================================
   * CHANGE POPUP DURATION
   * =========================================================
   */
  const changeDuration = (duration) => {
    if (!selectedPlan) {
      return;
    }

    const originalPlan =
      dualPlans.find(
        (plan) =>
          plan.id === selectedPlan.id
      ) || selectedPlan;

    setSelectedDuration(duration);

    setSelectedPlan(
      buildPopupPlan(
        originalPlan,
        duration
      )
    );
  };

  /*
   * =========================================================
   * CLOSE POPUP
   * =========================================================
   */
  const closePlanPopup = () => {
    setSelectedPlan(null);
  };

  /*
   * =========================================================
   * CLOSE SUCCESS POPUP
   * =========================================================
   */
  const closeSuccessPopup = () => {
    setSuccessPlan(null);
  };

  /*
   * =========================================================
   * SELECT PLAN
   * =========================================================
   */
  const selectPlan = (plan) => {
    const currentUser =
      localStorage.getItem(
        "happyMappyCurrentUser"
      );

    if (!currentUser) {
      setSelectedPlan(null);

      navigate("/auth", {
        state: {
          requireLogin: true,

          from:
            window.location.pathname +
            window.location.search,

          planTitle:
            plan.title,
        },
      });

      return;
    }

    setSelectedPlan(null);

    setSuccessPlan(plan);
  };

  /*
   * =========================================================
   * CLEAR FILTERS
   * =========================================================
   */
  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <div className="dual-plans-page">

      <style>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .dual-plans-page {
          min-height: 100vh;
          background: #ffffff;
          color: #18352b;
        }


        /* =====================================================
           HERO
           
           IMPORTANT:
           Green overlay removed from the image.
        ===================================================== */

        .dual-plans-hero {
          position: relative;

          min-height: 430px;

          display: flex;
          align-items: center;

          overflow: hidden;

          background:
            url("/images/travelplans-bg.jpg")
            center / cover no-repeat;
        }


        /*
         * Light dark overlay only.
         * No green colour.
         */
        .dual-plans-hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.58),
              rgba(0, 0, 0, 0.22)
            );
        }


        .dual-plans-hero-content {
          position: relative;

          z-index: 2;

          width:
            min(1180px, 92%);

          margin: auto;

          color: #ffffff;
        }


        .dual-plans-badge {
          display: inline-flex;

          padding:
            8px 15px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.35
            );

          border-radius: 999px;

          background:
            rgba(
              255,
              255,
              255,
              0.12
            );

          backdrop-filter:
            blur(10px);

          font-size: 13px;

          font-weight: 700;

          margin-bottom: 20px;
        }


        .dual-plans-hero h1 {
          margin: 0;

          font-size:
            clamp(
              38px,
              6vw,
              68px
            );

          line-height: 0.92;

          letter-spacing: -2px;

          max-width: 800px;
        }


        .dual-plans-hero h1 span {
          color: #ffd65a;
        }


        .dual-plans-hero p {
          max-width: 650px;

          margin:
            14px 0 0;

          color:
            rgba(
              255,
              255,
              255,
              0.9
            );

          font-size: 16px;

          line-height: 1.7;
        }


        .dual-plans-hero-features {
          display: flex;

          flex-wrap: wrap;

          gap: 12px;

          margin-top: 28px;
        }


        .dual-plans-hero-features div {
          display: flex;

          align-items: center;

          gap: 8px;

          padding:
            10px 14px;

          border-radius: 10px;

          background:
            rgba(
              255,
              255,
              255,
              0.12
            );

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.18
            );

          font-size: 13px;
        }


        /* =====================================================
           MAIN
        ===================================================== */

        .dual-plans-container {
          width:
            min(1180px, 92%);

          margin: 0 auto;

          padding:
            65px 0 80px;

          background:
            #ffffff;
        }


        .dual-plans-heading {
          display: flex;

          align-items:
            flex-end;

          justify-content:
            space-between;

          gap: 30px;

          margin-bottom: 30px;
        }


        .dual-plans-small-title {
          display: block;

          margin-bottom: 8px;

          color: #0b8f63;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 1.8px;
        }


        .dual-plans-heading h2 {
          margin: 0;

          font-size: 34px;

          color: #173c30;
        }


        .dual-plans-heading p {
          margin:
            8px 0 0;

          color: #6d8078;
        }


        /* =====================================================
           FILTERS
        ===================================================== */

        .dual-plans-filters {
          display: flex;

          align-items: center;

          gap: 15px;

          margin-bottom: 32px;

          padding: 13px;

          border:
            1px solid #e0ebe6;

          border-radius: 16px;

          background:
            rgba(
              255,
              255,
              255,
              0.9
            );

          box-shadow:
            0 8px 25px
            rgba(
              21,
              73,
              55,
              0.05
            );
        }


        .dual-search-box {
          min-width: 270px;

          flex: 1;

          height: 45px;

          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            0 13px;

          border:
            1px solid #dce8e3;

          border-radius: 11px;

          color: #6d8178;

          background:
            #f8fbfa;
        }


        .dual-search-box input {
          flex: 1;

          width: 100%;

          border: 0;

          outline: 0;

          background:
            transparent;

          color: #19382d;

          font-size: 13px;
        }


        .dual-search-box button {
          border: 0;

          background:
            transparent;

          cursor: pointer;

          color: #879890;

          display: flex;
        }


        .dual-category-list {
          display: flex;

          gap: 7px;

          overflow-x: auto;
        }


        .dual-category-list button {
          white-space: nowrap;

          border:
            1px solid #d9e7e1;

          border-radius: 9px;

          background:
            #ffffff;

          color: #587069;

          padding:
            10px 13px;

          cursor: pointer;

          font-size: 12px;

          font-weight: 700;

          transition:
            0.2s ease;
        }


        .dual-category-list button:hover,
        .dual-category-list button.active {
          background:
            #087d57;

          border-color:
            #087d57;

          color:
            #ffffff;
        }


        /* =====================================================
           GRID
        ===================================================== */

        .dual-plans-grid {
          display: grid;

          grid-template-columns:
            repeat(
              2,
              minmax(0, 1fr)
            );

          gap: 25px;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .dual-plan-card {
          overflow: hidden;

          border-radius: 19px;

          background:
            #ffffff;

          border:
            1px solid #e1ebe7;

          box-shadow:
            0 10px 35px
            rgba(
              22,
              72,
              54,
              0.08
            );

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }


        .dual-plan-card:hover {
          transform:
            translateY(-5px);

          box-shadow:
            0 18px 42px
            rgba(
              22,
              72,
              54,
              0.14
            );
        }


        /* =====================================================
           CARD IMAGE
        ===================================================== */

        .dual-plan-image-wrapper {
          position: relative;

          height: 250px;

          overflow: hidden;
        }


        .dual-plan-image {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.5s ease;
        }


        .dual-plan-card:hover
        .dual-plan-image {
          transform:
            scale(1.06);
        }


        .dual-plan-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.03),
              rgba(0,0,0,.58)
            );
        }


        .dual-plan-category {
          position: absolute;

          top: 15px;

          left: 15px;

          padding:
            7px 11px;

          border-radius: 999px;

          background:
            rgba(
              255,
              255,
              255,
              0.93
            );

          color:
            #087b55;

          font-size: 11px;

          font-weight: 800;
        }


        .dual-plan-location {
          position: absolute;

          left: 17px;

          right: 17px;

          bottom: 16px;

          display: flex;

          align-items: center;

          gap: 6px;

          color:
            #ffffff;

          font-size: 14px;

          font-weight: 700;
        }


        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .dual-plan-card-content {
          padding: 22px;
        }


        .dual-plan-card-content h3 {
          margin: 0;

          color:
            #183b30;

          font-size: 23px;
        }


        .dual-plan-description {
          margin:
            9px 0 14px;

          color:
            #74857f;

          font-size: 13px;

          line-height: 1.55;
        }


        /* =====================================================
           PLACES
        ===================================================== */

        .dual-plan-place-list {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin-bottom: 18px;
        }


        .dual-plan-place-list span {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          padding:
            7px 9px;

          border-radius: 8px;

          background:
            #eef8f4;

          color:
            #087b55;

          font-size: 11px;

          font-weight: 700;
        }


        /* =====================================================
           DURATION
        ===================================================== */

        .dual-duration-section {
          padding: 14px;

          border-radius: 13px;

          background:
            #f7faf9;

          border:
            1px solid #e5eeea;
        }


        .dual-duration-title {
          display: flex;

          align-items: center;

          gap: 7px;

          margin-bottom: 10px;

          color:
            #49645a;

          font-size: 12px;

          font-weight: 800;
        }


        .dual-duration-options {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 8px;
        }


        .dual-duration-options button {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 8px;

          padding: 10px;

          border:
            1px solid #dce9e3;

          border-radius: 9px;

          background:
            #ffffff;

          color:
            #20493a;

          cursor: pointer;

          transition:
            0.2s ease;
        }


        .dual-duration-options button:hover {
          border-color:
            #0a9365;

          transform:
            translateY(-1px);
        }


        .dual-duration-options strong {
          font-size: 12px;
        }


        .dual-duration-options small {
          color:
            #0a9365;

          font-weight: 800;
        }


        /* =====================================================
           HIGHLIGHTS
        ===================================================== */

        .dual-plan-highlights {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;

          margin:
            16px 0;
        }


        .dual-plan-highlights span {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          padding:
            6px 8px;

          color:
            #5c7068;

          font-size: 10px;

          background:
            #fafcfb;

          border:
            1px solid #edf2ef;

          border-radius: 7px;
        }


        .dual-plan-highlights svg {
          color:
            #0a9566;
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        .dual-plan-card-footer {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 15px;

          padding-top: 15px;

          border-top:
            1px solid #edf1ef;
        }


        .dual-plan-price small {
          display: block;

          color:
            #8a9994;

          font-size: 10px;
        }


        .dual-plan-price strong {
          display: block;

          margin-top: 2px;

          color:
            #163d30;

          font-size: 20px;
        }


        .dual-plan-view-button,
        .dual-select-plan-button {
          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 7px;

          border: 0;

          border-radius: 10px;

          background:
            #087d57;

          color:
            #ffffff;

          padding:
            11px 15px;

          cursor: pointer;

          font-size: 12px;

          font-weight: 800;

          transition:
            0.2s ease;
        }


        .dual-plan-view-button:hover,
        .dual-select-plan-button:hover {
          background:
            #066745;

          transform:
            translateY(-1px);
        }


        /* =====================================================
           EMPTY
        ===================================================== */

        .dual-plans-empty {
          padding:
            70px 20px;

          text-align:
            center;

          border:
            1px dashed #cfded7;

          border-radius: 18px;

          background:
            #ffffff;
        }


        .dual-empty-icon {
          width: 60px;

          height: 60px;

          margin:
            0 auto 15px;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 50%;

          background:
            #eaf7f2;

          color:
            #087d57;
        }


        .dual-plans-empty h3 {
          margin: 0;

          color:
            #214439;
        }


        .dual-plans-empty p {
          color:
            #7b8d86;

          font-size: 13px;
        }


        .dual-plans-empty button {
          margin-top: 10px;

          padding:
            10px 15px;

          border: 0;

          border-radius: 9px;

          background:
            #087d57;

          color:
            white;

          cursor: pointer;

          font-weight: 700;
        }


        /* =====================================================
           POPUP BACKDROP
        ===================================================== */

        .dual-modal-backdrop {
          position: fixed;

          inset: 0;

          z-index: 9999;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background:
            rgba(
              15,
              23,
              42,
              0.68
            );

          backdrop-filter:
            blur(6px);

          overflow-y: auto;

          overscroll-behavior:
            contain;
        }


        /* =====================================================
           POPUP

           Increased width slightly.
        ===================================================== */

        .dual-plan-modal {
          position: relative;

          width:
            min(
              960px,
              100%
            );

          max-height:
            calc(
              100vh - 40px
            );

          overflow-y: auto;

          background:
            #ffffff;

          border-radius:
            16px;

          box-shadow:
            0 25px 70px
            rgba(
              15,
              23,
              42,
              0.35
            );

          scrollbar-width:
            thin;

          animation:
            dualPopupShow
            0.18s ease;
        }


        @keyframes dualPopupShow {

          from {
            opacity: 0;

            transform:
              translateY(12px)
              scale(0.98);
          }

          to {
            opacity: 1;

            transform:
              translateY(0)
              scale(1);
          }

        }


        /* =====================================================
           POPUP HEADER
        ===================================================== */

        .dual-modal-header {
          position: sticky;

          top: 0;

          z-index: 20;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 15px;

          padding:
            18px 22px;

          color:
            #ffffff;

          background:
            linear-gradient(
              135deg,
              #07583f,
              #0a9466
            );

          border-bottom:
            1px solid
            rgba(
              255,
              255,
              255,
              0.15
            );
        }


        .dual-modal-header > div {
          min-width: 0;
        }


        .dual-modal-header > div > span {
          display: inline-block;

          margin-bottom: 5px;

          color:
            #c7f4e1;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1px;

          text-transform:
            uppercase;
        }


        .dual-modal-header h2 {
          margin: 0;

          color:
            #ffffff;

          font-size: 22px;

          line-height: 1.25;
        }


        .dual-modal-header p {
          display: flex;

          align-items: center;

          gap: 5px;

          margin:
            6px 0 0;

          color:
            rgba(
              255,
              255,
              255,
              0.85
            );

          font-size: 12px;
        }


        .dual-modal-close {
          flex:
            0 0 auto;

          width: 36px;

          height: 36px;

          display: flex;

          align-items: center;

          justify-content: center;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.25
            );

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.12
            );

          color:
            #ffffff;

          cursor:
            pointer;

          transition:
            0.2s ease;
        }


        .dual-modal-close:hover {
          background:
            rgba(
              255,
              255,
              255,
              0.22
            );

          transform:
            rotate(4deg);
        }


        /* =====================================================
           POPUP IMAGE

           NOW BIGGER.
        ===================================================== */

        .dual-modal-image-box {
          width:
            min(
              440px,
              88%
            );

          height:
            240px;

          margin:
            22px auto 8px;

          overflow:
            hidden;

          border-radius:
            15px;

          background:
            #e2e8f0;

          border:
            1px solid #dbe8e2;

          box-shadow:
            0 10px 30px
            rgba(
              15,
              23,
              42,
              0.13
            );
        }


        .dual-modal-image-box img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;
        }


        /* =====================================================
           DURATION SWITCH
        ===================================================== */

        .dual-modal-duration {
          display: grid;

          grid-template-columns:
            1fr 1fr;

          gap: 10px;

          padding:
            16px 22px;

          border-bottom:
            1px solid #e8efec;
        }


        .dual-modal-duration button {
          display: flex;

          align-items: center;

          justify-content:
            center;

          gap: 7px;

          padding:
            11px;

          border:
            1px solid #dce8e3;

          border-radius:
            9px;

          background:
            #ffffff;

          color:
            #526b61;

          cursor:
            pointer;

          font-size: 12px;

          font-weight: 800;

          transition:
            0.2s ease;
        }


        .dual-modal-duration button:hover {
          border-color:
            #087d57;
        }


        .dual-modal-duration button.active {
          border-color:
            #087d57;

          background:
            #eaf8f2;

          color:
            #087d57;
        }


        /* =====================================================
           SUMMARY
        ===================================================== */

        .dual-modal-summary {
          display: grid;

          grid-template-columns:
            repeat(
              3,
              minmax(0, 1fr)
            );

          gap: 10px;

          padding:
            16px 22px;

          background:
            #f7faf9;

          border-bottom:
            1px solid #e8efec;
        }


        .dual-modal-summary div {
          display: flex;

          align-items: center;

          justify-content:
            center;

          gap: 7px;

          padding:
            11px;

          color:
            #4d675c;

          background:
            #ffffff;

          border:
            1px solid #e1ebe6;

          border-radius:
            8px;

          font-size: 12px;

          font-weight: 700;

          text-align:
            center;
        }


        .dual-modal-summary svg {
          color:
            #087d57;

          flex-shrink: 0;
        }


        /* =====================================================
           SECTION
        ===================================================== */

        .dual-modal-section {
          padding:
            20px 22px 0;
        }


        .dual-modal-section h3 {
          display: flex;

          align-items: center;

          gap: 7px;

          margin:
            0 0 13px;

          color:
            #193d30;

          font-size: 16px;
        }


        .dual-modal-section h3 svg {
          color:
            #087d57;
        }


        /* =====================================================
           HIGHLIGHTS
        ===================================================== */

        .dual-modal-highlights {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }


        .dual-modal-highlights div {
          display: flex;

          align-items: center;

          gap: 6px;

          padding:
            7px 9px;

          border-radius:
            8px;

          background:
            #eef8f4;

          color:
            #3f6254;

          font-size: 11px;
        }


        .dual-modal-highlights svg {
          color:
            #087d57;
        }


        /* =====================================================
           ITINERARY
        ===================================================== */

        .dual-itinerary {
          display: flex;

          flex-direction:
            column;

          gap: 14px;
        }


        .dual-itinerary-day {
          padding:
            16px;

          border:
            1px solid #dfeae5;

          border-radius:
            11px;

          background:
            #ffffff;

          box-shadow:
            0 3px 12px
            rgba(
              15,
              23,
              42,
              0.04
            );
        }


        .dual-day-heading {
          display: flex;

          align-items: center;

          gap: 10px;
        }


        .dual-day-number {
          flex:
            0 0 auto;

          width: 36px;

          height: 36px;

          display: flex;

          align-items: center;

          justify-content:
            center;

          border-radius:
            9px;

          background:
            #087d57;

          color:
            #ffffff;

          font-weight:
            900;

          font-size:
            13px;
        }


        .dual-day-heading span {
          display: block;

          margin-bottom: 3px;

          color:
            #0a9365;

          font-size: 9px;

          font-weight: 900;

          letter-spacing: 1px;
        }


        .dual-day-heading h4 {
          margin: 0;

          color:
            #213f35;

          font-size:
            15px;
        }


        .dual-day-description {
          margin:
            11px 0;

          color:
            #71827c;

          font-size:
            12px;

          line-height:
            1.6;
        }


        /* =====================================================
           ACTIVITIES

           Order:
           TIME
           PLACE
           AMOUNT
        ===================================================== */

        .dual-activity-list {
          display: flex;

          flex-direction:
            column;

          gap: 9px;

          margin-top:
            11px;
        }


        .dual-activity {
          display: flex;

          gap: 10px;

          padding:
            11px;

          border-radius:
            9px;

          background:
            #f8faf9;

          border:
            1px solid #edf2ef;
        }


        .dual-activity-icon {
          flex:
            0 0 auto;

          width: 34px;

          height: 34px;

          display: flex;

          align-items: center;

          justify-content:
            center;

          border-radius:
            8px;

          background:
            #e4f5ee;

          color:
            #087d57;
        }


        .dual-activity-info {
          min-width: 0;

          flex: 1;
        }


        /*
         * TIME
         */
        .dual-activity-time {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-bottom:
            5px;

          color:
            #087d57;

          font-size:
            10px;

          font-weight:
            800;
        }


        .dual-activity-time svg {
          flex-shrink: 0;
        }


        /*
         * PLACE
         */
        .dual-activity-place {
          display: flex;

          align-items: flex-start;

          gap: 5px;

          color:
            #29473d;

          font-size:
            13px;

          font-weight:
            800;

          line-height:
            1.4;
        }


        .dual-activity-place svg {
          flex-shrink: 0;

          margin-top: 2px;

          color:
            #087d57;
        }


        .dual-activity-info p {
          margin:
            5px 0 7px;

          color:
            #798a84;

          font-size:
            10px;

          line-height:
            1.5;
        }


        /*
         * AMOUNT
         */
        .dual-activity-amount {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          margin-top:
            3px;

          padding:
            5px 7px;

          border-radius:
            6px;

          background:
            #ffffff;

          border:
            1px solid #e1ebe6;

          color:
            #087d57;

          font-size:
            10px;

          font-weight:
            800;
        }


        .dual-activity-amount svg {
          width: 11px;

          height: 11px;
        }


        .dual-activity-meta {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;

          margin-top:
            7px;
        }


        .dual-activity-meta span {
          display: inline-flex;

          align-items: center;

          gap: 3px;

          color:
            #82918c;

          font-size:
            9px;
        }


        .dual-planning-tip {
          display: flex;

          gap: 5px;

          margin-top:
            10px;

          padding:
            9px 10px;

          border-left:
            3px solid #0a9365;

          border-radius:
            4px;

          background:
            #f0faf6;

          color:
            #667b72;

          font-size:
            10px;

          line-height:
            1.5;
        }


        .dual-planning-tip strong {
          color:
            #087d57;
        }


        /* =====================================================
           BASE AMOUNT
        ===================================================== */

        .dual-base-box {
          margin:
            20px 22px 0;

          padding:
            15px;

          border:
            1px solid #dce9e3;

          border-radius:
            10px;

          background:
            #f7faf9;
        }


        .dual-base-header {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 15px;

          padding-bottom:
            11px;

          border-bottom:
            1px solid #e0e9e5;
        }


        .dual-base-header small {
          display: block;

          color:
            #80918a;

          font-size:
            10px;
        }


        .dual-base-header strong {
          display: block;

          margin-top:
            2px;

          color:
            #087d57;

          font-size:
            20px;
        }


        .dual-base-header > span {
          color:
            #557067;

          font-size:
            11px;

          font-weight:
            800;
        }


        .dual-base-content {
          padding-top:
            12px;
        }


        .dual-base-content h4 {
          margin:
            0 0 9px;

          color:
            #304d42;

          font-size:
            11px;
        }


        .dual-base-items {
          display: flex;

          flex-wrap: wrap;

          gap: 7px;
        }


        .dual-base-items span {
          display: inline-flex;

          align-items: center;

          gap: 4px;

          padding:
            6px 8px;

          border-radius:
            7px;

          background:
            #ffffff;

          color:
            #587068;

          font-size:
            10px;

          border:
            1px solid #e2ebe7;
        }


        .dual-base-items svg {
          color:
            #087d57;
        }


        .dual-base-content p {
          margin:
            9px 0 0;

          color:
            #87958f;

          font-size:
            9px;
        }


        /* =====================================================
           FOOTER
        ===================================================== */

        .dual-modal-footer {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          margin-top:
            20px;

          padding:
            16px 22px;

          border-top:
            1px solid #e6eeea;

          background:
            #fbfdfc;
        }


        .dual-modal-footer small {
          display: block;

          color:
            #899790;

          font-size:
            9px;
        }


        .dual-modal-footer strong {
          display: block;

          margin-top:
            2px;

          color:
            #173e30;

          font-size:
            22px;
        }


        .dual-select-plan-button {
          padding:
            12px 17px;
        }


        /* =====================================================
           SUCCESS POPUP
        ===================================================== */

        .dual-success-backdrop {
          position: fixed;

          inset: 0;

          z-index: 10000;

          display: flex;

          align-items: center;

          justify-content: center;

          padding: 20px;

          background:
            rgba(
              15,
              23,
              42,
              0.55
            );

          backdrop-filter:
            blur(5px);
        }


        .dual-success-modal {
          width:
            min(
              390px,
              100%
            );

          padding:
            30px 25px;

          border-radius:
            15px;

          background:
            #ffffff;

          text-align:
            center;

          box-shadow:
            0 25px 70px
            rgba(
              0,
              0,
              0,
              0.25
            );

          animation:
            dualPopupShow
            0.18s ease;
        }


        .dual-success-icon {
          width:
            65px;

          height:
            65px;

          margin:
            0 auto 15px;

          display: flex;

          align-items: center;

          justify-content:
            center;

          border-radius:
            50%;

          background:
            #e8f8f1;

          color:
            #087d57;
        }


        .dual-success-modal h2 {
          margin: 0;

          color:
            #183c30;

          font-size:
            22px;
        }


        .dual-success-modal p {
          margin:
            9px 0;

          color:
            #75857f;

          font-size:
            13px;

          line-height:
            1.6;
        }


        .dual-success-modal > strong {
          display: block;

          margin:
            10px 0 18px;

          color:
            #087d57;

          font-size:
            14px;
        }


        .dual-success-modal button {
          min-width:
            120px;

          padding:
            11px 18px;

          border: 0;

          border-radius:
            9px;

          background:
            #087d57;

          color:
            #ffffff;

          cursor:
            pointer;

          font-weight:
            800;
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 850px) {

          .dual-plans-grid {
            grid-template-columns:
              1fr;
          }


          .dual-plans-heading {
            align-items:
              flex-start;

            flex-direction:
              column;
          }


          .dual-plans-filters {
            flex-direction:
              column;

            align-items:
              stretch;
          }


          .dual-search-box {
            min-width:
              0;
          }


          .dual-category-list {
            width:
              100%;
          }

        }


        @media (max-width: 600px) {

          .dual-plans-hero {
            min-height:
              390px;
          }


          .dual-plans-hero h1 {
            font-size:
              39px;
          }


          .dual-plans-container {
            width:
              94%;

            padding-top:
              42px;
          }


          .dual-plan-image-wrapper {
            height:
              220px;
          }


          .dual-plan-card-content {
            padding:
              17px;
          }


          .dual-plan-card-footer {
            align-items:
              stretch;

            flex-direction:
              column;
          }


          .dual-plan-view-button {
            width:
              100%;
          }


          .dual-modal-backdrop {
            align-items:
              flex-start;

            padding:
              8px;
          }


          .dual-plan-modal {
            width:
              100%;

            max-height:
              calc(
                100vh - 16px
              );

            margin:
              0 auto;

            border-radius:
              13px;
          }


          .dual-modal-header {
            padding:
              15px;
          }


          .dual-modal-header h2 {
            font-size:
              19px;
          }


          /*
           * Bigger popup image on mobile
           */
          .dual-modal-image-box {
            width:
              calc(
                100% - 30px
              );

            height:
              210px;

            margin:
              15px auto 5px;
          }


          .dual-modal-duration {
            grid-template-columns:
              1fr;

            padding:
              14px 15px;
          }


          .dual-modal-summary {
            grid-template-columns:
              1fr;

            padding:
              14px 15px;
          }


          .dual-modal-summary div {
            justify-content:
              flex-start;

            text-align:
              left;
          }


          .dual-modal-section {
            padding-left:
              15px;

            padding-right:
              15px;
          }


          .dual-base-box {
            margin-left:
              15px;

            margin-right:
              15px;
          }


          .dual-modal-footer {
            padding:
              15px;

            align-items:
              stretch;

            flex-direction:
              column;
          }


          .dual-select-plan-button {
            width:
              100%;
          }

        }


        @media (max-width: 420px) {

          .dual-plans-hero h1 {
            font-size:
              34px;
          }


          .dual-plan-card-content h3 {
            font-size:
              20px;
          }


          .dual-duration-options {
            grid-template-columns:
              1fr;
          }


          .dual-modal-image-box {
            width:
              calc(
                100% - 30px
              );

            height:
              185px;
          }


          .dual-day-description {
            font-size:
              11px;
          }


          .dual-activity {
            padding:
              9px;
          }

        }

      `}</style>


      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="dual-plans-hero"
      >

        <div
          className="
            dual-plans-hero-overlay
          "
        />


        <div
          className="
            dual-plans-hero-content
          "
        >

          <span
            className="
              dual-plans-badge
            "
          >
            ✨ Happy Mappy Dual Plans
          </span>


          <h1>

            Explore Two Destinations

            <br />

            <span>
              In One Amazing Trip
            </span>

          </h1>


          <p>
            Discover carefully connected
            destinations, complete
            day-by-day itineraries and
            flexible 2-day or 3-day
            travel plans.
          </p>


          <div
            className="
              dual-plans-hero-features
            "
          >

            <div>
              <MapPin size={18} />

              <span>
                2 Destinations
              </span>
            </div>


            <div>
              <CalendarDays size={18} />

              <span>
                2 & 3 Day Plans
              </span>
            </div>


            <div>
              <Check size={18} />

              <span>
                Detailed Itinerary
              </span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main
        className="
          dual-plans-container
        "
      >

        <div
          className="
            dual-plans-heading
          "
        >

          <div>

            <span
              className="
                dual-plans-small-title
              "
            >
              HANDPICKED JOURNEYS
            </span>


            <h2>
              Choose Your Dual Plan
            </h2>


            <p>
              Combine two beautiful
              destinations and experience
              more in a single trip.
            </p>

          </div>

        </div>


        {/* =====================================================
            FILTERS
        ===================================================== */}

        <div
          className="
            dual-plans-filters
          "
        >

          <div
            className="
              dual-search-box
            "
          >

            <Search size={19} />

            <input
              type="text"
              placeholder="Search dual plans..."
              value={search}
              onChange={(event) =>
                setSearch(
                  event.target.value
                )
              }
            />


            {search && (

              <button
                type="button"
                onClick={() =>
                  setSearch("")
                }
                aria-label="Clear search"
              >
                <X size={16} />
              </button>

            )}

          </div>


          <div
            className="
              dual-category-list
            "
          >

            {categories.map(
              (item) => (

                <button
                  type="button"
                  key={item}
                  className={
                    category === item
                      ? "active"
                      : ""
                  }
                  onClick={() =>
                    setCategory(item)
                  }
                >
                  {item}
                </button>

              )
            )}

          </div>

        </div>


        {/* =====================================================
            PLAN GRID
        ===================================================== */}

        {pagePlans.length > 0 ? (

          <div
            className="
              dual-plans-grid
            "
          >

            {pagePlans.map(
              (plan) => {

                const twoDay =
                  getDurationData(
                    plan,
                    2
                  );

                const threeDay =
                  getDurationData(
                    plan,
                    3
                  );

                const places =
                  getPlaces(plan);

                const image =
                  plan.image ||
                  fallbackImage;


                return (

                  <article
                    className="
                      dual-plan-card
                    "
                    key={
                      plan.id ||
                      plan.title
                    }
                  >

                    {/* IMAGE */}

                    <div
                      className="
                        dual-plan-image-wrapper
                      "
                    >

                      <img
                        src={image}
                        alt={
                          plan.destination ||
                          plan.title
                        }
                        className="
                          dual-plan-image
                        "
                        onError={(event) => {
                          event.currentTarget.src =
                            fallbackImage;
                        }}
                      />


                      <div
                        className="
                          dual-plan-image-overlay
                        "
                      />


                      <span
                        className="
                          dual-plan-category
                        "
                      >
                        {plan.category ||
                          "Dual Plan"}
                      </span>


                      <div
                        className="
                          dual-plan-location
                        "
                      >

                        <MapPin size={15} />

                        <span>
                          {places.join(
                            " + "
                          )}
                        </span>

                      </div>

                    </div>


                    {/* CONTENT */}

                    <div
                      className="
                        dual-plan-card-content
                      "
                    >

                      <h3>
                        {plan.title}
                      </h3>


                      <p
                        className="
                          dual-plan-description
                        "
                      >
                        {plan.description ||
                          `Experience ${places.join(
                            " and "
                          )} together in one memorable journey.`}
                      </p>


                      {/* PLACES */}

                      <div
                        className="
                          dual-plan-place-list
                        "
                      >

                        {places.map(
                          (
                            place,
                            index
                          ) => (

                            <span
                              key={`${place}-${index}`}
                            >

                              <MapPin
                                size={13}
                              />

                              {place}

                            </span>

                          )
                        )}

                      </div>


                      {/* DURATION */}

                      <div
                        className="
                          dual-duration-section
                        "
                      >

                        <div
                          className="
                            dual-duration-title
                          "
                        >

                          <CalendarDays
                            size={16}
                          />

                          <span>
                            Choose trip duration
                          </span>

                        </div>


                        <div
                          className="
                            dual-duration-options
                          "
                        >

                          <button
                            type="button"
                            onClick={() =>
                              openPlanPopup(
                                plan,
                                2
                              )
                            }
                          >

                            <strong>
                              2 Days
                            </strong>

                            <small>
                              {formatAmount(
                                twoDay.price
                              )}
                            </small>

                          </button>


                          <button
                            type="button"
                            onClick={() =>
                              openPlanPopup(
                                plan,
                                3
                              )
                            }
                          >

                            <strong>
                              3 Days
                            </strong>

                            <small>
                              {formatAmount(
                                threeDay.price
                              )}
                            </small>

                          </button>

                        </div>

                      </div>


                      {/* HIGHLIGHTS */}

                      <div
                        className="
                          dual-plan-highlights
                        "
                      >

                        {getHighlights(
                          plan,
                          2
                        )
                          .slice(0, 4)
                          .map(
                            (
                              highlight,
                              index
                            ) => (

                              <span
                                key={`${highlight}-${index}`}
                              >

                                <Check
                                  size={13}
                                />

                                {highlight}

                              </span>

                            )
                          )}

                      </div>


                      {/* FOOTER */}

                      <div
                        className="
                          dual-plan-card-footer
                        "
                      >

                        <div
                          className="
                            dual-plan-price
                          "
                        >

                          <small>
                            Starting from
                          </small>


                          <strong>
                            {formatAmount(
                              Math.min(
                                twoDay.price ||
                                  Infinity,

                                threeDay.price ||
                                  Infinity
                              )
                            )}
                          </strong>

                        </div>


                        <button
                          type="button"
                          className="
                            dual-plan-view-button
                          "
                          onClick={() =>
                            openPlanPopup(
                              plan,
                              2
                            )
                          }
                        >

                          View Plan

                          <ArrowRight
                            size={17}
                          />

                        </button>

                      </div>

                    </div>

                  </article>

                );

              }
            )}

          </div>

        ) : (

          <div
            className="
              dual-plans-empty
            "
          >

            <div
              className="
                dual-empty-icon
              "
            >
              <Search size={30} />
            </div>


            <h3>
              No dual plans found
            </h3>


            <p>
              Try another destination,
              category or search keyword.
            </p>


            <button
              type="button"
              onClick={clearFilters}
            >
              Clear Filters
            </button>

          </div>

        )}

      </main>


      {/* =====================================================
          PLAN POPUP
      ===================================================== */}

      {selectedPlan && (

        <div
          className="
            dual-modal-backdrop
          "
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closePlanPopup();
            }

          }}
        >

          <div
            className="
              dual-plan-modal
            "
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            {/* HEADER */}

            <div
              className="
                dual-modal-header
              "
            >

              <div>

                <span>
                  {selectedPlan.category ||
                    "Dual Plan"}
                </span>


                <h2>
                  {selectedPlan.title}
                </h2>


                <p>

                  <MapPin size={14} />

                  {getPlaces(
                    selectedPlan
                  ).join(" + ")}

                </p>

              </div>


              <button
                type="button"
                className="
                  dual-modal-close
                "
                onClick={
                  closePlanPopup
                }
                aria-label="Close popup"
              >

                <X size={19} />

              </button>

            </div>


            {/* =================================================
                LARGE IMAGE
            ================================================= */}

            <div
              className="
                dual-modal-image-box
              "
            >

              <img
                src={
                  selectedPlan.image ||
                  fallbackImage
                }
                alt={
                  selectedPlan.title
                }
                onError={(event) => {
                  event.currentTarget.src =
                    fallbackImage;
                }}
              />

            </div>


            {/* DURATION */}

            <div
              className="
                dual-modal-duration
              "
            >

              <button
                type="button"
                className={
                  selectedDuration === 2
                    ? "active"
                    : ""
                }
                onClick={() =>
                  changeDuration(2)
                }
              >

                <CalendarDays
                  size={16}
                />

                <span>
                  2 Days / 1 Night
                </span>

              </button>


              <button
                type="button"
                className={
                  selectedDuration === 3
                    ? "active"
                    : ""
                }
                onClick={() =>
                  changeDuration(3)
                }
              >

                <CalendarDays
                  size={16}
                />

                <span>
                  3 Days / 2 Nights
                </span>

              </button>

            </div>


            {/* SUMMARY */}

            <div
              className="
                dual-modal-summary
              "
            >

              <div>

                <Clock size={16} />

                <span>

                  {selectedPlan.days}
                  {" "}Day
                  {Number(
                    selectedPlan.days
                  ) !== 1
                    ? "s"
                    : ""}

                  {" / "}

                  {selectedPlan.nights}
                  {" "}Night
                  {Number(
                    selectedPlan.nights
                  ) !== 1
                    ? "s"
                    : ""}

                </span>

              </div>


              <div>

                <MapPin size={16} />

                <span>
                  {getPlaces(
                    selectedPlan
                  ).join(" + ")}
                </span>

              </div>


              <div>

                <IndianRupee
                  size={16}
                />

                <span>
                  {formatAmount(
                    selectedPlan.price
                  )}
                </span>

              </div>

            </div>


            {/* HIGHLIGHTS */}

            {getHighlights(
              selectedPlan,
              selectedDuration
            ).length > 0 && (

              <section
                className="
                  dual-modal-section
                "
              >

                <h3>

                  <CheckCircle
                    size={17}
                  />

                  Trip Highlights

                </h3>


                <div
                  className="
                    dual-modal-highlights
                  "
                >

                  {getHighlights(
                    selectedPlan,
                    selectedDuration
                  ).map(
                    (
                      item,
                      index
                    ) => (

                      <div
                        key={`${item}-${index}`}
                      >

                        <Check
                          size={14}
                        />

                        <span>
                          {item}
                        </span>

                      </div>

                    )
                  )}

                </div>

              </section>

            )}


            {/* =================================================
                DAY BY DAY PLAN
            ================================================= */}

            <section
              className="
                dual-modal-section
              "
            >

              <h3>

                <CalendarDays
                  size={17}
                />

                Day-by-Day Plan

              </h3>


              <div
                className="
                  dual-itinerary
                "
              >

                {getItinerary(
                  selectedPlan,
                  selectedDuration
                ).length > 0 ? (

                  getItinerary(
                    selectedPlan,
                    selectedDuration
                  ).map(
                    (
                      day,
                      dayIndex
                    ) => {

                      const dayNumber =
                        day.day ||
                        day.dayNumber ||
                        dayIndex + 1;


                      const activities =
                        Array.isArray(
                          day.activities
                        )
                          ? day.activities
                          : Array.isArray(
                              day.items
                            )
                            ? day.items
                            : [];


                      return (

                        <div
                          className="
                            dual-itinerary-day
                          "
                          key={`day-${dayNumber}-${dayIndex}`}
                        >

                          {/* DAY HEADER */}

                          <div
                            className="
                              dual-day-heading
                            "
                          >

                            <div
                              className="
                                dual-day-number
                              "
                            >
                              {dayNumber}
                            </div>


                            <div>

                              <span>
                                DAY {dayNumber}
                              </span>


                              <h4>
                                {day.title ||
                                  day.heading ||
                                  `Day ${dayNumber}`}
                              </h4>

                            </div>

                          </div>


                          {/* DESCRIPTION */}

                          {day.description && (

                            <p
                              className="
                                dual-day-description
                              "
                            >
                              {day.description}
                            </p>

                          )}


                          {/* ACTIVITIES */}

                          {activities.length >
                            0 && (

                            <div
                              className="
                                dual-activity-list
                              "
                            >

                              {activities.map(
                                (
                                  activity,
                                  index
                                ) => {

                                  const safeActivity =
                                    typeof activity ===
                                    "string"
                                      ? {
                                          name:
                                            activity,
                                          type:
                                            "place",
                                        }
                                      : activity ||
                                        {};


                                  const type =
                                    String(
                                      safeActivity.type ||
                                        ""
                                    ).toLowerCase();


                                  const isFood =
                                    type.includes(
                                      "food"
                                    ) ||
                                    type.includes(
                                      "meal"
                                    );


                                  const isTicket =
                                    type.includes(
                                      "ticket"
                                    ) ||
                                    type.includes(
                                      "entry"
                                    ) ||
                                    type.includes(
                                      "activity"
                                    );


                                  return (

                                    <div
                                      className="
                                        dual-activity
                                      "
                                      key={
                                        safeActivity.id ||
                                        `${dayNumber}-${index}`
                                      }
                                    >

                                      {/* ICON */}

                                      <div
                                        className="
                                          dual-activity-icon
                                        "
                                      >

                                        {isFood ? (

                                          <Utensils
                                            size={15}
                                          />

                                        ) : isTicket ? (

                                          <Ticket
                                            size={15}
                                          />

                                        ) : (

                                          <MapPin
                                            size={15}
                                          />

                                        )}

                                      </div>


                                      {/* INFO */}

                                      <div
                                        className="
                                          dual-activity-info
                                        "
                                      >

                                        {/* TIME FIRST */}

                                        {safeActivity.time && (

                                          <div
                                            className="
                                              dual-activity-time
                                            "
                                          >

                                            <Clock
                                              size={12}
                                            />

                                            <span>
                                              {
                                                safeActivity.time
                                              }
                                            </span>

                                          </div>

                                        )}


                                        {/* PLACE SECOND */}

                                        <div
                                          className="
                                            dual-activity-place
                                          "
                                        >

                                          <MapPin
                                            size={13}
                                          />

                                          <span>
                                            {
                                              safeActivity.place ||
                                              safeActivity.name ||
                                              safeActivity.title ||
                                              "Travel Activity"
                                            }
                                          </span>

                                        </div>


                                        {/* DESCRIPTION */}

                                        {safeActivity.description && (

                                          <p>
                                            {
                                              safeActivity.description
                                            }
                                          </p>

                                        )}


                                        {/* AMOUNT THIRD */}

                                        {safeActivity.amount !==
                                          undefined &&
                                          safeActivity.amount !==
                                            null && (

                                          <div
                                            className="
                                              dual-activity-amount
                                            "
                                          >

                                            <IndianRupee
                                              size={11}
                                            />

                                            <span>
                                              {formatAmount(
                                                safeActivity.amount
                                              )}
                                            </span>

                                          </div>

                                        )}


                                        {/* OTHER META */}

                                        {safeActivity.duration && (

                                          <div
                                            className="
                                              dual-activity-meta
                                            "
                                          >

                                            <span>

                                              <Clock
                                                size={11}
                                              />

                                              {
                                                safeActivity.duration
                                              }

                                            </span>

                                          </div>

                                        )}

                                      </div>

                                    </div>

                                  );

                                }
                              )}

                            </div>

                          )}


                          {/* TRAVEL TIP */}

                          {day.planningTip && (

                            <div
                              className="
                                dual-planning-tip
                              "
                            >

                              <strong>
                                Travel Tip:
                              </strong>

                              <span>
                                {day.planningTip}
                              </span>

                            </div>

                          )}

                        </div>

                      );

                    }
                  )

                ) : (

                  <div
                    className="
                      dual-itinerary-day
                    "
                  >

                    <p
                      className="
                        dual-day-description
                      "
                    >
                      Detailed itinerary is
                      not available for this
                      duration yet.
                    </p>

                  </div>

                )}

              </div>

            </section>


            {/* BASE AMOUNT */}

            {Array.isArray(
              selectedPlan.baseIncludes
            ) &&
            selectedPlan.baseIncludes.length >
              0 && (

              <div
                className="
                  dual-base-box
                "
              >

                <div
                  className="
                    dual-base-header
                  "
                >

                  <div>

                    <small>
                      Base Trip Amount
                    </small>


                    <strong>
                      {formatAmount(
                        selectedPlan.baseAmount
                      )}
                    </strong>

                  </div>


                  {Number(
                    selectedPlan.baseAmountPerDay ||
                      0
                  ) > 0 && (

                    <span>
                      {formatAmount(
                        selectedPlan.baseAmountPerDay
                      )}
                      {" / day"}
                    </span>

                  )}

                </div>


                <div
                  className="
                    dual-base-content
                  "
                >

                  <h4>
                    Included in base amount:
                  </h4>


                  <div
                    className="
                      dual-base-items
                    "
                  >

                    {selectedPlan.baseIncludes.map(
                      (
                        item,
                        index
                      ) => (

                        <span
                          key={`${item}-${index}`}
                        >

                          <Check
                            size={12}
                          />

                          {item}

                        </span>

                      )
                    )}

                  </div>


                  <p>
                    Food expenses, hotel
                    charges and personal
                    shopping are not
                    included.
                  </p>

                </div>

              </div>

            )}


            {/* FOOTER */}

            <div
              className="
                dual-modal-footer
              "
            >

              <div>

                <small>
                  Selected Plan
                </small>


                <strong>
                  {formatAmount(
                    selectedPlan.price
                  )}
                </strong>

              </div>


              <button
                type="button"
                className="
                  dual-select-plan-button
                "
                onClick={() =>
                  selectPlan(
                    selectedPlan
                  )
                }
              >

                Select This Plan

                <ArrowRight
                  size={17}
                />

              </button>

            </div>

          </div>

        </div>

      )}


      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {successPlan && (

        <div
          className="
            dual-success-backdrop
          "
          onMouseDown={(event) => {

            if (
              event.target ===
              event.currentTarget
            ) {
              closeSuccessPopup();
            }

          }}
        >

          <div
            className="
              dual-success-modal
            "
            onMouseDown={(event) =>
              event.stopPropagation()
            }
          >

            <div
              className="
                dual-success-icon
              "
            >

              <CheckCircle
                size={35}
              />

            </div>


            <h2>
              Plan Selected!
            </h2>


            <p>
              Your dual travel plan has
              been selected successfully.
            </p>


            <strong>
              {successPlan.title}
            </strong>


            <button
              type="button"
              onClick={
                closeSuccessPopup
              }
            >
              Continue
            </button>

          </div>

        </div>

      )}

    </div>
  );
}