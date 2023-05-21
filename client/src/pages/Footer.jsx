import React from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <div className="container footer pt-5">
      <div className="row">
        <div className="col-md-4 col-lg-3 mb-1 mb-md-0">
          <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p>binarcarrental@gmail.com</p>
          <p>081-233-334-808</p>
        </div>
        <div className="col-md-2 col-lg-3 mb-3 mb-md-0">
          <a href="#our-service" className="footer-menu mb-md-2">
            Our Service
          </a>
          <a href="#why-us" className="footer-menu mb-md-2">
            Why Us
          </a>
          <a href="#testimonial" className="footer-menu mb-md-2">
            Testimonial
          </a>
          <a href="#faq" className="footer-menu">
            FAQ
          </a>
        </div>
        <div className="col-md-3 col-lg-3 mb-3 mb-md-0">
          <p>Connect with us</p>
          <a href="#">
            <img src="/img/icon_facebook.png" className="icon-social-media me-2" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon_instagram.png" className="icon-social-media me-2" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon_twitter.png" className="icon-social-media me-2" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon_mail.png" className="icon-social-media me-2" alt="" />
          </a>
          <a href="#">
            <img src="/img/icon_twitch.png" className="icon-social-media me-2" alt="" />
          </a>
        </div>
        <div className="col-md-3 col-lg-3 pb-3">
          <p>Copyright Binar 2022</p>
          <a href="#">
            <img className="logo" src="/img/logo.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
