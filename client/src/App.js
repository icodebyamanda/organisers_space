import './App.css';
import React from 'react';
// import Welcome from './components/Welcome'
import Register from './components/Register'
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProvideAuth from "./components/ProvideAuth";
import PrivateRoute from "./components/PrivateRoute";
import NavBar from "./components/NavBar";

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
            <PrivateRoute path="/profile" component={Profile} />
            </Switch>
            
          </Router>
        </ProvideAuth>
      </div>


  );
}

export default App;
