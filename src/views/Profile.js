import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import PassModal from "../components/PasswordModal";

import name from "../images/name.svg";
import email from "../images/email.svg";
import password from "../images/password.svg";
import tenant from "../images/tenant.svg";
import gender from "../images/gender.svg";
import phone from "../images/phone.svg";
import address from "../images/address.svg";

export default class Profile extends Component {
  render() {
    return (
      <Row className="pt-3 justify-content-center p-3">
        <Card className="p-4">
          <Row>
            <Col lg={7} sm={12}>
              <h4>Personal Info</h4>
              <Row>
                <Col lg={6}>
                  <div className="d-flex align-items-center my-3">
                    <div className="mr-2">
                      <img src={name} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">Radif Ganteng</p>
                      <small>Full Name</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={email} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">radifganteng@gmail.com</p>
                      <small>Email</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={password} alt=".." />
                    </div>
                    <div>
                      <PassModal />
                      <small>Password</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={tenant} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">Tenant</p>
                      <small>Status</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={gender} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">Male</p>
                      <small>Gender</small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={phone} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">0822-4097-2391</p>
                      <small>Mobile Phone</small>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="d-flex align-items-center mb-3">
                    <div className="mr-2">
                      <img src={address} alt=".." />
                    </div>
                    <div>
                      <p className="bold mb-0">
                        Perumahan Permata Bintaro Residence C-3
                      </p>
                      <small>Address</small>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="profile-img mb-3"></div>
              <button className="btn-profile">Change Profile Picture</button>
            </Col>
          </Row>
        </Card>
      </Row>
    );
  }
}
