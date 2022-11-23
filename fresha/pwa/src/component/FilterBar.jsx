import { FaSlidersH, FaSortAlphaDown } from "react-icons/fa";
import { HiSearch } from "react-icons/hi";

export function FilterBar({ searchBar = true }) {
  return (
    <div className="filter-bar">
      <div className="search-bar__input-group">
        <HiSearch className="search-bar__search-icon" />
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search client by typing client name"
        />
      </div>
      <button className="filter-bar__filter-option-btn">
        Filters <FaSlidersH />
      </button>
      <button className="filter-bar__sort-by-name-btn">
        First name(A-Z) <FaSortAlphaDown />
      </button>
    </div>
  );
}
