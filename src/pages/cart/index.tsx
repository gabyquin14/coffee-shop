import React, { FC, useEffect, useState } from "react";
import useGetItems from "../../utils/useGetItems";
import CartCard from "../../components/cart-card";
import "./cart.css";

export const Cart: FC = () => {
  const data = useGetItems();
  return <div className="cart">{data && <CartCard coffee={data?.[0]} />}</div>;
};

export default Cart;
