import React, {useState } from "react";


export const Cart = (props) => {

 const [isEmpty, setIsEmpty] = useState(true);    
console.log(setIsEmpty)

return (
   
    <div style={{textAlign:"center"}}>
   <h1 style={{color:"#850b70",textAlign:"center"}}> Cart Page</h1>

   {isEmpty ? (
        <p>Your cart is Empty...</p>
      ) : (
        <p>Here is Shopping...</p>
      )}
   </div>

)
}
