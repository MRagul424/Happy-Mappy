import { useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";

import { destinations } from "../data/travelData";
import DestinationCard from "../components/DestinationCard";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(destinations.map((item) => item.category)),
  ];

  const filteredDestinations = useMemo(() => {
    return destinations.filter((destination) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        destination.name.toLowerCase().includes(searchText) ||
        destination.state.toLowerCase().includes(searchText) ||
        destination.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" ||
        destination.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <main>

      <section className="page-header">

        <div className="page-header-content">

          <span className="section-label">
            <MapPin size={17} />
            Explore
          </span>

          <h1>
            Discover destinations
          </h1>

          <p>
            Explore our collection of beautiful destinations and
            find your next place to visit.
          </p>

        </div>

      </section>

      <section className="section">

        {/* SEARCH */}
        <div className="destination-tools">

          <div className="search-box">

            <Search size={19} />

            <input
              type="text"
              placeholder="Search destinations..."
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

        {/* RESULT */}
        <div className="results-count">
          Showing {filteredDestinations.length} destination
          {filteredDestinations.length !== 1 ? "s" : ""}
        </div>

        <div className="destination-grid">

          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

        {filteredDestinations.length === 0 && (
          <div className="empty-state">

            <Search size={40} />

            <h3>
              No destinations found
            </h3>

            <p>
              Try another destination or category.
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