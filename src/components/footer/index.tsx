import React, { FC, useEffect, useState } from "react";
import "./footer.css";

export const Footer: FC = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h1>GabsCS</h1>
        <span>gabsCS@coffee.com</span>
        <span>(123) 456789</span>
      </div>
      <div className="footer-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="footer-newsletter">
        <h3>Subscribe to out newsletter</h3>
        <p>Subscribe to hear about sales, new brews, and events.</p>
        <input type="text" placeholder="Email address" />
      </div>
    </div>
  );
};

export default Footer;
