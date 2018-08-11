import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  updateTitle,
  updateCat,
  updateDesc,
  updateServ,
  updateCost,
  updateImg,
  updateId
} from "../ducks/reducer";

const BASE_URL = "http://localhost:4000";

//need to add user id to state from auth
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title || "",
      category: this.props.category || "",
      description: this.props.description || "",
      servings: this.props.servings || "",
      cost: this.props.cost || "",
      image: this.props.image || "",
      id: this.props.id || ""
    };
  }
  titleHandler = value => {
    this.setState({ title: value });
  };
  catHandler = value => {
    this.setState({ category: value });
  };
  descHandler = value => {
    this.setState({ description: value });
  };
  servHandler = value => {
    this.setState({ servings: value });
  };
  costHandler = value => {
    this.setState({ cost: value });
  };
  imageHandler = value => {
    this.setState({ image: value });
  };
  submitHandler = () => {
    const { title, category, description, servings, cost, image } = this.props;
    console.log("this pup", { ...this.state, id: this.props.id });
    axios({
      method: "POST",
      url: BASE_URL + "/api/new",
      data: { ...this.state, id: this.props.id }
    }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div className="Form">
        <h1>New Post</h1>
        <div className="form_contents">
          <div id="post_container">
            {/* <h3>Title:</h3> */}
            <TextField
              className="form_input"
              label="Title"
              margin="normal"
              fullWidth
              placeholder="50 Characters"
              title={this.state.title}
              onChange={e => this.titleHandler(e.target.value)}
              value={this.state.title}
            />
          </div>
          <div id="post_container">
            <TextField
              className="form_input"
              label="Category"
              margin="normal"
              fullWidth
              placeholder="30 Characters"
              category={this.state.category}
              onChange={e => this.catHandler(e.target.value)}
              value={this.state.category}
            />
          </div>
          <div id="post_container">
            <TextField
              className="form_input"
              label="Number of Servings Available"
              margin="normal"
              fullWidth
              servings={this.state.servings}
              onChange={e => this.servHandler(e.target.value)}
              value={this.state.servings}
            />
          </div>
          <div id="post_container">
            <TextField
              className="form_input"
              label="Cost Per Serving"
              margin="normal"
              fullWidth
              cost={this.state.cost}
              onChange={e => this.costHandler(e.target.value)}
              value={this.state.cost}
            />
          </div>
          <div id="post_container">
            {/* amazon s3 functionallity */}

            <TextField
              className="form_input"
              label="Upload an Image"
              margin="normal"
              fullWidth
              placeholder="image url"
              image={this.state.image}
              onChange={e => this.imageHandler(e.target.value)}
              value={this.state.image}
            />
          </div>
          <div id="post_container">
            <TextField
              className="form_inputLrg"
              label="Brief Description"
              margin="normal"
              fullWidth
              multiline
              placeholder="200 characters"
              description={this.state.description}
              onChange={e => this.descHandler(e.target.value)}
              value={this.state.description}
            />
          </div>
          <br />
          <Link to="/">
            <Button
              variant="extendedFab"
              // color="primary"
              onClick={this.submitHandler}
            >
              Submit
            </Button>
          </Link>
          {/* clear form button */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("this is state", state);
  const { title, category, description, servings, cost, image, id } = state;

  return { title, category, description, servings, cost, image, id };
}

export default connect(
  mapStateToProps,
  {
    updateTitle,
    updateCat,
    updateDesc,
    updateServ,
    updateCost,
    updateImg,
    updateId
  }
)(Form);
