import "../App.css";
import React from 'react';
import { Link } from "react-router-dom";


export default function PrivateHomepage() {

  

  return (
    <div>
      
    <h2>Welcome to your organiser' space! </h2>

    <p> What would you like to do today ?</p>

    <div>
      <div> <Link to='/myprofile'> Manage your profile </Link></div>
      <div> <Link to='/'> Manage your events </Link></div>
      <div> <Link to='/'> Add an event </Link></div>
      <div> <Link to='/create-profile'> Create another event </Link></div>
    </div>


    </div>
  )
}
