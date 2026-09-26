import { useMemo, useState } from "react";

import {
  Check,
  ChevronDown,
  Search,
  MapPin,
  Clock,
  ArrowLeft,
  Utensils,
  Ticket,
  X,
  CheckCircle,
  BedDouble,
} from "lucide-react";

import {
  Link,
  useSearchParams,
  useNavigate,
} from "react-router-dom";

import { plans } from "../data/travelData";
import { destinationPlans } from "../data/destinationPlans";

export default function TravelPlansPage() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [successPlan, setSuccessPlan] = useState(null);

  const [searchParams] = useSearchParams();

  const selectedDestination = searchParams.get("destination");

  /* =========================================================
     NORMALIZE
  ========================================================= */

  const normalize = (value) =>
    String(value || "")
      .trim()
      .toLowerCase();

  /* =========================================================
     FORMAT AMOUNT
  ========================================================= */

  const formatAmount = (amount) => {
    const value = Number(amount || 0);

    if (!Number.isFinite(value) || value === 0) {
      return "Free";
    }

    return `₹${value.toLocaleString("en-IN")}`;
  };

  /* =========================================================
     TIME HELPER
  ========================================================= */

  const getTimeMinutes = (time) => {
    if (!time) return 9999;

    const value = String(time)
      .trim()
      .toUpperCase();

    const match = value.match(
      /^(\d{1,2}):(\d{2})\s*(AM|PM)?$/
    );

    if (!match) return 9999;

    let hours = Number(match[1]);
    const minutes = Number(match[2]);
    const period = match[3];

    if (period === "AM") {
      if (hours === 12) hours = 0;
    }

    if (period === "PM") {
      if (hours !== 12) hours += 12;
    }

    return hours * 60 + minutes;
  };

  /* =========================================================
     ACTIVITY TYPE HELPERS
  ========================================================= */

  const isFood = (activity) => {
    if (!activity) return false;

    const type = normalize(activity.type);
    const name = normalize(activity.name);

    return (
      type === "food" ||
      type === "breakfast" ||
      type === "lunch" ||
      type === "dinner" ||
      name.includes("breakfast") ||
      name.includes("lunch") ||
      name.includes("dinner") ||
      name.includes("food") ||
      name.includes("restaurant") ||
      name.includes("cafe") ||
      name.includes("café")
    );
  };

  const isDinner = (activity) => {
    if (!activity) return false;

    const type = normalize(activity.type);
    const name = normalize(activity.name);

    return (
      type === "dinner" ||
      name.includes("dinner") ||
      name.includes("night dinner")
    );
  };

  const isBreakfast = (activity) => {
    if (!activity) return false;

    const type = normalize(activity.type);
    const name = normalize(activity.name);

    return (
      type === "breakfast" ||
      name.includes("breakfast")
    );
  };

  const isLunch = (activity) => {
    if (!activity) return false;

    const type = normalize(activity.type);
    const name = normalize(activity.name);

    return (
      type === "lunch" ||
      name.includes("lunch")
    );
  };

  const isHotel = (activity) => {
    if (!activity) return false;

    const type = normalize(activity.type);
    const name = normalize(activity.name);

    return (
      type === "hotel" ||
      type === "stay" ||
      type === "accommodation" ||
      name.includes("hotel") ||
      name.includes("resort") ||
      name.includes("stay")
    );
  };

  const isNormalActivity = (activity) =>
    !isFood(activity) && !isHotel(activity);

  /* =========================================================
     FIND COMPLETE PLAN DETAILS
  ========================================================= */

  const getDetailedPlan = (plan) => {
    if (!plan) {
      return null;
    }

    if (
      Array.isArray(plan.itinerary) &&
      plan.itinerary.length > 0
    ) {
      return plan;
    }

    const matchingPlans = destinationPlans.filter(
      (item) =>
        normalize(
          item.destinationName ||
            item.destination
        ) ===
        normalize(
          plan.destinationName ||
            plan.destination
        )
    );

    /* EXACT TITLE */

    const exactTitle = matchingPlans.find(
      (item) =>
        normalize(item.title) ===
        normalize(plan.title)
    );

    if (exactTitle) {
      return {
        ...plan,
        ...exactTitle,
        image:
          exactTitle.image ||
          plan.image,
      };
    }

    /* EXACT DAYS */

    const exactDays = matchingPlans.find(
      (item) =>
        Number(item.days || 0) ===
        Number(plan.days || 0)
    );

    if (exactDays) {
      return {
        ...plan,
        ...exactDays,
        image:
          exactDays.image ||
          plan.image,
      };
    }

    return plan;
  };

  /* =========================================================
     PAGE PLANS
  ========================================================= */

  const pagePlans = selectedDestination
    ? destinationPlans.filter(
        (plan) =>
          normalize(
            plan.destinationName ||
              plan.destination
          ) ===
          normalize(selectedDestination)
      )
    : plans;

  /* =========================================================
     CATEGORIES
  ========================================================= */

  const categories = [
    "All",
    ...new Set(
      pagePlans
        .map((plan) => plan.category)
        .filter(Boolean)
    ),
  ];

  /* =========================================================
     FILTER PLANS
  ========================================================= */

  const filteredPlans = useMemo(() => {
    const searchText = search
      .toLowerCase()
      .trim();

    return [...pagePlans]
      .filter((plan) => {
        const title = String(
          plan.title || ""
        ).toLowerCase();

        const destination = String(
          plan.destination || ""
        ).toLowerCase();

        const planCategory = String(
          plan.category || ""
        ).toLowerCase();

        const matchesSearch =
          title.includes(searchText) ||
          destination.includes(searchText) ||
          planCategory.includes(searchText);

        const matchesCategory =
          category === "All" ||
          plan.category === category;

        return (
          matchesSearch &&
          matchesCategory
        );
      })
      .sort(
        (a, b) =>
          Number(a.days || 0) -
          Number(b.days || 0)
      );
  }, [
    pagePlans,
    search,
    category,
  ]);

  /* =========================================================
     GET HIGHLIGHTS
  ========================================================= */

  const getHighlights = (plan) => {
    if (
      Array.isArray(plan.highlights)
    ) {
      return plan.highlights;
    }

    const highlights = [];

    if (
      Array.isArray(plan.itinerary)
    ) {
      plan.itinerary.forEach(
        (day) => {
          if (
            Array.isArray(
              day.activities
            )
          ) {
            day.activities.forEach(
              (activity) => {
                if (
                  isNormalActivity(
                    activity
                  )
                ) {
                  const name =
                    typeof activity ===
                    "string"
                      ? activity
                      : activity?.name;

                  if (
                    name &&
                    !highlights.includes(
                      name
                    )
                  ) {
                    highlights.push(
                      name
                    );
                  }
                }
              }
            );
          }
        }
      );
    }

    return highlights.slice(0, 4);
  };

  /* =========================================================
     GET DAY PLANNING
  ========================================================= */

  const getDayPlanning = (day) => {
    if (day?.planning) {
      return day.planning;
    }

    const activities =
      Array.isArray(day?.activities)
        ? day.activities
        : [];

    const normalPlaces =
      activities.filter(
        (item) =>
          typeof item === "string" ||
          isNormalActivity(item)
      );

    const foodStops =
      activities.filter((item) =>
        isFood(item)
      );

    const hotels =
      activities.filter((item) =>
        isHotel(item)
      );

    const orderedActivities = [
      ...activities,
    ].sort(
      (a, b) =>
        getTimeMinutes(a?.time) -
        getTimeMinutes(b?.time)
    );

    return {
      overview: `Day ${
        day?.day || ""
      } includes ${
        normalPlaces.length
      } main ${
        normalPlaces.length === 1
          ? "place"
          : "places"
      }, with meals and night stay arranged according to the travel timing.`,

      startTime:
        orderedActivities[0]?.time ||
        "Flexible start",

      endTime:
        orderedActivities[
          orderedActivities.length - 1
        ]?.time ||
        "Flexible finish",

      mainStops:
        normalPlaces.map((item) =>
          typeof item === "string"
            ? item
            : item?.name
        ),

      foodStops:
        foodStops.map(
          (item) => item?.name
        ),

      hotelStops:
        hotels.map(
          (item) => item?.name
        ),

      tips: [
        "Keep a small time buffer between activities.",
        "Carry water and comfortable footwear.",
        "Food expenses are not included in the plan amount.",
        "Hotel stay is shown separately with the applicable night-stay amount.",
      ],
    };
  };

  /* =========================================================
     GET ORDERED ACTIVITIES
  ========================================================= */

  const getOrderedActivities = (
    activities
  ) => {
    if (!Array.isArray(activities)) {
      return [];
    }

    return [...activities].sort(
      (a, b) => {
        const timeA =
          getTimeMinutes(a?.time);

        const timeB =
          getTimeMinutes(b?.time);

        return timeA - timeB;
      }
    );
  };

  /* =========================================================
     CALCULATE HOTEL CHARGES

     IMPORTANT:
     FINAL DAY HOTEL IS NOT COUNTED.
  ========================================================= */

  const getHotelCharges = (plan) => {
    if (!plan) {
      return 0;
    }

    let total = 0;

    if (
      Array.isArray(plan.itinerary)
    ) {
      plan.itinerary.forEach(
        (day, dayIndex) => {
          const isFinalDay =
            dayIndex ===
            plan.itinerary.length - 1;

          if (isFinalDay) {
            return;
          }

          const activities =
            Array.isArray(
              day?.activities
            )
              ? day.activities
              : [];

          activities.forEach(
            (activity) => {
              if (
                isHotel(activity)
              ) {
                total += Number(
                  activity.amount || 0
                );
              }
            }
          );
        }
      );
    }

    return total;
  };

  /* =========================================================
     CALCULATE PLACE / ACTIVITY CHARGES
  ========================================================= */

  const getPlaceCharges = (plan) => {
    if (!plan) {
      return 0;
    }

    let total = 0;

    if (
      Array.isArray(plan.itinerary)
    ) {
      plan.itinerary.forEach(
        (day) => {
          const activities =
            Array.isArray(
              day?.activities
            )
              ? day.activities
              : [];

          activities.forEach(
            (activity) => {
              if (
                isNormalActivity(
                  activity
                )
              ) {
                total += Number(
                  activity?.amount || 0
                );
              }
            }
          );
        }
      );
    }

    if (
      total === 0 &&
      plan.placeAmount
    ) {
      return Number(
        plan.placeAmount || 0
      );
    }

    return total;
  };

  /* =========================================================
     OPEN COMPLETE PLAN POPUP
  ========================================================= */

  const openPlanPopup = (plan) => {
    const detailedPlan =
      getDetailedPlan(plan);

    setSelectedPlan(
      detailedPlan
    );
  };

  /* =========================================================
     CLOSE COMPLETE PLAN POPUP
  ========================================================= */

  const closePlanPopup = () => {
    setSelectedPlan(null);
  };

  /* =========================================================
     SELECT PLAN
  ========================================================= */

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
          planTitle: plan.title,
        },
      });

      return;
    }

    setSelectedPlan(null);
    setSuccessPlan(plan);
  };

  /* =========================================================
     CLOSE SUCCESS POPUP
  ========================================================= */

  const closeSuccessPopup = () => {
    setSuccessPlan(null);
  };

  /* =========================================================
     CLEAR FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <>
      <style>
        {`
          .travel-plan-page-scope .plans-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 25px;
            width: 100%;
          }

          .travel-plan-page-scope .travel-plan {
            position: relative;
            width: 100%;
            min-width: 0;
            overflow: hidden;
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 0 !important;
            box-shadow: var(--shadow);
          }

          .travel-plan-page-scope .travel-plan-main {
            display: flex;
            flex-direction: column;
            gap: 14px;
            padding: 16px;
          }

          .travel-plan-page-scope .travel-plan-image {
            width: 100%;
            height: 215px;
            overflow: hidden;
            border-radius: 12px;
            background: #e2e8f0;
          }

          .travel-plan-page-scope .travel-plan-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          .travel-plan-page-scope .travel-plan-info {
            width: 100%;
            min-width: 0;
          }

          .travel-plan-page-scope .travel-plan-info h2 {
            margin: 0;
            color: var(--text);
            font-size: 22px;
            line-height: 1.25;
          }

          .travel-plan-page-scope .plan-category {
            display: inline-block;
            margin-bottom: 7px;
            color: var(--primary);
            font-size: 11px;
            font-weight: 700;
          }

          .travel-plan-page-scope .plan-location {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-top: 9px;
            color: var(--muted);
            font-size: 13px;
          }

          .travel-plan-page-scope .plan-location svg {
            flex-shrink: 0;
            color: var(--primary);
          }

          .travel-plan-page-scope .travel-plan-meta {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 13px 0 8px;
            color: var(--muted);
            font-size: 12px;
          }

          .travel-plan-page-scope .travel-plan-meta span {
            display: flex;
            align-items: center;
            gap: 5px;
          }

          .travel-plan-page-scope .travel-plan-meta strong {
            margin-left: auto;
            color: var(--primary);
            font-size: 19px;
            white-space: nowrap;
          }

          .travel-plan-page-scope .plan-highlights {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 8px;
            width: 100%;
          }

          .travel-plan-page-scope .plan-highlights span {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 7px 9px;
            color: #475569;
            background: #f1f5f9;
            border-radius: 7px;
            font-size: 11px;
            white-space: nowrap;
          }

          .travel-plan-page-scope .plan-highlights svg {
            color: var(--primary);
            flex-shrink: 0;
          }

          .travel-plan-page-scope .plan-expand-row {
            display: flex;
            justify-content: flex-end;
            width: 100%;
            margin-top: 2px;
          }

          .travel-plan-page-scope .plan-expand-button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            color: var(--primary);
            background: var(--primary-light);
            border: none;
            border-radius: 50%;
            cursor: pointer;
            transition: background 0.2s ease, transform 0.2s ease;
          }

          .travel-plan-page-scope .plan-expand-button:hover {
            background: #99f6e4;
            transform: translateY(2px);
          }

          .travel-plan-modal-overlay {
            position: fixed;
            inset: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(15, 23, 42, 0.60);
            overflow-y: auto;
          }

          .travel-plan-modal {
            width: min(950px, 100%);
            max-height: calc(100vh - 40px);
            overflow-y: auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 25px 70px rgba(15, 23, 42, 0.30);
          }

          .travel-plan-modal-header {
            position: sticky;
            top: 0;
            z-index: 3;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            padding: 18px 22px;
            background: #ffffff;
            border-bottom: 1px solid var(--border);
          }

          .travel-plan-modal-header h2 {
            margin: 0;
            color: var(--text);
            font-size: 23px;
          }

          .travel-plan-modal-close {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 38px;
            height: 38px;
            color: var(--muted);
            background: #f1f5f9;
            border: none;
            border-radius: 50%;
            cursor: pointer;
          }

          .travel-plan-modal-image {
            width: min(100%, 420px);
            aspect-ratio: 1 / 1;
            margin: 22px auto;
            overflow: hidden;
            background: #e2e8f0;
            border-radius: 12px;
          }

          .travel-plan-modal-image img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .travel-plan-modal-content {
            padding: 22px;
          }

          .travel-plan-modal-summary {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-bottom: 22px;
          }

          .travel-plan-summary-box {
            padding: 14px;
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 8px;
          }

          .travel-plan-summary-box small {
            display: block;
            margin-bottom: 4px;
            color: var(--muted);
            font-size: 11px;
          }

          .travel-plan-summary-box strong {
            color: var(--text);
            font-size: 17px;
          }

          .travel-plan-summary-price strong {
            color: var(--primary);
          }

          .travel-plan-day-subtitle {
            display: block;
            margin-top: 3px;
            color: var(--muted);
            font-size: 12px;
          }

          .travel-plan-day-planning {
            margin-bottom: 15px;
            padding: 16px;
            background: linear-gradient(135deg, #f8fafc, #ecfeff);
            border: 1px solid #cbd5e1;
            border-left: 4px solid var(--primary);
            border-radius: 10px;
          }

          .travel-plan-day-overview {
            margin: 0 0 11px;
            color: var(--text);
            font-size: 14px;
            line-height: 1.6;
          }

          .travel-plan-day-stats {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
            margin-bottom: 11px;
          }

          .travel-plan-day-stats > div {
            padding: 9px;
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 7px;
          }

          .travel-plan-day-stats small {
            display: block;
            margin-bottom: 3px;
            color: var(--muted);
            font-size: 11px;
          }

          .travel-plan-day-stats strong {
            color: var(--text);
            font-size: 13px;
          }

          .travel-plan-popup-day {
            margin-bottom: 20px;
            padding: 18px;
            background: #ffffff;
            border: 1px solid #cbd5e1;
            border-radius: 12px;
            box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);
          }

          .travel-plan-popup-day-header {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 13px;
          }

          .travel-plan-popup-day-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            flex-shrink: 0;
            color: #ffffff;
            background: var(--primary);
            border-radius: 50%;
            font-size: 12px;
            font-weight: 800;
          }

          .travel-plan-popup-day-header h3 {
            margin: 0;
            color: var(--text);
            font-size: 19px;
          }

          .travel-plan-activity-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          .travel-plan-activity {
            display: grid;
            grid-template-columns: 140px minmax(0, 1fr) 120px;
            align-items: center;
            gap: 14px;
            padding: 14px 15px;
            background: #f8fafc;
            border: 1px solid #cbd5e1;
            border-radius: 10px;
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }

          .travel-plan-activity:hover {
            transform: translateY(-1px);
            box-shadow: 0 5px 16px rgba(15, 23, 42, 0.08);
          }

          .travel-plan-activity-time {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
            color: var(--primary);
            font-size: 13px;
          }

          .travel-plan-activity-time svg {
            flex-shrink: 0;
          }

          .travel-plan-activity-time span {
            padding-left: 21px;
            color: var(--muted);
            font-size: 12px;
          }

          .travel-plan-activity-place {
            display: flex;
            align-items: flex-start;
            gap: 8px;
            min-width: 0;
          }

          .travel-plan-activity-place > svg {
            flex-shrink: 0;
            margin-top: 2px;
            color: var(--primary);
          }

          .travel-plan-activity-place div {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;
          }

          .travel-plan-activity-place strong {
            color: var(--text);
            font-size: 15px;
            line-height: 1.35;
            overflow-wrap: anywhere;
          }

          .travel-plan-activity-place span {
            color: var(--muted);
            font-size: 12px;
          }

          .travel-plan-activity-description {
            margin: 5px 0 0;
            color: var(--text);
            font-size: 13px;
            line-height: 1.55;
          }

          .travel-plan-activity-tip {
            margin: 4px 0 0;
            color: var(--muted);
            font-size: 12px;
            line-height: 1.5;
          }

          .travel-plan-activity-tip strong {
            color: var(--primary);
          }

          .travel-plan-activity-amount {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            gap: 5px;
            color: var(--primary);
            font-size: 13px;
          }

          /* FOOD */

          .travel-plan-food-box {
            display: grid;
            grid-template-columns: 140px minmax(0, 1fr);
            align-items: center;
            gap: 14px;
            padding: 15px;
            background: linear-gradient(135deg, #fff7ed, #fffbeb);
            border: 1px solid #fed7aa;
            border-left: 5px solid #f59e0b;
            border-radius: 10px;
          }

          .travel-plan-food-time {
            display: flex;
            flex-direction: column;
            gap: 4px;
            color: #b45309;
            font-size: 13px;
          }

          .travel-plan-food-time span {
            color: #92400e;
            font-size: 12px;
          }

          .travel-plan-food-content {
            display: flex;
            align-items: flex-start;
            gap: 10px;
          }

          .travel-plan-food-content svg {
            flex-shrink: 0;
            margin-top: 2px;
            color: #d97706;
          }

          .travel-plan-food-content div {
            display: flex;
            flex-direction: column;
            gap: 3px;
          }

          .travel-plan-food-content strong {
            color: #78350f;
            font-size: 15px;
          }

          .travel-plan-food-content span {
            color: #92400e;
            font-size: 12px;
          }

          .travel-plan-food-content p {
            margin: 5px 0 0;
            color: #78350f;
            font-size: 13px;
            line-height: 1.5;
          }

          .travel-plan-food-label {
            display: inline-flex;
            width: fit-content;
            margin-top: 5px;
            padding: 5px 9px;
            color: #92400e;
            background: #fef3c7;
            border-radius: 999px;
            font-size: 10px;
            font-weight: 700;
          }

          /* HOTEL */

          .travel-plan-hotel-box {
            display: grid;
            grid-template-columns: 140px minmax(0, 1fr) 120px;
            align-items: center;
            gap: 14px;
            padding: 15px;
            background: linear-gradient(135deg, #eff6ff, #f8fafc);
            border: 1px solid #bfdbfe;
            border-left: 5px solid #2563eb;
            border-radius: 10px;
          }

          .travel-plan-hotel-time {
            display: flex;
            flex-direction: column;
            gap: 4px;
            color: #1d4ed8;
            font-size: 13px;
          }

          .travel-plan-hotel-time span {
            color: #64748b;
            font-size: 12px;
          }

          .travel-plan-hotel-content {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            min-width: 0;
          }

          .travel-plan-hotel-content > svg {
            flex-shrink: 0;
            margin-top: 2px;
            color: #2563eb;
          }

          .travel-plan-hotel-content div {
            display: flex;
            flex-direction: column;
            gap: 3px;
            min-width: 0;
          }

          .travel-plan-hotel-content strong {
            color: #1e3a8a;
            font-size: 15px;
            line-height: 1.35;
          }

          .travel-plan-hotel-content span {
            color: #64748b;
            font-size: 12px;
          }

          .travel-plan-hotel-content p {
            margin: 5px 0 0;
            color: #334155;
            font-size: 13px;
            line-height: 1.5;
          }

          .travel-plan-hotel-label {
            display: inline-flex;
            width: fit-content;
            margin-top: 5px;
            padding: 5px 9px;
            color: #1d4ed8;
            background: #dbeafe;
            border-radius: 999px;
            font-size: 10px;
            font-weight: 700;
          }

          .travel-plan-hotel-amount {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 3px;
            color: #1d4ed8;
          }

          .travel-plan-hotel-amount strong {
            font-size: 16px;
          }

          .travel-plan-hotel-amount span {
            color: #64748b;
            font-size: 10px;
          }

          /* TOTALS */

          .travel-plan-modal-total {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 12px;
            margin-top: 20px;
          }

          .travel-plan-total-box {
            padding: 15px;
            background: #f8fafc;
            border: 1px solid var(--border);
            border-radius: 9px;
          }

          .travel-plan-total-box small {
            display: block;
            margin-bottom: 3px;
            color: var(--muted);
            font-size: 11px;
          }

          .travel-plan-total-box strong {
            color: var(--primary);
            font-size: 20px;
          }

          .travel-plan-hotel-total strong {
            color: #2563eb;
          }

          /* BASE AMOUNT */

          .travel-plan-base-box {
            margin-top: 12px;
            padding: 17px;
            background: #ffffff;
            border: 1px solid var(--border);
            border-radius: 9px;
          }

          .travel-plan-base-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            padding-bottom: 12px;
            border-bottom: 1px solid var(--border);
          }

          .travel-plan-base-header div {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }

          .travel-plan-base-header small {
            color: var(--muted);
            font-size: 11px;
            text-transform: uppercase;
          }

          .travel-plan-base-header strong {
            color: var(--primary);
            font-size: 23px;
          }

          .travel-plan-base-header > span {
            color: var(--muted);
            font-size: 12px;
          }

          .travel-plan-base-content {
            padding-top: 13px;
          }

          .travel-plan-base-content h4 {
            margin-bottom: 8px;
            color: var(--text);
            font-size: 13px;
          }

          .travel-plan-base-content ul {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin: 0;
            padding: 0;
            list-style: none;
          }

          .travel-plan-base-content li {
            margin: 0;
            padding: 6px 9px;
            color: #475569;
            background: #f1f5f9;
            border-radius: 6px;
            font-size: 11px;
          }

          .travel-plan-base-content p {
            margin-top: 9px;
            color: var(--muted);
            font-size: 10px;
          }

          /* FOOTER */

          .travel-plan-modal-footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 20px;
            margin-top: 18px;
            padding-top: 17px;
            border-top: 1px solid var(--border);
          }

          .travel-plan-modal-price {
            display: flex;
            flex-direction: column;
          }

          .travel-plan-modal-price small {
            color: var(--muted);
            font-size: 11px;
          }

          .travel-plan-modal-price strong {
            color: var(--text);
            font-size: 24px;
          }

          .travel-plan-modal-price span {
            color: var(--muted);
            font-size: 10px;
          }

          /* SUCCESS */

          .travel-plan-success-overlay {
            position: fixed;
            inset: 0;
            z-index: 1100;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background: rgba(15, 23, 42, 0.55);
          }

          .travel-plan-success-popup {
            width: min(430px, 100%);
            padding: 30px;
            background: #ffffff;
            border-radius: 12px;
            text-align: center;
            box-shadow: 0 25px 70px rgba(15, 23, 42, 0.30);
          }

          .travel-plan-success-icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            margin: 0 auto 15px;
            color: var(--primary);
            background: var(--primary-light);
            border-radius: 50%;
          }

          .travel-plan-success-popup h2 {
            margin-bottom: 7px;
            color: var(--text);
            font-size: 23px;
          }

          .travel-plan-success-popup p {
            margin-bottom: 20px;
            color: var(--muted);
            font-size: 13px;
          }

          @media (max-width: 760px) {
            .travel-plan-page-scope .plans-list {
              grid-template-columns: 1fr;
            }

            .travel-plan-day-stats {
              grid-template-columns: 1fr;
            }

            .travel-plan-modal-summary {
              grid-template-columns: 1fr;
            }

            .travel-plan-modal-total {
              grid-template-columns: 1fr;
            }

            .travel-plan-activity {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .travel-plan-food-box {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .travel-plan-hotel-box {
              grid-template-columns: 1fr;
              gap: 8px;
            }

            .travel-plan-hotel-amount {
              align-items: flex-start;
            }

            .travel-plan-activity-amount {
              justify-content: flex-start;
            }

            .travel-plan-modal-footer {
              align-items: flex-start;
              flex-direction: column;
            }

            .travel-plan-modal-image {
              width: min(100%, 320px);
            }
          }

          @media (max-width: 480px) {
            .travel-plan-page-scope .travel-plan-main {
              padding: 14px;
            }

            .travel-plan-page-scope .travel-plan-image {
              height: 205px;
            }

            .travel-plan-modal-header {
              padding: 15px;
            }

            .travel-plan-modal-header h2 {
              font-size: 19px;
            }

            .travel-plan-modal-content {
              padding: 15px;
            }

            .travel-plan-popup-day {
              padding: 12px;
            }

            .travel-plan-modal-image {
              width: min(100%, 280px);
            }
          }
        `}
      </style>

      {/* =====================================================
          TRAVEL PLANS PAGE
      ===================================================== */}

      <main className="travel-plan-page-scope">

        {/* HEADER */}

        <section className="page-header travelplans-page-header">
          <div className="page-header-content">

            <span className="section-label">
              <Clock size={17} />

              {selectedDestination
                ? "Destination Plans"
                : "Plan Your Journey"}
            </span>

            <h1>
              {selectedDestination
                ? `${selectedDestination} Travel Plans`
                : "Travel Plans"}
            </h1>

            <p>
              Choose a ready-made itinerary
              and make your next trip simple
              and enjoyable.
            </p>

          </div>
        </section>

        {/* MAIN */}

        <section className="section">

          {selectedDestination && (
            <div className="plan-back-link">

              <Link
                to="/destinations"
                className="card-button"
              >
                <ArrowLeft size={16} />
                Back to Destinations
              </Link>

            </div>
          )}

          {!selectedDestination && (
            <div className="destination-tools">

              <div className="search-box">

                <Search size={19} />

                <input
                  type="text"
                  placeholder="Search travel plans..."
                  value={search}
                  onChange={(event) =>
                    setSearch(
                      event.target.value
                    )
                  }
                />

              </div>

              <div className="category-buttons">

                {categories.map(
                  (item) => (
                    <button
                      key={item}
                      type="button"
                      className={
                        category === item
                          ? "category-button active"
                          : "category-button"
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
          )}

          <div className="results-count">

            {selectedDestination
              ? `Showing ${
                  filteredPlans.length
                } plan${
                  filteredPlans.length !== 1
                    ? "s"
                    : ""
                } for ${
                  selectedDestination
                }`
              : `Showing ${
                  filteredPlans.length
                } travel plan${
                  filteredPlans.length !== 1
                    ? "s"
                    : ""
                }`}

          </div>

          {/* PLAN CARDS */}

          <div className="plans-list">

            {filteredPlans.map(
              (plan) => {

                const highlights =
                  getHighlights(plan);

                return (
                  <article
                    key={plan.id}
                    className="travel-plan"
                  >

                    <div className="travel-plan-main">

                      <div className="travel-plan-image">

                        <img
                          src={plan.image}
                          alt={plan.title}
                        />

                      </div>

                      <div className="travel-plan-info">

                        <span className="plan-category">
                          {plan.category}
                        </span>

                        <h2>
                          {plan.title}
                        </h2>

                        <div className="plan-location">

                          <MapPin size={15} />

                          {plan.destination}

                        </div>

                        <div className="travel-plan-meta">

                          <span>

                            <Clock size={15} />

                            {plan.days} Day
                            {Number(
                              plan.days
                            ) !== 1
                              ? "s"
                              : ""}

                          </span>

                          <span>

                            {plan.nights} Night
                            {Number(
                              plan.nights
                            ) !== 1
                              ? "s"
                              : ""}

                          </span>

                          <strong>

                            ₹
                            {Number(
                              plan.price || 0
                            ).toLocaleString(
                              "en-IN"
                            )}

                          </strong>

                        </div>

                        <div className="plan-highlights">

                          {highlights
                            .slice(0, 4)
                            .map(
                              (
                                item,
                                index
                              ) => (
                                <span
                                  key={`${item}-${index}`}
                                >

                                  <Check
                                    size={14}
                                  />

                                  {item}

                                </span>
                              )
                            )}

                        </div>

                        <div className="plan-expand-row">

                          <button
                            type="button"
                            className="plan-expand-button"
                            onClick={() =>
                              openPlanPopup(
                                plan
                              )
                            }
                            aria-label="Open full travel plan"
                          >
                            <ChevronDown
                              size={22}
                            />
                          </button>

                        </div>

                      </div>

                    </div>

                  </article>
                );
              }
            )}

          </div>

          {/* EMPTY */}

          {filteredPlans.length === 0 && (
            <div className="empty-state">

              <Search size={40} />

              <h3>
                No travel plans found
              </h3>

              <p>
                Try another search,
                category or destination.
              </p>

              <button
                type="button"
                onClick={clearFilters}
              >
                Clear filters
              </button>

            </div>
          )}

        </section>

      </main>

      {/* =====================================================
          COMPLETE PLAN POPUP
      ===================================================== */}

      {selectedPlan && (
        <div
          className="travel-plan-modal-overlay"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closePlanPopup();
            }
          }}
        >

          <div className="travel-plan-modal">

            {/* HEADER */}

            <div className="travel-plan-modal-header">

              <h2>
                {selectedPlan.title}
              </h2>

              <button
                type="button"
                className="travel-plan-modal-close"
                onClick={
                  closePlanPopup
                }
                aria-label="Close popup"
              >
                <X size={19} />
              </button>

            </div>

            {/* IMAGE */}

            <div className="travel-plan-modal-image">

              <img
                src={selectedPlan.image}
                alt={selectedPlan.title}
              />

            </div>

            <div className="travel-plan-modal-content">

              {/* SUMMARY */}

              <div className="travel-plan-modal-summary">

                <div className="travel-plan-summary-box">

                  <small>
                    Destination
                  </small>

                  <strong>
                    {selectedPlan.destination}
                  </strong>

                </div>

                <div className="travel-plan-summary-box">

                  <small>
                    Duration
                  </small>

                  <strong>

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

                  </strong>

                </div>

                <div className="travel-plan-summary-box travel-plan-summary-price">

                  <small>
                    Plan Amount
                  </small>

                  <strong>
                    {formatAmount(
                      selectedPlan.price
                    )}
                  </strong>

                </div>

              </div>

              {/* =================================================
                  DAY BY DAY
              ================================================= */}

              {Array.isArray(
                selectedPlan.itinerary
              ) &&
              selectedPlan.itinerary.length >
                0 ? (

                selectedPlan.itinerary.map(
                  (
                    day,
                    dayIndex
                  ) => {

                    const dayPlanning =
                      getDayPlanning(day);

                    /*
                     * IMPORTANT:
                     * Keep ALL activities together
                     * and sort them by their time.
                     */
                    const orderedActivities =
                      getOrderedActivities(
                        Array.isArray(
                          day.activities
                        )
                          ? day.activities
                          : []
                      );

                    /*
                     * Final day = no hotel display.
                     */
                    const isFinalDay =
                      dayIndex ===
                      selectedPlan.itinerary.length -
                        1;

                    const visibleActivities =
                      orderedActivities.filter(
                        (activity) => {
                          if (
                            isFinalDay &&
                            isHotel(activity)
                          ) {
                            return false;
                          }

                          return true;
                        }
                      );

                    return (
                      <div
                        className="travel-plan-popup-day"
                        key={`${day.day}-${dayIndex}`}
                      >

                        {/* DAY HEADER */}

                        <div className="travel-plan-popup-day-header">

                          <div className="travel-plan-popup-day-number">
                            {day.day}
                          </div>

                          <div>

                            <h3>
                              {day.title}
                            </h3>

                            <span className="travel-plan-day-subtitle">

                              {
                                dayPlanning.startTime
                              }

                              {" - "}

                              {
                                dayPlanning.endTime
                              }

                            </span>

                          </div>

                        </div>

                        {/* DAY PLANNING */}

                        <div className="travel-plan-day-planning">

                          <p className="travel-plan-day-overview">
                            {
                              dayPlanning.overview
                            }
                          </p>

                          <div className="travel-plan-day-stats">

                            <div>

                              <small>
                                Main stops
                              </small>

                              <strong>
                                {
                                  dayPlanning
                                    .mainStops
                                    ?.length || 0
                                }
                              </strong>

                            </div>

                            <div>

                              <small>
                                Food
                              </small>

                              <strong>
                                {
                                  orderedActivities.filter(
                                    (item) =>
                                      isFood(item)
                                  ).length
                                }
                              </strong>

                            </div>

                            <div>

                              <small>
                                Hotel
                              </small>

                              <strong>
                                {
                                  visibleActivities.filter(
                                    (item) =>
                                      isHotel(item)
                                  ).length
                                }
                              </strong>

                            </div>

                          </div>

                        </div>

                        {/* =================================================
                            CHRONOLOGICAL ACTIVITY LIST
                        ================================================= */}

                        <div className="travel-plan-activity-list">

                          {visibleActivities.map(
                            (
                              item,
                              index
                            ) => {

                              const activity =
                                typeof item ===
                                "string"
                                  ? {
                                      time: "Time not set",
                                      name: item,
                                      amount: 0,
                                      type: "place",
                                    }
                                  : item || {};

                              /* =========================================
                                 HOTEL
                              ========================================= */

                              if (
                                isHotel(
                                  activity
                                )
                              ) {

                                return (
                                  <div
                                    key={`hotel-${activity.name}-${index}`}
                                    className="travel-plan-hotel-box"
                                  >

                                    <div className="travel-plan-hotel-time">

                                      <Clock
                                        size={15}
                                      />

                                      <strong>
                                        {
                                          activity.time ||
                                          "09:15 PM"
                                        }
                                      </strong>

                                      <span>
                                        {
                                          activity.duration ||
                                          "Overnight"
                                        }
                                      </span>

                                    </div>

                                    <div className="travel-plan-hotel-content">

                                      <BedDouble
                                        size={20}
                                      />

                                      <div>

                                        <strong>
                                          {
                                            activity.name ||
                                            "Recommended Hotel"
                                          }
                                        </strong>

                                        <span>
                                          {
                                            activity.location ||
                                            selectedPlan.destination
                                          }
                                        </span>

                                        <p>
                                          {
                                            activity.description ||
                                            "Check in after dinner and relax overnight at the recommended hotel."
                                          }
                                        </p>

                                        <span className="travel-plan-hotel-label">
                                          Night stay only
                                        </span>

                                      </div>

                                    </div>

                                    {/* HOTEL AMOUNT */}

                                    <div className="travel-plan-hotel-amount">

                                      <strong>
                                        {formatAmount(
                                          activity.amount
                                        )}
                                      </strong>

                                      <span>
                                        / night
                                      </span>

                                    </div>

                                  </div>
                                );
                              }

                              /* =========================================
                                 FOOD
                              ========================================= */

                              if (
                                isFood(
                                  activity
                                )
                              ) {

                                let foodLabel =
                                  "Food";

                                if (
                                  isBreakfast(
                                    activity
                                  )
                                ) {
                                  foodLabel =
                                    "Breakfast";
                                } else if (
                                  isLunch(
                                    activity
                                  )
                                ) {
                                  foodLabel =
                                    "Lunch";
                                } else if (
                                  isDinner(
                                    activity
                                  )
                                ) {
                                  foodLabel =
                                    "Dinner";
                                }

                                return (
                                  <div
                                    key={`food-${activity.name}-${index}`}
                                    className="travel-plan-food-box"
                                  >

                                    <div className="travel-plan-food-time">

                                      <Clock
                                        size={15}
                                      />

                                      <strong>
                                        {
                                          activity.time ||
                                          "Time not set"
                                        }
                                      </strong>

                                      <span>
                                        {
                                          activity.duration ||
                                          "1 hr"
                                        }
                                      </span>

                                    </div>

                                    <div className="travel-plan-food-content">

                                      <Utensils
                                        size={20}
                                      />

                                      <div>

                                        <strong>
                                          {
                                            activity.name ||
                                            foodLabel
                                          }
                                        </strong>

                                        <span>
                                          {
                                            foodLabel
                                          }
                                        </span>

                                        <p>
                                          {
                                            activity.description ||
                                            "Enjoy a relaxed meal at a recommended local restaurant."
                                          }
                                        </p>

                                        <span className="travel-plan-food-label">
                                          Food expense not included
                                        </span>

                                      </div>

                                    </div>

                                  </div>
                                );
                              }

                              /* =========================================
                                 NORMAL PLACE / ACTIVITY
                              ========================================= */

                              return (
                                <div
                                  key={`${activity.name}-${index}`}
                                  className="travel-plan-activity"
                                >

                                  {/* TIME */}

                                  <div className="travel-plan-activity-time">

                                    <Clock
                                      size={15}
                                    />

                                    <strong>
                                      {
                                        activity.time ||
                                        "Time not set"
                                      }
                                    </strong>

                                    <span>
                                      {
                                        activity.duration ||
                                        "1-2 hrs"
                                      }
                                    </span>

                                  </div>

                                  {/* PLACE */}

                                  <div className="travel-plan-activity-place">

                                    <MapPin
                                      size={18}
                                    />

                                    <div>

                                      <strong>
                                        {
                                          activity.name ||
                                          "Place not specified"
                                        }
                                      </strong>

                                      <span>
                                        {Number(
                                          activity.amount ||
                                            0
                                        ) === 0
                                          ? "Free place / activity"
                                          : "Place / activity"}
                                      </span>

                                      <p className="travel-plan-activity-description">
                                        {
                                          activity.description ||
                                          "Explore the main highlights and enjoy the destination."
                                        }
                                      </p>

                                      <p className="travel-plan-activity-tip">

                                        <strong>
                                          Plan:
                                        </strong>

                                        {" "}

                                        {
                                          activity.planningTip ||
                                          "Keep a small time buffer before the next stop."
                                        }

                                      </p>

                                    </div>

                                  </div>

                                  {/* PLACE AMOUNT */}

                                  <div className="travel-plan-activity-amount">

                                    <Ticket
                                      size={15}
                                    />

                                    <strong>
                                      {formatAmount(
                                        activity.amount
                                      )}
                                    </strong>

                                  </div>

                                </div>
                              );
                            }
                          )}

                        </div>

                      </div>
                    );
                  }
                )

              ) : (

                <div className="travel-plan-popup-day">

                  <h3>
                    Plan Details
                  </h3>

                  <p>
                    Detailed timing and
                    place information is
                    not available for this
                    plan yet.
                  </p>

                </div>
              )}

              {/* =================================================
                  CALCULATE CHARGES
              ================================================= */}

              {(() => {

                const placeCharges =
                  getPlaceCharges(
                    selectedPlan
                  );

                const hotelCharges =
                  getHotelCharges(
                    selectedPlan
                  );

                return (
                  <div className="travel-plan-modal-total">

                    <div className="travel-plan-total-box">

                      <small>
                        Total Place / Activity Charges
                      </small>

                      <strong>
                        {formatAmount(
                          placeCharges
                        )}
                      </strong>

                    </div>

                    <div className="travel-plan-total-box travel-plan-hotel-total">

                      <small>
                        Total Hotel Charges
                      </small>

                      <strong>
                        {formatAmount(
                          hotelCharges
                        )}
                      </strong>

                    </div>

                    <div className="travel-plan-total-box">

                      <small>
                        Base Trip Amount
                      </small>

                      <strong>
                        {formatAmount(
                          selectedPlan.baseAmount
                        )}
                      </strong>

                    </div>

                  </div>
                );

              })()}

              {/* =================================================
                  BASE INCLUDES
              ================================================= */}

              {Array.isArray(
                selectedPlan.baseIncludes
              ) &&
              selectedPlan.baseIncludes.length >
                0 && (

                <div className="travel-plan-base-box">

                  <div className="travel-plan-base-header">

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

                    <span>
                      {formatAmount(
                        selectedPlan.baseAmountPerDay
                      )}
                      {" "} / day
                    </span>

                  </div>

                  <div className="travel-plan-base-content">

                    <h4>
                      Included in base amount:
                    </h4>

                    <ul>

                      {selectedPlan.baseIncludes.map(
                        (
                          item,
                          index
                        ) => (
                          <li
                            key={`${item}-${index}`}
                          >
                            {item}
                          </li>
                        )
                      )}

                    </ul>

                    <p>
                      Food expenses are not
                      included. Hotel stay is
                      displayed separately with
                      its applicable night-stay
                      amount.
                    </p>

                  </div>

                </div>
              )}

              {/* FOOTER */}

              <div className="travel-plan-modal-footer">

                <div className="travel-plan-modal-price">

                  <small>
                    Estimated Total
                  </small>

                  <strong>
                    {formatAmount(
                      selectedPlan.price
                    )}
                  </strong>

                  <span>
                    / person
                  </span>

                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() =>
                    selectPlan(
                      selectedPlan
                    )
                  }
                >
                  Select Plan
                </button>

              </div>

            </div>

          </div>

        </div>
      )}

      {/* =====================================================
          SUCCESS POPUP
      ===================================================== */}

      {successPlan && (
        <div className="travel-plan-success-overlay">

          <div className="travel-plan-success-popup">

            <div className="travel-plan-success-icon">

              <CheckCircle
                size={31}
              />

            </div>

            <h2>
              Plan Selected Successfully
            </h2>

            <p>
              You have successfully
              selected{" "}
              <strong>
                {successPlan.title}
              </strong>
              .
            </p>

            <button
              type="button"
              className="primary-button"
              onClick={
                closeSuccessPopup
              }
            >
              Done
            </button>

          </div>

        </div>
      )}
    </>
  );
}