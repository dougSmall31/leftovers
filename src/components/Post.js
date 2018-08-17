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
            <FontAwesomeIcon
              name="heart"
              size="2x"
              style={{ color: "#ff6d65" }}
              onClick={() => {
                console.log("button clicked!!!");
                props.onAddFav(post.id);
              }}
            />
          </div>
          {/* bold category */}
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
              style={{ color: "#7F7F7F" }}
              onClick={() => {
                props.onDeletePost(post.id);
              }}
            />
            <Link to="cart">
              <Button
                variant="extendedFab"
                onClick={() => {
                  props.updateOrders(post);
                  // onAddToCart(post.id);
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
