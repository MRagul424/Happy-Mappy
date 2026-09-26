import { useMemo, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Check,
  Clock,
  MapPin,
  Search,
  Ticket,
  Utensils,
  X,
  CheckCircle,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import dualPlans from "../data/dualPlans";

export default function DualPlansPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const selectedDestination =
    searchParams.get("destination") || "";

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(2);
  const [successPlan, setSuccessPlan] = useState(null);

  /* =================================================
     FORMAT AMOUNT
  ================================================= */
  const formatAmount = (amount) => {
    if (
      amount === undefined ||
      amount === null ||
      amount === ""
    ) {
      return "₹0";
    }

    return `₹${Number(amount).toLocaleString("en-IN")}`;
  };

  /* =================================================
     NORMALIZE
  ================================================= */
  const normalize = (value = "") =>
    String(value).toLowerCase().trim();

  /* =================================================
     GET DURATION DATA
  ================================================= */
  const getDurationData = (plan, duration) => {
    if (!plan) return null;

    if (plan.durationOptions?.[duration]) {
      return plan.durationOptions[duration];
    }

    if (plan.durations?.[duration]) {
      return plan.durations[duration];
    }

    return {
      days: plan.days || duration,
      nights:
        plan.nights !== undefined
          ? plan.nights
          : Math.max((plan.days || duration) - 1, 0),
      price: plan.price || 0,
      baseAmount: plan.baseAmount || 0,
      baseAmountPerDay: plan.baseAmountPerDay || 0,
      baseIncludes: plan.baseIncludes || [],
      itinerary: plan.itinerary || [],
      highlights: plan.highlights || [],
      placeAmount: plan.placeAmount || 0,
    };
  };

  /* =================================================
     GET PLACES
  ================================================= */
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

  /* =================================================
     CATEGORIES
  ================================================= */
  const categories = useMemo(() => {
    const values = dualPlans
      .map((plan) => plan.category)
      .filter(Boolean);

    return ["All", ...new Set(values)];
  }, []);

  /* =================================================
     FILTER PLANS
  ================================================= */
  const pagePlans = useMemo(() => {
    const destinationText =
      normalize(selectedDestination);

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
        !search ||
        searchableText.includes(
          normalize(search)
        );

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
        normalize(plan.destination).includes(
          destinationText
        );

      return (
        matchesSearch &&
        matchesCategory &&
        matchesDestination
      );
    });
  }, [search, category, selectedDestination]);

  /* =================================================
     HIGHLIGHTS
  ================================================= */
  const getHighlights = (
    plan,
    duration = 2
  ) => {
    const durationData =
      getDurationData(plan, duration);

    if (
      Array.isArray(durationData?.highlights) &&
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

  /* =================================================
     DAY PLANNING
  ================================================= */
  const getDayPlanning = (
    plan,
    duration = 2
  ) => {
    const durationData =
      getDurationData(plan, duration);

    if (
      !Array.isArray(
        durationData?.itinerary
      )
    ) {
      return [];
    }

    return durationData.itinerary;
  };

  /* =================================================
     OPEN PLAN
  ================================================= */
  const openPlanPopup = (plan) => {
    setSelectedDuration(2);

    const durationData =
      getDurationData(plan, 2);

    setSelectedPlan({
      ...plan,
      ...durationData,
      durationOptions:
        plan.durationOptions ||
        plan.durations,
    });
  };

  /* =================================================
     CHANGE DURATION
  ================================================= */
  const changeDuration = (duration) => {
    if (!selectedPlan) return;

    const durationData =
      getDurationData(
        selectedPlan,
        duration
      );

    setSelectedDuration(duration);

    setSelectedPlan({
      ...selectedPlan,
      ...durationData,
    });
  };

  /* =================================================
     CLOSE POPUP
  ================================================= */
  const closePlanPopup = () => {
    setSelectedPlan(null);
  };

  /* =================================================
     CLOSE SUCCESS
  ================================================= */
  const closeSuccessPopup = () => {
    setSuccessPlan(null);
  };

  /* =================================================
     SELECT PLAN
  ================================================= */
  const selectPlan = (plan) => {
    const currentUser =
      localStorage.getItem(
        "happyMappyCurrentUser"
      );

    if (!currentUser) {
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

  /* =================================================
     IMAGE FALLBACK
  ================================================= */
  const fallbackImage =
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80";

  return (
    <div className="dual-plans-page">

      {/* =================================================
          HERO
      ================================================= */}
      <section className="dual-plans-hero">

        <div className="dual-plans-hero-content">

          <span className="dual-plans-badge">
            ✨ Happy Mappy Dual Plans
          </span>

          <h1>
            Explore Two Destinations
            <br />
            <span>In One Amazing Trip</span>
          </h1>

          <p>
            Discover carefully connected destinations,
            complete day-by-day itineraries and flexible
            2-day or 3-day travel plans.
          </p>

          <div className="dual-plans-hero-features">
            <div>
              <CalendarDays size={16} />
              <span>2 & 3 Day Plans</span>
            </div>
          </div>

        </div>
      </section>

      {/* =================================================
          MAIN
      ================================================= */}
      <main className="dual-plans-container">

        <div className="dual-plans-heading">

          <div>
            <span className="dual-plans-small-title">
              HANDPICKED JOURNEYS
            </span>

            <h2>
              Choose Your Dual Plan
            </h2>

            <p>
              Combine two beautiful destinations and
              experience more in a single trip.
            </p>
          </div>

          <div className="dual-plans-count">
            <strong>{pagePlans.length}</strong>
            <span>Plans Available</span>
          </div>

        </div>

        {/* =================================================
            FILTERS
        ================================================= */}
        <div className="dual-plans-filters">

          <div className="dual-search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search dual plans..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}

          </div>

          <div className="dual-category-list">

            {categories.map((item) => (
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
            ))}

          </div>

        </div>

        {/* =================================================
            PLAN GRID
        ================================================= */}
        {pagePlans.length > 0 ? (

          <div className="dual-plans-grid">

            {pagePlans.map((plan) => {

              const twoDay =
                getDurationData(plan, 2);

              const threeDay =
                getDurationData(plan, 3);

              const places =
                getPlaces(plan);

              return (
                <article
                  className="dual-plan-card"
                  key={
                    plan.id ||
                    plan.title
                  }
                >

                  <div className="dual-plan-image-wrapper">

                    <img
                      src={
                        plan.image ||
                        fallbackImage
                      }
                      alt={
                        plan.destination ||
                        plan.title
                      }
                      className="dual-plan-image"
                      onError={(event) => {
                        event.currentTarget.src =
                          fallbackImage;
                      }}
                    />

                    <div className="dual-plan-image-overlay" />

                    <span className="dual-plan-category">
                      {plan.category ||
                        "Dual Plan"}
                    </span>

                    <div className="dual-plan-location">

                      <MapPin size={15} />

                      <span>
                        {places.join(" + ")}
                      </span>

                    </div>

                  </div>

                  <div className="dual-plan-card-content">

                    <h3>
                      {plan.title}
                    </h3>

                    <p className="dual-plan-description">
                      {plan.description ||
                        `Experience ${places.join(
                          " and "
                        )} together in one memorable journey.`}
                    </p>

                    <div className="dual-plan-place-list">

                      {places.map(
                        (place, index) => (
                          <span
                            key={`${place}-${index}`}
                          >
                            <MapPin size={13} />
                            {place}
                          </span>
                        )
                      )}

                    </div>

                    <div className="dual-duration-section">

                      <div className="dual-duration-title">

                        <CalendarDays size={16} />

                        <span>
                          Choose trip duration
                        </span>

                      </div>

                      <div className="dual-duration-options">

                        <button
                          type="button"
                          onClick={() =>
                            openPlanPopup(plan)
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
                          onClick={() => {
                            setSelectedDuration(3);

                            setSelectedPlan({
                              ...plan,
                              ...threeDay,
                              durationOptions:
                                plan.durationOptions ||
                                plan.durations,
                            });
                          }}
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

                    <div className="dual-plan-highlights">

                      {getHighlights(plan, 2)
                        .slice(0, 4)
                        .map(
                          (
                            highlight,
                            index
                          ) => (
                            <span
                              key={`${highlight}-${index}`}
                            >
                              <Check size={13} />
                              {highlight}
                            </span>
                          )
                        )}

                    </div>

                    <div className="dual-plan-card-footer">

                      <div className="dual-plan-price">

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
                        className="dual-plan-view-button"
                        onClick={() =>
                          openPlanPopup(plan)
                        }
                      >
                        View Plan
                        <ArrowRight size={17} />
                      </button>

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

        ) : (

          <div className="dual-plans-empty">

            <div className="dual-empty-icon">
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
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear Filters
            </button>

          </div>
        )}

      </main>

      {/* =================================================
          PLAN DETAILS MODAL
      ================================================= */}
      {selectedPlan && (

        <div
          className="dual-modal-backdrop"
          onClick={closePlanPopup}
        >

          <div
            className="dual-plan-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="dual-modal-header">

              <div>

                <span>
                  {selectedPlan.category ||
                    "Dual Plan"}
                </span>

                <h2>
                  {selectedPlan.title}
                </h2>

              </div>

              <button
                type="button"
                className="dual-modal-close"
                onClick={closePlanPopup}
                aria-label="Close"
              >
                <X size={15} />
              </button>

            </div>

            <div className="dual-modal-image-wrap">

              <img
                src={
                  selectedPlan.image ||
                  fallbackImage
                }
                alt={selectedPlan.title}
                className="dual-modal-image"
                onError={(event) => {
                  event.currentTarget.src =
                    fallbackImage;
                }}
              />

            </div>

            <div className="dual-modal-duration">

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
                <CalendarDays size={13} />
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
                <CalendarDays size={13} />
                <span>
                  3 Days / 2 Nights
                </span>
              </button>

            </div>

            <div className="dual-modal-summary">

              <div className="dual-summary-box">

                <small>
                  Destinations
                </small>

                <strong>
                  {getPlaces(
                    selectedPlan
                  ).join(" + ") ||
                    "Dual Trip"}
                </strong>

              </div>

              <div className="dual-summary-box">

                <small>
                  Duration
                </small>

                <strong>
                  {selectedPlan.days} Day
                  {selectedPlan.days !== 1
                    ? "s"
                    : ""}
                  {" / "}
                  {selectedPlan.nights} Night
                  {selectedPlan.nights !== 1
                    ? "s"
                    : ""}
                </strong>

              </div>

              <div className="dual-summary-box dual-summary-price">

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

            {getHighlights(
              selectedPlan,
              selectedDuration
            ).length > 0 && (

              <section className="dual-modal-section">

                <h3>
                  <CheckCircle size={14} />
                  Trip Highlights
                </h3>

                <div className="dual-modal-highlights">

                  {getHighlights(
                    selectedPlan,
                    selectedDuration
                  ).map(
                    (item, index) => (
                      <div
                        key={`${item}-${index}`}
                      >
                        <Check size={12} />
                        <span>{item}</span>
                      </div>
                    )
                  )}

                </div>

              </section>
            )}

            <section className="dual-modal-section">

              <h3>
                <CalendarDays size={14} />
                Day-by-Day Plan
              </h3>

              <div className="dual-itinerary">

                {getDayPlanning(
                  selectedPlan,
                  selectedDuration
                ).map(
                  (day, dayIndex) => {

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
                        className="dual-itinerary-day"
                        key={`day-${dayNumber}`}
                      >

                        <div className="dual-day-heading">

                          <div className="dual-day-number">
                            {dayNumber}
                          </div>

                          <div className="dual-day-title">

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

                        {day.description && (
                          <p className="dual-day-description">
                            {day.description}
                          </p>
                        )}

                        {activities.length > 0 && (

                          <div className="dual-activity-list">

                            {activities.map(
                              (
                                activity,
                                index
                              ) => {

                                const type =
                                  String(
                                    activity.type ||
                                      ""
                                  ).toLowerCase();

                                const isFood =
                                  type.includes("food") ||
                                  type.includes("meal");

                                const isTicket =
                                  type.includes("ticket") ||
                                  type.includes("entry") ||
                                  type.includes("activity");

                                return (
                                  <div
                                    className="dual-activity"
                                    key={
                                      activity.id ||
                                      `${dayNumber}-${index}`
                                    }
                                  >

                                    <div className="dual-activity-time">

                                      <Clock size={15} />

                                      {activity.time && (
                                        <strong>
                                          {activity.time}
                                        </strong>
                                      )}

                                      {activity.duration && (
                                        <small>
                                          {activity.duration}
                                        </small>
                                      )}

                                    </div>

                                    <div className="dual-activity-icon">

                                      {isFood ? (
                                        <Utensils size={16} />
                                      ) : isTicket ? (
                                        <Ticket size={16} />
                                      ) : (
                                        <MapPin size={16} />
                                      )}

                                    </div>

                                    <div className="dual-activity-info">

                                      <div className="dual-activity-top">

                                        <div className="dual-activity-title-wrap">

                                          <h5>
                                            {activity.name ||
                                              activity.title ||
                                              "Travel Activity"}
                                          </h5>

                                          <span className="dual-activity-subtitle">
                                            {isFood
                                              ? "Recommended hotel / food stop"
                                              : isTicket
                                              ? "Free place / activity"
                                              : "Place / activity"}
                                          </span>

                                        </div>

                                        {isFood ? (

                                          <span className="dual-activity-badge food">
                                            Food
                                          </span>

                                        ) : (

                                          <span className="dual-activity-badge">
                                            {activity.amount !==
                                              undefined &&
                                            activity.amount !==
                                              null &&
                                            Number(
                                              activity.amount
                                            ) > 0
                                              ? formatAmount(
                                                  activity.amount
                                                )
                                              : "Free"}
                                          </span>

                                        )}

                                      </div>

                                      {activity.description && (
                                        <p>
                                          {
                                            activity.description
                                          }
                                        </p>
                                      )}

                                      {activity.planningTip && (
                                        <div className="dual-activity-plan-tip">
                                          <strong>
                                            Plan:
                                          </strong>
                                          <span>
                                            {
                                              activity.planningTip
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

                        {day.planningTip && (

                          <div className="dual-planning-tip">

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
                )}

              </div>

            </section>

            {Array.isArray(
              selectedPlan.baseIncludes
            ) &&
              selectedPlan.baseIncludes.length >
                0 && (

                <div className="dual-base-box">

                  <div className="dual-base-header">

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

                    {selectedPlan.baseAmountPerDay && (
                      <span>
                        {formatAmount(
                          selectedPlan.baseAmountPerDay
                        )}
                        {" / day"}
                      </span>
                    )}

                  </div>

                  <div className="dual-base-content">

                    <h4>
                      Included in base amount:
                    </h4>

                    <div className="dual-base-items">

                      {selectedPlan.baseIncludes.map(
                        (item, index) => (
                          <span
                            key={`${item}-${index}`}
                          >
                            <Check size={11} />
                            {item}
                          </span>
                        )
                      )}

                    </div>

                    <p>
                      Food expenses, hotel charges and
                      personal shopping are not included.
                    </p>

                  </div>

                </div>
              )}

            <div className="dual-modal-footer">

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
                className="dual-select-plan-button"
                onClick={() =>
                  selectPlan(selectedPlan)
                }
              >
                Select This Plan
                <ArrowRight size={15} />
              </button>

            </div>

          </div>

        </div>
      )}

      {/* =================================================
          SUCCESS POPUP
      ================================================= */}
      {successPlan && (

        <div
          className="dual-success-backdrop"
          onClick={closeSuccessPopup}
        >

          <div
            className="dual-success-modal"
            onClick={(event) =>
              event.stopPropagation()
            }
          >

            <div className="dual-success-icon">
              <CheckCircle size={45} />
            </div>

            <h2>
              Plan Selected!
            </h2>

            <p>
              Your dual travel plan has been
              selected successfully.
            </p>

            <strong>
              {successPlan.title}
            </strong>

            <button
              type="button"
              onClick={closeSuccessPopup}
            >
              Continue
            </button>

          </div>

        </div>
      )}

      {/* =================================================
          CSS
      ================================================= */}
      <style>{`

        /* ================================================
           MAIN PAGE
        ================================================ */

        .dual-plans-page {
          min-height: 100vh;
          background: #ffffff;
          color: #073b35;
        }

        /* ================================================
           HERO
           SAME CLEAN LOOK AS DESTINATIONS PAGE
        ================================================ */

        .dual-plans-hero {
          position: relative;
          min-height: 390px;
          display: flex;
          align-items: center;
          overflow: hidden;

          /*
             IMPORTANT:
             No overlay here.
             The original image remains completely visible.
          */
          background-image: url("/images/dualplan-bg.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
        }

        /*
          REMOVED:
          .dual-plans-hero-overlay

          There is intentionally NO dark or white overlay.
        */

        .dual-plans-hero-content {
          position: relative;
          z-index: 2;

          width: min(1180px, 92%);
          margin: 0 auto;

          /*
            Same dark green text family
            used on Destinations page.
          */
          color: #073b35;
        }

        .dual-plans-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 8px 14px;

          border: 1px solid rgba(7, 59, 53, 0.18);
          border-radius: 999px;

          background: rgba(255, 255, 255, 0.82);

          color: #087d57;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.2px;

          margin-bottom: 18px;
        }

        .dual-plans-hero h1 {
          margin: 0;

          max-width: 800px;

          color: #073b35;

          font-size: clamp(38px, 6vw, 62px);
          line-height: 1.05;

          letter-spacing: -1.5px;
          font-weight: 800;

          text-shadow:
            0 1px 2px rgba(255, 255, 255, 0.35);
        }

        .dual-plans-hero h1 span {
          color: #087d57;
        }

        .dual-plans-hero p {
          max-width: 650px;

          margin: 14px 0 0;

          color: #49645a;

          font-size: 15px;
          line-height: 1.65;
          font-weight: 500;
        }

        .dual-plans-hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 25px;
        }

        .dual-plans-hero-features div {
          display: flex;
          align-items: center;
          gap: 8px;

          padding: 9px 13px;

          border: 1px solid rgba(8, 125, 87, 0.18);
          border-radius: 10px;

          background: rgba(255, 255, 255, 0.84);

          color: #087d57;

          font-size: 13px;
          font-weight: 700;
        }

        /* ================================================
           MAIN CONTAINER
        ================================================ */

        .dual-plans-container {
          width: min(1180px, 92%);
          margin: 0 auto;
          padding: 65px 0 80px;
          background: #ffffff;
        }

        /* ================================================
           HEADING
        ================================================ */

        .dual-plans-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 30px;
        }

        .dual-plans-small-title {
          display: block;
          margin-bottom: 18px;

          color: #008f63;

          font-size: 12px;
          font-weight: 800;

          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .dual-plans-heading h2 {
          margin: 0;

          color: #073b35;

          font-size: 36px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.5px;
        }

        .dual-plans-heading p {
          margin: 14px 0 0;

          color: #607d78;

          font-size: 15px;
          line-height: 1.6;
        }

        .dual-plans-count {
          display: none !important;
        }

        /* ================================================
           FILTERS
        ================================================ */

        .dual-plans-filters {
          display: flex;
          align-items: center;
          gap: 15px;

          margin-bottom: 20px;
          padding: 13px;

          border: 1px solid #e0ebe6;
          border-radius: 16px;

          background: rgba(255, 255, 255, 0.95);

          box-shadow:
            0 8px 25px rgba(21, 73, 55, 0.05);
        }

        .dual-search-box {
          min-width: 270px;
          flex: 1;

          height: 45px;

          display: flex;
          align-items: center;
          gap: 9px;

          padding: 0 13px;

          border: 1px solid #dce8e3;
          border-radius: 11px;

          color: #6d8178;
          background: #f8fbfa;
        }

        .dual-search-box input {
          flex: 1;
          width: 100%;

          border: 0;
          outline: 0;

          background: transparent;
          color: #19382d;

          font-size: 13px;
        }

        .dual-search-box input::placeholder {
          color: #8a9b95;
        }

        .dual-search-box button {
          border: 0;
          background: transparent;

          cursor: pointer;
          color: #879890;

          display: flex;
        }

        /* ================================================
           CATEGORY
        ================================================ */

        .dual-category-list {
          display: flex;
          gap: 7px;
          overflow-x: auto;
        }

        .dual-category-list button {
          white-space: nowrap;

          border: 1px solid #d9e7e1;
          border-radius: 9px;

          background: #ffffff;
          color: #587069;

          padding: 10px 13px;

          cursor: pointer;

          font-size: 12px;
          font-weight: 700;

          transition: 0.2s ease;
        }

        .dual-category-list button:hover,
        .dual-category-list button.active {
          background: #087d57;
          border-color: #087d57;
          color: #ffffff;
        }

        /* ================================================
           GRID
        ================================================ */

        .dual-plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        /* ================================================
           CARD
        ================================================ */

        .dual-plan-card {
          overflow: hidden;

          border-radius: 16px;
          background: #ffffff;
          border: 1px solid #e1ebe7;

          box-shadow:
            0 10px 30px rgba(22, 72, 54, 0.07);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .dual-plan-card:hover {
          transform: translateY(-4px);

          box-shadow:
            0 16px 38px rgba(22, 72, 54, 0.12);
        }

        .dual-plan-image-wrapper {
          position: relative;
          height: 245px;
          overflow: hidden;
        }

        .dual-plan-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition: transform 0.5s ease;
        }

        .dual-plan-card:hover .dual-plan-image {
          transform: scale(1.05);
        }

        .dual-plan-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.02),
              rgba(0, 0, 0, 0.55)
            );
        }

        .dual-plan-category {
          position: absolute;

          top: 15px;
          left: 15px;

          padding: 7px 11px;

          border-radius: 999px;

          background: rgba(255, 255, 255, 0.94);

          color: #087b55;

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

          color: #ffffff;

          font-size: 14px;
          font-weight: 700;
        }

        .dual-plan-card-content {
          padding: 22px;
        }

        .dual-plan-card-content h3 {
          margin: 0;

          color: #183b30;

          font-size: 23px;
        }

        .dual-plan-description {
          margin: 9px 0 14px;

          color: #74857f;

          font-size: 13px;
          line-height: 1.55;
        }

        /* ================================================
           PLACES
        ================================================ */

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

          padding: 7px 9px;

          border-radius: 8px;

          background: #eef8f4;
          color: #087b55;

          font-size: 11px;
          font-weight: 700;
        }

        /* ================================================
           DURATIONS
        ================================================ */

        .dual-duration-section {
          padding: 14px;

          border-radius: 13px;
          background: #f7faf9;
          border: 1px solid #e5eeea;
        }

        .dual-duration-title {
          display: flex;
          align-items: center;
          gap: 7px;

          margin-bottom: 10px;

          color: #49645a;

          font-size: 12px;
          font-weight: 800;
        }

        .dual-duration-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
        }

        .dual-duration-options button {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;

          padding: 10px;

          border: 1px solid #dce9e3;
          border-radius: 9px;

          background: #ffffff;
          color: #20493a;

          cursor: pointer;

          transition: 0.2s ease;
        }

        .dual-duration-options button:hover {
          border-color: #0a9365;
          transform: translateY(-1px);
        }

        .dual-duration-options strong {
          font-size: 12px;
        }

        .dual-duration-options small {
          color: #0a9365;
          font-weight: 800;
        }

        /* ================================================
           HIGHLIGHTS
        ================================================ */

        .dual-plan-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;

          margin: 16px 0;
        }

        .dual-plan-highlights span {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 10px 12px;

          color: #5c7068;

          font-size: 10px;

          background: #fafcfb;

          border: 1px solid #edf2ef;
          border-radius: 7px;
        }

        .dual-plan-highlights svg {
          color: #0a9566;
        }

        /* ================================================
           FOOTER
        ================================================ */

        .dual-plan-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 15px;

          padding-top: 15px;

          border-top: 1px solid #edf1ef;
        }

        .dual-plan-price small {
          display: block;

          color: #8a9994;
          font-size: 10px;
        }

        .dual-plan-price strong {
          display: block;

          margin-top: 2px;

          color: #163d30;

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

          background: #087d57;
          color: #ffffff;

          padding: 11px 15px;

          cursor: pointer;

          font-size: 12px;
          font-weight: 800;

          transition: 0.2s ease;
        }

        .dual-plan-view-button:hover,
        .dual-select-plan-button:hover {
          background: #066745;
          transform: translateY(-1px);
        }

        /* ================================================
           EMPTY
        ================================================ */

        .dual-plans-empty {
          padding: 70px 20px;

          text-align: center;

          border: 1px dashed #cfded7;
          border-radius: 18px;

          background: #ffffff;
        }

        .dual-empty-icon {
          width: 60px;
          height: 60px;

          margin: 0 auto 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #eaf7f2;
          color: #087d57;
        }

        .dual-plans-empty h3 {
          margin: 0;
          color: #214439;
        }

        .dual-plans-empty p {
          color: #7b8d86;
          font-size: 13px;
        }

        .dual-plans-empty button {
          margin-top: 10px;

          padding: 10px 15px;

          border: 0;
          border-radius: 9px;

          background: #087d57;
          color: #ffffff;

          cursor: pointer;
          font-weight: 700;
        }

        /* ================================================
           MODAL
        ================================================ */

        .dual-modal-backdrop {
          position: fixed;
          z-index: 9999;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 14px;

          background: rgba(28, 40, 52, 0.68);

          backdrop-filter: blur(4px);
        }

        .dual-plan-modal {
          width: min(1000px, 96%);

          max-height: 94vh;
          overflow-y: auto;

          border: 1px solid rgba(210, 220, 226, 0.9);
          border-radius: 8px;

          background: #ffffff;

          box-shadow:
            0 20px 55px rgba(20, 35, 48, 0.32);

          scrollbar-width: thin;
          scrollbar-color:
            #c7d3d9 transparent;
        }

        .dual-plan-modal::-webkit-scrollbar {
          width: 6px;
        }

        .dual-plan-modal::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: #c7d3d9;
        }

        .dual-modal-header {
          min-height: 42px;

          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 12px;

          padding: 16px 20px 12px;

          background: #ffffff;

          border-bottom: 1px solid #edf1f4;
        }

        .dual-modal-header > div:first-child {
          min-width: 0;
        }

        .dual-modal-header > div:first-child > span {
          display: block;

          margin-bottom: 2px;

          color: #0b8060;

          font-size: 11px;
          line-height: 1;

          font-weight: 800;
          letter-spacing: 0.45px;

          text-transform: uppercase;
        }

        .dual-modal-header h2 {
          margin: 0;

          color: #18374a;

          font-size: 21px;
          line-height: 1.25;
          font-weight: 800;
        }

        .dual-modal-close {
          flex: 0 0 auto;

          width: 30px;
          height: 30px;

          display: flex;
          align-items: center;
          justify-content: center;

          border: 1px solid #d9e2e7;
          border-radius: 50%;

          background: #f6f8f9;

          color: #7d8b92;

          cursor: pointer;
        }

        .dual-modal-image-wrap {
          width: min(360px, 70%);
          height: 165px;

          margin: 14px auto 16px;

          overflow: hidden;

          border-radius: 10px;

          background: #eef2f4;
        }

        .dual-modal-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;
        }

        .dual-modal-duration {
          display: flex;
          justify-content: center;

          gap: 10px;

          padding: 4px 20px 12px;
        }

        .dual-modal-duration button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 4px;

          min-width: 170px;

          padding: 10px 14px;

          border: 1px solid #dbe5e9;
          border-radius: 4px;

          background: #ffffff;
          color: #687981;

          cursor: pointer;

          font-size: 11px;
          font-weight: 800;
        }

        .dual-modal-duration button.active {
          border-color: #0a8060;
          background: #eff8f5;
          color: #087b5b;
        }

        .dual-modal-summary {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));

          gap: 10px;

          padding: 8px 20px 12px;

          background: #ffffff;
        }

        .dual-summary-box {
          min-width: 0;
          min-height: 58px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          padding: 10px 12px;

          border: 1px solid #d8e2e8;
          border-radius: 3px;

          background: #f9fbfc;
        }

        .dual-summary-box small {
          display: block;

          margin-bottom: 2px;

          color: #7d8b91;

          font-size: 10px;
          font-weight: 700;
        }

        .dual-summary-box strong {
          display: block;

          overflow: hidden;

          color: #24465a;

          font-size: 13px;
          font-weight: 800;

          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .dual-summary-price strong {
          color: #0a8a66;
        }

        .dual-modal-section {
          margin: 0 20px;

          padding: 14px;

          border: 1px solid #cddbe2;
          border-radius: 4px;

          background: #ffffff;
        }

        .dual-modal-section + .dual-modal-section {
          margin-top: 7px;
        }

        .dual-modal-section h3 {
          display: flex;
          align-items: center;
          gap: 7px;

          margin: 0 0 10px;

          color: #2a4a5b;

          font-size: 11px;
          font-weight: 900;
        }

        .dual-modal-section h3 svg {
          color: #0a8060;
        }

        .dual-modal-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .dual-modal-highlights div {
          display: inline-flex;
          align-items: center;
          gap: 5px;

          padding: 7px 10px;

          border: 1px solid #e0e8ec;
          border-radius: 3px;

          background: #f8fafb;
          color: #63757e;

          font-size: 16px;
        }

        .dual-modal-highlights svg {
          color: #0a8060;
        }

        /* ================================================
           ITINERARY
        ================================================ */

        .dual-itinerary {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .dual-itinerary-day {
          padding: 14px;

          border: 1px solid #cbd9df;
          border-radius: 6px;

          background: #fbfdfe;
        }

        .dual-day-heading {
          display: flex;
          align-items: center;
          gap: 11px;

          margin-bottom: 10px;
        }

        .dual-day-number {
          flex: 0 0 auto;

          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 4px;

          background: #0a8060;
          color: #ffffff;

          font-size: 13px;
          font-weight: 900;
        }

        .dual-day-title {
          min-width: 0;
        }

        .dual-day-heading span {
          display: block;

          margin-bottom: 1px;

          color: #0a8060;

          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.7px;
        }

        .dual-day-heading h4 {
          margin: 0;

          color: #203f51;

          font-size: 16px;
          line-height: 1.3;
          font-weight: 800;
        }

        .dual-day-description {
          margin: 5px 0;

          color: #77878e;

          font-size: 11px;
          line-height: 1.45;
        }

        .dual-activity-list {
          display: flex;
          flex-direction: column;
          gap: 9px;

          margin-top: 9px;
        }

        .dual-activity {
          display: grid;

          grid-template-columns:
            155px 38px minmax(0, 1fr);

          align-items: center;

          gap: 14px;

          min-height: 105px;

          padding: 16px 18px;

          border: 1px solid #c8d7df;
          border-radius: 7px;

          background: #f9fbfc;
        }

        .dual-activity-time {
          align-self: stretch;

          display: flex;
          flex-direction: column;
          justify-content: center;

          gap: 3px;

          color: #087d68;
        }

        .dual-activity-time strong {
          color: #007b6b;

          font-size: 14px;
          white-space: nowrap;
        }

        .dual-activity-time small {
          color: #6d808a;
          font-size: 11px;
        }

        .dual-activity-icon {
          width: 34px;
          height: 34px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 5px;

          color: #087d68;
        }

        .dual-activity-info {
          min-width: 0;
        }

        .dual-activity-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;

          gap: 10px;
        }

        .dual-activity-title-wrap {
          min-width: 0;
        }

        .dual-activity-top h5 {
          margin: 0;

          color: #172f42;

          font-size: 16px;
          font-weight: 800;
        }

        .dual-activity-subtitle {
          display: block;

          margin-top: 2px;

          color: #7a8992;

          font-size: 11px;
        }

        .dual-activity-badge {
          flex: 0 0 auto;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-width: 52px;

          padding: 7px 10px;

          border-radius: 999px;

          background: #e8f6f1;
          color: #087d68;

          font-size: 11px;
          font-weight: 800;

          white-space: nowrap;
        }

        .dual-activity-badge.food {
          background: #fff0bf;
          color: #ad7a00;
        }

        .dual-activity-info p {
          margin: 7px 0 5px;

          color: #425a67;

          font-size: 11px;
          line-height: 1.45;
        }

        .dual-activity-plan-tip {
          display: flex;
          align-items: baseline;
          gap: 4px;

          color: #62757f;

          font-size: 11px;
        }

        .dual-activity-plan-tip strong {
          color: #087d68;
        }

        .dual-planning-tip {
          display: flex;
          gap: 5px;

          margin-top: 9px;
          padding: 8px 10px;

          border-left: 2px solid #0a9365;
          border-radius: 2px;

          background: #f0faf6;
          color: #6d7f78;

          font-size: 11px;
        }

        .dual-planning-tip strong {
          color: #087d57;
        }

        /* ================================================
           BASE AMOUNT
        ================================================ */

        .dual-base-box {
          margin: 10px 20px 0;

          padding: 12px;

          border: 1px solid #cbd9df;
          border-radius: 4px;

          background: #fbfdfe;
        }

        .dual-base-header {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          padding-bottom: 9px;

          border-bottom: 1px solid #e1e8ec;
        }

        .dual-base-header small {
          display: block;

          color: #7d8b91;
          font-size: 10px;
        }

        .dual-base-header strong {
          display: block;

          margin-top: 1px;

          color: #0a8a66;
          font-size: 16px;
        }

        .dual-base-header > span {
          color: #5f747d;

          font-size: 10px;
          font-weight: 800;
        }

        .dual-base-content {
          padding-top: 9px;
        }

        .dual-base-content h4 {
          margin: 0 0 4px;

          color: #365565;

          font-size: 10px;
        }

        .dual-base-items {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
        }

        .dual-base-items span {
          display: inline-flex;
          align-items: center;
          gap: 2px;

          padding: 3px 4px;

          border: 1px solid #e0e8ec;
          border-radius: 3px;

          background: #ffffff;
          color: #63767e;

          font-size: 10px;
        }

        .dual-base-items svg {
          color: #0a8060;
        }

        .dual-base-content p {
          margin: 4px 0 0;

          color: #89969c;

          font-size: 10px;
        }

        /* ================================================
           MODAL FOOTER
        ================================================ */

        .dual-modal-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-top: 10px;
          padding: 12px 20px;

          border-top: 1px solid #e3eaed;

          background: #ffffff;
        }

        .dual-modal-footer small {
          display: block;

          color: #89969c;
          font-size: 10px;
        }

        .dual-modal-footer strong {
          display: block;

          margin-top: 1px;

          color: #0a8a66;
          font-size: 17px;
        }

        .dual-select-plan-button {
          padding: 10px 15px;

          border-radius: 4px;

          background: #0a8060;
        }

        .dual-select-plan-button:hover {
          background: #07694f;
        }

        /* ================================================
           SUCCESS POPUP
        ================================================ */

        .dual-success-backdrop {
          position: fixed;
          z-index: 10000;
          inset: 0;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 20px;

          background: rgba(8, 31, 23, 0.7);

          backdrop-filter: blur(6px);
        }

        .dual-success-modal {
          width: min(390px, 100%);

          padding: 32px 25px;

          border-radius: 20px;

          background: #ffffff;

          text-align: center;

          box-shadow:
            0 25px 70px rgba(0, 0, 0, 0.25);
        }

        .dual-success-icon {
          width: 70px;
          height: 70px;

          margin: 0 auto 15px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #e8f8f1;
          color: #087d57;
        }

        .dual-success-modal h2 {
          margin: 0;

          color: #183c30;
        }

        .dual-success-modal p {
          margin: 9px 0;

          color: #75857f;

          font-size: 13px;
        }

        .dual-success-modal > strong {
          display: block;

          margin: 10px 0 18px;

          color: #087d57;

          font-size: 14px;
        }

        .dual-success-modal button {
          min-width: 120px;

          padding: 11px 18px;

          border: 0;
          border-radius: 9px;

          background: #087d57;
          color: #ffffff;

          cursor: pointer;

          font-weight: 800;
        }

        /* ================================================
           RESPONSIVE
        ================================================ */

        @media (max-width: 850px) {

          .dual-plans-grid {
            grid-template-columns: 1fr;
          }

          .dual-plans-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .dual-plans-filters {
            flex-direction: column;
            align-items: stretch;
          }

          .dual-search-box {
            min-width: 0;
          }

          .dual-category-list {
            width: 100%;
          }
        }

        @media (max-width: 600px) {

          .dual-plans-hero {
            min-height: 390px;
          }

          .dual-plans-hero h1 {
            font-size: 39px;
          }

          .dual-plans-container {
            width: 94%;
            padding-top: 42px;
          }

          .dual-plan-image-wrapper {
            height: 220px;
          }

          .dual-plan-card-content {
            padding: 17px;
          }

          .dual-plan-card-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .dual-plan-view-button {
            width: 100%;
          }

          .dual-modal-backdrop {
            padding: 8px;
          }

          .dual-plan-modal {
            max-height: 96vh;
            border-radius: 15px;
          }

          .dual-modal-header {
            padding: 18px;
          }

          .dual-modal-duration {
            display: grid;
            grid-template-columns: 1fr;
          }

          .dual-modal-duration button {
            min-width: 0;
          }

          .dual-modal-summary {
            grid-template-columns: 1fr;
          }

          .dual-modal-section {
            padding-left: 17px;
            padding-right: 17px;
          }

          .dual-base-box {
            margin-left: 17px;
            margin-right: 17px;
          }

          .dual-activity {
            grid-template-columns:
              82px 24px minmax(0, 1fr);

            gap: 6px;
            padding: 9px;
          }

          .dual-activity-time strong {
            font-size: 11px;
          }

          .dual-activity-time small {
            font-size: 7px;
          }

          .dual-activity-top h5 {
            font-size: 9px;
          }

          .dual-activity-subtitle,
          .dual-activity-badge {
            font-size: 10px;
          }

          .dual-activity-info p,
          .dual-activity-plan-tip {
            font-size: 7px;
          }

          .dual-modal-footer {
            padding: 15px 17px;

            align-items: stretch;
            flex-direction: column;
          }

          .dual-select-plan-button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}