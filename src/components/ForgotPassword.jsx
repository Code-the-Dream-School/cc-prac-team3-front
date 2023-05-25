import React, { useState } from "react";
import "./App.css"

export const Lost = () => {
    const [Email,setEmail]=useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
        console.log(setEmail);
      };
return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"#860f4c",textAlign:"center"}}>Recover Password</h1>
   <form onSubmit={handleSubmit}>
   <div><input className="a11" value={Email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your full Email" id="Email" name="Email"/></div> 
   <p><button className="a14">Recover</button></p>
   </form>
   <a className="a4" href="http://localhost:3002">Rembembered your password? Back login.</a>
   </div>

)
}
