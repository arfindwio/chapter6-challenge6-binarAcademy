import React from "react";
import "../../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Banner() {
  return (
    <div className="container CTA-banner color-2 text-center text-white p-5 mt-5">
      <h1 className="mb-4">Sewa Mobil di (Lokasimu) Sekarang</h1>
      <p className="banner-text mb-5 fw-lighter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button type="button" className="btn color-6 text-white">
        Mulai Sewa Mobil
      </button>
    </div>
  );
}

export default Banner;
