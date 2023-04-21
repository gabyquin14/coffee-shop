import React, { FC } from "react";
import "./checkout-response.css";
import { NavLink } from "react-router-dom";

interface Props {
  type: string;
}

const CheckoutResponse: FC<Props> = ({ type }) => {
  return (
    <section className="checkout">
      {type === "success" ? (
        <div className="checkout-content">
          <h1>Thanks for shopping with us!</h1>
          <span>Hope you had an amazing time with us</span>
        </div>
      ) : (
        <div className="checkout-content">
          <h1>The purchased was canceled</h1>
          <span>Please try again!</span>
        </div>
      )}
      <button className="checkout-back-button">
        <NavLink to={"/"}>Go back to store</NavLink>
      </button>
    </section>
  );
};

export default CheckoutResponse;
