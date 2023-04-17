import React, { FC } from "react";
import "./selection-card.css";
import { Coffee } from "../../../types/types";
import { NavLink } from "react-router-dom";

interface Props {
  coffee: Coffee;
}

export const SelectionCard: FC<Props> = ({ coffee }) => {
  return (
    <article className="selection-card">
      <NavLink to={`/shop/details/${coffee.id}`} className="selection-card">
        <img src={coffee.image} alt="" className="selection-card-img" />
        <div className="selection-card-content">
          <div className="selection-card-title">
            <h2>{coffee.name}</h2>
            <span>${coffee.price}.00 USD</span>
          </div>

          <button>Add to cart</button>
        </div>
      </NavLink>
    </article>
  );
};

export default SelectionCard;
