import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

// export default function ProfileKeywords({ newKeyword, onSaveKeyword }) {

//! This component is meant to be integrated to CreateProfile.js

export default function ProfileKeywords() {

  const history = useHistory();

  const[keyword, setKeyword] = useState({
    word:'',
  })

  useEffect(() => {

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, []);


  const clearForm = () => {
    setKeyword({
      word:'',

    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createKeyword();
    clearForm();
  };


  const handleChange = (e) => {
    const value = e.target.value;
  setKeyword((state) => ({
    ...state,
    [e.target.name]: value,
  }));
  };

  //not tested
  const createKeyword = async () => {
    try {
      await axios.post('/keywords/:ProfileId/:EventId', keyword, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log("New keyword added", keyword);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="form-label h3topSpacing" htmlFor="word">
          Add any keywords to describe the type of events you organise"
          <input
            type="text"
            name="word"
            value={keyword.word}
            onChange={handleChange}
            id="word"
            className="form-control"
          />
        </label>
        <br />
        <button className="btn btn-secondary" id="btnmargin">Save</button>
      </form>
    </div>
  )
}
