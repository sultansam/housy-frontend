import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import SignIn from "./SignInModals";
import SignUp from "./SignUpModals";
import Dropdown from "./DropdownUser";
import icon from "../images/icon.svg";

export default class Header extends Component {
  state = {
    signin: true
  };

  render() {
    const signin = this.state.signin;

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

          {signin ? (
            <Dropdown />
          ) : (
            <div className="d-flex mt-3">
              <SignIn />
              <SignUp />
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
