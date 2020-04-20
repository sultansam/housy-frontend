import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  Row,
  Col,
  Form,
  ToggleButtonGroup,
  ToggleButton,
  Badge
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import Currency from "react-currency-format";

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
        <Navbar />
        <Row className="housy pt-3 px-0">
          <Col lg={4} md={7} sm={12} className="mb-3 px-2">
            <div className="p-2">
              <Form>
                <div className="mb-2">
                  <p>Type of Rent</p>

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

                <div className="mb-3">
                  <p>Date</p>
                  <DatePicker
                    className="date-box"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="mb-2">
                  <p>Property Room</p>
                  <div className="property mb-2">
                    <p>Bedroom</p>
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

                  <div className="property">
                    <p>Bathroom</p>
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

                <div className="amenities mb-2">
                  <p>Amenities</p>
                  <div className="d-flex justify-content-between mb-0">
                    <small className="bold text-muted mb-0">Furnished</small>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between mb-0">
                    <small className="bold text-muted mb-0">Pet Allowed</small>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between">
                    <small className="bold text-muted mb-0">
                      Shared Accomodation
                    </small>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>
                </div>

                <div className="mb-2">
                  <p>Budget</p>
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
                <Col lg={4} className="house-list mb-3 p-2" key={housy.id}>
                  <Link to={`/detail/${housy.id}`}>
                    <div>
                      <div className="detail">
                        <div className="category p-2">
                          <Badge variant="light" className="mr-2 mb-2">
                            {housy.amenities}
                          </Badge>
                          <Badge variant="light" className="mr-2">
                            Pet Allowed
                          </Badge>
                          <Badge variant="light" className="mr-2">
                            Shared Accomodation
                          </Badge>
                        </div>

                        <img
                          className="house-img w-100 mb-2"
                          src={housy.image[0].src}
                          alt=""
                        />
                        <p className="bold mb-0">
                          <Currency
                            value={housy.price}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"Rp "}
                          />
                          / {housy.typeofrent}
                        </p>
                        <small className="bold">
                          {housy.bedroom} Beds, {housy.bathroom} Baths,
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
