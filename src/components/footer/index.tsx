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
                <a href="https://bit.ly/3mOQDrv">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li>
                <a href="https://bit.ly/3mOQDrv">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://bit.ly/3mOQDrv">
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
          <ul
            className={`footer-links-options ${dropdown === 1 ? "active" : ""}`}
          >
            <li>
              <a href="https://bit.ly/3mOQDrv">Home</a>
            </li>
            <li>
              <a href="https://bit.ly/3mOQDrv">Our coffees</a>
            </li>
            <li>
              <a href="https://bit.ly/3mOQDrv">Contact</a>
            </li>
            <li>
              <a href="https://bit.ly/3mOQDrv">Help</a>
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
          <ul
            className={`footer-links-options ${dropdown === 2 ? "active" : ""}`}
          >
            <li>
              <a href="https://bit.ly/3KPniFg">Galleria</a>
            </li>
            <li>
              <a href="https://bit.ly/3KPniFg">Our shop💕</a>
            </li>
            <li>
              <a href="https://bit.ly/3KPniFg">Privacy</a>
            </li>
            <li>
              <a href="https://bit.ly/3KPniFg">Terms and Conditions</a>
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
