// DashboardNavbar
// InstructorSideNav
//AdminSideNav
//SchoolSideNav
//ChampsSideNav

import { useState } from "react";
import OffCanvas from "react-bootstrap/Offcanvas";

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
