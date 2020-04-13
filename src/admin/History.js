import React, { Component } from "react";

import QRCode from "qrcode.react";

import { Row, Col } from "react-bootstrap";
import logo from "../images/icon.svg";

//import "../styles/booking.css";

export default class History extends Component {
  render() {
    return (
      <div className="justify-content-center row">
        <div className="col-lg-10 p-4">
          <div className="card pt-3 p-2 mb-3">
            <div className="d-flex px-3 justify-content-between align-items-top">
              <img
                style={{ width: "100px", height: "60px" }}
                src={logo}
                alt=".."
              />
              <div className="text-right">
                <h3>INVOICE</h3>
                <p className="text-muted mb-2">
                  <b>Saturday</b>, 30 March 2020
                </p>
              </div>
            </div>
            <Row>
              <Col lg={4} md={12} sm={12} className="mb-3">
                <div className="p-3">
                  <h4>House Astina</h4>
                  <p className="mb-0">
                    Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                    Tangerang Selatan
                  </p>
                  <div className="mt-3 bold badge badge-success">Approve</div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <div className="p-3 timeline-wrapper">
                  <ul className="StepProgress">
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-in</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div className="bold">Amenities</div>
                          <div>Furnished</div>
                        </div>
                      </div>
                    </li>
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-out</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div className="bold">Type of Rent</div>
                          <div>Year</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="p-3">
                  <div className="text-center">
                    <div>
                      <QRCode
                        size="256"
                        style={{ height: "100px", width: "100px" }}
                        value="TYE938"
                      />
                    </div>
                    <h4 className="mt-3">TYE938</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="px-3">
              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">User</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Radif Ganteng</td>
                    <td>Male</td>
                    <td>0853 2034 2342</td>
                    <td>Long time rent : <b className="text-danger float-right">1 Year</b></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total : <b className="text-danger float-right">Rp. 3.000.000</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card pt-3 p-2">
            <div className="d-flex px-3 justify-content-between align-items-top">
              <img
                style={{ width: "100px", height: "60px" }}
                src={logo}
                alt=".."
              />
              <div className="text-right">
                <h3>INVOICE</h3>
                <p className="text-muted mb-2">
                  <b>Saturday</b>, 30 March 2020
                </p>
              </div>
            </div>
            <Row>
              <Col lg={4} md={12} sm={12} className="mb-3">
                <div className="p-3">
                  <h4>House Astina</h4>
                  <p className="mb-0">
                    Jl. Elang IV Perum Permata Bintaro Residence, Pondok Aren,
                    Tangerang Selatan
                  </p>
                  <div className="mt-3 bold badge badge-success">Approve</div>
                </div>
              </Col>
              <Col lg={4} md={12} sm={12}>
                <div className="p-3 timeline-wrapper">
                  <ul className="StepProgress">
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-in</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div className="bold">Amenities</div>
                          <div>Furnished</div>
                        </div>
                      </div>
                    </li>
                    <li className="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div className="bold">Check-out</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div className="bold">Type of Rent</div>
                          <div>Year</div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </Col>
              <Col>
                <div className="p-3">
                  <div className="text-center">
                    <div>
                      <QRCode
                        size={256}
                        style={{ height: "100px", width: "100px" }}
                        value="TYE938"
                      />
                    </div>
                    <h4 className="mt-3">TYE938</h4>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="px-3">
              <table className="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">User</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Phone</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Radif Ganteng</td>
                    <td>Male</td>
                    <td>0853 2034 2342</td>
                    <td>Long time rent : <b className="text-danger float-right">1 Year</b></td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Total : <b className="text-danger float-right">Rp. 3.000.000</b></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
