import React, { Component } from "react";
import search from "../images/search.svg";
import Detail from "./ModalDetail";
import Navbar from "../components/Navbar";
export default class Home extends Component {
  state = {
    open: false
  };

  toggle = () => {
    this.setState({ open: true });
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="pt-3">
          <Detail
            show={this.state.open}
            onHide={() => this.setState({ open: !this.state.open })}
          />
          <table class="table table-sm table-striped">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">User</th>
                <th scope="col">Type of Rent</th>
                <th scope="col">Bukti Transfer</th>
                <th scope="col">Status Payment</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Radif Ganteng</td>
                <td>Year</td>
                <td>bca.jpg</td>
                <td>Approve</td>
                <td>
                  <img onClick={this.toggle} src={search} alt=".." />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
