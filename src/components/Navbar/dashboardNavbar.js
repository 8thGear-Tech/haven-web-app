// DashboardNavbar
// InstructorSideNav
//AdminSideNav
//SchoolSideNav
//ChampsSideNav

import havenlogo from "../../assets/icons/havenlogo.png";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

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
export const AdminSideNavv = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="col-3">
          {" "}
          <main class="d-flex flex-nowrap " expand="md">
            {/* <h1 className="visually-hidden">Sidebars examples</h1> */}
            <div
              className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
              style={{ width: "280px" }}
            >
              <a
                href="/"
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
              >
                {/* <svg className="bi pe-none me-2" width="40" height="32">
            <use xlink:href="#bootstrap" />
          </svg> */}
                <span className="fs-4">Sidebar</span>
              </a>
              <hr />
              <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                  <a href="#" className="nav-link active" aria-current="page">
                    {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#home" />
              </svg> */}
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#speedometer2" />
              </svg> */}
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#table" />
              </svg> */}
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#grid" />
              </svg> */}
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    {/* <svg className="bi pe-none me-2" width="16" height="16">
                <use xlink:href="#people-circle" />
              </svg> */}
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
};
