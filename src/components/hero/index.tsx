import React, { FC } from "react";
import "./hero.css";
import Separator from "../separator";
import { NavLink } from "react-router-dom";

export const Hero: FC = () => {
  return (
    <div className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1>GAB'S COFFEE SHOP</h1>
          <Separator />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
            debitis expedita est nisi praesentium sapiente enim doloribus
            explicabo, facere porro, pariatur, quos similique dicta eaque
            tenetur laudantium cumque numquam! Commodi.
          </p>
          <button>
            <NavLink to={"/shop"}>Shop now!</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
