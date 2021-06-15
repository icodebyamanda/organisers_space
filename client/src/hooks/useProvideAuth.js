// Custom Hook to sign in and sign out based on user status -> functionality changing the user status

// Reuse the Login component function to login for signing in

import { useState } from 'react';
import axios from "axios";

export default function useProvideAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(null); 
  // Global state, part of the context and thus aware to everybody


  const signin = (user, cb = () => {}) => {
    axios.post('/users/login', user)
    .then((result) => {
      //store it locally - setItem a method of storage
      localStorage.setItem('token', result.data.token);
      setIsLoggedIn(true);
      // cb is an open door to do anything after login
      cb(result)
    })
    .catch((error) => { return error });
  };

  const signout = (cb = () => {}) => {
    localStorage.clear('token');
    setIsLoggedIn(null);
    cb();
  };

  return {
    isLoggedIn,
    signin,
    signout
  };
}