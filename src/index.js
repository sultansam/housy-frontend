import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Profile from "./views/Profile";
import Booking from "./views/Booking";
import History from "./views/History";
import SignUp from "./views/SignUp";
import Detail from "./views/Detail";

import Admin from "./admin/Home";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <div className="container pb-5">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={SignUp} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/history" component={History} />

        <Route exact path="/admin/home" component={Admin} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();