import { color } from "@mui/system";
import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import havenlogo from "../assets/icons/havenlogo.png";
import errorimage from "../assets/images/Errorpage/Error404Image-removebg-preview.png";
import { GoHome } from "../components/Buttons/dashboard/actionBtn";
import { GuestNavbar } from "../components/Navbar/guestNavbar";
const ErrorPage = () => {
  return (
    <>
      <div className="error404Bg">
        <GuestNavbar />
        <div className="container mt-5">
          <div className="row align-items-center justify-content-center mx-2">
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
                  We can't seem to find the page you are looking for
                </p>
                <Link to="/">
                  {" "}
                  <GoHome />
                </Link>
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
        {/* <ErrorFooter /> */}
      </div>
    </>
  );
};

const Erro404Navbar = () => {
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={havenlogo}
              height="60"
              className="d-inline-block align-top"
              alt="My Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <div className="justify-content-end">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="">
                <Nav.Link
                  href="/"
                  style={{ color: "#000000" }}
                  className="mx-3"
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  style={{ color: "#000000" }}
                  className="mx-3"
                >
                  About
                </Nav.Link>
                <Nav.Link
                  href="/contact"
                  style={{ color: "#000000" }}
                  className="mx-3"
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar> */}
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <img src={havenlogo} height="60" className="mx-5" alt="My Logo" />

        <div
          className="justify-content-end collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <a class=" mx-3 nav-item nav-link active" href="#">
              Home
            </a>
            <a className=" mx-3 nav-item nav-link active" href="#">
              About
            </a>
            <a className=" mx-3 nav-item nav-link active" href="#">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
const ErrorFooter = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        {/* <div className="row"> */}
        <div className="">
          {" "}
          <a href="tel:09077887765" className="text-decoration-none">
            <p className="paragraphColor mx-3">09077887765</p>
          </a>
          <a href="tel:080 9481 8883" className="text-decoration-none">
            <p className="paragraphColor mx-3">080 9481 8883</p>
          </a>
        </div>
        <div className="vl"></div>
        <div className="d-flex justify-content-center">
          <a href="haveneduservices@gmail.com" className="text-decoration-none">
            <p className="paragraphColor mx-3">haveneduservices@gmail.com</p>
          </a>
        </div>
      </div>
    </>
  );
};
export default ErrorPage;
