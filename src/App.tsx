import { FC, useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import Details from "./pages/details";
import Cart from "./pages/cart";
import Login from "./pages/login";
import CheckoutResponse from "./pages/checkout-response";
import { useAppDispatch } from "./redux/store";
import { fetchCoffees } from "./redux/infoSlice";

export const App: FC = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoffees());
    const fadeUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("faded");
          fadeUpObserver.unobserve(entry.target);
        }
      });
    });

    window.scrollTo(0, 0);

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
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<CheckoutResponse type="success" />} />
        <Route path="/cancel" element={<CheckoutResponse type="cancel" />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
