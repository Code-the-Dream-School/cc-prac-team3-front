  import React, { useState } from "react";
  import Navbar from "../Navbar";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";

  export const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");


  const {userToken, setUserToken} = props
  console.log(userToken)

  const handleSubmit = (e) => {
  e.preventDefault();
  console.log(email);
  axios.post(`${process.env.REACT_APP_SERVICE_ENDPOINT}/auth/login` ,{email,password}) 
              
              
  .then(r => {
  if(r?.data?.token) {
  setUserToken(r.data.token)
  navigate('/')
  }
  })
  .catch(err => console.log(err))
  };

    return (
  <div className="start-container">
    <Navbar count={props.count} />
    <h1 style={{ color: "#850b70", textAlign: "center" }}> My account</h1>
    <form onSubmit={handleSubmit}>
  <div>
    <p>
  {" "}
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
  {" "}
    <input
  className="create-styles"
  value={password}
  onChange={(e) => setPass(e.target.value)}
  type="Password"
  placeholder="Password"
  id="Password"
  name="Password"
    />
  </div>
  <p>
  <button type="submit" className="direction-to-the-other-page">Log in</button>
  </p>
  </form>

  <a className="create-new-account" href="/register">
  New customer? Create you account.
  </a>
  <a className="create-new-account" href="/ForgotPassword">
  Forgot Password? Recover password.
  </a>
  </div>
  );
  };
