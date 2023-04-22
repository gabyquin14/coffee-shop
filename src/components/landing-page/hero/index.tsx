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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            debitis expedita est nisi praesentium sapiente enim doloribus
            explicabo, facere porro, pariatur, quos similique dicta eaque
            tenetur laudantium cumque numquam! Commodi.
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
