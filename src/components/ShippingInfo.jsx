import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"
import Navbar from "../Navbar";



  export const ShippingInfo= (props) => {
    const navigate =useNavigate();
    useEffect(() => {props.setItems([])},)

    // const [email,setEmail]=useState("");
    // const [country,setCountry]=useState("");
    // const [name,setName]=useState("");
    // const [lastName,setLastName]=useState("");
    // const [address,setAddress]=useState("");
    // const [city,setCity]=useState("");
    // const [state,setState]=useState("");
    // const [code,setCode]=useState("");
    // const [phone,setPhone]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        // console.log(setEmail);
    }
    function handleClickShop(){
        navigate("/Shop")
    }

    return (
        <div style={{textAlign:"center"}}>
        {/* <h1 style={{color:"#850b70",textAlign:"center"}}> Contact</h1> */}
        
            <Navbar count={props.count}/>
            <form className="shippingInfo-form"   onSubmit={handleSubmit}>
            {/* <h3>Already have an account? Login here..</h3>
            <div><p><input className="create-styles" value={email} onChange={(e)=>setEmail(e.target.value)}type="Email" placeholder="Enter your email" id="Email" name="Email"/></p></div> */}
            
            <h1 className="create-new-account" >“Success! Your order is placed. The seller will be reaching out to you by email.”</h1>
            
            <button type="button" className="shipping-info-continue-shopping-2" onClick={handleClickShop}>Continue Shopping</button>
            </form>
        
        </div>
     

)
}
  