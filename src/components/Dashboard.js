import React, { Component } from "react";
import Nav from "./Nav";
import Post from "./Post";
import Favorites from "./Favorites";

class Dashboard extends Component {
  render() {
    return (
      <div>
        Dashboard
        <Nav />
        <Post />
        <Favorites />
      </div>
    );
  }
}
export default Dashboard;
