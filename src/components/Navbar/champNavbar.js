import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import havenlogo from "../../assets/icons/havenlogo.png";
import "../../sassfiles/styles.css";
// import {ChampNotificationPage} from "../../pages/dashboardPages/champ/champAllNotificationPage"





// Sidebar component
const Sidebar = () => {
  const [sidebarVisible] = useState(true);


  return (
      <div className={`sidebar ${sidebarVisible ? "visible" : ""}`} 
      style={{position: "fixed",
      zIndex: 9999,
       background: "linear-gradient(180deg, #64348d, #d15ddb 54.69%, rgba(139, 41, 164, 0.94))", 
     }} 
      >
      
      <Nav id="sidebar-nav" className={` flex-column ${sidebarVisible ? "visible" : ""}`}>
      <Nav.Link href="/ChampDashboard">Dashboard</Nav.Link>
         <Nav.Link href="/ChampMaterialPg" >Materials</Nav.Link>
          <Nav.Link href="/AssignmentText">Assignments</Nav.Link>
          <Nav.Link href="/ChampVirtualClass">Virtual Class</Nav.Link>
          <Nav.Link href="/Champcalendar">Calendar</Nav.Link>
           <Nav.Link href="/ChampProfilePg">My Profile</Nav.Link>
          <Nav.Link href="/ChampReportIssue">Report Issues</Nav.Link>
          <Nav.Link href="/">Submission</Nav.Link>
          <Nav.Link href="/ChampRatingsPg">Ratings</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        
      </Nav>
    </div>
  )
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
          <Navbar.Toggle onClick={toggleSidebar} />
        ) : (
          <Navbar bg="light" expand="lg" className="sidebar-toggle">
        <Navbar.Toggle aria-controls="sidebar-nav" onClick={toggleSidebar} />
      </Navbar>
        )}

        {isMidOrSmallerScreen ? null : (
          <Navbar.Collapse className="justify-content-end d-flex">
            <Nav>
              <Nav.Link href="/ChampNotification">
                <NotificationsNoneIcon
                  style={{ maxWidth: "3rem", maxHeight: "3rem" }}
                  className=""
                />
              </Nav.Link>
              <Nav.Link href="/ChampProfilePg">
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
      <div className={`mt-1 ${showSidebar ? "d-block" : "d-none"}`}>
        <Sidebar showSidebar={showSidebar} onHide={toggleSidebar} />
      </div>
    </div>
  );
};
