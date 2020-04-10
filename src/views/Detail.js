import React, { Component } from "react";
import { Row, Col, Card } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import data from "../data/home.json";

export default class Detail extends Component {
  state = {
    data: {},
    load: false
  };

  componentDidMount() {
    const {
      match: { params }
    } = this.props;
    console.log(params.id)
    const produk = data[params.id-1];
    this.setState({ data: produk, load: true });
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      infinite: false,
      edgeFriction: 0,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    const data = this.state.data;
    const load = this.state.load;

    console.log(data)

    return (
      <div>
        {load ? (
          <div>
            <Row className="px-0 pt-3">
              <Col lg={6} className="mb-5">
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
                  <h3>Housy {data.property}</h3>
                  <h5 className="bold">
                    Rp {data.price} / {data.typeofrent}
                  </h5>
                  <p className="small text-muted">{data.address}</p>

                  <div>
                    <h5>Description</h5>
                    <p>{data.description}</p>
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
