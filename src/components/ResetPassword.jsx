import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

export const ResetPassword = () => {
    const navigate = useNavigate();

    const [password,setPass1]=useState("");
    const [password2,setPass2]=useState("");

    function handleClickReset(){
        navigate("/Login")
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(password);
        console.log(password2)
      };
return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"#850b70",textAlign:"center"}}>Reset account password</h1>
   <form onSubmit={handleSubmit}>
   <div><input className="create-styles" value={password} onChange={(e)=>setPass1(e.target.value)}type="password" placeholder="New password" id="password" name="password"/></div> 
   <div><p><input className="create-styles" value={password2} onChange={(e)=>setPass2(e.target.value)}type="password" placeholder=" Confirmed password" id="password" name="password"/></p></div> 
 
   </form>   
   <p><button className="direction-to-the-other-page-2"onClick={handleClickReset}>Reset password</button></p>
   </div>

)
}