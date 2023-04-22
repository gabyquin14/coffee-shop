import React, { FC } from "react";
import "./hero-shop.css";

export const Hero: FC = () => {
  return (
    <section className="hero-shop" id="hero-shop">
      <div className="hero-shop-wrapper">
        <div className="hero-shop-content fade-up">
          <h1>Welcome to Gab's coffee shop</h1>
          <p>
            We offer a broad assortment of coffees. Feel free to browse and buy
            something to your liking!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
