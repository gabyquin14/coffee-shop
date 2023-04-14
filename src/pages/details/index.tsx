import React, { FC } from "react";
import "./details.css";
import useGetItem from "../../utils/useGetItem";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineArrowLeft, AiOutlineShoppingCart } from "react-icons/ai";

export const Details: FC = () => {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const data = useGetItem({ url: `coffee/${type}/${id}` });

  return (
    <>
      {data && (
        <section className="details">
          <button className="details-back" onClick={(): void => navigate(-1)}>
            <AiOutlineArrowLeft /> <>Go back</>
          </button>
          <div className="details-container">
            <img src={data.image} alt="" />
            <div className="details-content">
              <div className="details-title">
                <h1>{data.name}</h1>
                <span>$5.00</span>
              </div>
              <button className="details-add-to-cart">
                <>Add to cart</>
                <AiOutlineShoppingCart />
              </button>
              <p>{data.description}</p>
              <h3>Ingredients</h3>
              <ul>
                {data.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Details;
