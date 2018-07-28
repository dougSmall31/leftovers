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
      <h2 id="title">Leftovers</h2>
      <div id="nav_buttons">
        <div className="icon">
          <Link to="/new">
            <FontAwesomeIcon
              name="plus"
              size="2x"
              style={{ color: "#EC9770" }}
            />
          </Link>
        </div>
        <div className="icon">
          <Link to="favorites">
            <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#EC9770" }}
            />
          </Link>
        </div>
        <div className="icon">
          <Link to="/login">
            <FontAwesomeIcon
              name="sign-out"
              size="2x"
              style={{ color: "#EC9770" }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
