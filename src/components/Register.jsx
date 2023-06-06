import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

export const Register = () => {
    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Name,setName]=useState("");

function handleClickBack(){
    navigate("/Login")
}

function handleClickNext(){
    navigate("/Next")
}


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(setEmail);
      };
return (
   
    <div style={{textAlign:"center"}}>
   <h1 style={{color:"#850b70",textAlign:"center"}}> Create my account</h1>
   <form onSubmit={handleSubmit}>
   <h3>Please complete this information.</h3>
    <div><p><input className="create-styles" value={Name} onChange={(e)=>setName(e.target.value)} type="Name" placeholder="Enter your full name" id="Name" name="Name"/></p></div>
   <div><p><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your email" id="Email" name="Email"/></p></div>
   <div><p><input className="create-styles" value={pass} onChange={(e)=>setPass(e.target.value)}type="Password" placeholder="Password" id="Password" name="Password"/></p></div>
   <div><p><input className="create-styles" value={pass} onChange={(e)=>setPass(e.target.value)}type="Password" placeholder="Confirmed password" id="Password" name="Password"/></p></div>
    <button className="direction-to-new-account" onClick={handleClickBack}>Back</button>
    <button className="direction-to-new-account-next"onClick={handleClickNext}>Next</button>
 
 <p><a className="create-new-account" href="/Login">Already have an account? Login here.</a></p>  
   </form>
   </div>

)
}
