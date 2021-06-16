import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateSettings from "./UpdateSettings";
import { useHistory, Link } from "react-router-dom";
import "../App.css";

export default function Settings() {

  let history = useHistory();

  const [info, setInfo] = useState({
    firstname: "",
    lastname: "",
    email: "",
  });

  useEffect(() => {
    getInfos();
    let token = localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    }
    console.log(token);
  }, []);

  const getInfos = async () => {
    try {
      const info = await axios.get(`/users/settings`, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });

      setInfo(info.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("settingsInfo", info);

  return (
    <div>
      
      <div className="profile">

        <h2 className="h3topSpacing">Settings Profile</h2>

          <div className="slightpadding">Firstname: {info.firstname}</div>
          <div className="slightpadding">Lastname: {info.lastname}</div>
          <div className="slightpadding">Email: {info.email}</div>

      </div>

      <div>
        <UpdateSettings info={info} onUpdateSettings={getInfos} />
      </div>

    </div>
    
  )
}


