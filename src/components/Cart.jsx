import React , {useState,useEffect}from "react";
import { Link } from "react-router-dom";
import "./App.css"
import{Products} from "./Products"
import { ShoppingCartItem } from "./ShoppingCartItem";

  export const Cart = (props) => {
 const {items,setItems}=props
 const [count, setCount] = useState(0)
 useEffect(() => {
  let nextCount=(0)
  for (let y=0; y<items.length;y++){
    nextCount=items[y].quantity+nextCount
  }
setCount(nextCount)
 }, [items])

    function addTocart(cartItem){
      const newItems = items.map(it => ({...it}))
      const matchItem= newItems.find(item => item.title === cartItem.title)
      if (matchItem){
        matchItem.quantity=matchItem.quantity+cartItem.quantity
        setItems(newItems)
      }else {
        newItems.push(cartItem)
        setItems(newItems)
      }
     
  }

console.log(count,items)
return (
<div>
   <div className="cart">
       <div className="links">
      <Link to="/"> Shop </Link>
     <Link to="/CartCheckout"> <ShoppingCartItem count={count}/>
     </Link>
   </div>
   </div>
   <div>
   <Products onAdd={addTocart} title="Swim diaper" value="10.5" imagen="https://images.ctfassets.net/50gzycvace50/df53f75c621d8a7e512b7f6413091494f68b9e335e58c25420b010a4cd8dd2b6/05ac75d65912f8d5a03f9398c4734afb/df53f75c621d8a7e512b7f6413091494f68b9e335e58c25420b010a4cd8dd2b6.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620"/>
   <Products onAdd={addTocart} title="Eco snap swim diaper" value="20.15" imagen="https://images.ctfassets.net/50gzycvace50/ee9af4ec603745029a3ee53c905bc3dd593df8af56e964c012a211bd8fe7e873/5704b32583e67fa954ad6f20c558cfe1/ee9af4ec603745029a3ee53c905bc3dd593df8af56e964c012a211bd8fe7e873.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620" />
   <Products onAdd={addTocart} title="Short" value="15.02" imagen="https://images.ctfassets.net/50gzycvace50/f53007678e7aad8b10a57466658776b8bbc032881765611f24df9bbcb459da53/79c9408e44670e59d432218f6b871b8e/f53007678e7aad8b10a57466658776b8bbc032881765611f24df9bbcb459da53.png?fl=progressive&fm=jpg&bg=rgb:f9f9f9&w=620&h=620" />
   </div>
   </div>


)
}