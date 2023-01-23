import React, { FC } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Navigation from "./components/navigation";
import Footer from "./components/footer";

export const App: FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
