import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className="simpleMenu">
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/new">
            <MenuItem onClick={this.handleClose}>Add New Meal</MenuItem>
          </Link>
          <Link to="favorites">
            <MenuItem onClick={this.handleClose}>Favorites</MenuItem>
          </Link>
          <Link to="cart">
            <MenuItem onClick={this.handleClose}>My Order</MenuItem>
          </Link>
          <a href="http://localhost:4000/login">
            {" "}
            <MenuItem onClick={this.handleClose}>Login</MenuItem>
          </a>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
