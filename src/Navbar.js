import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { MdShoppingBasket } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import styles from "./Navbar.module.css";

function Navbar() {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const handleShowNavbarMenu = () => {
    setShowNavbarMenu((showNavbarMenu) => !showNavbarMenu);
  };

  return (
    <>
      <nav id="navbar">
        <div className={styles.container}>
          <div className={styles.menu} onClick={handleShowNavbarMenu}>
            <CgMenu />
          </div>
          <div className="logo">
            <h1>Nursery Finds</h1>
          </div>
          <div
            className={showNavbarMenu ? styles.elementsMobile : styles.elements}
          >
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/account">Account</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <BsSearchHeart />
            <ImUser />
            <MdShoppingBasket />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;