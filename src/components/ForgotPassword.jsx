import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

export const ForgotPassword = (props) => {
    const navigate = useNavigate();
    const [email,setEmail]=useState("");

    function handleClickPass(){
        navigate("/ResetPassword")
    }
  
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(setEmail);
      };
return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"#850b70",textAlign:"center"}}>Forgot password</h1>
   <form onSubmit={handleSubmit}>
   <div><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your full email" id="Email" name="Email"/></div> 
   <p><button className="direction-to-the-other-page-2"onClick={handleClickPass}>Recover</button></p>
   </form>
   <a className="create-new-account" href="/Login">Rembembered your password? Back login.</a>
   </div>

)
}