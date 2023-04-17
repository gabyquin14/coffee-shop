import React, { FC, useState } from "react";
import "./filters.css";
import { RiCloseFill } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";
import { TbLayoutGrid, TbCircuitChangeover } from "react-icons/tb";
import { RxMagnifyingGlass } from "react-icons/rx";

export const Filters: FC = () => {
  const [dropdown, setDropdown] = useState(false);
  const [filters, setFilters] = useState(false);

  return (
    <aside className="filters">
      <div className="filters-bar flex-center">
        <div className="filters-dropdown flex-center">
          <div
            className="filters-dropdown-title flex-center"
            onClick={() => setFilters(true)}
          >
            <TbCircuitChangeover />
            <h3>Filter</h3>
          </div>
          <GoChevronDown onClick={() => setDropdown(!dropdown)} />
        </div>
        <div className="filters-separator" />
        <div className="filters-layout flex-center">
          <TbLayoutGrid />
          <RxMagnifyingGlass />
        </div>
      </div>

      <div
        className={`filters-coffee-container ${filters ? "active" : ""}`}
        onClick={() => setFilters(false)}
      >
        <div
          className={`filters-coffee flex-center ${filters ? "active" : ""}`}
        >
          <RiCloseFill
            className="filters-coffee-close"
            onClick={() => setFilters(false)}
          />
          <h1>Coffees Filters</h1>
          <h3>Filter by:</h3>
          <ul className="filters-coffee-options flex-center">
            <li className="filters-coffee-option">Best sellers</li>
            <li className="filters-coffee-option">All</li>
          </ul>
          <h3 className="sort">Sort by:</h3>
          <ul
            className={`filters-coffee-options sort flex-center ${
              dropdown ? "active" : ""
            }`}
          >
            <li
              onClick={() => console.log("domo")}
              className="filters-coffee-option"
            >
              Alphabetic
            </li>
            <li className="filters-coffee-option">Price: highest to lowest</li>
            <li className="filters-coffee-option">Price: lowest to highest</li>
          </ul>
        </div>
      </div>

      <ul
        className={`filters-dropdown-content flex-center ${
          dropdown ? "active" : ""
        }`}
      >
        <li
          onClick={() => console.log("domo")}
          className="filters-dropdown-option"
        >
          Alphabetic
        </li>
        <li className="filters-dropdown-option">Price: highest to lowest</li>
        <li className="filters-dropdown-option">Price: lowest to highest</li>
      </ul>
    </aside>
  );
};

export default Filters;
