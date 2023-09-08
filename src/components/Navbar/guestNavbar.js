//external import
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

// images
import havenlogo from "../../assets/icons/havenlogo.png";
import { RegisterNowBtn } from "../../components/Buttons/website/actionBtn/schoolBtn";
import { LoginBtn } from "../Buttons/website/authenticationBtn";
// import { Link } from "react-router-dom";
import { LoginButton } from "../Buttons/website/authenticationBtn";

export const GuestNavbar = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" expand="md" className="navbarBg navbar-light">
        <Container fluid>
          {" "}
          <Link to="/">
            {" "}
            <img
              alt=""
              src={havenlogo}
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
              className="d-inline-block align-top ms-3"
            />{" "}
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggler btn"
          />{" "}
          <Navbar.Collapse
            id="navbarScroll"
            className="justifyNavItemsEnd my-4"
          >
            <Nav className="justify-content-end" navbarScroll>
              <Link
                to="/"
                className="navTextColor mx-3 my-auto text-decoration-none"
              >
                HOME
              </Link>
              {/* <Nav.Link href="/" className="navTextColor mx-3">
                HOME
              </Nav.Link> */}
              {/* <Nav.Link href="/about" className="navTextColor mx-3">
                ABOUT
              </Nav.Link> */}
              {/* <NavDropdown
                title="SERVICES"
                id="navbarScrollingDropdown"
                className="navTextColor mx-3 "
              >
                <NavDropdown.Item href="/afterSchool" className="navTextColor">
                  AFTER SCHOOL
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/creativeSummer"
                  className="navTextColor"
                >
                  CREATIVE SUMMER
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="/weekendActivities"
                  className="navTextColor"
                >
                  WEEKEND ACTIVITIES
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown> */}
              <NavDropdown
                title="SERVICES"
                id="navbarScrollingDropdown"
                className="navTextColor mx-3 "
              >
                {/* <NavDropdown.Item href="#action3" className="navTextColor">
                  FIND ACTIVITIES
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdV1S2xwMwH35oaMLbzuJanRCnxK1bmrd8tLIRDdIsW9WmhAg/viewform?usp=sf_link"
                  target="_blank"
                  className="navTextColor"
                >
                  BECOME AN INSTRUCTOR
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/" className="navTextColor text-decoration-none">
                    {" "}
                    PRODUCT
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link
                    to="/ourOfferings"
                    className="navTextColor text-decoration-none"
                  >
                    {" "}
                    OUR OFFERINGS
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="ABOUT US"
                id="navbarScrollingDropdown"
                className="navTextColor mx-3"
              >
                <NavDropdown.Item>
                  <Link to="/about" className="navTextColor">
                    ABOUT HAVEN
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link to="/gallery" className="navTextColor">
                    {" "}
                    GALLERY
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                {/* <NavDropdown.Item href="/blog" className="navTextColor">
                  BLOG
                </NavDropdown.Item> */}
              </NavDropdown>
              <Link
                to="/holiday-programs"
                className="navTextColor mx-3 text-decoration-none my-auto"
              >
                HOLIDAY PROGRAMS
              </Link>{" "}
              <Link
                to="/blog"
                className="navTextColor mx-3 text-decoration-none my-auto"
              >
                BLOG
              </Link>
              {/* <div className="mx-3">
                <LoginButton />
              </div> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
};
export const AdminSideNav = () => {
  return (
    <>
      {" "}
      <Navbar bg="light" expand="md" className="navbarBg navbar-light">
        <Container fluid>
          {" "}
          <img
            alt=""
            src={havenlogo}
            style={{ maxWidth: "6rem", maxHeight: "6rem" }}
            className="d-inline-block align-top ms-3"
          />{" "}
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggler btn"
          />{" "}
          <Navbar.Collapse
            id="navbarScroll"
            className="justifyNavItemsEnd my-4 "
          >
            <Nav className="justify-content-end" navbarScroll>
              <Nav.Link href="#action1" className="navTextColor mx-3">
                HOME
              </Nav.Link>
              <NavDropdown
                title="ABOUT US"
                id="navbarScrollingDropdown"
                className="navTextColor mx-3"
              >
                <NavDropdown.Item href="#action3" className="navTextColor">
                  ABOUT HAVEN
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4" className="navTextColor">
                  GALLERY
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="navTextColor">
                  BLOG
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="SERVICES"
                id="navbarScrollingDropdown"
                className="navTextColor mx-3 "
              >
                <NavDropdown.Item href="#action3" className="navTextColor">
                  FIND SUBJECT
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action4" className="navTextColor">
                  BECOME AN INSTRUCTOR
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="navTextColor">
                  PRODUCT
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5" className="navTextColor">
                  OTHER SERVICES
                </NavDropdown.Item>
              </NavDropdown>
              <div className="mx-3">
                <RegisterNowBtn />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </>
  );
};

export const AdminSideNavv = () => {
  return (
    <>
      <Navbar bg="light" expand="md" className="navbarBg navbar-light">
        {/* <Container fluid> */}
        {/* <div className="col-3"> */}
        <Navbar.Toggle
          aria-controls="navbarScroll"
          className="navbar-toggler btn"
        />{" "}
        <Navbar.Collapse id="navbarScroll" className="justifyNavItemsEnd my-4 ">
          <Nav className="justify-content-end displayFlex" navbarScroll>
            {" "}
            <img
              alt=""
              src={havenlogo}
              style={{ maxWidth: "6rem", maxHeight: "6rem" }}
              className="d-inline-block align-top ms-3"
            />{" "}
            {/* <Nav className=""> */}
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Calendar
            </Nav.Link>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Instructors
            </Nav.Link>
            <NavDropdown
              title="Champs"
              id="navbarScrollingDropdown"
              className="navTextColor mx-3"
            >
              <NavDropdown.Item href="#action3" className="navTextColor">
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" className="navTextColor">
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="navTextColor">
                Instructors
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title=" Instructors"
              id="navbarScrollingDropdown"
              className="navTextColor mx-3"
            >
              <NavDropdown.Item href="#action3" className="navTextColor">
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" className="navTextColor">
                Instructors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="navTextColor">
                Instructors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Profile
            </Nav.Link>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Reported Issues
            </Nav.Link>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Ratings
            </Nav.Link>
            <Nav.Link href="#action1" className="navTextColor mx-3">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </div>
        </Container> */}
      </Navbar>{" "}
    </>
  );
};
// export const NavbarSection = () => {
//   return (
//     <div className="navbar navbar-expand-lg navbar-light bg-light py-0">
//       <div className="container">
//         <a className="navbar-brand" href="/">
//           <img
//             src={haventwo}
//             alt=""
//             className="d-inline-block align-text-top"
//             style={{ maxWidth: "6rem", maxHeight: "6rem" }}
//           />
//         </a>
//         {/* <Link to="/" className="navbar-brand ms-2 ">
//           {" "}
//           <img src={havenfavico} className="w-200 h-200" alt="" />
//         </Link> */}
//         <div
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </div>

