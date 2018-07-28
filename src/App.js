import React, { Component } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Nav from "./components/Nav";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Auth />
        <Dashboard /> */}
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;
