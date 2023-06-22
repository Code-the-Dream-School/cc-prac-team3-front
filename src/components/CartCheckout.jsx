import React from "react";
import "./App.css"
import { CheckoutProducts } from "./CheckoutProducts";
import {useNavigate} from "react-router-dom"

  export const CartCheckout= (props) => {

    const navigate = useNavigate()

    const {items,setItems}=props
    console.log(items)
    console.log(setItems)

    function handleClickAdd(){
      navigate('/OrderSuccess')
    }

    function handleRemove(itemToRemove){
      const newItems = items.filter(item => item.title !== itemToRemove.title)
      setItems(newItems)
    }
let total= 0
for (let y=0; y<items.length;y++){
  total=(items[y].quantity*items[y].value)+total
}

return (
  <div className="cartCheckout">
    <div className="cartCheckout-products">
    {items.map((item) => <CheckoutProducts onRemove={handleRemove} imagen={item.imagen} title={item.title} value={item.value} key={item.title} quantity={item.quantity} />)}
    </div>
    <div className="cartCheckout-total">
    <p><div className="Cart-checkout"> Subtotal :${total} </div></p>
    <p><div className="Cart-checkout-2"> Total: ${total}</div></p>
    <div><p><button disabled={items.length===0} onClick={handleClickAdd} className="product-car-2">Checkout</button></p></div>
    </div>
  </div>

)
}

