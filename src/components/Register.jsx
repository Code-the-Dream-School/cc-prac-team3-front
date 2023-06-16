import React, { useState } from "react";
import "./App.css";
import Navbar from "../Navbar";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(setEmail);
  };
  return (
    <div className="start-container" style={{ textAlign: "center" }}>
      <Navbar />
      <h1 style={{ color: "#860f4c", textAlign: "center" }}>
        {" "}
        Create my Account
      </h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <input
              className="create-styles"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              type="Name"
              placeholder="Enter your full Name"
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
              placeholder="Enter your Email"
              id="Email"
              name="Email"
            />
          </p>
        </div>
        <div>
          <p>
            <input
              className="create-styles"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="Password"
              placeholder="************"
              id="Password"
              name="Password"
            />
          </p>
        </div>
        <p>
          <button className="direction-to-new-account">
            Create my account
          </button>
        </p>
      </form>
      <a className="create-new-account" href="/login">
        Already have an account? Login here.
      </a>
    </div>
  );
};
