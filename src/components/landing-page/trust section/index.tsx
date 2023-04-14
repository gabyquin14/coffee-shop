import React, { FC, useEffect, useState } from "react";
import "./trust.css";
import { CgCoffee } from "react-icons/cg";
import { GiCoffeePot } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import Separator from "../../separator";

export const TrustSection: FC = () => {
  return (
    <section className="trust-section">
      <h1>Why people choose us?</h1>
      <Separator color="#3c2828" />
      <div className="trust-section-content">
        <ul>
          <li>
            <FaHeart />
            <h2>Safe space for everyone</h2>
            <p>
              We offer a place where all kinds of people can be themselves while
              enjoying a good warm coffee
            </p>
          </li>
          <li>
            <CgCoffee />
            <h2>Latte art</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              inventore illum, assumenda eum hic
            </p>
          </li>
          <li>
            <GiCoffeePot />
            <h2>Manual brewing</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
              inventore illum, assumenda eum hic
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default TrustSection;