//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNav"
//         >
//           <NavUL className="navbar-nav">
//             <li className="nav-item mx-3">
//               <Link
//                 to="/"
//                 className="nav-link active"
//                 style={{ color: "#000000" }}
//                 aria-current="page"
//               >
//                 <Navitemmobile>
//                   <b>Home</b>
//                 </Navitemmobile>{" "}
//               </Link>
//             </li>

//             <li className="nav-item mx-3">
//               <Link
//                 to="/about"
//                 style={{ color: "#000000" }}
//                 className="nav-link"
//               >
//                 <Navitemmobile>
//                   <b>About</b>
//                 </Navitemmobile>
//               </Link>
//             </li>

//             <li className="nav-item mx-3">
//               <Link
//                 to="/gallery"
//                 style={{ color: "#000000" }}
//                 className="nav-link"
//               >
//                 <Navitemmobile>
//                   <b>Gallery</b>
//                 </Navitemmobile>
//               </Link>
//             </li>
//             <li className="nav-item mx-3">
//               <Link
//                 to="/blog"
//                 style={{ color: "#000000" }}
//                 className="nav-link"
//               >
//                 <Navitemmobile>
//                   <b>Blog</b>
//                 </Navitemmobile>
//               </Link>
//             </li>

//             <li className="nav-item mx-3">
//               <Link
//                 to="/contact"
//                 style={{ color: "#000000" }}
//                 className="nav-link"
//               >
//                 <Navitemmobile>
//                   <b>Contact</b>
//                 </Navitemmobile>
//               </Link>
//             </li>
//           </NavUL>{" "}
//           {/* <Navicons className="d-flex">
//             <Link
//               to="https://m.facebook.com/haveneduservices/"
//               className="mx-2"
//               style={{ color: "#2D25E1" }}
//             >
//               <FacebookIcon />
//             </Link>
//             <Link
//               to="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
//               className="mx-2"
//               style={{ color: "#E1116C" }}
//             >
//               <InstagramIcon />
//             </Link>
//             <Link to="/about" className="mx-2" style={{ color: "#37A7CF" }}>
//               <LinkedInIcon />
//             </Link>
//           </Navicons> */}
//         </div>
//       </div>
//     </div>
//   );
// };
