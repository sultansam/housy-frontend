import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import SignIn from "./SignInModals";
import SignUp from "./SignUpModals";
import icon from "../images/icon.svg";

export default class Header extends Component {
  render() {
    return (
      <Navbar bg="white" expand="lg" className="px-0">
        <Link to="/">
          <img src={icon} alt=".." />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="navbar-center">
            <input
              className="form-box"
              style={{ maxWidth: "400px" }}
              placeholder="Search Location"
            />
          </Form>
          <SignIn />
          <SignUp />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
