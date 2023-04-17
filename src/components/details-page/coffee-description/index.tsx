import React, { FC, useEffect, useState } from "react";
import "./coffee-description.css";
import { Coffee } from "../../../types/types";
import { FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

interface Props {
  data?: Coffee;
}

export const CoffeeDescription: FC<Props> = ({ data }) => {
  const [option, setOption] = useState("description");
  return (
    <section className="coffee-description">
      <div className="coffee-details-separator"></div>
      <div className="coffee-description-options">
        <button
          className={`coffee-description-option ${
            option === "description" ? "active" : ""
          }`}
          onClick={() => setOption("description")}
        >
          Description
        </button>
        <button
          className={`coffee-description-option ${
            option === "additional" ? "active" : ""
          }`}
          onClick={() => setOption("additional")}
        >
          Additional Information
        </button>
        <button
          className={`coffee-description-option ${
            option === "reviews" ? "active" : ""
          }`}
          onClick={() => setOption("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className="coffee-details-separator"></div>
      {option === "description" && (
        <section className="description-section">
          <div className="description-section-container">
            <img src="https://i.ibb.co/bgbCfqD/coffee-and-plants.jpg" alt="" />
            <div className="description-section-content">
              <h1>Things you need to know</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>
          <div className="description-section-container">
            <img src="https://i.ibb.co/FYXN02T/space-green.jpg" alt="" />
            <div className="description-section-content">
              <h1>Things you need to know</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </p>
            </div>
          </div>
        </section>
      )}
      {option === "additional" && data && (
        <section className="description-section">
          <div className="description-section-container">
            <img src="https://i.ibb.co/bgbCfqD/coffee-and-plants.jpg" alt="" />
            <div className="description-section-content">
              <h1>Things you need to know</h1>
              <p>
                We use industry standard SSL encryption to protect your details.
                Potentially sensitive information such as your name, address and
                card details are encoded so they can only be read on the secure
                server.
              </p>
              <h2>The ingredients that makes this nice coffee:</h2>
              <ul className="description-section-ingredients">
                {data.ingredients.map((ingredient) => (
                  <li key={ingredient}>{ingredient}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
      {option === "reviews" && (
        <section className="description-section">
          <h1 className="description-section-no-reviews">
            Nothing to show for now!
          </h1>
        </section>
      )}
      <div className="coffee-details-separator"></div>
      <div className="coffee-details-social-media">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaTiktok />
        </a>
      </div>
      <div className="coffee-details-separator"></div>
    </section>
  );
};

export default CoffeeDescription;
