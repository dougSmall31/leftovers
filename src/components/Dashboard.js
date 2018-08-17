import React, { Component } from "react";
import axios from "../../node_modules/axios";
import Post from "./Post";
import "../App.css";
import { connect } from "react-redux";
import { updateId, updateUserImg } from "../ducks/reducer";

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
      console.log("this is res dash", res);
      this.props.updateId(res.data.id);
      this.props.updateUserImg(res.data.picture);
      //store this user to our redux store state
    });
  }
  handleAddFav = id => {
    axios({
      method: "POST",
      url: "/api/favorites/" + id
    })
      .then(res => {
        console.log(200, "favorite success");
        alert("Added to Favorites List!");
      })
      .catch(error => {
        console.log(error, "error");
      });
  };
  handleDeletePost = id => {
    axios({
      method: "DELETE",
      url: "/api/posts/" + id
    })
      .then(res => {
        console.log(200, "delete success");
        this.setState({ allPosts: res.data });
      })
      .catch(error => {
        console.log(error, "error");
        if (401) {
          alert("Unauthorized!");
        }
      });
  };

  render() {
    return (
      <div className="Dashboard">
        <h1>All Meals</h1>
        <div id="post_grid">
          <Post
            posts={this.state.allPosts}
            onDeletePost={this.handleDeletePost}
            onAddFav={this.handleAddFav}
          />
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { updateId, updateUserImg }
)(Dashboard);
