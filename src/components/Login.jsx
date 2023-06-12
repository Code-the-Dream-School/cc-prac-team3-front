import React, { useState } from "react";


export const Login = () => {
    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
      };
return (
    <div className="start-container">
        <h1 style={{color:"#850b70",textAlign:"center"}}> My account</h1>
   <form onSubmit={handleSubmit}>
    <div>
   <p> <input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter your email" id="Email" name="Email" /></p>
    </div>
   <div> <input className="create-styles" value={pass} onChange={(e)=>setPass(e.target.value)}type="Password" placeholder="Password" id="Password" name="Password"/></div>
   
   <p><button className="direction-to-the-other-page">Log in</button></p> 
   </form>

  <a className="create-new-account" href="/Register">New customer? Create you account.</a>
  <a className="create-new-account" href="/ForgotPassword">Forgot Password? Recover password.</a>
   </div>
)
}





