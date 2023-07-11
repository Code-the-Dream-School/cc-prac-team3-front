  import React, { useState } from "react";
  import { useNavigate } from "react-router-dom";
  import "./App.css";
  import Navbar from "../Navbar";
  import axios from "axios";
  import { Link } from "react-router-dom";

  export const Register = (props) => {
    const navigate = useNavigate();
    const {userToken, setUserToken} = props
    const [email, setEmail] = useState("");
    const [password, setPass] = useState("");
    const [name, setName] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [streetAddress, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [code, setCode] = useState("");
    const userType = 'buyer'
    const [confirmPass, setConfirmPass] = useState("");

    function handleClickBack() {
      navigate("/Login");
    }

    // function handleClickSubmit() {
    //   navigate("/Login");
    // }
  console.log(userToken)
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(setEmail);
      axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/auth/register` ,{email,password,name,phoneNumber,streetAddress,city,state,code,userType}) 
      // .then(r => r.json())
      .then(r => {
        if(r?.data?.token) {
          setUserToken(r.data.token)
          navigate('/')
        }
        
        })
      .catch(err => console.log(err))
    };

    return (
      <div className="start-container" style={{ textAlign: "center" }}>
        <Navbar count={props.count} />
        <h1 style={{ color: "#850b70", textAlign: "center" }}>
          {" "}
          Create my account
        </h1>

        <form onSubmit={handleSubmit}>
          <h3>Please complete this information.</h3>
          <div>
            <p>
              <input
                className="create-styles"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="Name"
                placeholder="Enter your full name"
                id="Name"
                name="Name"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="Email"
                placeholder="Enter your email"
                id="Email"
                name="Email"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={password}
                onChange={(e) => setPass(e.target.value)}
                type="Password"
                placeholder="Password"
                id="Password"
                name="Password"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                type="Password"
                placeholder="Confirmed password"
                id="confirmPass"
                name="confirmPass"
              />
            </p>
          </div>

          <div>
            <p>
              <input
                className="create-styles"
                value={phoneNumber}
                onChange={(e) => setPhone(e.target.value)}
                type="PhoneNumber"
                placeholder="Enter your phone number"
                id="PhoneNumber"
                name="PhoneNumber"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={streetAddress}
                onChange={(e) => setAddress(e.target.value)}
                type="Address"
                placeholder="Enter your street address"
                id="Address"
                name="Address"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                type="City"
                placeholder="Enter your City"
                id="City"
                name="City"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={state}
                onChange={(e) => setState(e.target.value)}
                type="State"
                placeholder="Enter your state"
                id="State"
                name="State"
              />
            </p>
          </div>
          <div>
            <p>
              <input
                className="create-styles"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                type="Code"
                placeholder="Enter your Zip code"
                id="Code"
                name="Code"
              />
            </p>
          </div>
          <button
            className="direction-to-new-account-back"
            onClick={handleClickBack}
          >
            Back
          </button>
          <button
            className="direction-to-new-account-submit"
            type="submit"
          >
            Submit
          </button>
          <p>
            < Link to="/register" className="create-new-account" >
              Already have an account? Login here.
             </Link>
          </p>
        </form>
      </div>
    );
  };
