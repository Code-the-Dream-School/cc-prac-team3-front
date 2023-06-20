import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"


  export const ShippingInfo= () => {
    const navigate =useNavigate();

    const [email,setEmail]=useState("");
    const [country,setCountry]=useState("");
    const [name,setName]=useState("");
    const [lastName,setLastName]=useState("");
    const [address,setAddress]=useState("");
    const [city,setCity]=useState("");
    const [state,setState]=useState("");
    const [code,setCode]=useState("");
    const [phone,setPhone]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(setEmail);
    }
    function handleClickShop(){
        navigate("/Cart")
    }

    return (
        <div style={{textAlign:"center"}}>
        <h1 style={{color:"#850b70",textAlign:"center"}}> Contact</h1>
        
            
            <form onSubmit={handleSubmit}>
            {/* <h3>Already have an account? Login here..</h3>
            <div><p><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your email" id="Email" name="Email"/></p></div> */}
            
            <h1>Shipping Information</h1>
            
            
            <div><p><input className="create-styles" value={name} onChange={(e)=>setName(e.target.value)}type="Name" placeholder="Enter your Name" id="Name" name="Name"/></p></div>
            <div><p><input className="create-styles" value={lastName} onChange={(e)=>setLastName(e.target.value)} type="LastName" placeholder="Enter your Last Name" id="LastName" name="LastName"/></p></div>
            <div><p><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Enter your Email" id="Email" name="Email"/></p></div>
            <div><p><input className="create-styles" value={address} onChange={(e)=>setAddress(e.target.value)}type="Address" placeholder="Enter your street address" id="Address" name="Address"/></p></div>
            <div><p><input className="create-styles" value={country} onChange={(e)=>setCountry(e.target.value)}type="Country" placeholder="Country" id="Country" name="Country"/></p></div>
            <div><p><input className="create-styles" value={city} onChange={(e)=>setCity(e.target.value)}type="City" placeholder="Enter your City" id="City" name="City"/></p></div>
            <div><p><input className="create-styles" value={state} onChange={(e)=>setState(e.target.value)} type="State" placeholder="Enter your state" id="State" name="State"/></p></div>
            <div><p><input className="create-styles" value={code} onChange={(e)=>setCode(e.target.value)}type="Code" placeholder="Enter your Zip code" id="Code" name="Code"/></p></div>
            <div><p><input className="create-styles" value={phone} onChange={(e)=>setPhone(e.target.value)} type="PhoneNumber" placeholder="Enter your phone number" id="PhoneNumber" name="PhoneNumber"/></p></div>
            <button className="shipping-info-continue-shopping"> <span>Ship products</span></button>
            <p className="shippin-info-description">You will pay for the products on shipping</p>
            <button type="button" className="shipping-info-continue-shopping-2" onClick={handleClickShop}>Continue Shopping</button>
            </form>
        
        </div>
     

)
}
  