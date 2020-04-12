import React, { Component } from "react";
import search from "../images/search.svg";

export default class Home extends Component {
  render() {
    return (
      <div className="pt-3">
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
                <img src={search} alt=".." />{" "}
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Radif Ganteng</td>
              <td>Year</td>
              <td>bca.jpg</td>
              <td>Approve</td>
              <td>
                <img src={search} alt=".." />{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
