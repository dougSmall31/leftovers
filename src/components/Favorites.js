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

  componentDidMount() {
    axios({
      method: "GET",
      url: "/api/favs"
    }).then(res => {
      console.log(res.data, "fav res.data");
      this.setState({ favPosts: res.data });
    });
  }

  handleDeleteFav = id => {
    console.log("handleDeleteFav");

    axios({
      method: "DELETE",
      url: "/api/favorites/" + id
    })
      .then(res => {
        console.log(".then in deletefav");

        console.log(200, "delete success");
        this.setState({ favPosts: res.data });
      })
      .catch(error => {
        console.log(error, "error");
      });
  };
  render() {
    return (
      <div className="Favorites">
        {/* <div>Favorites</div> */}
        <div>
          <h1>My Favorite Meals</h1>
          <Post
            posts={this.state.favPosts}
            favPosts={this.state.favPosts}
            onDeleteFav={this.handleDeleteFav}
          />
        </div>
      </div>
    );
  }
}

export default Favorites;
