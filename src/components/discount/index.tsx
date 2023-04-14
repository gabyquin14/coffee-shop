import React, { FC } from "react";
import "./discount.css";
import Button from "../button";

export const Discount: FC = () => {
  return (
    <aside className="discount fade-up">
      <div>
        <h1>Get a discount with your first order!</h1>
        <span>Up to a 15% discount!</span>
      </div>
      <Button text="Copy code!" />
    </aside>
  );
};

export default Discount;
