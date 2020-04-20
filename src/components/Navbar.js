import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav } from "react-bootstrap";
import SignIn from "./SignInModals";
import SignUp from "./SignUpModals";
import DropdownUser from "./DropdownUser";
import DropdownOwner from "./DropdownOwner";
import icon from "../images/icon.svg";

export default class Header extends Component {
  state = {
    signin: false,
    opens: false,
    open: false
  };

  componentDidMount() {
    const status = localStorage.getItem("login");
    const owner = localStorage.getItem("owner");
    this.setState({ signin: status, owner: owner });
  }

  modal = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ opens: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  signUp = () => {
    const paid = localStorage.getItem("paid");
    this.setState({ open: !this.state.show });
    if (paid > 0) {
      this.setState({ paid: true });
    }
  };

  render() {
    const signin = this.state.signin;
    const owner = this.state.owner;

    return (
      <Navbar bg="white" expand="lg" className="shadow py-2 fixed-top px-2">
        <SignIn
          show={this.state.opens}
          onHide={() => this.setState({ opens: !this.state.opens })}
        />

        <SignUp
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />

        <div className="container py-0">
          <Link to="/">
            <img style={{ height: "42px" }} src={icon} alt=".." />
          </Link>

          <Form className="navbar-center">
            {owner ? null : (
              <input
                className="form-box"
                style={{ maxWidth: "400px" }}
                placeholder="Search Housy"
              />
            )}
          </Form>

          {signin ? (
            owner ? (
              <DropdownOwner />
            ) : (
              <DropdownUser />
            )
          ) : (
            <>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link onClick={this.modal} className="bold">
                    Login
                  </Nav.Link>
                  <Nav.Link onClick={this.signUp} className="bold">
                    Register
                  </Nav.Link>
                </Nav>
                {/**
              <div className="d-flex">
                <button
                  onClick={this.modal}
                  className="btn-sign btn mr-3 font-weight-bold"
                >
                  Sign In
                </button>
                <button
                  onClick={this.signUp}
                  className="btn-sign btn btn-light font-weight-bold"
                >
                  Sign Up
                </button>
              </div>
               */}
              </Navbar.Collapse>
            </>
          )}
        </div>
      </Navbar>
    );
  }
}
