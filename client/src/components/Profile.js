import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import "../App.css";

export default function Profile() {

  const history = useHistory();
  const { id } = useParams();

  console.log(`tell me ${id}`)

  const [profile, setProfile] = useState({
    profile_name:'',
    description: '',
    profile_picture: '',
    video: '',
  });

  const [displayData, setDisplayData] = useState(false)

  const displayProfile= () => {
    setDisplayData(true);
  };
  
  useEffect(() => {
    // getProfile(UserId);
    // getProfile(id);
    getProfile(id);

		let token = localStorage.getItem("token");
		if (!token) {
			history.push("/login");
		}
		console.log(token);
	}, []);

 
  const getProfile = async () => {
		try {
      console.log(`this is x ${id}`)
      
			const result = await axios.get(`/profiles/organiser`, {
				headers: { "x-access-token": localStorage.getItem("token") },
			});
      // console.log(`this is ${id}`)
      console.log(`this is profile.data ${result.data}`)
			setProfile(result.data);
      displayProfile();
		} catch (error) {
			console.log(error, {error});
		}
	};



  return (
    <div>
      <div>Hello</div>

      {displayData && (
      <div>
        <h2>{profile.profile_name}</h2>
        descr {profile.description}
        picture {profile.picture}
        video {profile.video}
      </div>
      )}

   
    </div>
    
  )
}


