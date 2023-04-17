import React, { FC, useEffect, useState } from "react";
import useGetItems from "../../utils/useGetItems";
import { HiOutlineX } from "react-icons/hi";
import "./cart-card.css";
import { Coffee } from "../../types/types";

interface Props {
  coffee: Coffee;
}

export const CartCard: FC<Props> = ({ coffee }) => {
  return (
    <div className="cart-card">
      <table className="cart-card-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={coffee.image} alt="" />
              <span>{coffee.name} coffee</span>
            </td>
            <td>{coffee.price}</td>
            <td>{coffee.price}</td>
            <td>{coffee.price}</td>
            <td>
              <HiOutlineX />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="coffee-details-buy-now" style={{ width: "30rem" }}>
        Continue shopping
      </button>
      <div className="total-container">
        <h1>Cart totals</h1>
        <div className="coffee-details-separator"></div>
        <div className="total-amount-container">
          <h3>Total</h3>
          <span>$39.00</span>
        </div>
        <button className="coffee-details-buy-now" style={{ width: "30rem" }}>
          Proceed to checkout
        </button>
      </div>
    </div>
  );
};

export default CartCard;
