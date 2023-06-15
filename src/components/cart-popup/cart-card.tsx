import React, { FC, useEffect, useState } from "react";
import { TbTrash } from "react-icons/tb";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { CoffeeCart } from "../../types/types";
import { toast } from "react-toastify";
import {
  deleteItem,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/cartSlice";
import { useAppDispatch } from "../../redux/store";

interface Props {
  coffee: CoffeeCart;
}

export const CartPopUpCard: FC<Props> = ({ coffee }) => {
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
    <div className="cart-popup-card">
      <img src={coffee?.image} alt="" className="cart-popup-card-img" />
      <div className="cart-popup-card-content">
        <div className="cart-popup-card-title">
          <h2>{coffee?.name} coffee</h2>
          <button onClick={handleDeleteItem}>
            <TbTrash />
          </button>
        </div>
        <div className="coffee-details-quantity-container">
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
        <span className="cart-popup-card-price">${coffee?.price}.00</span>
      </div>
    </div>
  );
};

export default CartPopUpCard;
