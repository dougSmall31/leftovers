import React from "react";
import "../App.css";
import FontAwesomeIcon from "react-fontawesome";
import Button from "@material-ui/core/Button";

const Post = props => {
  console.log(props, "this is props on Post");

  return (
    <div id="post_container">
      {props.posts.map(post => (
        <div className="Post">
          <img src={post.image} />
          <h2>{post.title}</h2>
          <p>Category: {post.category}</p>
          {/* need to build logic for servings */}
          <p>Servings Available: {post.servings}</p>
          <p>Price: ${post.cost_per}</p>
          <p>Description: {post.description}</p>
          {/* render userimg on posts */}
          {/* <image {user.userImg}/> */}
          <div className="post_buttons">
            <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#7F7F7F" }}
              onClick={() => {
                console.log("button clicked!!!");
                props.onAddFav(post.id);
              }}
            />
            <Button
              variant="extendedFab"
              // color="primary"
            >
              Order
            </Button>
            <FontAwesomeIcon
              name="trash"
              size="2x"
              style={{ color: "#7F7F7F" }}
              onClick={() => {
                props.onDeletePost(post.id);
              }}
            />
          </div>
        </div>
        //delete button only deletes if userid matches user
        //favorite star button adds
      ))}
    </div>
  );
};

export default Post;
