import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { MdShoppingBasket } from "react-icons/md";
import styles from "./Navbar.module.css";

function Navbar() {
  const [showNavbarMenu, setShowNavbarMenu] = useState(false);

  const handleShowNavbarMenu = () => {
    if (!showNavbarMenu) {
      setShowNavbarMenu(showNavbarMenu);
    } else {
      setShowNavbarMenu(!showNavbarMenu);
    }
    setShowNavbarMenu(false);
  };

  return (
    <>
      <nav id="navbar">
        <div className={styles.container}>
          <div className="logo">
            <h1>Nursery Finds</h1>
          </div>
          <div className={styles.menu} onClick={handleShowNavbarMenu}>
            <CgMenu />
          </div>
          <div className={styles.elements}>
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
          <ImUser />
          <MdShoppingBasket />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
