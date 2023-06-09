import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { ImUser } from "react-icons/im";
import { MdShoppingBasket } from "react-icons/md";
import { BsSearchHeart } from "react-icons/bs";
import styles from "./Navbar.module.css";


function Navbar(props) {
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
                <NavLink to="/Shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/register">Account</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className={styles.icons}>
            <BsSearchHeart />
            <ImUser />
            <Link to="/CartCheckout"> 
            <span className="navbar-cart">
             <strong> <span className="navbar-cart-count"> {props.count && props.count} </span></strong>
             <MdShoppingBasket />
             </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
