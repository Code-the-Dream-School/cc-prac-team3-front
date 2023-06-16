import React, { useState } from "react";
import Navbar from "../Navbar";
// comentario temporal

export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className="start-container">
      <Navbar />
      <h1 style={{ color: "#860f4c", textAlign: "center" }}> My Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <b><label style={{color:"fuchsia" , textAlign:"center"}} form="Email">Email</label></b> */}
          <p>
            {" "}
            <input
              className="create-styles"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="Email"
              placeholder="Enter your Email"
              id="Email"
              name="Email"
            />
          </p>
        </div>
        {/* <b><label style={{color:"fuchsia",textAlign:"center"}}form="Password">Password</label></b> */}
        <div>
          {" "}
          <input
            className="create-styles"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="Password"
            placeholder="*******************"
            id="Password"
            name="Password"
          />
        </div>

        <p>
          <button className="direction-to-the-other-page">Log in</button>
        </p>
      </form>

      <a className="create-new-account" href="/register">
        New customer? Create you account.
      </a>
      <a className="create-new-account" href="/ForgotPassword">
        Lost Password? Recover password.
      </a>
    </div>
  );
};
// onClick={()=> props.onFormSwitch ('Register')}
