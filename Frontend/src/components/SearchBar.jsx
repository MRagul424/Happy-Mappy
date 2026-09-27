import React from "react";

import {
  Search,
  SlidersHorizontal
} from "lucide-react";

export default function SearchBar({
  search,
  setSearch,
  category,
  setCategory
}) {

  return (
    <div className="search-section">

      <div className="search-wrapper">

        <div className="search-input">

          <Search size={21} />

          <input
            type="text"
            placeholder="Search destinations or travel plans..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

        </div>

        <div className="filter-wrapper">

          <SlidersHorizontal size={20} />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="All">All Plans</option>
            <option value="Adventure">Adventure</option>
            <option value="Couple">Couple</option>
            <option value="Family">Family</option>
            <option value="Luxury">Luxury</option>
            <option value="Relaxation">Relaxation</option>
          </select>

        </div>

      </div>

    </div>
  );
}