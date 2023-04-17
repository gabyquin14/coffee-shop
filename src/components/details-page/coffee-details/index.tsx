import React, { FC, useEffect, useState } from "react";
import "./container.css";
import { useParams } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import Crumbs from "../../crumbs";
import axios from "axios";
import { Coffee } from "../../../types/types";

interface Props {
  data?: Coffee;
  setId: React.Dispatch<React.SetStateAction<String | undefined>>;
}

export const CoffeeDetails: FC<Props> = ({ data, setId }) => {
  const { id } = useParams();

  useEffect(() => {
    id && setId(id as string);
  }, []);

  return (
    <>
      {data && (
        <section className="coffee-details">
          <Crumbs coffee={data.name} />
          <div className="coffee-details-container">
            <img
              src={data.image}
              alt=""
              className="coffee-details-img"
              id="coffe-main-image"
            />
            <div className="coffee-details-content">
              <h1 className="coffee-details-title">{data.name} coffee</h1>
              <span className="coffee-details-price">${data.price}.00 USD</span>

              <div className="coffee-details-description">
                <p>{data.description}</p>
                <p>
                  Now, a couple of dad jokes: What did one plate whisper to the
                  other plate? Dinner is on me. Why did the scarecrow win an
                  award? He was outstanding in his field. What are the strongest
                  days of the week? Saturday and Sunday. All the others are
                  weekdays.
                </p>
              </div>
              <div className="coffee-details-separator"></div>
              <h3 className="coffee-details-quantity-title">Quantity:</h3>
              <div className="coffee-details-cart">
                <div className="coffee-details-quantity-container">
                  <button className="coffee-details-decrement">
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="number"
                    className="coffee-details-quantity"
                    min={1}
                    max={99}
                    defaultValue={1}
                  />
                  <button className="coffee-details-increment">
                    <AiOutlinePlus />
                  </button>
                </div>

                <button className="coffee-details-add-to-cart">
                  <>Add to cart</>
                  <AiOutlineShoppingCart />
                </button>
              </div>

              <button className="coffee-details-buy-now">Buy now!</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CoffeeDetails;
