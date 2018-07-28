import React from "react";

const Post = props => {
  return (
    <div>
      <h1>All Posts</h1>
      {props.posts.map(post => (
        <div>
          <h2>{post.title}</h2>
          {/* <image src={post.image}/> */}
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
