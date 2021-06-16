import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function Register() {

  const [signUpDetails, setSignUp] = useState({
    firstname:'',
    lastname: '',
    email: '',
    password: '',
  });

  const history = useHistory()

  const handleChange = (e) => {
    const value = e.target.value;

    setSignUp((state) => ({
      ...state,
      [e.target.name]: value,
    }));
  };


  const RegisterUser = () => {
    axios.post('/users/register', signUpDetails)
    .then(() => setSignUp(signUpDetails))
    .then(() => history.push('/login'))
    .catch((error) => { return error });
  };




  return(
    <div>

  <div className="mb-3 form">

  <label className="form-label" htmlFor="firstname">
    <div>Firstname</div>
    <input
    type="text"
    name="firstname"
    value={signUpDetails.firstname}
    onChange={handleChange}
    className="form-control"
    />
  </label>
  <br />
  <label className="form-label" htmlFor="lastname">
    <div>Lastname</div>
    <input
    type="text"
    name="lastname"
    value={signUpDetails.lastname}
    onChange={handleChange}
    className="form-control"
    />
  </label>
  <br />
  <label className="form-label" htmlFor="email">
    <div>Email</div>
    <input
    type="text"
    name="email"
    value={signUpDetails.email}
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
    value={signUpDetails.password}
    onChange={handleChange}
    className="form-control"
    />
  </label>
  <br />
  <button className="btn btn-secondary" onClick={RegisterUser}> Submit</button>

  </div>

    </div>
  );
}