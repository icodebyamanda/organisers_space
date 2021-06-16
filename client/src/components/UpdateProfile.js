import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

// export default function UpdateProfile({ info, onUpdateDescription }) 

export default function UpdateProfile(){
  
  const [update, setUpdate] = useState({
    profile_name:'',
    description: '',
    profile_picture: '',
    video: '',
  });

  // useEffect(() => {
  //   setUpdate(info);
  // }, [info]);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile();
    //onUpdateDescription();
  };
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUpdate((state) => ({
      ...state,
      [name]: value,
    }));
  };

  //unifnished route - not tested
  const updateProfile = async () => {
    try {
      await axios.put(`/profiles/unique`, update, {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log("Description updated!", update);
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
    <div>
      <h3>Update Your Profile</h3>

      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="profile_name">
          <div>name</div>
          <input
          type="text"
          name="profile_name"
          value={update.profile_name}
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
          value={update.description}
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
          value={update.video}
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
          value={update.profile_picture}
          onChange={handleChange}
          className="form-control"
          />
        </label>
        <br />
        <button className="btn btn-secondary" id="btnmargin">Save</button>
      </form>
      

    </div>
  );
}
