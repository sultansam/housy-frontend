import React, { Component } from "react";
import { Form, FormGroup } from "react-bootstrap";

export default class AddProper extends Component {
  render() {
    return (
      <div className="pt-3">
        <div>
          <h4>Add Property</h4>
          <Form>
            <FormGroup>
              <label className="bold" htmlFor="#fullname">
                Name Property
              </label>
              <br />
              <input required className="forms" id="#fullname" />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="#username">
                City
              </label>
              <br />
              <input required className="forms" id="#username" />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="#email">
                Address
              </label>
              <br />
              <input required type="email" className="forms" id="#email" />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="#password">
                Price
              </label>
              <br />
              <input
                required
                className="forms"
                type="password"
                id="#password"
              />
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="#list">
                Type of Rent
              </label>
              <br />
              <select className="forms" id="#list">
                <option selected>Tenant</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label className="bold" htmlFor="#gender">
                Bedroom
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
                Bathroom
              </label>
              <br />
              <input required className="forms" id="#phone" type="number" />
            </FormGroup>

            <button className="btn-modal">Save</button>
          </Form>
        </div>
      </div>
    );
  }
}
