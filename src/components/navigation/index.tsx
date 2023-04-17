import React, { FC, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navigation.css";

export const Navigation: FC = () => {
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  const expandNavbar = () => {
    let isExpanded: string;
    if (menuBtnRef.current) {
      navLinksRef.current?.classList.add("active");
      isExpanded = JSON.parse(
        menuBtnRef.current?.getAttribute("aria-expanded") as string
      );
      menuBtnRef.current?.setAttribute("aria-expanded", String(!isExpanded));
      !isExpanded && navbarRef.current?.classList.add("active");
    }
  };

  useEffect(() => {
    const navObs = new IntersectionObserver(
      (entries) =>
        navbarRef.current?.classList.toggle(
          "active",
          !entries[0].isIntersecting
        ),
      { threshold: 0.85 }
    );
    const observerTarget =
      location.pathname === "/shop"
        ? document.getElementById("hero-shop")
        : location.pathname.includes("/shop/details")
        ? document.getElementById("coffe-main-image")
        : document.getElementById("hero");
    if (observerTarget) {
      navObs.observe(observerTarget);
    }
  }, [navbarRef, location.pathname]);

  return (
    <div className={"navigation"} ref={navbarRef}>
      <NavLink to={"/"}>
        <h1 className="navigation-logo">GabsCS</h1>
      </NavLink>

      <div className="navigation-wrapper">
        <button
          className="navigation-hamb"
          aria-expanded={false}
          ref={menuBtnRef}
          onClick={expandNavbar}
        >
          <GiHamburgerMenu />
        </button>
        <ul className="navigation-links" ref={navLinksRef}>
          <li className="navigation-link">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="navigation-link">
            <NavLink to={"/shop"}>Shop</NavLink>
          </li>
          {/* {location.pathname === "/shop" && ( */}
          <li className="navigation-link">
            <NavLink to={"/cart"}>
              <AiOutlineShoppingCart />
            </NavLink>
          </li>
          {/* )} */}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
