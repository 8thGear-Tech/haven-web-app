import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ManOutlinedIcon from "@mui/icons-material/ManOutlined";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import havenlogo from "../../assets/icons/havenlogo.png";

import instructor from "../../data/dashboard/dashboardSidebar.json";

// DashboardNavbar
// InstructorSideNav
//AdminSideNav
//SchoolSideNav
//ChampsSideNav

//external import
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import havenlogo from "../../../assets/icons/havenlogo.png";

//internal import
import { InstructorReportIssueForm } from "../forms/dashboard/instructors/instructorReportIssueForm";
import { InstructorChampRatingForm } from "../forms/dashboard/instructors/instructorChampRatingForm";
import { InstructorRateAppForm } from "../forms/dashboard/instructors/instructorsRateAppForm";
import { RateInstructorForm } from "../forms/dashboard/schools/feedbackRatingForm";

// import { useState } from "react";
import OffCanvas from "react-bootstrap/Offcanvas";
import { OffcanvasBody } from "react-bootstrap";

export const DashboardSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <OffCanvas
      width={200}
      transitionDuration={300}
      isMenuOpened={open}
      onMenuClose={() => setOpen(false)}
      onMenuOpen={() => setOpen(true)}
      position="start"
    >
      <OffCanvas.Body>
        <p>This is the main content.</p>
      </OffCanvas.Body>
      <OffCanvas.Body>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </OffCanvas.Body>
    </OffCanvas>
  );
};
// import havenlogo from "../../assets/icons/havenlogo.png";

// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

// import React, { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";

// export const AdminSideNav = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose} className="navContainerWidth">
//         <Offcanvas.Header closeButton>
//           <img
//             alt=""
//             src={havenlogo}
//             style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//             className="d-inline-block align-top ms-3"
//           />{" "}
//         </Offcanvas.Header>
//         <Offcanvas.Body className="navContainerWidth">
//           <Nav className="displayFlex">
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Dashboard
//             </Nav.Link>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Calendar
//             </Nav.Link>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Instructors
//             </Nav.Link>
//             <NavDropdown
//               title="Champs"
//               id="navbarScrollingDropdown"
//               className="navTextColor mx-3"
//             >
//               <NavDropdown.Item href="#action3" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action4" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown
//               title=" Instructors"
//               id="navbarScrollingDropdown"
//               className="navTextColor mx-3"
//             >
//               <NavDropdown.Item href="#action3" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action4" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5" className="navTextColor">
//                 Instructors
//               </NavDropdown.Item>
//             </NavDropdown>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Profile
//             </Nav.Link>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Reported Issues
//             </Nav.Link>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Ratings
//             </Nav.Link>
//             <Nav.Link href="#action1" className="navTextColor mx-3">
//               Logout
//             </Nav.Link>
//           </Nav>
//           {/* <Offcanvas.Title>Dashboard</Offcanvas.Title>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc. */}
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

// render(<Example />);

{
  /* export const AdminSideNavv = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-3">
          {" "}
          <main class="d-flex flex-nowrap ">
            <div
              className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
              style={{ width: "280px" }}
            >
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                <span className="fs-4">Sidebar</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    Customers
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown">
                <a
                  href="#"
                  className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt=""
                    width="32"
                    height="32"
                    className="rounded-circle me-2"
                  />
                  <strong>mdo</strong>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}; */
}

