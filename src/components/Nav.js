import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-fontawesome";
import { updateId, updateUserImg, updateName } from "../ducks/reducer";

const Nav = () => {
  //will need to have state of logged in user
  //conditional redirect to login if user isn't logged in on Favorite and Form
  return (
    <div className="Nav">
      <Link to="/">
        <h2 id="title">leftOvers</h2>
      </Link>
      {/* user profile image*/}
      <div id="nav_buttons">
        <div className="icon">
          <Link to="/new">
            <h3>Add New Meal</h3>
            {/* <FontAwesomeIcon
              name="plus"
              size="2x"
              style={{ color: "#7F7F7F" }}
            /> */}
          </Link>
        </div>
        <div className="icon">
          <Link to="favorites">
            <h3>Favorites</h3>
            {/* <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#7F7F7F" }}
            /> */}
          </Link>
        </div>
        {/* if logged in show sign-out icon else show login icon */}
        <div className="icon">
          <a href="http://localhost:4000/login">
            <h3>Login</h3>
            {/* <FontAwesomeIcon
              name="sign-out"
              size="2x"
              style={{ color: "#7F7F7F" }}
            /> */}
          </a>
        </div>
      </div>
    </div>
  );
};

//map state to props, userdata

export default Nav;
