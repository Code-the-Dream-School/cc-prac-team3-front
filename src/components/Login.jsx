import React, { useState } from "react";
// comentario temporal

export const Login = () => {
    const [Email,setEmail]=useState("");
    const [pass,setPass]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
      };
return (
    <div className="a1">
        <h1 style={{color:"#860f4c",textAlign:"center"}}> My Account</h1>
   <form onSubmit={handleSubmit}>
    <div>
  {/* <b><label style={{color:"fuchsia" , textAlign:"center"}} form="Email">Email</label></b> */}
   <p> <input className="a6" value={Email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter your Email" id="Email" name="Email" /></p>
    </div>
    {/* <b><label style={{color:"fuchsia",textAlign:"center"}}form="Password">Password</label></b> */}
   <div> <input className="a7" value={pass} onChange={(e)=>setPass(e.target.value)}type="Password" placeholder="*******************" id="Password" name="Password"/></div>
   
   <p><button className="a12">Log in</button></p> 
   </form>

  <a className="a2" href="http://localhost:3002/register">New customer? Create you account.</a>
  <a className="a3" href="http://localhost:3002/ForgotPassword">Lost Password? Recover password.</a>
   </div>
)
}
// onClick={()=> props.onFormSwitch ('Register')}





