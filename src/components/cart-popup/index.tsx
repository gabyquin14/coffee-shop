import { FC, useEffect, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import CartPopUpCard from "./cart-card";
import "./cart-popup.css";
import { useAppSelector } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import checkout from "../../utils/checkout";
import FilledButton from "../button/filledButton";

interface Props {
  showCartHandler: () => void;
  showCart: boolean;
}

export const CartPopUp: FC<Props> = ({ showCartHandler, showCart }) => {
  const navigate = useNavigate();
  const productData = useAppSelector((state) => state.cart.productData);
  const userInfo = useAppSelector((state) => state.cart.userInfo);
  const [totalAmmount, setTotalAmmount] = useState(0);

  const handleViewCart = () => {
    showCartHandler();
    navigate("/cart");
  };
  const handleCheckout = async () => {
    try {
      const url = await checkout(productData, userInfo);
      window.location.assign(url as string);
    } catch (err) {
      toast.error("Please sign in to checkout");
    }
  };

  useEffect(() => {
    let price = 0;
    productData.map((coffee) => {
      price += Number(coffee.price) * coffee.quantity;
      return price;
    });
    setTotalAmmount(price);
  }, [productData]);

  return (
    <div className={`cart-popup-wrapper ${showCart ? "active" : ""}`}>
      <div className={`cart-popup ${showCart ? "active" : ""}`}>
        <div className="cart-popup-header">
          <h1>Shopping Cart</h1>
          <HiOutlineX onClick={showCartHandler} />
        </div>
        <div className="cart-popup-content">
          {productData.map((coffee) => (
            <CartPopUpCard coffee={coffee} key={coffee.id} />
          ))}
        </div>

        <div className="cart-popup-footer">
          <div className="cart-popup-footer-total">
            <h2>Subtotal</h2>
            <span>${totalAmmount}.00</span>
          </div>
          <div className="cart-popup-footer-total">
            <h2>Total</h2>
            <span>${totalAmmount}.00</span>
          </div>
          <div className="cart-popup-footer-actions">
            <FilledButton
              text="View Cart"
              type="dark"
              onclick={handleViewCart}
            />
            <FilledButton
              text="Check out"
              type="light"
              onclick={handleCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopUp;
