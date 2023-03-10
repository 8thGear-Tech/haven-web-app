import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";

// internal import

import havenlogo from "../../assets/icons/havenlogo.png";
import admin from "../../data/dashboard/adminSidebarInfo.json";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import { Button, Dropdown, DropdownButton, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

export const AdminTopNavbar = () => {
  return (
    <>
      <div className="d-flex">
        <div className="flex-shrink-0">
          <img
            alt=""
            src={havenlogo}
            style={{
              maxWidth: "6rem",
              maxHeight: "6rem",
              backgroundColor: "#ffffff",
            }}
          />
        </div>
        <div className="flex-grow-1">
          <Navbar
            style={{
              background:
                "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
            }}
            className="topNavbar"
          >
            <Nav className="align-items-end">
              <Navbar.Brand href="#">
                <NotificationsNoneIcon
                  style={{ maxWidth: "9rem", maxHeight: "6rem" }}
                  className=""
                />
              </Navbar.Brand>
              <Navbar.Brand href="#home">
                <AccountCircleIcon
                  style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                  className=""
                />
              </Navbar.Brand>
            </Nav>
          </Navbar>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export const AdminSideNavBar = () => {
  return (
    <>
      <SmallShow />
      <BigShow />
    </>
  );
};

const options = [
  {
    scroll: true,
    backdrop: false,
  },
];

const SmallShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Button
        onClick={toggleShow}
        className="me-2 bg-white border-0 d-lg-none position-fixed start-0 top-0"
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="w-75 mt-5 d-lg-none "
        {...props}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex justify-content-between flex-column">
            <ul className="ps-2">
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <span>Dashboard</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <span>Calendar</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <span>Tutors</span>
              </li>
              <li className="d-flex mb-4 align-items-center SideNavItem">
                <span>Student</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <span className="my-1">Course</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mb-4">
                <span>Reported Issues</span>
              </li>
              <li className="d-flex align-items-center SideNavItem mt-5 ">
                <span>Logout</span>
              </li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const Demo = (props) => {
  const { pageroute, text } = props;
  return (
    <>
      <ul className="ps-2">
        <li className="d-flex mb-2 align-items-center SideNavItem">
          <div className="me-3">
            <Link to={pageroute} className="nav-link">
              <div className="sideNavButton">
                <span>{text}</span>
              </div>
            </Link>
          </div>
        </li>
      </ul>
    </>
  );
};
const BigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      {/* <Button
        onClick={toggleShow}
        className="me-2 bg-white border-0 d-none d-lg-block position-fixed start-0 top-0"
      >
        <svg
          width="30"
          height="20"
          viewBox="0 0 30 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
            fill="#006747"
          />
        </svg>
      </Button> */}
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="mt-5 pt-5 d-none d-lg-block"
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title>
            {/* <img src={havenlogo} alt="logo" /> */}
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {admin.adminsdetails.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column ">
                <ul className="ps-2" key={navbar.id}>
                  <Demo {...navbar} />
                </ul>
              </div>
            );
          })}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const BigShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <BigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const SmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <SmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};
