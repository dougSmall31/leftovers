import React, { Component } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Auth />
        <Dashboard />
      </div>
    );
  }
}

export default App;
