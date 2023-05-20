import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/style.css";
import { Card } from "react-bootstrap";

function Cards() {
  return (
    <div id="why-us" className="card-why-us container my-3 pt-5 pb-3">
      <h3 className="why-us-text fw-bolder">Why Us?</h3>
      <p className="why-us-text mt-3 mb-4">Mengapa harus pilih Binar Car Rental?</p>
      <div className="row align-items-center">
        <div class="card-why-us col-md-3 mb-3 mb-md-0">
          <Card className="card-why-us">
            <Card.Body>
              <img className="icon-why-us mx-2 my-3" src="img/iconComplete.png" alt="" />
              <Card.Title className="fw-bold py-1">Mobil Lengkap</Card.Title>
              <Card.Text>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-why-us col-md-3 mb-3 mb-md-0">
          <Card className="card-why-us">
            <Card.Body>
              <img className="icon-why-us mx-2 my-3" src="/img/iconPrice.png" alt="" />
              <Card.Title className="fw-bold py-1">Harga Murah</Card.Title>
              <Card.Text>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-why-us col-md-3 mb-3 mb-md-0">
          <Card className="card-why-us">
            <Card.Body>
              <img className="icon-why-us mx-2 my-3" src="/img/icon24hrs.png" alt="" />
              <Card.Title className="fw-bold py-1">Layanan 24 Jam</Card.Title>
              <Card.Text>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div class="card-why-us col-md-3 mb-3 mb-md-0">
          <Card className="card-why-us">
            <Card.Body>
              <img className="icon-why-us mx-2 my-3" src="/img/iconProfessional.png" alt="" />
              <Card.Title className="fw-bold py-1">Sopir Profesional</Card.Title>
              <Card.Text>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Cards;
