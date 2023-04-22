import React, { FC } from "react";
import "./checkout-response.css";
import { NavLink, useNavigate } from "react-router-dom";
import FilledButton from "../../components/button/filledButton";

interface Props {
  type: string;
}

const CheckoutResponse: FC<Props> = ({ type }) => {
  const navigate = useNavigate();
  return (
    <section className="checkout fade-up">
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
      <FilledButton text="Go back to store" onclick={() => navigate("/")} />
    </section>
  );
};

export default CheckoutResponse;
