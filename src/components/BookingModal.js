import React, { Component } from "react";
import { Modal, Form, FormGroup } from "react-bootstrap";

export default class Booking extends Component {
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
                <select className="forms" id="#checkin"></select>
              </FormGroup>
              <FormGroup>
                <label className="bold" htmlFor="#checkout">
                  Check-out
                </label>
                <br />
                <select className="forms" id="#checkout"></select>
              </FormGroup>
              <button className="btn-modal">Order</button>
            </Form>
          </div>
        </Modal>
      </div>
    );
  }
}
