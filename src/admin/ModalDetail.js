import React, { Component } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import logo from "../images/icon.svg";

export default class Detail extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton></Modal.Header>
          <div className="pt-3 p-2">
            <div className="d-flex px-3 justify-content-between align-items-top">
              <img
                style={{ width: "100px", height: "60px" }}
                src={logo}
                alt=".."
              />
              <div className="text-right">
                <h3>Booking</h3>
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
                </div>
              </Col>
              <Col lg={5} md={12} sm={12}>
                <div class="p-3 timeline-wrapper">
                  <ul class="StepProgress">
                    <li class="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div class="bold">Check-in</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div class="bold">Amenities</div>
                          <div>Furnished</div>
                        </div>
                      </div>
                    </li>
                    <li class="StepProgress-item is-done">
                      <div className="d-flex">
                        <div className="mr-4">
                          <div class="bold">Check-out</div>
                          <div>30 March 2020</div>
                        </div>
                        <div>
                          <div class="bold">Type of Rent</div>
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
                    <img
                      style={{ width: "60%" }}
                      className="booking-img mb-2 m-auto"
                      alt=".."
                      src="https://cdn-brilio-net.akamaized.net/community/2017/12/08/4835/image_1512662902_5a29677658eb5.jpg"
                    />
                    <small>Upload Payment Proof</small>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="px-3">
              <table class="table table-striped table-bordered table-sm">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Full Name</th>
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
                    <td>
                      Long time rent :{" "}
                      <b className="text-danger float-right">1 Year</b>
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>
                      Total :{" "}
                      <b className="text-danger float-right">Rp. 3.000.000</b>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <Modal.Footer>
            <div className="d-flex">
              <Button
                variant="danger"
                className="mr-2 btn-sm bold"
                onClick={this.props.onHide}
              >
                Cancel
              </Button>
              <Button
                variant="success"
                className="bold"
                onClick={this.props.onHide}
              >
                Approve
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
