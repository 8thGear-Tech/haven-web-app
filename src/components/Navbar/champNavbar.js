import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import React, { useState } from "react";

// internal import

import havenlogo from "../../assets/icons/havenlogo.png";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";

export const ChampNavbar = () => {
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
              backgroundColor: "#BC4C92",
            }}
            expand="md"
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
export const ChampSideNavBar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <React.Fragment>
        <Navbar
          className="sidebar"
          style={{
            backgroundColor: "#BC4C92",
          }}
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav className="flex-column">
                <Nav.Link href="# Dashboard"> Dashboard</Nav.Link>
                <Nav.Link href="#materials">Materials</Nav.Link>
                <Nav.Link href="#services">Assignment</Nav.Link>
                <Nav.Link href="#virtualclass">Virtual Class</Nav.Link>
                <Nav.Link href="#calendar">Calendar</Nav.Link>
                <Nav.Link href="#myprofile">My Profile</Nav.Link>
                <Nav.Link href="#reportissues">Report Issues</Nav.Link>
                <Nav.Link href="#submission">Submission</Nav.Link>
                <Nav.Link href="#ratings">Ratings</Nav.Link>
                <Nav.Link href="#">Log Out</Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* </div> */}
      </React.Fragment>
    </>
  );
};
