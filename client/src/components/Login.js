import React, { useState } from "react";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import useAuth from "../hooks/useAuth";


export default function Login() {

  const [loginDetails, setLogin] = useState({
    email: '',
    password: '',
  });

  const auth = useAuth();
  const history = useHistory();

  const handleChange = (e) => {
    e.persist();
    const value = e.target.value;

    setLogin((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };

  const logUserIn = () => {
    auth.signin(loginDetails)
    history.push('/home')
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

    </div>
  );
}