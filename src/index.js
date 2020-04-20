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
import Add from "./admin/AddProperty";
import HistoryTrans from "./admin/History";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

import "./styles/main.scss";

import * as serviceWorker from "./serviceWorker";

const admin = localStorage.getItem("owner");

ReactDOM.render(
  <BrowserRouter>
    <div className="container pb-5 margin-top">
      <Switch>
        {admin ? (
          <Route exact path="/" component={Admin} />
        ) : (
          <Route exact path="/" component={Home} />
        )}

        <Route exact path="/register" component={SignUp} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/history" component={History} />

        {/** admin page */}

        <Route exact path="/admin/add" component={Add} />
        <Route exact path="/admin/history" component={HistoryTrans} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
