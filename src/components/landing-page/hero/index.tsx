import React, { FC } from "react";
import "./hero.css";
import Separator from "../../separator";
import { NavLink, useNavigate } from "react-router-dom";
import FilledButton from "../../button";

export const Hero: FC = () => {
  const navigate = useNavigate();
  return (
    <section className="hero" id="hero">
      <div className="hero-wrapper">
        <div className="hero-content fade-up">
          <h1>GAB'S COFFEE SHOP</h1>
          <Separator />
          <p>
            Welcome to our amazing coffee shop! A place where everyone is
            embraced with warmth and exceptional brews. Indulge in our
            passion-filled coffees crafted with care. Join us and savor the
            moments!
          </p>
          <FilledButton
            text="Shop now!"
            type="light"
            clickFunction={() => navigate("/shop")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
