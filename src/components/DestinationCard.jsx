import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card">

      <div className="destination-image">
        <img
          src={destination.image}
          alt={destination.name}
        />

        <span className="destination-category">
          {destination.category}
        </span>
      </div>

      <div className="destination-content">

        <div className="destination-location">
          <MapPin size={15} />
          {destination.state}
        </div>

        <h3>
          {destination.name}
        </h3>

        <p>
          {destination.description}
        </p>

        <div className="card-places">
          {destination.places
            .slice(0, 3)
            .map((place) => (
              <span key={place}>
                ✓ {place}
              </span>
            ))}
        </div>

        <div className="destination-bottom">
          <strong>
            {destination.duration}
          </strong>

          <Link
            to="/travel-plans"
            className="card-button"
          >
            View Plans
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </article>
  );
}