import {
  ArrowRight,
  Compass,
  MapPin,
  Utensils,
} from "lucide-react";

import { destinations } from "../data/travelData";
import { Link } from "react-router-dom";

export default function ExplorePage() {
  return (
    <main>
      <section className="page-header explore-page-header">
        <div className="page-header-content">
          <span className="section-label">
            <Compass size={17} />
            Discover More
          </span>

          <h1>Explore</h1>

          <p>
            Get inspiration for your next journey by exploring
            places, activities and local food.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="section-label">
            <MapPin size={17} />
            Travel Inspiration
          </span>

          <h2>Explore our destinations</h2>

          <p>
            Discover popular places and things to experience
            in every destination.
          </p>
        </div>

        <div className="explore-grid">
          {destinations.map((destination) => (
            <article
              className="explore-card"
              key={destination.id}
            >
              <div className="explore-image">
                <img
                  src={destination.image}
                  alt={destination.name}
                />
              </div>

              <div className="explore-content">
                <span className="explore-category">
                  {destination.category}
                </span>

                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <h4>Places to visit</h4>

                <div className="explore-places">
                  {destination.places.map((place) => (
                    <span key={place}>
                      <MapPin size={14} />
                      {place}
                    </span>
                  ))}
                </div>

                <h4>Local food</h4>

                <div className="explore-food">
                  {destination.food.map((food) => (
                    <span key={food}>
                      <Utensils size={14} />
                      {food}
                    </span>
                  ))}
                </div>

                <Link
                  to={`/travel-plans?destination=${encodeURIComponent(
                    destination.name
                  )}`}
                  className="explore-link"
                >
                  Explore
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}