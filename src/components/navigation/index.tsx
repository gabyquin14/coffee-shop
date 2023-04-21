import React, { FC, useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navigation.css";
import CartPopUp from "../cart-popup";
import { useAppSelector } from "../../redux/store";

export const Navigation: FC = () => {
  const productData = useAppSelector((state) => state.cart.productData);
  const userInfo = useAppSelector((state) => state.cart.userInfo);
  const location = useLocation();

  const navbarRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const navLinksRef = useRef<HTMLUListElement>(null);

  const [showCart, setShowCart] = useState(false);

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
    const observerTarget = objectTarget();

    if (observerTarget) {
      navObs.observe(observerTarget);
    }
  }, [navbarRef, location.pathname]);

  const objectTarget = () => {
    if (location.pathname === "/") {
      return document.getElementById("hero");
    } else if (location.pathname === "/shop") {
      return document.getElementById("hero-shop");
    } else if (location.pathname.includes("/shop/details")) {
      return document.getElementById("coffe-main-image");
    } else {
      navbarRef.current?.classList.add("active");
    }
  };
  const showCartHandler = () => {
    const htmlElement = document.documentElement;
    htmlElement.classList.toggle("hidden");
    setShowCart(!showCart);
  };

  return (
    <>
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

            <li className="navigation-link" onClick={showCartHandler}>
              <AiOutlineShoppingCart />
              <span>{productData.length}</span>
            </li>
            <li className="navigation-link">
              <NavLink to={"/login"}>
                <img
                  src={
                    userInfo?.image
                      ? userInfo.image
                      : "https://i.ibb.co/D4FnXWZ/latte-art.jpg"
                  }
                  alt="user-profile-img"
                />
              </NavLink>
            </li>
            {userInfo && (
              <li className="navigation-link">
                <h2>{userInfo?.name}</h2>
              </li>
            )}
          </ul>
        </div>
      </div>
      {showCart && (
        <CartPopUp showCartHandler={showCartHandler} showCart={showCart} />
      )}
    </>
  );
};

export default Navigation;
