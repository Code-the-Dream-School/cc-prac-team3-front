import React, { useState } from "react";
import "./App.css"

export const ForgotPassword = () => {
    const [email,setEmail]=useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(setEmail);
      };
return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"#860f4c",textAlign:"center"}}>Recover Password</h1>
   <form onSubmit={handleSubmit}>
   <div><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your full Email" id="Email" name="Email"/></div> 
   <p><button className="direction-to-the-other-page-2">Recover</button></p>
   </form>
   <a className="create-new-account" href="/">Rembembered your password? Back login.</a>
   </div>

)
}