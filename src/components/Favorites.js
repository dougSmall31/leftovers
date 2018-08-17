import React, { Component } from "react";
import axios from "../../node_modules/axios";
import Post from "./Post";

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favPosts: []
    };
  }

  componentDidMount(id) {
    axios({
      method: "GET",
      url: "/api/favorites" + id
    }).then(res => {
      this.setState({ favPosts: res.data });
    });
  }
  render() {
    return (
      <div>
        <div>Favorites</div>
        <div>
          <Post posts={this.state.favPosts} />
        </div>
      </div>
    );
  }
}

export default Favorites;
