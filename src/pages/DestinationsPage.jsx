import { useMemo, useState } from "react";
import { Search, MapPin } from "lucide-react";

import { destinations } from "../data/travelData";
import DestinationCard from "../components/DestinationCard";

export default function DestinationsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(
      destinations.map(
        (item) => item.category
      )
    ),
  ];
  const filteredDestinations = useMemo(() => {
    const searchText =
      search.toLowerCase().trim();
    const filtered =
      destinations.filter(
        (destination) => {
          const matchesSearch =
            destination.name
              .toLowerCase()
              .includes(searchText) ||
            destination.state
              .toLowerCase()
              .includes(searchText) ||
            destination.category
              .toLowerCase()
              .includes(searchText);
          const matchesCategory =
            category === "All" ||
            destination.category ===
              category;
          return (
            matchesSearch &&
            matchesCategory
          );
        }
      );
    /*
      Sort destinations by duration:
      1 Day
      2 Days
      3 Days
    */
    return [...filtered].sort(
      (a, b) => {
        const daysA =
          parseInt(
            a.duration,
            10
          );
        const daysB =
          parseInt(
            b.duration,
            10
          );
        if (
          daysA !== daysB
        ) {
          return (
            daysA - daysB
          );
        }
        return a.name.localeCompare(
          b.name
        );
      }
    );
  }, [
    search,
    category,
  ]);
  return (
    <main>
      {/* ==================================================
          PAGE HEADER
      ================================================== */}
      <section className="page-header destinations-page-header">
        <div className="page-header-content">
          <span className="section-label">
            <MapPin size={17} />
            Explore
          </span>
          <h1>
            Discover destinations
          </h1>
          <p>
            Explore our collection of beautiful
            destinations and find your next place to visit.
          </p>
        </div>
      </section>
      {/* ==================================================
          DESTINATIONS
      ================================================== */}
      <section className="section destinations-section">
        {/* ==================================================
            CLEAN PAGE HEADING
        ================================================= */}
        <div className="destination-page-heading">
          <span className="destination-small-title">
            HAPPY MAPPY
          </span>
          <h2>
            Explore Your Destinations
          </h2>
          <p>
            Discover beautiful destinations, hidden gems
            and unforgettable places across India.
          </p>
        </div>
        {/* ==================================================
            SEARCH + CATEGORY
        ================================================== */}
        <div className="destination-tools">
          {/* SEARCH */}
          <div className="search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search destinations..."
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
        {/* ==================================================
            RESULT COUNT
        ================================================== */}
        <div className="results-count">
          Showing{" "}
          {filteredDestinations.length}{" "}
          destination
          {filteredDestinations.length !==
          1
            ? "s"
            : ""}
        </div>
        {/* ==================================================
            DESTINATION CARDS
        ================================================= */}
        <div className="destination-grid">
          {filteredDestinations.map(
            (destination) => (
              <DestinationCard
                key={destination.id}
                destination={
                  destination
                }
              />
            )
          )}
        </div>
        {/* ==================================================
            EMPTY RESULT
        ================================================== */}
        {filteredDestinations.length ===
          0 && (
          <div className="empty-state">
            <Search
              size={40}
            />
            <h3>
              No destinations found
            </h3>
            <p>
              Try another destination
              or category.
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
      {/* ==================================================
          DESTINATION PAGE HEADING CSS
      ================================================== */}
      <style>{`
        /* ================================================
           DESTINATION SECTION
        ================================================ */
        .destinations-section {
          width: min(1180px, 92%);
          margin: 0 auto;
          padding: 65px 0 80px;
        }
        /* ================================================
           CLEAN PAGE HEADING
        ================================================ */
        .destination-page-heading {
          width: 100%;
          margin: 0 0 30px;
        }
        .destination-small-title {
          display: block;
          margin-bottom: 18px;
          color: #008f63;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }
        .destination-page-heading h2 {
          margin: 0;
          color: #073b35;
          font-size: 36px;
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.5px;
        }
        .destination-page-heading p {
          margin: 14px 0 0;
          color: #607d78;
          font-size: 15px;
          line-height: 1.6;
        }
        /* ================================================
           SEARCH + CATEGORY
        ================================================ */
        .destination-tools {
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
        /* ================================================
           SEARCH BOX
        ================================================ */
        .search-box {
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
        .search-box input {
          flex: 1;
          width: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #19382d;
          font-size: 13px;
        }
        .search-box input::placeholder {
          color: #8a9b95;
        }
        /* ================================================
           CATEGORY BUTTONS
        ================================================ */
        .category-buttons {
          display: flex;
          gap: 7px;
          overflow-x: auto;
        }
        .category-button {
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
        .category-button:hover,
        .category-button.active {
          background: #087d57;
          border-color: #087d57;
          color: #ffffff;
        }
        /* ================================================
           RESULT COUNT
        ================================================ */
        .results-count {
          margin: 0 0 18px;
          color: #758781;
          font-size: 12px;
          font-weight: 700;
        }
        /* ================================================
           DESTINATION GRID
        ================================================ */
        .destination-grid {
          display: grid;
          grid-template-columns:
            repeat(3, minmax(0, 1fr));
          gap: 24px;
        }
        /* ================================================
           EMPTY STATE
        ================================================ */
        .empty-state {
          padding: 70px 20px;
          text-align: center;
          border: 1px dashed #cfded7;
          border-radius: 18px;
          background: #ffffff;
        }
        .empty-state svg {
          margin-bottom: 12px;
          color: #087d57;
        }
        .empty-state h3 {
          margin: 0;
          color: #214439;
          font-size: 20px;
        }
        .empty-state p {
          margin: 8px 0;
          color: #7b8d86;
          font-size: 13px;
        }
        .empty-state button {
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
           RESPONSIVE
        ================================================ */
        @media (max-width: 900px) {
          .destination-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }
          .destination-tools {
            flex-direction: column;
            align-items: stretch;
          }
          .search-box {
            min-width: 0;
          }
          .category-buttons {
            width: 100%;
          }
        }
        @media (max-width: 600px) {
          .destinations-section {
            width: 94%;
            padding-top: 42px;
            padding-bottom: 55px;
          }
          .destination-page-heading {
            margin-bottom: 24px;
          }
          .destination-small-title {
            margin-bottom: 12px;
            font-size: 11px;
          }
          .destination-page-heading h2 {
            font-size: 30px;
          }
          .destination-page-heading p {
            font-size: 14px;
          }
          .destination-grid {
            grid-template-columns: 1fr;
          }
          .destination-tools {
            padding: 10px;
          }
        }
      `}</style>
    </main>
  );
}