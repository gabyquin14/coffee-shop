import React, { FC } from "react";
import "./card.css";
import { Coffee } from "../../../types/types";
import { NavLink } from "react-router-dom";

interface Props {
  product: Coffee;
}

export const Card: FC<Props> = ({ product }) => {
  return (
    <div className="card">
      <NavLink to={`/shop/details/${product.id}`}>
        <img
          src={product.image}
          alt="Close up of a coffee"
          className="card-coffee-img"
        />
      </NavLink>
      <div className="card-title">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default Card;
