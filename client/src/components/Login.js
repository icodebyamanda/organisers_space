import React, { useState } from "react";
//import { Link } from "react-router";
import axios from "axios";


export default function Register() {

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const [confirmationMessage, setConfirmation] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    setSignUp((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const clearForm = () => {
    setSignUp({
      email: '',
      password: '',
    });
  };

  const displayConfirmationMessage = () => {
    setConfirmation(true);
  };

  const logUserIn = () => {
    auth.signin(loginDetails)
    clearForm()
    displayConfirmationMessage()
  };




  return(
    <div>

  <div className="mb-3 form">

  <label className="form-label" htmlFor="email">
    <div>Email</div>
    <input
    type="text"
    name="email"
    value={loginDetails.email}
    onChange={handleChange}
    className="form-control"
    />
  </label>
  <br />
  <label className="form-label" htmlFor="password">
    <div>Password</div>
    <input
    type="password"
    name="password"
    value={loginDetails.password}
    onChange={handleChange}
    className="form-control"
    />
  </label>
  <br />
  <button className="btn btn-secondary" onClick={logUserIn}> Submit</button>

  </div>

  {confirmationMessage && (
  <div>
  <div> Great! You are now logged in. </div>
  </div>
  )}


    </div>
  );
}