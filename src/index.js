import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import Home from "./views/Home";
import SignUp from "./views/SignUp";
import Detail from "./views/Detail";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div className="container pb-5">
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();