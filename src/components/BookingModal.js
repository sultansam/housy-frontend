import React, { Component } from "react";
import SignIn from "./SignInModals";
import { Link } from "react-router-dom";
import { Modal, Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = { status: null, startDate: new Date(), endDate: new Date() };
    this.toggle = this.toggle.bind(this);
  }

  handleStart = date => {
    this.setState({
      startDate: date
    });
  };

  handleEnd = date => {
    this.setState({
      endDate: date
    });
  };

  toggle() {
    this.setState({
      open: !this.state.open
    });
  }

  componentDidMount() {
    const status = localStorage.getItem("login");
    this.setState({ status: status });
  }

  render() {
    return (
      <div>
        {!this.state.status ? (
          <SignIn {...this.props} />
        ) : (
          <Modal {...this.props} centered>
            <div className="text-center p-3">
              <h3 className="pt-3">How long you will stay</h3>
            </div>

            <div className="px-4 pt-0 pb-4">
              <Form>
                <FormGroup>
                  <label className="bold" htmlFor="#checkin">
                    Check-in
                  </label>
                  <br />
                  <DatePicker
                    className="date-box"
                    selected={this.state.startDate}
                    onChange={this.handleStart}
                  />
                </FormGroup>
                <FormGroup>
                  <label className="bold" htmlFor="#checkout">
                    Check-out
                  </label>
                  <br />
                  <DatePicker
                    className="date-box"
                    selected={this.state.endDate}
                    onChange={this.handleEnd}
                  />
                </FormGroup>
                <Link to="/booking">
                  <button className="btn-modal">Order</button>
                </Link>
              </Form>
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
