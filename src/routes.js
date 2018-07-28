import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import Form from "./components/Form";

export default (
  <Switch>
    <Route component={Auth} path="/login" />
    <Route component={Dashboard} exact path="/" />
    <Route component={Form} path="/new" />
    <Route component={Favorites} path="/favorites" />
  </Switch>
);
