import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function Register() {

  const [signUpDetails, setSignUp] = useState({
    firstname:'',
    lastname: '',
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
      firstname:'',
      lastname: '',
      email: '',
      password: '',
    });
  };

  const displayConfirmationMessage = () => {
    setConfirmation(true);
  };

  const RegisterUser = () => {
    axios.post('/users/register', signUpDetails)
    .then(() => setSignUp(signUpDetails))
    .then(() => clearForm())
    .then(() => displayConfirmationMessage())
    .catch((error) => { return error });
  };




  return(
    <div>

  <div className="mb-3 form">

  <label className="form-label" htmlFor="firstname">
    <div>Firstname</div>
    <input
    type="text"
    name="frstname"
    value={signUpDetails.fisrtname}
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

  {confirmationMessage && (
  <div>
  <div> Thank you for signing up!</div>
  <div> Please <span><Link to='/Login'> log in </Link></span> to access your personal space </div>
  </div>
  )}


    </div>
  );
}