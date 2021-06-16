import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

export default function Profile() {

  const history = useHistory();
  const {id}= useParams();

  const [profile, setProfile] = useState({
    profile_name:'',
    description: '',
    profile_picture: '',
    video: '',
  });

  
  useEffect(() => {
    // getProfile(UserId);
    getProfile(id);

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, [id]);

  //${id}
  const getProfile = async (id) => {
		try {
			const profile = await axios.get(`/profiles/organiser/${id}`, {
				headers: { "x-access-token": localStorage.getItem("token") },
			});
      console.log(profile.data)
			setProfile(profile.data);
		} catch (error) {
			console.log(error);
		}
	};


  return (
    <div>
      <div>Hello</div>

      {profile && 
      <div>
        <h2>{profile.profile_name}</h2>
        {profile.description}
        {profile.picture}
        {profile.video}
      </div>
      }

   
    </div>
    
  )
}