export const ReportIssueBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        // type="button"
        // data-bs-toggle="modal"
        // data-bs-target="#staticBackdrop1"
        // variant=""
        onClick={handleShow}
        className="text-decoration-none text-white text-decoration-none dashboardSideNavText"
      >
        {/* {" "}
        <a
          href=""
          variant=""
          onClick={handleShow}
          className="text-black text-decoration-none dashboardSideNavText"
        > */}
        Report Issues
        {/* </a> */}
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <InstructorReportIssueForm />
      </Modal>
    </>
  );
};
export const RateChampBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        onClick={handleShow}
        className="text-decoration-none text-black text-decoration-none sideNavSmallText"
      >
        Rate Champ
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <InstructorChampRatingForm />
      </Modal>
    </>
  );
};
export const RateInstructorBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        onClick={handleShow}
        className="text-decoration-none text-black text-decoration-none sideNavSmallText"
      >
        Rate Instructor
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <RateInstructorForm />
      </Modal>
    </>
  );
};
export const RateAppBtn = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <Link
        to=""
        onClick={handleShow}
        className="text-decoration-none text-black text-decoration-none sideNavSmallText"
      >
        Rate App
      </Link>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <InstructorRateAppForm />
      </Modal>
    </>
  );
};

//dashboard navbar
export const DashboardNavbar = () => {
  return (
    <>
      <div className="dashboardNavbarBg">
        <div className="">
          {/* <div className="d-flex justify-content-between mt-3 justify-content-center"> */}
          {/* <img
            src={mindafrikfulllogo}
            className="d-inline-block align-top d-none d-sm-none d-lg-block d-md-block"
            alt="MindAfrik logo"
          /> */}
          <div className="d-flex justify-content-end py-5">
            {" "}
            <NotificationsActiveIcon className="mx-3" />{" "}
            <AccountCircleOutlinedIcon className="mx-3" />
          </div>
        </div>
      </div>
    </>
  );
};

//instructor dashboard

export const InstructorDashboardSideNav = () => {
  return (
    <>
      <InstructorSmallShow />
      <InstructorBigShow />
    </>
  );
};

const options = [
  {
    scroll: true,
    backdrop: false,
  },
];

// const CounsellorSmallShowExample = ({ name, ...props }) => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const toggleShow = () => setShow((s) => !s);

//   return (
//     <>
//       <Button
//         onClick={toggleShow}
//         className="me-2 bg-white border-0 d-lg-none position-fixed start-0 top-0"
//       >
//         <svg
//           width="30"
//           height="20"
//           viewBox="0 0 30 20"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M0 8.33333H22.5V11.6667H0V8.33333ZM0 0H30V3.33333H0V0ZM0 20H13.5656V16.6667H0V20Z"
//             fill="#006747"
//           />
//         </svg>
//       </Button>

//       <Offcanvas
//         show={show}
//         onHide={handleClose}
//         responsive="lg"
//         className="w-75 d-lg-none text-white"
//         {...props}
//         style={{
//           background:
//             "linear-gradient(0deg, rgba(20, 129, 92, 0.5), rgba(20, 129, 92, 0.5)), linear-gradient(0deg, #058547, #058547), linear-gradient(0deg, rgba(59, 192, 142, 0.1), rgba(59, 192, 142, 0.1)), #09CD1E",
//         }}
//       >
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title></Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           <div className="d-flex justify-content-between flex-column">
//             <ul className="ps-2">
//               <li className="d-flex mb-4 align-items-center SideNavItem">
//                 <div className="me-3">
//                   <HomeOutlinedIcon />
//                 </div>
//                 <span>My Dashboard</span>
//               </li>
//               <li className="d-flex mb-4 align-items-center SideNavItem">
//                 <div className="me-3">
//                   <AccountCircleOutlinedIcon />
//                 </div>
//                 <span>Users</span>
//               </li>
//               <li className="d-flex mb-4 align-items-center SideNavItem">
//                 <div className="me-3">
//                   <ManOutlinedIcon />
//                 </div>
//                 <span>Counselor</span>
//               </li>
//               <li className="d-flex align-items-center SideNavItem mb-4">
//                 <div className="me-3">
//                   <NotificationsActiveIcon />
//                 </div>
//                 <span className="my-1">Notification</span>
//               </li>
//               <li className="d-flex align-items-center SideNavItem mb-4">
//                 <div className="me-3">
//                   <LogoutOutlinedIcon />
//                 </div>
//                 <span>Logout</span>
//               </li>
//             </ul>
//           </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// };

