import { FC, useEffect, useState } from "react";
import CartCard from "../../components/cart-card";
import { useAppSelector } from "../../redux/store";
import "./cart.css";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../../redux/store";
import { resetCart } from "../../redux/cartSlice";
import { checkout } from "../../utils/checkout";
import FilledButton from "../../components/button/filledButton";

export const Cart: FC = () => {
  const productData = useAppSelector((state) => state.cart.productData);
  const userInfo = useAppSelector((state) => state.cart.userInfo);
  const [totalAmmount, setTotalAmmount] = useState(0);
  const dispatch = useAppDispatch();

  const handleResetCart = () => {
    dispatch(resetCart());
    toast.error("Your cart is empty!");
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
    <div className="cart">
      <div className="cart-items fade-up">
        <h1 className="cart-items-title">Shopping cart</h1>
        <div className="cart-coffees-container">
          {productData.map((coffee) => (
            <CartCard coffee={coffee} key={coffee.id} />
          ))}
        </div>

        <FilledButton
          text="Reset Cart"
          type="danger"
          onclick={handleResetCart}
        />
      </div>

      <div className="cart-total-container fade-up">
        <div className="cart-total-content">
          <h2>Cart totals</h2>
          <p className="cart-total-subtotal">
            <span>Subtotal</span>
            <span>${totalAmmount}.00</span>
          </p>
          <div className="cart-total-subtotal">
            <span>Shipping</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              veritatis.
            </span>
          </div>
        </div>
        <p className="cart-total">
          Total <span>${totalAmmount}.00</span>
        </p>
        <FilledButton
          text="Proceed to checkout"
          type="light"
          onclick={handleCheckout}
        />
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Cart;
