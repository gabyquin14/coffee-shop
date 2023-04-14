import React, { FC, useEffect, useState } from "react";
import Hero from "../../components/landing-page/hero";
import Selection from "../../components/landing-page/selection";
import About from "../../components/landing-page/about/index";
import Reviews from "../../components/reviews";
import Discount from "../../components/discount";
import TrustSection from "../../components/landing-page/trust section";

export const Home: FC = () => {
  return (
    <div className="home">
      <Hero />
      <Selection />
      <About />
      <TrustSection />
      <Reviews />
      <Discount />
    </div>
  );
};

export default Home;
