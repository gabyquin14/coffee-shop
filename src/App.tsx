import React, { FC, useEffect, useRef } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Details from "./pages/details";
import Cart from "./pages/cart";

export const App: FC = () => {
  const location = useLocation();
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
  }, [location.pathname]);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
