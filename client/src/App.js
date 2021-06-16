import './App.css';
import { useState } from "react";
import React from 'react';
import Register from './components/Register'
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProvideAuth from "./components/ProvideAuth";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";
import Settings from "./components/Settings";
import PrivateHomepage from "./components/PrivateHomepage";
import UpdateProfile from "./components/UpdateProfile";
import CreateProfile from "./components/CreateProfile";

import { BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from "react-router-dom";

function App() {
  return (



      <div className="App container p-5">
        <ProvideAuth>

          <Router>

            <NavBar />

            <Switch>

            <Route path="/register" component={Register} />

            <Route path="/login" component={Login} />

            <PrivateRoute path="/home" component={PrivateHomepage} />

            <PrivateRoute path="/update" component={UpdateProfile} />

            <PrivateRoute path="/myprofile" component={Profile} />

            <PrivateRoute path="/create-profile" component={CreateProfile} />

            <PrivateRoute path="/settings" component={Settings} />

            </Switch>
            
          </Router>

        </ProvideAuth>

      </div>


  );
}

export default App;
