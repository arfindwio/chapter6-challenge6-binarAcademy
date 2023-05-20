import React, { useState } from "react";
import "../../css/style.css";
import { Carousel } from "react-bootstrap";

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div id="testimonial" className="pt-4">
      <h2 className="text-center my-2">Testimonial</h2>
      <p className="text-center my-4">Berbagai review positif dari para pelanggan kami</p>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card card-style color-1 mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img src="/img/photo.png" className="photo-style img-fluid rounded-start" alt="photo" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <img src="/img/Rate.png" className="rate-testimonial rate-style my-3" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p className="bold-text">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card card-style color-1 mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img src="/img/photo2.png" className="photo-style img-fluid rounded-start" alt="photo" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <img src="/img/Rate.png" className="rate-testimonial rate-style my-3" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p className="bold-text">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-center">
            <div className="card card-style color-1 mb-3">
              <div className="row g-0">
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <img src="/img/photo.png" className="photo-style img-fluid rounded-start" alt="photo" />
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <img src="/img/Rate.png" className="rate-testimonial rate-style my-3" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    </p>
                    <p className="bold-text">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
