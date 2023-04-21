import { toast } from "react-toastify";
import { useAppSelector } from "../redux/store";
import { CoffeeCart } from "../types/types";
import { userInterface } from "../redux/cartSlice";

export const checkout = async (
  productData: CoffeeCart[],
  userInfo: userInterface | null
) => {
  return new Promise((resolve, reject) => {
    if (userInfo) {
      fetch("http://localhost:4000/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: productData }),
      })
        .then((resp) => {
          return resp.json();
        })
        .then((resp) => {
          if (resp.url) {
            resolve(resp.url);
          } else {
            reject("Checkout failed");
          }
        })
        .catch((err) => reject(err));
    } else {
      reject("Please sign in to checkout");
    }
  });
};

export default checkout;
