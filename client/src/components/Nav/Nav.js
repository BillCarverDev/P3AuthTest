import React from "react";
import Login from '../Login';
import Submit from '../Submit';
import "./Nav.css";


const Nav = (props) => {

  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {

    return <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</p>
        <Submit />
        <div>
          <p id="sign-out" className="navbar-brand" data-toggle="modal" data-target="#userLogin">Sign Out</p>
        </div>
      </nav>
    </div>
  }
  return <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <p id="submit-picture" className="navbar-brand" data-toggle="modal" data-target="#submitPhoto">Submit a Photo</p>
      <Submit />
      <div>
        <p id="googleButton" className="navbar-brand" onClick={props.auth} data-target="#userLogin">Log In</p>
        <a href="/auth/google" class="btn btn-danger"><span className="fa fa-google-plus navbar-brand"></span> Google+</a>
      </div>
      <div>
        <p id="create-account" className="navbar-brand" data-toggle="modal" data-target="#createUser">Create Account</p>
      </div>
    </nav>
    <Login />
  </div>
};

export default Nav;