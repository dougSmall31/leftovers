import React from "react";
import { Link } from "react-router-dom";
import FontAwesomeIcon from "react-fontawesome";

const Nav = () => {
  return (
    <div className="Nav">
      <div id="home_button">
        <Link to="/">
          <FontAwesomeIcon name="home" size="2x" style={{ color: "#EC9770" }} />
        </Link>
      </div>
      <div id="nav_buttons">
        <Link to="/new">
          <FontAwesomeIcon name="plus" size="2x" style={{ color: "#EC9770" }} />
        </Link>
        <Link to="favorites">
          <FontAwesomeIcon
            name="heart"
            size="2x"
            style={{ color: "#EC9770" }}
          />
        </Link>
        <Link to="/login">
          <FontAwesomeIcon
            name="sign-out"
            size="2x"
            style={{ color: "#EC9770" }}
          />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
