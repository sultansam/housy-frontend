import React, { Component } from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default class Booking extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false, startDate: new Date(), endDate: new Date() };
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
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.toggle} className="btn-apply">
          Book Now
        </button>
        <Modal show={open} onHide={this.toggle} centered>
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
              <button onClick={this.handleOrder} className="btn-modal">Order</button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
