import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { Modal, Form, FormGroup } from "react-bootstrap";

export default class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  select = e => {
    const val = e.target.value;
    localStorage.setItem("owner", val);
  };

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  /** login handler */
  handleSign = () => {
    localStorage.setItem("login", true);
  };

  renderRedirect = () => {
    const owner = localStorage.getItem("owner");
    if (owner > 0) {
      return <Redirect to="/admin/home" />;
    }
  };

  render() {
    const { open } = this.state;
    return (
      <div>
        <button
          onClick={this.toggle}
          className="btn-sign btn mr-3 font-weight-bold"
        >
          Sign In
        </button>
        <Modal size="sm" show={open} onHide={this.toggle} centered>
          <div className="text-center p-3">
            <h3 className="pt-3">Sign In</h3>
          </div>

          <div className="px-4 pt-0 pb-4">
            <Form>
              <FormGroup>
                <label className="bold" htmlFor="#username">
                  Username
                </label>
                <br />
                <input
                  required
                  autoComplete="off"
                  className="forms"
                  id="#username"
                />
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#password">
                  Password
                </label>
                <br />
                <input
                  required
                  autoComplete="off"
                  className="forms"
                  type="password"
                  id="#password"
                />
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#password">
                  Log In As
                </label>
                <br />
                <select onChange={this.select} required className="forms">
                  <option value="0">Tenant</option>
                  <option value="1">Owner</option>
                </select>
              </FormGroup>
              <button onClick={this.handleSign} className="btn-modal">
                Sign In
              </button>
              {this.renderRedirect()}
            </Form>
            <div className="text-center mt-3">
              <small>Don't have account? </small>
              <Link to="/register" onClick={this.toggle}>
                <small className="bold">Click Here</small>
              </Link>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}
