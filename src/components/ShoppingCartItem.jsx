import React from "react";
import{ShoppingCart} from "phosphor-react"
import "./App.css"


  export const ShoppingCartItem= (props) => {

    let count
    if ( props.count>0){count=props.count}

    return (
    <span className="shoppingCartItem" >
      <span className="shoppinCartItemCount"> {count}</span>
     <ShoppingCart size={28} />
    </span>
)
}