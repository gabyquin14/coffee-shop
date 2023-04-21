import React, { FC, useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CoffeeCart } from "../../types/types";

interface Props {
  coffee: CoffeeCart;
}

export const CartPopUpCard: FC<Props> = ({ coffee }) => {
  return (
    <div className="cart-popup-card">
      <img src={coffee?.image} alt="" className="cart-popup-card-img" />
      <div className="cart-popup-card-content">
        <div className="cart-popup-card-title">
          <h2>{coffee?.name} coffee</h2>
          <button>
            <TbTrash />
          </button>
        </div>
        <div className="coffee-details-quantity-container">
          <button className="coffee-details-decrement">
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            className="coffee-details-quantity"
            min={1}
            max={99}
            value={coffee.quantity}
          />
          <button className="coffee-details-increment">
            <AiOutlinePlus />
          </button>
        </div>
        <span className="cart-popup-card-price">${coffee?.price}.00</span>
      </div>
    </div>
  );
};

export default CartPopUpCard;
