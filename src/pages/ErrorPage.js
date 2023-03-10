import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import havenlogo from "../assets/icons/havenlogo.png";
import errorimage from "../assets/images/Errorpage/Error404Image-removebg-preview.png";
import { GoHome } from "../components/Buttons/dashboard/actionBtn";
const ErrorPage = () => {
  return (
    <>
      <div className="error404Bg ">
        <Erro404Navbar />
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center ">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <div className="">
                <h4 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                  Error 404
                </h4>
                <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                  Error 404
                </h3>
                <h2 className="">Hey Buddy</h2>

                <p className="">
                  We can't seems to find the page you are looking for.We can’t
                  seems to find the page you are looking for.,We can’t seems to
                  find the page you are looking for.We can't seems to find the
                  page you are looking for.,We can't seems to find the page you
                  are looking for.,
                </p>

                <GoHome />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-10 mb-5">
              <div>
                <img
                  src={errorimage}
                  height="300rem"
                  className="mx-lg-auto img-fluid "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="row">
            <div className="col">
              {" "}
              <a href="tel:09077887765" className="text-decoration-none">
                <p className="paragraphColor mx-3">09077887765</p>
              </a>
              <a href="tel:080 9481 8883" className="text-decoration-none">
                <p className="paragraphColor mx-3">080 9481 8883</p>
              </a>
            </div>
            <div className="col d-flex justify-content-cente">
              {" "}
              <a
                href="haveneduservices@gmail.com"
                className="text-decoration-none"
              >
                <p className="paragraphColor mx-3">
                  haveneduservices@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Erro404Navbar = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={havenlogo}
              height="30"
              className="d-inline-block align-top"
              alt="My Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex align-content-end">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ErrorPage;
