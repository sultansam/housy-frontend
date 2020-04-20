import React, { Component } from "react";
import Navbar from "../components/Navbar";
import { Row, Col } from "react-bootstrap";
import Currency from "react-currency-format";

import Slider from "react-slick";
import Booking from "../components/BookingModal";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import bed from "../images/bed.svg";
import bathroom from "../images/bathroom.svg";

import data from "../data/home.json";

export default class Detail extends Component {
  state = {
    data: {},
    load: false,
    open: false
  };

  componentDidMount() {
    window.scrollTo(0, 0);

    const {
      match: { params }
    } = this.props;

    console.log(params.id);
    const produk = data[params.id - 1];
    this.setState({ data: produk, load: true });
  }

  order = () => {
    this.setState({ open: !this.state.show });
  };

  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      edgeFriction: 0,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const data = this.state.data;
    const load = this.state.load;

    console.log(data);

    return (
      <div className="margin-top-detail">
        <Navbar />
        <Booking
          show={this.state.open}
          onHide={() => this.setState({ open: !this.state.open })}
        />
        {load ? (
          <div>
            <Row className="px-0 pt-3">
              <Col lg={6} className="mb-3">
                <div>
                  <Slider {...settings} className="slide-border">
                    {data.image.length > 0
                      ? data.image.map((housy, i) => {
                          return (
                            <div key={i}>
                              <div
                                className="productx sliderlanding"
                                style={{
                                  backgroundImage: `url(${housy.src})`
                                }}
                              ></div>
                            </div>
                          );
                        })
                      : null}
                  </Slider>
                </div>
              </Col>
              <Col>
                <div>
                  <h3>House {data.property}</h3>

                  <div className="d-flex justify-content-between align-items-top">
                    <div className="mr-0">
                      <h5 className="bold">
                        <Currency
                          value={data.price}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"Rp "}
                        />
                        / {data.typeofrent}
                      </h5>
                      <div>
                        <p className="small text-muted mb-3">{data.address}</p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    <div className="mr-3">
                      <p className="small bold mb-1">Bedrooms</p>
                      <h5>
                        {data.bedroom}
                        <img className="icons" src={bed} alt=".." />
                      </h5>
                    </div>
                    <div className="mr-3">
                      <p className="small bold mb-1">Bathrooms</p>
                      <h5>
                        {data.bathroom}
                        <img className="icons" src={bathroom} alt=".." />
                      </h5>
                    </div>
                    <div>
                      <p className="small bold mb-1">Area</p>
                      <h5>{data.area} ft</h5>
                    </div>
                  </div>

                  <div>
                    <h5>Description</h5>
                    <p>{data.description}</p>
                  </div>

                  <div className="float-right">
                    <button onClick={this.order} className="btn-apply">
                      Book Now
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ) : null}
      </div>
    );
  }
}
