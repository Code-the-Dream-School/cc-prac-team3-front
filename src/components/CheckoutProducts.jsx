import React from "react";
import "./App.css"


export const CheckoutProducts= (props) => {


    return(
        <div className="Products-3">
             <div>
                <img alt="Texto desc" className="imagen-checkout-products" src={props.imagen}></img>
                </div>
                <div>
                <div className="cheackout-products-title">{props.title}</div>
                <div className="checkout-products-value">${props.value}</div>
                <div className="checkout-products-quantity">QTY:{props.quantity}</div>
                <div><button onClick={() => { props.onRemove(props) }} className="checkout-products-car">Remove</button></div>
                </div>
        </div>
    )
}

