import React, { FC } from "react";
import "./shop.css";
import Hero from "../../components/shop-page/hero";
import Filters from "../../components/shop-page/filters";
import Selection from "../../components/shop-page/selection";

export const Shop: FC = () => {
  return (
    <div className="shop">
      <Hero />
      <Filters />
      <Selection />
    </div>
  );
};

export default Shop;
