import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-fontawesome";

const Nav = () => {
  //will need to have state of logged in user
  //conditional redirect to login if user isn't logged in on Favorite and Form
  return (
    <div className="Nav">
      {/* <div id="home_button">
        <Link to="/">
          <FontAwesomeIcon name="home" size="2x" style={{ color: "#EC9770" }} />
        </Link>
      </div> */}
      <Link to="/">
        <h2 id="title">Leftovers</h2>
      </Link>
      <div id="nav_buttons">
        <div className="icon">
          <Link to="/new">
            <FontAwesomeIcon
              name="plus"
              size="2x"
              style={{ color: "#05668d" }}
            />
          </Link>
        </div>
        <div className="icon">
          <Link to="favorites">
            <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#05668d" }}
            />
          </Link>
        </div>
        <div className="icon">
          <a href="http://localhost:4000/login">
            <FontAwesomeIcon
              name="sign-out"
              size="2x"
              style={{ color: "#05668d" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

//map state to props, userdata

export default Nav;
