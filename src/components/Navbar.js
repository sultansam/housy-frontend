import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form } from "react-bootstrap";
import SignIn from "./SignInModals";
import SignUp from "./SignUpModals";
import DropdownUser from "./DropdownUser";
import DropdownOwner from "./DropdownOwner";
import icon from "../images/icon.svg";

export default class Header extends Component {
  state = {
    signin: false,
    owner: false
  };

  componentDidMount() {
    const status = localStorage.getItem("login");
    this.setState({ signin: status });
  }

  render() {
    const signin = this.state.signin;
    const owner = this.state.owner;

    return (
      <Navbar bg="white" expand="lg" className="px-0">
        <Link to="/">
          <img style={{ height: "50px" }} src={icon} alt=".." />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="navbar-center">
            <input
              className="form-box"
              style={{ maxWidth: "400px" }}
              placeholder="Search"
            />
          </Form>

          {signin ? (
            owner ? (
              <DropdownOwner />
            ) : (
              <DropdownUser />
            )
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
