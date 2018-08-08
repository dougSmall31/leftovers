import React, { Component } from "react";
import axios from "../../node_modules/axios";
import Post from "./Post";
import "../App.css";

const BASE_URL = "http://localhost:4000";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      allPosts: []
    };
  }

  componentDidMount() {
    axios({
      method: "GET",
      url: "/api/posts"
    }).then(res => {
      this.setState({ allPosts: res.data });
    });

    axios({
      method: "GET",
      url: "/api/user"
    }).then(res => {
      console.log("this is res", res);
      //store this user to our redux store state
    });
  }
  render() {
    return (
      <div className="Dashboard">
        <h1>All Posts</h1>
        <div id="post_grid">
          <Post posts={this.state.allPosts} />
        </div>
      </div>
    );
  }
}
export default Dashboard;
