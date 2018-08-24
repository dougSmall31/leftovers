import React from "react";
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Favorites from "./components/Favorites";
import Form from "./components/Form";
import Cart from "./components/Cart";
import Landing from "./components/Landing";

export default (
  <Switch>
    <Route component={Landing} path="/landing" />
    <Route component={Dashboard} exact path="/" />
    <Route component={Form} path="/new" />
    <Route component={Favorites} path="/favorites" />
    <Route component={Cart} path="/cart" />
  </Switch>
);
