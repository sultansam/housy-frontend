import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import cabin from "../images/cabin.svg";
import calendar from "../images/calendar.svg";
import logout from "../images/logout.svg";
import profile from "../images/profile.svg";

export default class Owner extends Component {
  

  /** handle sign out */
  handleSignOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  render() {
    return (
      <div>
        <Dropdown onSelect={() => null}>
          <Dropdown.Toggle className="btn-white p-0 circle">
            <img
              className="user"
              src="https://img.icons8.com/plasticine/2x/user.png"
              alt=".."
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-menu-right">
            <Link to="/profile" className="dropdown-item">
              <img className="dropdown-icon" src={profile} alt=".." />
              Profile
            </Link>
            <Link to="/admin/add" className="dropdown-item">
              <img className="dropdown-icon" src={cabin} alt=".." />
              Add Property
            </Link>
            <Link to="/admin/history" className="dropdown-item">
              <img className="dropdown-icon" src={calendar} alt=".." />
              History
            </Link>
            <div className="divider"></div>
            <div onClick={this.handleSignOut} className="dropdown-item">
              <img className="dropdown-icon" src={logout} alt=".." />
              Logout
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}
