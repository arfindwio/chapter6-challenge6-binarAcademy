import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import { Button, Navbar, Container, Offcanvas, Nav } from "react-bootstrap";

export default () => {
  return (
    <Navbar expand="lg" className="fixed-top mb-3 color-1">
      <Container fluid className="mx-5">
        <Navbar.Brand href="/">
          <img className="logo ms-lg-5" src="/img/logo.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas id={`offcanvasNavbar-expand-lg`} aria-labelledby={`offcanvasNavbarLabel-expand-lg`} placement="end" className="navbar-offcanvas">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>BCR</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="#our-service" className="nav-link mx-2 text-black">
                Our Service
              </Nav.Link>
              <Nav.Link href="#why-us" className="nav-link mx-2 text-black">
                Why Us
              </Nav.Link>
              <Nav.Link href="#testimonial" className="nav-link mx-2 text-black">
                Testimonial
              </Nav.Link>
              <Nav.Link href="#faq" className="nav-link mx-2 text-black">
                FAQ
              </Nav.Link>
              <Button variant="outline-success" className="btn color-6 mx-2 fw-bold text-white" href="#">
                Register
              </Button>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
