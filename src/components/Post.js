import React from "react";
import "../App.css";

const Post = props => {
  console.log(props, "this is props");

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
          <div>
            <button>Favorite</button>
            <button>Delete</button>
          </div>
        </div>
        //delete button only deletes if userid matches user
        //favorite star button adds
      ))}
    </div>
  );
};

export default Post;
