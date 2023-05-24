import React, { useState } from "react";
import "./App.css"

export const Register = () => {
    const [Email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Name,setName]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(Email);
        console.log(setEmail);
      };
return (
   
    <div style={{textAlign:"center"}}>
   <h1 style={{color:"#860f4c",textAlign:"center"}}> Create my Account</h1>
   <form onSubmit={handleSubmit}>
   <p> <div><input className="a8" value={Name} onChange={(e)=>setName(e.target.value)} type="Name" placeholder="Enter your full Name" id="Name" name="Name"/></div></p>
   <p><div><input className="a9" value={Email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your Email" id="Email" name="Email"/></div></p>
   <p><div><input className="a10" value={pass} onChange={(e)=>setPass(e.target.value)}type="Password" placeholder="************" id="Password" name="Password"/></div></p>
   <p><button className="a13">Create my account</button></p>
   </form>
   <a className="a5" href="http://localhost:3002">Already have an account? Login here.</a>
   </div>

)
}
// onClick={()=> props.onFormSwitch ('Login')}