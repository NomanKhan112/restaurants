import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "../layouts/Home/index";
import Sheflist from "../layouts/Shef list/index.js";

const Routing = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Sheflist" component={Sheflist} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routing;
