import React, { useState, useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import "../App.css";

// export default function UpdateProfile({ info, onUpdateDescription }) 

export default function UpdateProfile(){
  
  const [update, setUpdate] = useState({
    description:'',
  });

  // useEffect(() => {
  //   setUpdate(info);
  // }, [info]);


  const handleSubmit = (e) => {
    e.preventDefault();
    updateDescription();
    //onUpdateDescription();
  };
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUpdate((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const updateDescription = async () => {
    try {
      await axios.put(`/profiles/profile`, update, {
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
      Update Profile
      
      <form>
        <label className="form-label" id="cellspadding" htmlFor="description-profile">
            Describe yourself
            <textarea
              type="text"
              name="description"
              value={update.description}
              onChange={handleChange}
              id="description"
              className="form-control"
            ></textarea>
        </label>
        <br />
        <button className="btn btn-secondary" id="btnmargin" onSubmit={handleSubmit}>Update</button>

      </form>

    </div>
  );
}
