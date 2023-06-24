import React, { useState } from "react";
import "./App.css"


export const Products= (props) => {

  const [quantity, setQuantity] = useState(0)

  const remove =()=>{
  if (quantity >0 ){setQuantity(quantity-1)}
  }

  const add =()=>{
  setQuantity(quantity +1)
  }

  function handleClickAdd(){
    console.log(quantity)
    if (quantity >0) {
      props.onAdd ({quantity,imagen:props.imagen,value:props.value,title:props.title})
      setQuantity(0)
    }
}

    return (

         <div className="Products">
            <div>
              <img alt="Texto desc" className="imagen" src={props.imagen}></img>
            
            </div>
          <div className="products-2">
          <div className="product-title">{props.title}</div>
          <p><div className="product-value">${props.value}</div></p>
          <div>Quantity:
       <div> <p><button className="product-quantity" onClick={remove}>−</button> {quantity} <button className="product-quantity" onClick={add}>+</button></p></div></div>
       <p><button onClick={handleClickAdd} className="product-car">Add to cart</button></p>
          </div>  
         </div>
      
     
      

    )
}