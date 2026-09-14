import { useMemo, useState } from "react";

import {
  Check,
  ChevronDown,
  ChevronUp,
  Search,
  MapPin,
  Clock,
  ArrowLeft,
  Utensils,
  Ticket,
  IndianRupee,
} from "lucide-react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import { plans } from "../data/travelData";
import { destinationPlans } from "../data/destinationPlans";

export default function TravelPlansPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openPlan, setOpenPlan] = useState(null);

  const [searchParams] = useSearchParams();

  /*
  =========================================================
  SELECTED DESTINATION
  =========================================================
  */

  const selectedDestination =
    searchParams.get("destination");


  /*
  =========================================================
  PLANS TO DISPLAY
  =========================================================

  From Destination page:
  /travel-plans?destination=Chennai

  Only Chennai plans will be shown.

  From Navbar:
  /travel-plans

  All normal travel plans will be shown.
  */

  const pagePlans = selectedDestination
    ? destinationPlans.filter(
        (plan) =>
          plan.destinationName
            .toLowerCase() ===
          selectedDestination
            .toLowerCase()
      )
    : plans;


  /*
  =========================================================
  CATEGORY LIST
  =========================================================
  */

  const categories = [
    "All",
    ...new Set(
      pagePlans.map(
        (plan) => plan.category
      )
    ),
  ];


  /*
  =========================================================
  SEARCH + FILTER + SORT
  =========================================================
  */

  const filteredPlans = useMemo(() => {
    const searchText =
      search.toLowerCase().trim();

    return [...pagePlans]
      .filter((plan) => {

        const matchesSearch =
          plan.title
            .toLowerCase()
            .includes(searchText) ||

          plan.destination
            .toLowerCase()
            .includes(searchText) ||

          plan.category
            .toLowerCase()
            .includes(searchText);

        const matchesCategory =
          category === "All" ||
          plan.category === category;

        return (
          matchesSearch &&
          matchesCategory
        );
      })

      /*
      ================================================
      Duration order:
      1 Day -> 2 Days -> 3 Days -> 4 Days
      ================================================
      */

      .sort(
        (a, b) =>
          a.days - b.days
      );

  }, [
    pagePlans,
    search,
    category,
  ]);


  /*
  =========================================================
  OPEN / CLOSE PLAN
  =========================================================
  */

  const togglePlan = (id) => {
    setOpenPlan((current) =>
      current === id
        ? null
        : id
    );
  };


  /*
  =========================================================
  FORMAT AMOUNT
  =========================================================
  */

  const formatAmount = (amount) => {

    if (
      amount === 0 ||
      amount === null ||
      amount === undefined
    ) {
      return "Free";
    }

    return `₹${amount.toLocaleString(
      "en-IN"
    )}`;
  };


  /*
  =========================================================
  CLEAR FILTERS
  =========================================================
  */

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
  };


  return (
    <main>

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <section className="page-header">

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

            {selectedDestination
              ? `Choose your preferred trip duration and open a plan to see the complete day-by-day schedule, timings, places and charges.`
              : "Choose a ready-made itinerary and make your next trip simple and enjoyable."}

          </p>

        </div>

      </section>


      <section className="section">

        {/* ==================================================
            BACK TO DESTINATIONS
        ================================================== */}

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


        {/* ==================================================
            SEARCH + CATEGORY

            Hidden when user comes from
            Destination -> View Plans
        ================================================== */}

        {!selectedDestination && (

          <div className="destination-tools">

            {/* SEARCH */}

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


            {/* CATEGORY */}

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
                      setCategory(
                        item
                      )
                    }
                  >

                    {item}

                  </button>

                )
              )}

            </div>

          </div>

        )}


        {/* ==================================================
            RESULT COUNT
        ================================================== */}

        <div className="results-count">

          {selectedDestination
            ? `Showing ${filteredPlans.length} plan${
                filteredPlans.length !== 1
                  ? "s"
                  : ""
              } for ${selectedDestination}`

            : `Showing ${filteredPlans.length} travel plan${
                filteredPlans.length !== 1
                  ? "s"
                  : ""
              }`}

        </div>


        {/* ==================================================
            PLAN LIST
        ================================================== */}

        <div className="plans-list">

          {filteredPlans.map((plan) => {

            const isOpen =
              openPlan === plan.id;

            return (

              <article
                key={plan.id}
                className="travel-plan"
              >

                {/* ==========================================
                    PLAN MAIN
                ========================================== */}

                <div className="travel-plan-main">

                  {/* IMAGE */}

                  <div className="travel-plan-image">

                    <img
                      src={plan.image}
                      alt={plan.title}
                    />

                  </div>


                  {/* INFORMATION */}

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


                    {/* META */}

                    <div className="travel-plan-meta">

                      <span>

                        <Clock size={15} />

                        {plan.days} Day
                        {plan.days !== 1
                          ? "s"
                          : ""}

                      </span>


                      <span>

                        {plan.nights} Night
                        {plan.nights !== 1
                          ? "s"
                          : ""}

                      </span>


                      <strong>

                        ₹
                        {plan.price.toLocaleString(
                          "en-IN"
                        )}

                      </strong>

                    </div>


                    {/* HIGHLIGHTS */}

                    <div className="plan-highlights">

                      {plan.highlights.map(
                        (item) => (

                          <span
                            key={item}
                          >

                            <Check
                              size={14}
                            />

                            {item}

                          </span>

                        )
                      )}

                    </div>

                  </div>


                  {/* ========================================
                      DOWN ARROW
                  ======================================== */}

                  <button
                    type="button"
                    className="plan-expand-button"
                    onClick={() =>
                      togglePlan(
                        plan.id
                      )
                    }
                    aria-label={
                      isOpen
                        ? "Hide itinerary"
                        : "Show itinerary"
                    }
                  >

                    {isOpen ? (
                      <ChevronUp
                        size={22}
                      />
                    ) : (
                      <ChevronDown
                        size={22}
                      />
                    )}

                  </button>

                </div>


                {/* ==================================================
                    EXPANDED ITINERARY
                ================================================== */}

                {isOpen && (

                  <div className="itinerary">

                    {/* ==========================================
                        ITINERARY TITLE
                    ========================================== */}

                    <div className="itinerary-heading">

                      <div>

                        <h3>
                          Detailed Day-by-Day Plan
                        </h3>

                        <p>
                          Time, places,
                          activity charges
                          and recommended
                          food stops
                        </p>

                      </div>


                      {/* PLACE TOTAL */}

                      <div className="itinerary-total">

                        <span>
                          Place / Activity Cost
                        </span>

                        <strong>
                          {formatAmount(
                            plan.placeAmount
                          )}
                        </strong>

                      </div>

                    </div>


                    {/* ==================================================
                        DAY-BY-DAY
                    ================================================== */}

                    <div className="itinerary-list">

                      {plan.itinerary.map(
                        (day) => (

                          <div
                            className="itinerary-day"
                            key={day.day}
                          >

                            {/* DAY NUMBER */}

                            <div className="day-number">

                              {day.day}

                            </div>


                            {/* DAY CONTENT */}

                            <div className="day-content">

                              <h4>
                                {day.title}
                              </h4>


                              <div className="daily-schedule">

                                {day.activities.map(
                                  (
                                    item,
                                    index
                                  ) => {

                                    const isFood =
                                      item.type ===
                                      "food";

                                    return (

                                      <div
                                        className={
                                          isFood
                                            ? "schedule-item food-item"
                                            : "schedule-item"
                                        }
                                        key={`${item.name}-${item.time}-${index}`}
                                      >

                                        {/* TIME */}

                                        <div className="schedule-time">

                                          <Clock
                                            size={17}
                                          />

                                          <strong>
                                            {item.time}
                                          </strong>

                                        </div>


                                        {/* PLACE / FOOD */}

                                        <div className="schedule-place">

                                          {isFood ? (

                                            <Utensils
                                              size={19}
                                            />

                                          ) : (

                                            <MapPin
                                              size={19}
                                            />

                                          )}


                                          <div>

                                            <strong>
                                              {item.name}
                                            </strong>


                                            <span>

                                              {isFood
                                                ? "Recommended food stop"
                                                : item.amount ===
                                                  0
                                                ? "Free place / activity"
                                                : "Place / activity"}

                                            </span>

                                          </div>

                                        </div>


                                        {/* AMOUNT */}

                                        <div className="schedule-amount">

                                          {isFood ? (

                                            /*
                                              Food amount
                                              is intentionally
                                              not shown.
                                            */

                                            <span className="food-label">
                                              Food
                                            </span>

                                          ) : (

                                            <>

                                              <Ticket
                                                size={16}
                                              />

                                              <strong>
                                                {formatAmount(
                                                  item.amount
                                                )}
                                              </strong>

                                            </>

                                          )}

                                        </div>

                                      </div>

                                    );

                                  }
                                )}

                              </div>

                            </div>

                          </div>

                        )
                      )}

                    </div>


                    {/* ==================================================
                        TOTAL PLACE / ACTIVITY CHARGES
                    ================================================== */}

                    <div className="place-cost-summary">

                      <div>

                        <IndianRupee
                          size={20}
                        />

                        <div>

                          <small>
                            Total Place / Activity Charges
                          </small>

                          <strong>
                            {formatAmount(
                              plan.placeAmount
                            )}
                          </strong>

                        </div>

                      </div>


                      <span>
                        Food costs are not included.
                      </span>

                    </div>


                    {/* ==================================================
                        BASE TRIP AMOUNT
                    ================================================== */}

                    <div className="base-amount-box">

                      <div className="base-amount-header">

                        <div>

                          <small>
                            Base Trip Amount
                          </small>

                          <strong>

                            ₹
                            {plan.baseAmount.toLocaleString(
                              "en-IN"
                            )}

                          </strong>

                        </div>


                        <span>

                          ₹
                          {plan.baseAmountPerDay.toLocaleString(
                            "en-IN"
                          )}
                          / day

                        </span>

                      </div>


                      <div className="base-amount-content">

                        <h4>
                          Included in base amount:
                        </h4>


                        <ul className="base-includes-list">

                          {plan.baseIncludes.map(
                            (item) => (

                              <li
                                key={item}
                              >

                                {item}

                              </li>

                            )
                          )}

                        </ul>


                        <p>

                          Food expenses,
                          hotel charges and
                          personal shopping are
                          not included.

                        </p>

                      </div>

                    </div>


                    {/* ==================================================
                        FINAL ESTIMATED AMOUNT
                    ================================================== */}

                    <div className="plan-booking">

                      <div>

                        <small>
                          Estimated Total
                        </small>


                        <strong>

                          ₹
                          {plan.price.toLocaleString(
                            "en-IN"
                          )}

                        </strong>


                        <span>
                          /person
                        </span>

                      </div>


                      <button
                        type="button"
                        className="primary-button"
                        onClick={() =>
                          alert(
                            `You selected ${plan.title}`
                          )
                        }
                      >

                        Select Plan

                      </button>

                    </div>

                  </div>

                )}

              </article>

            );

          })}

        </div>


        {/* ==================================================
            EMPTY STATE
        ================================================== */}

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
  );
}