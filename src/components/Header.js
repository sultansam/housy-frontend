import React, { Component } from "react";
import icon from "../icon.svg";

export default class Header extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-between align-items-center pt-3"
        style={{ height: "120px" }}
      >
        <img src={icon} style={{ width: "138px", height: "71px" }} alt="" />
        <input
          className="form-box"
          style={{ width: "400px" }}
          placeholder="Tangerang Selatan"
        />
        <div className="d-flex">
          <button className="btn mr-3 font-weight-bold">Sign In</button>
          <button className="btn btn-light font-weight-bold">Sign Up</button>
        </div>
      </div>
    );
  }
}
