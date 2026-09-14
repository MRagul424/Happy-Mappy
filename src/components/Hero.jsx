import React from "react";

import {
  MapPin,
  CalendarDays,
  Users
} from "lucide-react";

export default function Hero() {

  const scrollToPlans = () => {
    document
      .getElementById("plans")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <div className="hero-badge">
          ✈️ Your journey starts here
        </div>

        <h1>
          Explore the World.
          <br />

          <span>Create Your Story.</span>
        </h1>

        <p>
          Plan unforgettable trips, discover amazing destinations
          and create memories that last forever.
        </p>

        <div className="hero-search">

          <div className="hero-search-item">
            <MapPin />
            <div>
              <small>Where to?</small>
              <strong>Choose destination</strong>
            </div>
          </div>

          <div className="hero-search-item">
            <CalendarDays />
            <div>
              <small>When?</small>
              <strong>Choose dates</strong>
            </div>
          </div>

          <div className="hero-search-item">
            <Users />
            <div>
              <small>Travelers</small>
              <strong>2 Travelers</strong>
            </div>
          </div>

          <button
            className="hero-search-btn"
            onClick={scrollToPlans}
          >
            Explore Plans
          </button>

        </div>

      </div>

      <div className="scroll-down">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}