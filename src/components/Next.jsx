import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"

export const Next = () => {
    const navigate = useNavigate();

    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [code,setCode]=useState("");

    function handleClickBack2(){
        navigate("/Register")
    }
    
    function handleClickSubmit(){
        navigate("/Login")
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(phone);
        console.log(address);
        console.log(city);
        console.log(state);
        console.log(code);
      };
return (
   
    <div style={{textAlign:"center"}}>
   <form onSubmit={handleSubmit}>
   <h3>Please complete this information.</h3>
   <div><p><input className="create-styles" value={phone} onChange={(e)=>setPhone(e.target.value)} type="PhoneNumber" placeholder="Enter your phone number" id="PhoneNumber" name="PhoneNumber"/></p></div>
   <div><p><input className="create-styles" value={address} onChange={(e)=>setAddress(e.target.value)}type="Address" placeholder="Enter your street address" id="Address" name="Address"/></p></div>
   <div><p><input className="create-styles" value={city} onChange={(e)=>setCity(e.target.value)}type="City" placeholder="Enter your City" id="City" name="City"/></p></div>
   <div><p><input className="create-styles" value={state} onChange={(e)=>setState(e.target.value)} type="State" placeholder="Enter your state" id="State" name="State"/></p></div>
   <div><p><input className="create-styles" value={code} onChange={(e)=>setCode(e.target.value)}type="Code" placeholder="Enter your Zip code" id="Code" name="Code"/></p></div>
   <button className="direction-to-new-account-back" onClick={handleClickBack2}>Back</button>
   <button className="direction-to-new-account-submit" onClick={handleClickSubmit}>Submit</button>
   </form>
   </div>

)
}
