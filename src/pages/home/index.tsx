import React, { FC, useEffect, useState } from "react";
import Hero from "../../components/hero";
import Selection from "../../components/brief selection";
import About from "../../components/about";
import Reviews from "../../components/reviews";

export const Home: FC = () => {
  return (
    <div className="home">
      <Hero />
      <Selection />
      <About />
      <Reviews />
    </div>
  );
};

export default Home;
