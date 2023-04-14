import React, { FC, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Details from "./pages/details";

export const App: FC = () => {
  useEffect(() => {
    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("faded");
          fadeUpObserver.unobserve(entry.target);
        }
      });
    });

    document.querySelectorAll(".fade-up").forEach((el) => {
      fadeUpObserver.observe(el);
    });
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:type/:id" element={<Details />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
