import React, { FC, useEffect, useState } from "react";
import useGetItems from "../../utils/useGetItems";
import { HiOutlineX } from "react-icons/hi";
import "./cart-card.css";
import { CoffeeCart } from "../../types/types";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import {
  deleteItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../../redux/store";

interface Props {
  coffee: CoffeeCart;
}

export const CartCard: FC<Props> = ({ coffee }) => {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(coffee.id));
    toast.error(`${coffee.name} coffee is removed`);
  };
  const handleIncrementQuantity = () => {
    dispatch(
      incrementQuantity({
        id: coffee.id,
        name: coffee.name,
        image: coffee.image,
        price: coffee.price,
        quantity: 1,
        description: coffee.description,
      })
    );
  };
  const handleDecrementQuantity = () => {
    dispatch(
      decrementQuantity({
        id: coffee.id,
        name: coffee.name,
        image: coffee.image,
        price: coffee.price,
        quantity: 1,
        description: coffee.description,
      })
    );
  };
  return (
    <div className="cart-card">
      <div className="cart-actions">
        <HiOutlineX className="cart-remove-item" onClick={handleDeleteItem} />
        <img src={coffee.image} alt="" />
      </div>

      <h1 className="cart-card-title">{coffee.name} coffee</h1>
      <span className="cart-coffee-price">${coffee.price}.00</span>
      <div className="cart-quantity-container">
        <div className="coffee-details-quantity-container">
          <h2>Quantity:</h2>
          <button
            className="coffee-details-decrement"
            onClick={handleDecrementQuantity}
          >
            <AiOutlineMinus />
          </button>
          <input
            type="number"
            className="coffee-details-quantity"
            min={1}
            max={99}
            value={coffee.quantity}
          />
          <button
            className="coffee-details-increment"
            onClick={handleIncrementQuantity}
          >
            <AiOutlinePlus />
          </button>
        </div>
      </div>

      <span className="cart-coffee-price">
        ${coffee.quantity * Number(coffee.price)}.00
      </span>
    </div>
  );
};

export default CartCard;
