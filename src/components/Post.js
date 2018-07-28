import React from "react";
import "../App.css";

const Post = props => {
  return (
    <div id="post_container">
      {props.posts.map(post => (
        <div className="Post">
          <img src={post.image} />
          <h2>{post.title}</h2>
          <ul>
            <li>category:{post.category}</li>
            {/* need to build logic for servings */}
            <li>servings available:{post.servings}</li>
            <li>Price:{post.cost}</li>
          </ul>
          <p>Description:{post.description}</p>
        </div>
        //delete button
      ))}
    </div>
  );
};

export default Post;
