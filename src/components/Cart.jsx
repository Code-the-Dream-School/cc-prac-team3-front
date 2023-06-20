import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./App.css";

export const Cart = (props) => {
  const [isEmpty, setIsEmpty] = useState(true);
  console.log(setIsEmpty);

  return (
    <div style={{ textAlign: "center" }}>
      <div className="cart">
        <div className="links">
          <Link to="/"> Shop </Link>
          <Link to="/cart">
            <ShoppingCart size={32} />
          </Link>

          {isEmpty ? <p></p> : <p>Here is Shopping...</p>}
        </div>
      </div>
    </div>
  );
};
