import { useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  ChevronUp,
  Search,
  MapPin,
  Clock,
} from "lucide-react";

import { plans } from "../data/travelData";

export default function TravelPlansPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [openPlan, setOpenPlan] = useState(null);

  const categories = [
    "All",
    ...new Set(plans.map((plan) => plan.category)),
  ];

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        plan.title.toLowerCase().includes(searchText) ||
        plan.destination.toLowerCase().includes(searchText) ||
        plan.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        plan.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const togglePlan = (id) => {
    setOpenPlan((current) =>
      current === id ? null : id
    );
  };

  return (
    <main>

      {/* HEADER */}
      <section className="page-header">

        <div className="page-header-content">

          <span className="section-label">
            <Clock size={17} />
            Plan Your Journey
          </span>

          <h1>
            Travel plans
          </h1>

          <p>
            Choose a ready-made itinerary and make your next
            trip simple and enjoyable.
          </p>

        </div>

      </section>

      <section className="section">

        {/* FILTERS */}
        <div className="destination-tools">

          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search travel plans..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />

          </div>

          <div className="category-buttons">

            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  category === item
                    ? "category-button active"
                    : "category-button"
                }
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}

          </div>

        </div>

        <div className="results-count">
          Showing {filteredPlans.length} travel plan
          {filteredPlans.length !== 1 ? "s" : ""}
        </div>

        {/* PLANS */}
        <div className="plans-list">

          {filteredPlans.map((plan) => {
            const isOpen = openPlan === plan.id;

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
                        {plan.days} Days
                      </span>

                      <span>
                        {plan.nights} Nights
                      </span>

                      <strong>
                        ₹{plan.price.toLocaleString("en-IN")}
                      </strong>
                    </div>

                    <div className="plan-highlights">

                      {plan.highlights.map((item) => (
                        <span key={item}>
                          <Check size={14} />
                          {item}
                        </span>
                      ))}

                    </div>

                  </div>

                  <button
                    type="button"
                    className="plan-expand-button"
                    onClick={() => togglePlan(plan.id)}
                    aria-label={
                      isOpen
                        ? "Hide itinerary"
                        : "Show itinerary"
                    }
                  >
                    {isOpen ? (
                      <ChevronUp size={22} />
                    ) : (
                      <ChevronDown size={22} />
                    )}
                  </button>

                </div>

                {/* ITINERARY */}
                {isOpen && (
                  <div className="itinerary">

                    <h3>
                      Day-by-day itinerary
                    </h3>

                    <div className="itinerary-list">

                      {plan.itinerary.map((day) => (
                        <div
                          className="itinerary-day"
                          key={day.day}
                        >

                          <div className="day-number">
                            {day.day}
                          </div>

                          <div className="day-content">

                            <h4>
                              {day.title}
                            </h4>

                            <ul>
                              {day.activities.map(
                                (activity) => (
                                  <li key={activity}>
                                    <Check size={15} />
                                    {activity}
                                  </li>
                                )
                              )}
                            </ul>

                          </div>

                        </div>
                      ))}

                    </div>

                    <div className="plan-booking">

                      <div>
                        <small>
                          Starting from
                        </small>

                        <strong>
                          ₹{plan.price.toLocaleString("en-IN")}
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

        {filteredPlans.length === 0 && (
          <div className="empty-state">

            <Search size={40} />

            <h3>
              No travel plans found
            </h3>

            <p>
              Try another search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Clear filters
            </button>

          </div>
        )}

      </section>

    </main>
  );
}