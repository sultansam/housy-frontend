import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import bill from "../images/bill.svg";
import calendar from "../images/calendar.svg";
import logout from "../images/logout.svg";
import profile from "../images/profile.svg";

export default class User extends Component {
  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle className="btn-white p-0 circle">
            <img
              className="user"
              src="https://img.icons8.com/plasticine/2x/user.png"
              alt=".."
            />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Link to="/profile" className="dropdown-item">
              <img className="dropdown-icon" src={profile} alt=".." />
              Profile
            </Link>
            <Link to="/booking" className="dropdown-item">
              <img className="dropdown-icon" src={bill} alt=".." />
              My Booking
            </Link>
            <Link to="/history" className="dropdown-item">
              <img className="dropdown-icon" src={calendar} alt=".." />
              History
            </Link>
            <div className="divider"></div>
            <Link to="/logout" className="dropdown-item">
              <img className="dropdown-icon" src={logout} alt=".." />
              Logout
            </Link>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
