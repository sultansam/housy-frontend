import React, { Component } from "react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  Row,
  Col,
  Form,
  ToggleButtonGroup,
  ToggleButton
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

import data from "../data/home.json";

export default class Home extends Component {
  state = {
    startDate: new Date(),
    data: data
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    const data = this.state.data;

    return (
      <>
        <Row className="pt-3 px-0">
          <Col lg={4} md={7} sm={12} className="mb-3 px-2">
            <div className="p-2">
              <Form>
                <div className="section mb-4">
                  <h5>Type of Rent</h5>

                  <ToggleButtonGroup
                    type="radio"
                    name="options"
                    onChange={this.onChange}
                  >
                    <ToggleButton className="btn-rent mr-btn" value={"a"}>
                      Day
                    </ToggleButton>
                    <ToggleButton className="btn-rent mr-btn" value={"b"}>
                      Month
                    </ToggleButton>
                    <ToggleButton className="btn-rent" value={"c"}>
                      Year
                    </ToggleButton>
                  </ToggleButtonGroup>
                </div>

                <div className="section mb-4">
                  <h5>Date</h5>
                  <DatePicker
                    className="date-box"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="section mb-4">
                  <h5>Property Room</h5>
                  <div className="mb-2">
                    <p className="small bold text-muted mb-0">Bedroom</p>
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      onChange={this.onChange}
                    >
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"1"}
                      >
                        1
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"2"}
                      >
                        2
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"3"}
                      >
                        3
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"4"}
                      >
                        4
                      </ToggleButton>
                      <ToggleButton className="btn-prop" value={"5"}>
                        5+
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <div>
                    <p className="small bold text-muted mb-0">Bathroom</p>
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      onChange={this.onChange}
                    >
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"1"}
                      >
                        1
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"2"}
                      >
                        2
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"3"}
                      >
                        3
                      </ToggleButton>
                      <ToggleButton
                        className="btn-prop mr-btn-prop"
                        value={"4"}
                      >
                        4
                      </ToggleButton>
                      <ToggleButton className="btn-prop" value={"5"}>
                        5+
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Amenities</h5>
                  <div className="d-flex justify-content-between mb-0">
                    <p className="bold text-muted mb-0">Furnished</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between mb-0">
                    <p className="bold text-muted mb-0">Pet Allowed</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="bold text-muted mb-0">Shared Accomodation</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>
                </div>

                <div className="mb-4">
                  <h5>Budget</h5>
                  <div className="d-flex align-items-center justify-content-between">
                    <small className="bold mr-3">Less than IDR</small>
                    <input className="form-box" placeholder="0" />
                  </div>
                </div>
                <button className="btn-apply float-right">APPLY</button>
              </Form>
            </div>
          </Col>

          <Col>
            <Row>
              {data.map(housy => (
                <Col lg={4} className="mb-3 px-2" key={housy.id}>
                  <Link to={`/detail/${housy.id}`}>
                    <div className="card">
                      <div className="card-body p-2">
                        <div className="category p-2">{housy.amenities}</div>
                        <img
                          style={{ maxHeight: "160px" }}
                          className="card-img mb-2"
                          src={housy.image[0].src}
                          alt=""
                        />
                        <p className="bold mb-0">
                          Rp {housy.price} / {housy.typeofrent}
                        </p>
                        <small className="bold">
                          {housy.bedroom} Beds, {housy.bathroom} Baths,{" "}
                          {housy.area} ft
                        </small>
                        <br />
                        <small className="bold text-muted">{housy.city}</small>
                      </div>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </>
    );
  }
}
