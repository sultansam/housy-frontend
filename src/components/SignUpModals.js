import React, { Component } from "react";
import { Modal, Form, FormGroup, Row, Col } from "react-bootstrap";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const { open } = this.state;
    return (
      <div>
        <button
          onClick={this.toggle}
          className="btn-sign btn btn-light font-weight-bold"
        >
          Sign Up
        </button>
        <Modal show={open} onHide={this.toggle} centered>
          <Modal.Header closeButton></Modal.Header>
          <div className="text-center p-3">
            <h3 className="pt-3">Sign Up</h3>
          </div>

          <div className="px-4 pt-0 pb-4">
            <Form>
              <Row>
                <Col lg={6} sm={12}>
                  <FormGroup>
                    <label className="bold" htmlFor="#fullname">
                      Full Name
                    </label>
                    <br />
                    <input required className="forms" id="#fullname" />
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#username">
                      Username
                    </label>
                    <br />
                    <input required className="forms" id="#username" />
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#email">
                      Email
                    </label>
                    <br />
                    <input
                      required
                      type="email"
                      className="forms"
                      id="#email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#password">
                      Password
                    </label>
                    <br />
                    <input
                      required
                      className="forms"
                      type="password"
                      id="#password"
                    />
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup>
                    <label className="bold" htmlFor="#list">
                      List As
                    </label>
                    <br />
                    <select className="forms" id="#list">
                      <option selected>Tenant</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#gender">
                      Gender
                    </label>
                    <br />
                    <select className="forms" id="#gender">
                      <option disabled selected>
                        Select Gender
                      </option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#phone">
                      Phone
                    </label>
                    <br />
                    <input
                      required
                      className="forms"
                      id="#phone"
                      type="number"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label className="bold" htmlFor="#address">
                      Address
                    </label>
                    <br />
                    <textarea
                      rows="6"
                      cols="50"
                      className="forms"
                      id="#address"
                    />
                  </FormGroup>
                </Col>
              </Row>

              <button className="btn-modal">Sign Up</button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
