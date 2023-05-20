import React from "react";
import "../css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="container-fluid color-1">
      <div className="row home-content pt-5 mt-5">
        <div className="col-lg my-auto">
          <h1>Sewa & Rental Mobil Terbaik di kawasan Jakarta Barat</h1>
          <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
          <a className="color-6 btn text-white fw-bold" id="mulai-sewa-mobil" href="/cars">
            Mulai Sewa Mobil
          </a>
        </div>
        <div className="col-lg mt-4">
          <img className="img-fluid" src="/img/mobil.png" alt="..." />
        </div>
      </div>
    </div>
  );
}

export default Home;
