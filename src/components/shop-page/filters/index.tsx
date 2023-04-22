import { FC, useState } from "react";
import "./filters.css";
import { RiCloseFill } from "react-icons/ri";
import { GoChevronDown } from "react-icons/go";
import { TbLayoutGrid, TbCircuitChangeover } from "react-icons/tb";
import { RxMagnifyingGlass } from "react-icons/rx";
import { useAppDispatch } from "../../../redux/store";
import {
  alphabeticSort,
  priceLowToHighSort,
  priceHighToLowSort,
  fetchCoffees,
} from "../../../redux/infoSlice";

export const Filters: FC = () => {
  const dispatch = useAppDispatch();
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
            <li
              className="filters-coffee-option"
              onClick={() => window.location.assign("https://bit.ly/3mOQDrv")}
            >
              Best sellers
            </li>
            <li
              className="filters-coffee-option"
              onClick={() => dispatch(fetchCoffees())}
            >
              All
            </li>
          </ul>
          <h3 className="sort">Sort by:</h3>
          <ul className="filters-coffee-options sort flex-center">
            <li
              className="filters-coffee-option"
              onClick={() => dispatch(alphabeticSort())}
            >
              Alphabetic
            </li>
            <li
              className="filters-coffee-option"
              onClick={() => dispatch(priceHighToLowSort())}
            >
              Price: highest to lowest
            </li>
            <li
              className="filters-coffee-option"
              onClick={() => dispatch(priceLowToHighSort())}
            >
              Price: lowest to highest
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Filters;
