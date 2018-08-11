import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-fontawesome";

const Nav = () => {
  //will need to have state of logged in user
  //conditional redirect to login if user isn't logged in on Favorite and Form
  return (
    <div className="Nav">
      <Link to="/">
        <h2 id="title">leftOvers</h2>
      </Link>

      {/* user profile image, condidtional render if logged in */}
      <div id="nav_buttons">
        <div className="icon">
          <Link to="/new">
            <FontAwesomeIcon
              name="plus"
              size="2x"
              style={{ color: "#7F7F7F" }}
            />
          </Link>
        </div>
        <div className="icon">
          <Link to="favorites">
            <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#7F7F7F" }}
            />
          </Link>
        </div>
        {/* if logged in show sign-out icon else show login icon */}
        <div className="icon">
          <a href="http://localhost:4000/login">
            <FontAwesomeIcon
              name="sign-out"
              size="2x"
              style={{ color: "#7F7F7F" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

//map state to props, userdata

export default Nav;