const InstructorSideNavModal = (props) => {
  const { icon, pageroute, dashboard } = props;
  return (
    <>
      {/* <div className="bg-white">
        <img src={havenlogo} className="img-fluid" />
      </div>{" "} */}
      <ul className="ps-2">
        {/* <li className="d-flex mb-2 align-items-center SideNavItem">
          <div className="me-3">{icon}</div>
          <Link to={pageroute} className="nav-link">
            <div className="sideNavButton text-white dashboardSideNavText">
              <span>{dashboard}</span>
            </div>
          </Link>
        </li> */}
        <Link
          to="/adminDashboardCounselleesPage"
          className="text-decoration-none"
        >
          <li className="d-flex mb-4 align-items-center SideNavItem">
            <div className="me-3">
              <AccountCircleOutlinedIcon />
            </div>
            <span>Dashboard</span>
          </li>
        </Link>
        <li className="d-flex mb-4 align-items-center SideNavItem">
          <div className="me-3">
            <ManOutlinedIcon />
          </div>
          {/* <span>{counsellors}</span> */}
        </li>
        <li className="d-flex align-items-center SideNavItem mb-4">
          <div className="me-3">
            <NotificationsActiveIcon />
          </div>
          {/* <span className="my-1">{notification}</span> */}
        </li>
        <li className="d-flex align-items-center SideNavItem mb-4">
          <div className="me-3">
            <LogoutOutlinedIcon />
          </div>
          {/* <span>Logout</span> */}
        </li>
        {/* <li className="d-flex align-items-center SideNavItem mt-lg-5 pt-lg-2 bottom position-fixed">
          <div className="pt-5 mt-5">
            <img
              src={sidebarfooterImage}
              style={{ maxHeight: "65%", maxWidth: "65%" }}
            />
          </div>
        </li> */}
      </ul>
    </>
  );
};

const InstructorBigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
          width: "15rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <ul className="ps-2">
            {/* <li className="d-flex mb-2 align-items-center SideNavItem">
          <div className="me-3">{icon}</div>
          <Link to={pageroute} className="nav-link">
            <div className="sideNavButton text-white dashboardSideNavText">
              <span>{dashboard}</span>
            </div>
          </Link>
        </li> */}
            {/* <Link
              to="/adminDashboardCounselleesPage"
              className="text-decoration-none"
            > */}
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div className="me-3">{/* <AccountCircleOutlinedIcon /> */}</div>
              <Link to="/InstructorDashboard" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Dashboard
                </span>
              </Link>
            </li>
            {/* </Link> */}
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div className="me-3">{/* <ManOutlinedIcon /> */}</div>
              <Link to="/ViewMaterials" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Materials
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <NotificationsActiveIcon /> */}</div>
              <Link to="/CreateAssignment" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Assigment
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link
                to="/InstructorVirtualClass"
                className="text-decoration-none"
              >
                {" "}
                <span className="text-white dashboardSideNavText">
                  Virtual Class
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Calendar
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/InstructorProfile" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  My Profile
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              {/* <Link to="/" className="text-decoration-none"> */}
              <ReportIssueBtn />
              {/* <span className="text-white dashboardSideNavText">
                Report Issues
              </span> */}
              {/* </Link> */}
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/ViewSubmissions" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Submission
                </span>
              </Link>
            </li>
            <li
              class="nav-item dropdown mb-4 ms-3"
              style={{ listStyle: "none" }}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-white dashboardSideNavText">
                  {" "}
                  Ratings
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    {/* Rate Champs */}
                    <RateChampBtn />
                  </a>
                </li>{" "}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    <RateAppBtn />
                    {/* Rate App */}
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Logout</span>
              </Link>
            </li>
            {/* <li className="d-flex align-items-center SideNavItem mt-lg-5 pt-lg-2 bottom position-fixed">
          <div className="pt-5 mt-5">
            <img
              src={sidebarfooterImage}
              style={{ maxHeight: "65%", maxWidth: "65%" }}
            />
          </div>
        </li> */}
          </ul>
          {/* {instructor.instructor.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <InstructorSideNavModal {...navbar} />
                </ul>
              </div>
            );
          })} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const InstructorSmallShowExample = ({ name, ...props }) => {
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
            fill="#75117A"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="w-75 d-lg-none text-white"
        {...props}
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <ul className="ps-2">
            {/* <li className="d-flex mb-2 align-items-center SideNavItem">
          <div className="me-3">{icon}</div>
          <Link to={pageroute} className="nav-link">
            <div className="sideNavButton text-white dashboardSideNavText">
              <span>{dashboard}</span>
            </div>
          </Link>
        </li> */}
            {/* <Link
              to="/adminDashboardCounselleesPage"
              className="text-decoration-none"
            > */}
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div className="me-3">{/* <AccountCircleOutlinedIcon /> */}</div>
              <Link to="/InstructorDashboard" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Dashboard
                </span>
              </Link>
            </li>
            {/* </Link> */}
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <div className="me-3">{/* <ManOutlinedIcon /> */}</div>
              <Link to="/ViewMaterials" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Materials
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <NotificationsActiveIcon /> */}</div>
              <Link to="/CreateAssignment" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Assigment
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link
                to="/InstructorVirtualClass"
                className="text-decoration-none"
              >
                {" "}
                <span className="text-white dashboardSideNavText">
                  Virtual Class
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Calendar
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/InstructorProfile" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  My Profile
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <ReportIssueBtn />
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/ViewSubmissions" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Submission
                </span>
              </Link>
            </li>
            <li
              class="nav-item dropdown mb-4 ms-3"
              style={{ listStyle: "none" }}
            >
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-white dashboardSideNavText">
                  {" "}
                  Ratings
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    {/* Rate Champs */}
                    <RateChampBtn />
                  </a>
                </li>{" "}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    <RateAppBtn />
                    {/* Rate App */}
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <div className="me-3">{/* <LogoutOutlinedIcon /> */}</div>
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Logout</span>
              </Link>
            </li>
            {/* <li className="d-flex align-items-center SideNavItem mt-lg-5 pt-lg-2 bottom position-fixed">
          <div className="pt-5 mt-5">
            <img
              src={sidebarfooterImage}
              style={{ maxHeight: "65%", maxWidth: "65%" }}
            />
          </div>
        </li> */}
          </ul>
          {/* {instructor.instructor.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <InstructorSideNavModal {...navbar} />
                </ul>
              </div>
            );
          })} */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const InstructorBigShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <InstructorBigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const InstructorSmallShow = () => {
  return (
    <>
      {options.map((props, idx) => (
        <InstructorSmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};

//school dashboard
export const SchoolDashboardSideNav = () => {
  return (
    <>
      <SchoolSmallShow />
      <SchoolBigShow />
    </>
  );
};

const schooloptions = [
  {
    scroll: true,
    backdrop: false,
  },
];

const SchoolSideNavModal = (props) => {
  const { icon, pageroute, dashboard } = props;
  return (
    <>
      <ul className="ps-2">
        <Link
          to="/adminDashboardCounselleesPage"
          className="text-decoration-none"
        >
          <li className="d-flex mb-4 align-items-center SideNavItem">
            <div className="me-3">
              <AccountCircleOutlinedIcon />
            </div>
            <span>Dashboard</span>
          </li>
        </Link>
        <li className="d-flex mb-4 align-items-center SideNavItem">
          <div className="me-3">
            <ManOutlinedIcon />
          </div>
        </li>
        <li className="d-flex align-items-center SideNavItem mb-4">
          <div className="me-3">
            <NotificationsActiveIcon />
          </div>
          {/* <span className="my-1">{notification}</span> */}
        </li>
        <li className="d-flex align-items-center SideNavItem mb-4">
          <div className="me-3">
            <LogoutOutlinedIcon />
          </div>
          {/* <span>Logout</span> */}
        </li>
        {/* <li className="d-flex align-items-center SideNavItem mt-lg-5 pt-lg-2 bottom position-fixed">
          <div className="pt-5 mt-5">
            <img
              src={sidebarfooterImage}
              style={{ maxHeight: "65%", maxWidth: "65%" }}
            />
          </div>
        </li> */}
      </ul>
    </>
  );
};

const SchoolBigShowExample = ({ name, ...props }) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        {...props}
        className="d-none d-lg-block"
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
          width: "15rem",
        }}
      >
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="">
          <ul className="ps-2">
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <Link to="/SchoolDashboard" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <Link
                to="/AllActivitiesDashboard"
                className="text-decoration-none"
              >
                {" "}
                <span className="text-white dashboardSideNavText">
                  Activities
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/AllChamps" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Champs</span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/AllInstructors" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Instructors
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/Calendar" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Calendar
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/SchoolProfile" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  My Profile
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/SchoolNotification" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Notification
                </span>
              </Link>
            </li>
            <li class="nav-item dropdown mb-4" style={{ listStyle: "none" }}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-white dashboardSideNavText">
                  {" "}
                  Ratings
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    {/* Rate Champs */}
                    <RateInstructorBtn />
                  </a>
                </li>{" "}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    <RateAppBtn />
                    {/* Rate App */}
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <ReportIssueBtn />
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Logout</span>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

const SchoolSmallShowExample = ({ name, ...props }) => {
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
            fill="#75117A"
          />
        </svg>
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        responsive="lg"
        className="w-75 d-lg-none text-white"
        {...props}
        style={{
          background:
            "linear-gradient(180deg, #64348D 0%, #D15DDB 99.99%, rgba(139, 41, 164, 0.94) 100%)",
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="ps-2">
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <Link to="/SchoolDashboard" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Dashboard
                </span>
              </Link>
            </li>
            <li className="d-flex mb-4 align-items-center SideNavItem">
              <Link
                to="/AllActivitiesDashboard"
                className="text-decoration-none"
              >
                {" "}
                <span className="text-white dashboardSideNavText">
                  Activities
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/AllChamps" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Champs</span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/AllInstructors" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Instructors
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/Calendar" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Calendar
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/SchoolProfile" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  My Profile
                </span>
              </Link>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/SchoolNotification" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">
                  Notification
                </span>
              </Link>
            </li>
            <li class="nav-item dropdown mb-4" style={{ listStyle: "none" }}>
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="text-white dashboardSideNavText">
                  {" "}
                  Ratings
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    {/* Rate Champs */}
                    <RateInstructorBtn />
                  </a>
                </li>{" "}
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item sideNavSmallText" href="#">
                    <RateAppBtn />
                    {/* Rate App */}
                  </a>
                </li>
              </ul>
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <ReportIssueBtn />
            </li>
            <li className="d-flex align-items-center SideNavItem mb-4">
              <Link to="/" className="text-decoration-none">
                {" "}
                <span className="text-white dashboardSideNavText">Logout</span>
              </Link>
            </li>
          </ul>
        </Offcanvas.Body>
        {/* <Offcanvas.Body className="">
          {instructor.instructor.map((navbar) => {
            return (
              <div className="d-flex justify-content-between flex-column">
                <ul className="ps-2" key={navbar.id}>
                  <InstructorSideNavModal {...navbar} />
                </ul>
              </div>
            );
          })}
        </Offcanvas.Body> */}
      </Offcanvas>
    </>
  );
};

const SchoolBigShow = () => {
  return (
    <>
      {schooloptions.map((props, idx) => (
        <SchoolBigShowExample key={idx} {...props} />
      ))}
    </>
  );
};
const SchoolSmallShow = () => {
  return (
    <>
      {schooloptions.map((props, idx) => (
        <SchoolSmallShowExample key={idx} {...props} />
      ))}
    </>
  );
};
