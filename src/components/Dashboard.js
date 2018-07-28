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
      url: BASE_URL + "/api/posts"
    }).then(res => {
      this.setState({ allPosts: res.data });
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
