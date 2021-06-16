import React, { useState, useEffect } from "react";
import axios from "axios";
//import UpdateProfile from "./UpdateProfile";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

export default function CreateProfile() {

  let history = useHistory();
  const { id } = useParams();

  const [creation, setCreation] = useState({
    profile_name:'',
    description: '',
    profile_picture: '',
    video: '',
  });

  
  useEffect(() => {
		createProfile(id);

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, []);


  const clearForm = () => {
    setCreation({
      profile_name:'',
      description: '',
      profile_picture: '',
      video: '',
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile();
    clearForm();
    //onUpdateDescription();
  };


  const handleChange = (e) => {
    const value = e.target.value;
  setCreation((state) => ({
    ...state,
    [e.target.name]: value,
  }));
  };

  const createProfile = async () => {
    try {
      await axios.post('/profiles/organiser', creation, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log("New description added", creation);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Your Profile</h2>

    <h3> create your profile</h3>
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="profile_name">
          <div>name</div>
          <input
          type="text"
          name="profile_name"
          value={creation.profile_name}
          onChange={handleChange}
          className="form-control"
          />
        </label>
        <br />
        <label className="form-label" htmlFor="description">
          <div>description</div>
          <textarea
          type="text"
          name="description"
          value={creation.description}
          onChange={handleChange}
          className="form-control"
          ></textarea>
        </label>
        <br />
        <label className="form-label" htmlFor="video">
          <div>video</div>
          <input
          type="text"
          name="video"
          value={creation.video}
          onChange={handleChange}
          className="form-control"
          />
        </label>
        <br />
        <label className="form-label" htmlFor="picture">
          <div>picture</div>
          <input
          type="text"
          name="profile_picture"
          value={creation.profile_picture}
          onChange={handleChange}
          className="form-control"
          />
        </label>
        <br />
        <button className="btn btn-secondary" id="btnmargin">Save</button>

      </form>

    </div>
  )
}
