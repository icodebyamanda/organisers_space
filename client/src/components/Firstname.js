import "../App.css";
import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";

const axios = require("axios");

// Not working yet

export default function Firstname() {

  const [user, setUser] = useState(null);

  const history = useHistory();
	const { id } = useParams();

  // ISSUE HERE IS THERE'S NO EVENT HANDLER - may need a reverse useHistory system

  useEffect(() => {
    
    getFirstName(id);

    let token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    console.log(token);
  }, []);
  
  const getFirstname = async (id) => {
    try {
      const user = await axios.get(`/users`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      setUser(user.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      
    <h1>Welcome {id.firstname} </h1>

    </div>
  )
}
