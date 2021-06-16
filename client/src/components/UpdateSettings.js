import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

export default function UpdateSettings({ info, onUpdateSettings }) {
  const [update, setUpdate] = useState({
    name: "",
    username: "",
    email: "",
  });

  useEffect(() => {
    setUpdate(info);
  }, [info]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings();
    onUpdateSettings();
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUpdate((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const updateSettings = async () => {
    try {
      await axios.put(`/users/settings`, update, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log("Your settings have been updated!", update);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <div>
        <h3 className="h3topSpacing">Update your settings</h3>
        <form>
          <label className="form-label" id="cellspadding" htmlFor="firstname">
            Firstname
            <input
              type="text"
              name="firstname"
              value={update.firstname}
              onChange={handleChange}
              id="firstname"
              className="form-control"
            />
          </label>
          <label className="form-label" id="cellspadding" htmlFor="lastname">
            Username
            <input
              type="text"
              name="lastname"
              value={update.lastname}
              onChange={handleChange}
              id="lastname"
              className="form-control"
            />
          </label>
          <label className="form-label" id="cellspadding" htmlFor="email">
            Email
            <input
              type="text"
              name="email"
              value={update.email}
              onChange={handleChange}
              id="email"
              className="form-control"
            />
          </label>
          <button className="btn btn-secondary" id="btnmargin" onSubmit={handleSubmit}>Update</button>
        </form>
      </div>
    </div>
  );
}
