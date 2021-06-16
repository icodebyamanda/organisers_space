import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';


export default function NavBarTop() {
  const auth = useAuth();
  const history = useHistory();

  const logout = () => {
    auth.signout(() => history.push("/login"));
  }
  
  return (
    <div className="navBar pb-2 pt-1">
      {!auth.isLoggedIn && <Link to='/register' className="navBarLink ms-2 me-2"> Register </Link>}
      
      {!auth.isLoggedIn && <Link to='/login'> Login </Link>}

      {/* create profile to be deleted from navbar - just for development */}
      {auth.isLoggedIn && <Link to='/create-profile' className="navBarLink ms-2 me-2"> Add an organiser's profile </Link>}
      
      {auth.isLoggedIn && <Link to='/myprofile' className="navBarLink ms-2 me-2"> Profile </Link>}

      {auth.isLoggedIn && <Link to='/settings' className="navBarLink ms-2 me-2"> Settings </Link>}
      
      {auth.isLoggedIn && (
        <button onClick={logout} className="btn btn-dark">
          Logout
        </button>)}

    </div>
  )
}
