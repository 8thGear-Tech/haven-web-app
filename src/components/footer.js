//FooterItemToTop
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// import "C:UsersTOLANIDocumentsGitHubhaven-web-appsrcsassfilescomponents_footer.scss";

import { Link } from "react-router-dom";

//images
import havenlogo from "../assets/icons/havenlogo.png";
import googlemaps from "../assets/icons/googlemaps.png";

// icons
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MarkAsUnreadOutlinedIcon from "@mui/icons-material/MarkAsUnreadOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { LearnMoreBtn } from "./Buttons/website/actionBtn/homeandAboutBtn";
// import { FacebookIcon } from "../assets/icons/icons";

export const Footer = () => {
  return (
    <>
      <div class="container-fluid px-5 footerOneBgColor">
        <footer class="py-3 mx-5">
          <div className="footR">
            <h5 className="text-light size ">
              Check out our Blogpost to know our latest activities
            </h5>
            <LearnMoreBtn />
          </div>
          <div class="">
            <div
              class="row justify-self-center  d-flex  justify-content-evenly text-center
            mx-4 my-4"
            >
              {/* <Link to="/">
                {" "}
                <img
                  alt=""
                  src={havenlogo}
                  style={{ maxWidth: "6rem", maxHeight: "6rem" }}
                  className="d-inline-block align-top"
                />
              </Link> */}
              <div className="col-sm-6 col-md-12 col-lg-2">
                <img
                  alt=""
                  src={havenlogo}
                  style={{ maxWidth: "5rem", maxHeight: "5rem" }}
                  className=" "
                />
              </div>

              <div className="col-sm-6 col-md-6 col-lg-2">
                <h4 className="">Work with us</h4>
                <ul class="list-unstyled list-inline">
                  <li class="nav-item mb-2 list-inline-item">
                    <a
                      href="/"
                      class="nav-link p-0 footerParagraph"
                      style={{
                        fontSize: "16px",
                      }}
                    >
                      {/* <a href="/signup" class="nav-link p-0 footerParagraph"> */}
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

              <div className="col-sm-6 col-md-6 col-lg-2">
                <h4 className="">Get to know us</h4>
                <ul class="list-unstyled list-inline">
                  <li class="nav-item mb-2 list-inline-item">
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

              {/* <div
                className="col-lg-1 col-sm-none"
                style={{
                  background: "#75117a",
                  width: "1px",
                  height: "20px",
                }}
              ></div> */}

              <div className="col-sm-6 col-md-6 col-lg-2">
                <h4 className="">Learn with us</h4>
                <ul class="list-unstyled list-inline">
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

              {/* <div
                className="col-lg-1 col-sm-none"
                style={{
                  background: "#75117a",
                  width: "1px",
                  height: "20px",
                }}
              ></div> */}

              <div className="col-sm-12 col-md-6 col-lg-2">
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

            <div class="row my-2 mx-3 m-3">
              <div className="col-lg-4 col-md-6 col-sm-12">
                {" "}
                <MarkAsUnreadOutlinedIcon />
                <a
                  class="footerParagraph mx-2 text-decoration-none"
                  href="mailto: hello@haveneduservices.com"
                >
                  hello@haveneduservices.com
                </a>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="d-flex d-flex-row">
                  <LocalPhoneOutlinedIcon />
                  <a
                    class="footerParagraph text-decoration-none mx-2 d-sm-flex"
                    href="tel:2348098438885"
                    target="_blank"
                  >
                    080 98438885
                  </a>
                  <a
                    class="footerParagraph text-decoration-none d-sm-flex"
                    href="tel:2348098458885"
                    target="_blank"
                  >
                    080 98458885
                  </a>
                </div>
              </div>
              <ul class="list-unstyled d-flex footIcon col-lg-4 col-md-12 col-sm-12">
                <li class="ms-3">
                  <a
                    class="link-dark"
                    href="https://m.facebook.com/haveneduservices/"
                    target="_blank"
                  >
                    <FacebookOutlinedIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <InstagramIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <TwitterIcon />
                  </a>
                </li>
                <li class="ms-3">
                  <a class="link-dark" href="#" target="_blank">
                    <LinkedInIcon />
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
          &copy; 2023 Haven-Edu Services
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
