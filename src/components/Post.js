import React from "react";
import "../App.css";
import FontAwesomeIcon from "react-fontawesome";
import Button from "@material-ui/core/Button";
import { updateOrders } from "../ducks/reducer";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Post = props => {
  console.log(props, "this is props on Post");
  return (
    <div id="post_container">
      {props.posts.map(post => (
        <div className="Post">
          <img className="post_head" src={post.image} />
          <div id="flex_row">
            <img className="avatar" src={post.user_img} />
            <h2>{post.title}</h2>
            {props.favPosts.find(item => item.id === post.id) ? (
              <FontAwesomeIcon
                name="heart"
                size="2x"
                style={{ color: "#ff6d65", cursor: "pointer" }}
                onClick={() => {
                  console.log("button clicked!!!", post.id, props);

                  props.onDeleteFav(post.id);
                }}
              />
            ) : (
              <FontAwesomeIcon
                name="heart"
                size="2x"
                style={{ color: "#7F7F7F", cursor: "pointer" }}
                onClick={() => {
                  console.log("button clicked!!!");
                  props.onAddFav(post.id);
                }}
              />
            )}
          </div>
          <p>
            <strong>Category: </strong>
            {post.category}
          </p>
          {/* need to build logic for servings */}
          <p>
            <strong>Servings Available: </strong>
            {post.servings}
          </p>
          <p>
            <strong>Price:</strong> ${post.cost_per}
          </p>
          <p>
            <strong>Description: </strong>
            {post.description}
          </p>

          <div className="post_buttons">
            <FontAwesomeIcon
              name="trash"
              size="2x"
              style={{ color: "#7F7F7F", cursor: "pointer" }}
              onClick={() => {
                props.onDeletePost(post.id);
              }}
            />
            {/* <button
              onClick={() => {
                console.log("button clicked!!!");
                props.onDeleteFav(post.id);
              }}
            >
              onDeleteFav
            </button> */}
            <Link to="cart">
              <Button
                variant="extendedFab"
                onClick={() => {
                  props.updateOrders(post);
                  // alert("Added " + post.title + " to order!");
                }}
              >
                Order
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default connect(
  null, //mapStateToProps - I want parts of my redux state on this component's props
  { updateOrders } //mapDispatchToProps - I want some action creators (functions that i defined below my reducer) to be on props, and dispatch actions
)(Post);
