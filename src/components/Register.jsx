import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

export const Register = () => {
    const navigate = useNavigate();

    const [email,setEmail]=useState("");
    const [pass,setPass]=useState("");
    const [Name,setName]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [code,setCode]=useState("");

    const [isEmpty, setIsEmpty] = useState(true);    
    console.log(setIsEmpty)
    
function handleClickBack(){
    navigate("/Login")
}

function handleClickNext(){
    // navigate("/Next")
    setIsEmpty(false)
}
function handleClickSubmit(){
    navigate("/Login")
}


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(setEmail);
      };
return (
    <div style={{textAlign:"center"}}>
    <h1 style={{color:"#850b70",textAlign:"center"}}> Create my account</h1>
    {isEmpty ? (
        
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
      ) : (
        <form onSubmit={handleSubmit}>
        <h3>Please complete this information.</h3>
        <div><p><input className="create-styles" value={phone} onChange={(e)=>setPhone(e.target.value)} type="PhoneNumber" placeholder="Enter your phone number" id="PhoneNumber" name="PhoneNumber"/></p></div>
        <div><p><input className="create-styles" value={address} onChange={(e)=>setAddress(e.target.value)}type="Address" placeholder="Enter your street address" id="Address" name="Address"/></p></div>
        <div><p><input className="create-styles" value={city} onChange={(e)=>setCity(e.target.value)}type="City" placeholder="Enter your City" id="City" name="City"/></p></div>
        <div><p><input className="create-styles" value={state} onChange={(e)=>setState(e.target.value)} type="State" placeholder="Enter your state" id="State" name="State"/></p></div>
        <div><p><input className="create-styles" value={code} onChange={(e)=>setCode(e.target.value)}type="Code" placeholder="Enter your Zip code" id="Code" name="Code"/></p></div>
        <button className="direction-to-new-account-back" onClick={handleClickBack}>Back</button>
        <button className="direction-to-new-account-submit" onClick={handleClickSubmit}>Submit</button>
        </form>
      )}
    </div>
 

)
}
