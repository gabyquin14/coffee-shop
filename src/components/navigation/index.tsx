import React, { FC } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./navigation.css";

export const Navigation: FC = () => {
  const location = useLocation();
  return (
    <div className="navigation">
      <h1>GabsCS</h1>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        {location.pathname === "/shop" && (
          <li>
            <AiOutlineShoppingCart />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navigation;
