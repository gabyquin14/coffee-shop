import React, { FC, useEffect, useState } from "react";
import "./container.css";
import { useParams } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import Crumbs from "../../crumbs";
import { Coffee } from "../../../types/types";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { addToCart } from "../../../redux/cartSlice";

interface Props {
  coffee?: Coffee;
  setId: React.Dispatch<React.SetStateAction<String | undefined>>;
}

export const CoffeeDetails: FC<Props> = ({ coffee, setId }) => {
  const { id } = useParams();
  const [baseQuantity, setBaseQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.info.status);
  const dispatchCart = () => {
    coffee &&
      dispatch(
        addToCart({
          id: coffee.id,
          name: coffee.name,
          image: coffee.image,
          price: coffee.price,
          quantity: baseQuantity,
          description: coffee.description,
        })
      );
    toast.success(`${coffee?.name} coffee is added`);
  };
  useEffect(() => {
    id && setId(id as string);
  }, []);

  return (
    <>
      <section className="coffee-details ">
        {coffee && (
          <>
            <Crumbs coffee={coffee.name} />
            <div className="coffee-details-container">
              <img
                src={coffee.image}
                alt=""
                className="coffee-details-img"
                id="coffe-main-image"
              />
              <div className="coffee-details-content">
                <h1 className="coffee-details-title">{coffee.name} coffee</h1>
                <span className="coffee-details-price">
                  ${coffee.price}.00 USD
                </span>

                <div className="coffee-details-description">
                  <p>{coffee.description}</p>
                  <p>
                    Now, a couple of dad jokes: What did one plate whisper to
                    the other plate? Dinner is on me. Why did the scarecrow win
                    an award? He was outstanding in his field. What are the
                    strongest days of the week? Saturday and Sunday. All the
                    others are weekdays.
                  </p>
                </div>
                <div className="coffee-details-separator"></div>
                <h3 className="coffee-details-quantity-title">Quantity:</h3>
                <div className="coffee-details-cart">
                  <div className="coffee-details-quantity-container">
                    <button
                      className="coffee-details-decrement"
                      onClick={() =>
                        setBaseQuantity(
                          baseQuantity === 1 ? 1 : baseQuantity - 1
                        )
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                    <input
                      type="number"
                      className="coffee-details-quantity"
                      min={1}
                      max={99}
                      value={baseQuantity}
                    />
                    <button
                      className="coffee-details-increment"
                      onClick={() => setBaseQuantity(baseQuantity + 1)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>

                  <button
                    className="coffee-details-add-to-cart"
                    onClick={dispatchCart}
                  >
                    <>Add to cart</>
                    <AiOutlineShoppingCart />
                  </button>
                </div>

                <button className="coffee-details-buy-now">Buy now!</button>
              </div>
            </div>
          </>
        )}
      </section>

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
    </>
  );
};

export default CoffeeDetails;
