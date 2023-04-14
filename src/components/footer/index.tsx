import React, { FC, useEffect, useState } from "react";
import "./footer.css";
import {
  AiFillYoutube,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";

export const Footer: FC = () => {
  const [dropdown, setDropdown] = useState<Number | null>(null);

  const openDropdown = (index: number) => {
    dropdown === index ? setDropdown(null) : setDropdown(index);
  };

  return (
    <div className="footer ">
      <div className="footer-wrapper">
        <div className="footer-info fade-up">
          <h1>GabsCS Shop</h1>
          <div className="social-media">
            <ul>
              <li>
                <a href="#">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-links fade-up">
          <div
            className="footer-links-header"
            onClick={(): void => openDropdown(1)}
          >
            <h2>Navigate</h2>
            {dropdown === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <ul className={dropdown === 1 ? "active" : ""}>
            <li>
              <a href="#about">Home</a>
            </li>
            <li>
              <a href="#">Our coffees</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-links fade-up">
          <div
            className="footer-links-header"
            onClick={(): void => openDropdown(2)}
          >
            <h2>About us</h2>
            {dropdown === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <ul className={dropdown === 2 ? "active" : ""}>
            <li>
              <a href="#about">Galleria</a>
            </li>
            <li>
              <a href="#">Our shop💕</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms and Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-links fade-up">
          <div
            className="footer-links-header"
            onClick={(): void => openDropdown(3)}
          >
            <h2>Contact</h2>
            {dropdown === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </div>
          <div
            className={`${
              dropdown === 3 ? "letter-active " : ""
            } footer-newsletter`}
          >
            <p>Subscribe to hear about sales, new brews, and events.</p>
            <input type="text" placeholder="Email address" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
