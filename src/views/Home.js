import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Home extends Component {
  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <>
        <div className="row pt-3 px-0">
          <div className="col-lg-4 mb-3 px-2">
            <div className="card">
              <div className="p-4">
                <div className="section mb-4">
                  <h5>Type of Rent</h5>

                  <div className="d-flex justify-content-between">
                    <button className="btn-rent bold">Day</button>
                    <button className="btn-rent bold">Month</button>
                    <button className="btn-rent bold">Year</button>
                  </div>
                </div>

                <div className="section mb-4">
                  <h5>Date</h5>
                  <DatePicker
                    className="date-box"
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="section mb-4">
                  <h5>Property Room</h5>
                  <div className="mb-2">
                    <small className="bold text-muted">Bedroom</small>
                    <br />
                    <button className="btn-store">1</button>
                    <button className="btn-store">2</button>
                    <button className="btn-store">3</button>
                    <button className="btn-store">4</button>
                    <button className="btn-store">5+</button>
                  </div>

                  <div>
                    <small className="bold text-muted">Bathroom</small>
                    <br />
                    <button className="btn-store">1</button>
                    <button className="btn-store">2</button>
                    <button className="btn-store">3</button>
                    <button className="btn-store">4</button>
                    <button className="btn-store">5+</button>
                  </div>
                </div>

                <div className="section mb-4">
                  <h5>Amenities</h5>

                  <div className="d-flex justify-content-between mb-0">
                    <p className="bold text-muted mb-0">Furnished</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between mb-0">
                    <p className="bold text-muted mb-0">Pet Allowed</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                  <div className="d-flex justify-content-between">
                    <p className="bold text-muted mb-0">Shared Accomodation</p>
                    <label>
                      <input
                        className="checkbox"
                        type="checkbox"
                        value="check1"
                      />
                    </label>
                  </div>

                </div>

                <div className="section mb-4">
                  <h5>Budget</h5>
                  <div className="d-flex align-items-center justify-content-between">
                    <small className="bold">Less than IDR.</small>
                    <input className="form-box" placeholder="8.000.000" />
                  </div>
                </div>

                <button className="btn-apply float-right">APPLY</button>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="row">

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 mb-3 px-2">
                <div className="card">
                  <div className="card-body p-2">
                    <div className="category p-2">Furnished</div>
                    <img
                      className="card-img mb-2"
                      src="https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/20007376-b047680ca88979d68c3c6cf2c5fb9aeb.jpeg?tr=q-40,c-at_max,w-740,h-500&_src=imagekit"
                      alt=""
                    />
                    <p className="bold mb-0">Rp 9.000.000 / Year</p>
                    <small className="bold">3 Beds, 2 Baths, 1,800 sqft</small>
                    <br />
                    <small className="bold text-muted">
                      Tangerang Selatan, Pondok Aren
                    </small>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
