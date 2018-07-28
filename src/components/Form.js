import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="Form">
        <h1>New Post</h1>
        <div id="post_container">
          <h3>Title:</h3>
          <input placeholder="50 Characters" />
        </div>
        <div id="post_container">
          <h3>Category:</h3>
          <input placeholder="30 Characters" />
        </div>
        <div id="post_container">
          <h3>Brief Description:</h3>
          <input placeholder="200 characters" />
        </div>
        <div id="post_container">
          <h3>Servings Available:</h3>
          <input />
        </div>
        <div id="post_container">
          <h3>Cost:</h3>
          <input />
        </div>
        <div id="post_container">
          {/* amazon s3 functionallity */}
          <h3>Upload an Image:</h3>
          <input placeholder="image url" />
          {/* google maps api */}
          {/* <h3>Pickup Location:</h3>
        <input /> */}
          <br />
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Form;
