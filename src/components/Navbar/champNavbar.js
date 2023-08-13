import React, { useState, useEffect } from "react";
import { Button, Navbar, Nav } from "react-bootstrap";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import havenlogo from "../../assets/icons/havenlogo.png";
import { Offcanvas } from "react-bootstrap";
import "../../sassfiles/styles.css";


// Sidebar component
const Sidebar = ({ showSidebar, onHide }) => {
  return (
    <Offcanvas
      show={showSidebar}
      onHide={onHide}
      placement="start"
      id="sidebar"
      style={{
        backgroundColor: "#BC4C92",
      }}
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Menu</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="flex-column">
          <Nav.Link href="/ChampDashboard">Dashboard</Nav.Link>
          <Nav.Link href="/ChampMaterialPg" >Materials</Nav.Link>
          <Nav.Link href="/AssignmentText">Assignments</Nav.Link>
          <Nav.Link href="/ChampVirtualClass">Virtual Class</Nav.Link>
          <Nav.Link href="/Champcalendar">Calendar</Nav.Link>
          <Nav.Link href="/ChampProfilePg">My Profile</Nav.Link>
          <Nav.Link href="/">Report Issues</Nav.Link>
          <Nav.Link href="/">Submission</Nav.Link>
          <Nav.Link href="/">Ratings</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export const ToggleButton = ({ onClick }) => {
  return (
    <>
    <Button
      onClick={onClick}
      className="justify-content-end d-flex"
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
    </>
  );
};

export const ChampNavbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMidOrSmallerScreen, setIsMidOrSmallerScreen] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      // Update the state based on window size
      setShowSidebar(window.innerWidth >= 992);
      setIsMidOrSmallerScreen(window.innerWidth <= 791); // breakpoint for mid screens and below
    };

    // Set initial state based on window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        fixed="top"
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
        }}
        expand="md"
        className="topNavbar"
      >
        <Navbar.Brand href="/">
          <img
            alt=""
            src={havenlogo}
            style={{
              maxWidth: "3rem",
              maxHeight: "3rem",
              backgroundColor: "#ffffff",
            }}
          />
        </Navbar.Brand>

        {/* Toggle button */}
        {isMidOrSmallerScreen ? (
          <ToggleButton onClick={toggleSidebar} />
        ) : (
          <Navbar.Toggle
            onClick={toggleSidebar}
            aria-controls="sidebar"
            className="justify-content-end d-flex"
          />
        )}

        {isMidOrSmallerScreen ? null : (
          <Navbar.Collapse className="justify-content-end d-flex">
            <Nav>
              <Nav.Link href="#">
                <NotificationsNoneIcon
                  style={{ maxWidth: "3rem", maxHeight: "3rem" }}
                  className=""
                />
              </Nav.Link>
              <Nav.Link href="#">
                <AccountCircleIcon
                  style={{ maxWidth: "3rem", maxHeight: "3rem" }}
                  className=""
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>

      {/* Sidebar component */}
      <div className={`mt-0 ${showSidebar ? "d-block" : "d-none"}`}>
        <Sidebar showSidebar={showSidebar} onHide={toggleSidebar} />
      </div>
    </div>
  );
};
