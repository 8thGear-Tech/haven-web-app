//FooterItemToTop
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

//images
import havenlogo from "../assets/icons/havenlogo.png";
import googlemaps from "../assets/icons/googlemaps.png";

// icons
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
// import { FacebookIcon } from "../assets/icons/icons";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid px-5 footerOneBgColor">
        <footer class="py-3 mx-5">
          <div class="row">
            <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4">
              {/* <Link to="/">
                {" "}
                <img
                  alt=""
                  src={havenlogo}
                  style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                  className="d-inline-block align-top"
                />
              </Link> */}
              <img
                alt=""
                src={havenlogo}
                style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                className="d-inline-block align-top"
              />
              <div className="col-lg-2">
                <h4>Work with us</h4>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/signup" class="nav-link p-0 footerParagraph">
                      Become an instructor
                    </a>
                  </li>
                  {/* <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Get to know us
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About Haven
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Other services
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Gallery
                    </a>
                  </li> */}
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>Learn with us</h4>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/" class="nav-link p-0 footerParagraph">
                      School services
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a
                      href="/AllActivities"
                      class="nav-link p-0 footerParagraph"
                    >
                      Find Activities
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>Get to know us</h4>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="/about" class="nav-link p-0 footerParagraph">
                      About Haven
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a
                      href="/otherActivities"
                      class="nav-link p-0 footerParagraph"
                    >
                      Other services
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="/gallery" class="nav-link p-0 footerParagraph">
                      Gallery
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2">
                <h4>Connect with us</h4>
                <a href="https://maps.app.goo.gl/DFurq3id3D9i5TrE7">
                  <img
                    alt=""
                    src={googlemaps}
                    style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                    className="d-inline-block align-top"
                  />{" "}
                </a>
              </div>
            </div>
            {/* <div className="d-flex flex-column flex-sm-row justify-content-between">
              <div class="col-lg-3 col-md-5 mb-3">
                <img
                  alt=""
                  src={havenlogo}
                  style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                  className="d-inline-block align-top"
                />{" "}
              </div>
              <div class="col-lg-3 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-2 mb-3">
                <h5>Section</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li class="nav-item mb-2">
                    <a href="#" class="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div> */}

            <div class="d-flex flex-column flex-sm-row justify-content-between">
              <div>
                {" "}
                <MarkAsUnreadOutlinedIcon />
                <a
                  class="footerParagraph mx-2"
                  href="mailto: hello@haveneduservices.com"
                >
                  hello@haveneduservices.com
                </a>
              </div>

              <div className="">
                <LocalPhoneOutlinedIcon />
                <a
                  class="footerParagraph mx-2"
                  href="tel:2348098438885"
                  target="_blank"
                >
                  080 98438885
                </a>
                <a
                  class="footerParagraph mx-2"
                  href="tel:2348098458885"
                  target="_blank"
                >
                  080 98458885
                </a>
              </div>
              <ul class="list-unstyled d-flex">
                <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://m.facebook.com/haveneduservices/"
                    target="_blank"
                  >
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                {/* <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://instagram.com/haveneduservices?igshid=1fyt565z18d4u"
                    target="_blank"
                  >
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <FacebookOutlinedIcon />
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </footer>{" "}
      </div>{" "}
      <div className="container-fluid footerTwoBgColor py-2">
        {" "}
        <p class="text-center text-light p-0 m-0">
          &copy; 2022 Haven-Edu Services
        </p>
      </div>
    </>
  );
};

export const FooterItemToTop = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};
