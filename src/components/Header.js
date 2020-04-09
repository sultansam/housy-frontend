import React, { Component } from "react";
import SignIn from "./SignInModals";
import SignUp from "./SignUpModals"
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
          <SignIn />
          <SignUp />
        </div>
      </div>
    );
  }
}
