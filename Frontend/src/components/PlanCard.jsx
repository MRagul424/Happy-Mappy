import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function PlanCard({ plan }) {
  return (
    <article className="plan-card">

      <div className="plan-image">
        <img
          src={plan.image}
          alt={plan.title}
        />

        <span className="plan-category">
          {plan.category}
        </span>
      </div>

      <div className="plan-content">

        <div className="plan-location">
          <MapPin size={15} />
          {plan.destination}
        </div>

        <h3>
          {plan.title}
        </h3>

        <div className="plan-duration">
          <Clock size={16} />
          {plan.days} Days / {plan.nights} Nights
        </div>

        <div className="plan-highlights">
          {plan.highlights.map((item) => (
            <span key={item}>
              <Check size={14} />
              {item}
            </span>
          ))}
        </div>

        <div className="plan-footer">

          <div className="plan-price">
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

          <Link
            to="/travel-plans"
            className="plan-button"
          >
            View Plan
            <ArrowRight size={17} />
          </Link>

        </div>

      </div>
    </article>
  );
}