import React from "react";
import "../../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import serviceImg from '../../../public/img/icon24hrs.png';
// import Ceklis from '../../public/img/ceklis.png';

function OurService() {
  return (
    <div id="our-service" className="container pt-5">
      <div className="row d-flex align-items-center justify-content-center">
        <div className="col-12 col-lg-5 mb-4 mb-md-0 py-4">
          <img src="/img/Happy-Girl.png" className="img-fluid img-our" alt="Happy-Girl" />
        </div>
        <div className="col-12 col-lg-5 mt-md-3 py-4">
          <h2 className="mb-4 lh-base fw-bolder">Best Car Rental for any kind of trip in Jakarta Barat!</h2>
          <p className="mb-4">
            Sewa mobil di Jakarta Barat bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
          </p>
          <div className="my-1">
            <img src="/img/check.png" className="check-our-service mx-2 my-1" alt="check" />
            Sewa Mobil Dengan Supir di Bali 12 Jam
          </div>
          <div className="my-1">
            <img src="/img/check.png" className="check-our-service mx-2 my-1" alt="check" />
            Sewa Mobil Lepas Kunci di Bali 24 Jam
          </div>
          <div className="my-1">
            <img src="/img/check.png" className="check-our-service mx-2 my-1" alt="check" />
            Sewa Mobil Jangka Panjang Bulanan
          </div>
          <div className="my-1">
            <img src="/img/check.png" className="check-our-service mx-2 my-1" alt="check" />
            Gratis Antar - Jemput Mobil di Bandara
          </div>
          <div className="my-1">
            <img src="/img/check.png" className="check-our-service mx-2 my-1" alt="check" />
            Layanan Airport Transfer / Drop In Out
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurService;
