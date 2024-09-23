//internal import
import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import { HomeHero } from "../../components/hero/homeHero";
import { HomeMobileHero } from "../../components/hero/homeHero";
import { WhyTrustUsCard } from "../../components/allCards/Website/whyTrustUs";
import { WhatWeDoCard } from "../../components/allCards/Website/activitiesCard";
import whyTrustUsInfo from "../../data/allCards/whyTrustUs.json";
import whatwedo from "../../data/allCards/activitiesCard.json";

//external import
import { Container, Button, DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

//images
import activitiesimageone from "../../assets/images/home/activitiesimageone.png";
import activitiesimagetwo from "../../assets/images/home/activitiesimagetwo.png";
import activitiesimagethree from "../../assets/images/home/activitiesimagethree.png";
import activitiesimagefour from "../../assets/images/home/activitiesimagefour.png";
import CapstoneSchool from "../../assets/images/home/CapstoneSchool.jpg";
import GraciaDavina from "../../assets/images/home/GraciaDavins.png";
import Hauk from "../../assets/images/home/hauk.PNG";
import Smallville from "../../assets/images/home/Smallville.png";
import holidayprogram from "../../assets/images/home/holidayprogram.png";
import havenanniversary from "../../assets/images/home/havenanniversary.png";

const Home = () => {
  return (
    <div
      style={{
        background:
          "radial-gradient(50.66% 50.66% at 50% 49.34%, #DFEFE1 0.01%, #FFFFFF 100%)",
      }}
    >
      <GuestNavbar />
      <HomeHero />
      <HavenAnniv />
      {/* <HolidayPromo /> */}
      {/* <HomeMobileHero /> */}
      <WhatWeDo />
      <WhyTrustUs />
      <OurActivities />
      {/* <SomeOfOurSchools /> */}
    </div>
  );
};

// const WhatWeDo = () => {
//   return (
//     <>
//       <div className="container">
//         <h3 className="text-center mb-4">WHAT WE DO</h3>
//         <div className="CardWork row text-center justify-content-around ">
//           {whatwedo.whatwedo.map((data) => {
//             return (
//               <>
//                 <div className="col-lg-3 col-md-5 col-sm-12" key={data.id}>
//                   <PaymentpackageCard {...data} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

const HavenAnniv = () => {
  return (
    <>
      <div className="px-4 container-fluid bg-white py-5">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center">
            <h3 className="">JOIN US FOR AN INSIGHTFUL EVENT</h3>
            <p style={{ fontSize: "1.2rem" }}>
              <em>
                {" "}
                <span style={{ color: "#DE5E44" }}>
                  Shaping the Future:
                </span>{" "}
                The Role of AI in Children's Education & Development
              </em>
            </p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
            <img
              src={havenanniversary}
              className="mx-auto img-fluid"
              alt=""
              loading="lazy"
            />
          </div>
          <a href="https://bit.ly/3zh1BvY" target="_blank">
            <button className="GetAnInstructorBtn">BOOK A SEAT NOW</button>
          </a>
        </div>
      </div>
    </>
  );
};

const HolidayPromo = () => {
  const [activeContent, setActiveContent] = useState("nigeria");

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="px-3">
        <div className="px-4 container pb-3 pt-5 mb-5">
          <h3 className="text-center mb-4">HOLIDAY PROGRAMS</h3>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="button-group text-center mb-4">
                <Button
                  className={`price-button my-2 ${
                    activeContent === "nigeria" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("nigeria")}
                >
                  Nigeria
                </Button>
                <Button
                  className={`price-button my-2 ${
                    activeContent === "diaspora" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("diaspora")}
                >
                  Diaspora
                </Button>
              </div>
              {activeContent === "nigeria" && (
                <>
                  <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none pb-0 mb-0">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h2>
                  <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h3>
                  <h5 className="physicalVirtual ps-1">Physical & Virtual</h5>
                  <h5 className="text-black mt-3">Courses to choose from:</h5>
                  <h6 className="">AGES 6-10</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph mb-0">Coding</p>
                    <p className="promoParagraph mb-1">Robotics Engineering</p>
                  </div>
                  <h6 className="">AGES 11-16</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph mb-1">Robotics Engineering</p>
                    <p className="promoParagraph mb-1">
                      Frontend Web Dev(Fundamentals)
                    </p>
                  </div>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Graphics Design</p>
                    <p className="promoParagraph">UI/UX(Fundamentals)</p>
                  </div>
                  <a
                    href="https://forms.gle/nnowN1Gg4ddN6pym8"
                    target="_blank"
                    style={{ color: "#75117a" }}
                  >
                    <h4 className="d-flex">
                      <b>REGISTER NOW</b>
                    </h4>
                  </a>
                </>
              )}
              {activeContent === "diaspora" && (
                <>
                  <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none pb-0 mb-0">
                    <span style={{ fontFamily: "Raleway", color: "#D88D2A" }}>
                      Summer
                    </span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h2>
                  <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h3>
                  <h5 className="virtual ps-1">Virtual Class</h5>
                  <div className="d-lg-flex d-md-flex d-flex-modified">
                    <h6
                      className="text-black p-0 m-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      2 COHORTS
                    </h6>
                    <div className="vertical-line"></div>
                    <h6
                      className="text-black p-0 m-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      2 WEEKS EACH
                    </h6>
                    <div className="vertical-line"></div>
                    <h6
                      className="text-black p-0 m-0"
                      style={{ fontSize: "0.75rem" }}
                    >
                      3 CLASSES PER WEEK
                    </h6>
                  </div>
                  <p
                    className="text-black m-0 p-0"
                    style={{ fontSize: "0.8rem" }}
                  >
                    3 times a week (Mondays, Wednesdays & Fridays)
                  </p>
                  <h5 className="text-black mt-1">Courses to choose from:</h5>
                  <h6 className="">AGES 6-10</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph mb-0">Coding</p>
                    <p className="promoParagraph mb-1">Robotics Engineering</p>
                  </div>
                  <h6 className="">AGES 11-16</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph mb-1">Robotics Engineering</p>
                    <p className="promoParagraph mb-1">
                      Frontend Web Dev(Fundamentals)
                    </p>
                  </div>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Graphics Design</p>
                    <p className="promoParagraph">UI/UX(Fundamentals)</p>
                  </div>
                  <a
                    href="https://bit.ly/3WyJVFe"
                    target="_blank"
                    style={{ color: "#75117a" }}
                  >
                    <h4 className="d-flex">
                      <b>REGISTER NOW</b>
                    </h4>
                  </a>
                </>
              )}
            </div>
            {activeContent === "nigeria" && (
              <div className="col-lg-5 col-md-6 col-sm-10 mt-3">
                <img
                  src={holidayprogram}
                  className="mx-lg-auto img-fluid"
                  alt=""
                  loading=""
                />
                <div className="d-lg-flex d-md-flex">
                  <div>
                    <p className="mt-3 mb-1">
                      8thGear Hub, 41 CMD Road, <br /> Magodo/Secretariat,
                      Lagos.
                    </p>
                    <p className="mb-1">10AM - 1PM</p>
                    <p className="mb-1">Monday 15th,July, 2024</p>
                    <h6 className="mb-0 pb-0 text-black">
                      <b>DURATION:</b>
                    </h6>
                    <p className="">2 Weeks per cohort</p>
                  </div>
                  <div
                    className="py-2 ms-5 my-auto"
                    style={{
                      background: "#75117a",
                      borderRadius: "0.7rem",
                      width: "9.7rem",
                      height: "6.5rem",
                    }}
                  >
                    <h5 className="text-center" style={{ color: "#ED8B09" }}>
                      TRAINING FEE:
                    </h5>
                    <h2 className="text-center text-white">₦50K</h2>
                  </div>
                </div>
              </div>
            )}
            {activeContent === "diaspora" && (
              <div className="col-lg-5 col-md-6 col-sm-10 mt-3">
                <img
                  src={holidayprogram}
                  className="mx-lg-auto img-fluid"
                  alt=""
                  loading=""
                />
                <div className="d-lg-flex d-md-flex">
                  <div>
                    <p className="mb-1 mt-4">Monday 5th, August, 2024</p>
                  </div>
                  <div
                    className="py-2 ms-2 my-auto mt-2"
                    style={{
                      background: "#75117a",
                      borderRadius: "0.7rem",
                      width: "9.7rem",
                      height: "6.5rem",
                    }}
                  >
                    <h1 className="text-center text-white">$60</h1>
                    <h6 className="text-center text-white">Per Cohort</h6>
                  </div>
                  <div
                    className="py-2 ms-2 px-2 my-auto mt-2"
                    style={{
                      background: "#75117a",
                      borderRadius: "0.7rem",
                      width: "9.7rem",
                      height: "6.5rem",
                    }}
                  >
                    <h2 className="text-center text-white">5%</h2>
                    <h6 className="text-center text-white">
                      Siblings Discount
                    </h6>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
const HolidaaayPromo = () => {
  const [activeContent, setActiveContent] = useState("nigeria");

  const handleButtonClick = (content) => {
    setActiveContent(content);
  };

  return (
    <>
      <div className="px-3">
        <div className="px-4 container py-5 mb-5">
          {" "}
          <h3 className="text-center mb-4">HOLIDAY PROGRAMS</h3>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="button-group text-center mb-4">
                <Button
                  className={`price-button ${
                    activeContent === "nigeria" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("nigeria")}
                >
                  Nigeria
                </Button>
                <Button
                  className={`price-button ${
                    activeContent === "diaspora" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("diaspora")}
                >
                  Diaspora
                </Button>
              </div>
              {activeContent === "nigeria" && (
                <>
                  <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none pb-0 mb-0">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h2>
                  <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h3>
                  <h5 className="physicalVirtual ps-1">Physical & Virtual</h5>
                  <h5 className="text-black mt-3">Courses to choose from:</h5>
                  <h6 className="">AGES 6-10</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Coding</p>
                    <p className="promoParagraph">Robotics Engineering</p>
                  </div>
                  <h6 className="">AGES 11-16</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Robotics Engineering</p>
                    <p className="promoParagraph">
                      Frontend Web Dev(Fundamentals)
                    </p>
                  </div>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Graphics Design</p>
                    <p className="promoParagraph">UI/UX(Fundamentals)</p>
                  </div>
                  <a
                    href="https://forms.gle/nnowN1Gg4ddN6pym8"
                    target="_blank"
                    style={{ color: "#75117a" }}
                  >
                    <h4 className="d-flex">
                      <b>REGISTER NOW</b>
                    </h4>
                  </a>
                </>
              )}
              {activeContent === "diaspora" && (
                <>
                  {/* Add content for Diaspora here */}
                  <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none pb-0 mb-0">
                    <span style={{ fontFamily: "Raleway", color: "#D88D2A" }}>
                      Summer
                    </span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h2>
                  <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                    <span style={{ fontFamily: "Raleway" }}>Summer</span>{" "}
                    <span
                      className="text-black"
                      style={{ fontFamily: "Raleway" }}
                    >
                      Tech Bootcamp
                    </span>
                  </h3>
                  <h5 className="virtual ps-1">Virtual Class</h5>
                  <div className="d-flex d-flex-modified">
                    <h6 className="text-black">2 COHORTS</h6>
                    <div className="vertical-line"></div>
                    <h6 className="text-black">2 WEEKS EACH</h6>
                    <div className="vertical-line"></div>
                    <h6 className="text-black">3 CLASSES PER WEEK</h6>
                  </div>
                  <p className="text-black" style={{ fontSize: "0.9rem" }}>
                    3 times a week (Mondays, Wednesdays & Fridays)
                  </p>
                  <h5 className="text-black mt-3">Courses to choose from:</h5>
                  <h6 className="">AGES 6-10</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Coding</p>
                    <p className="promoParagraph">Robotics Engineering</p>
                  </div>
                  <h6 className="">AGES 11-16</h6>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Robotics Engineering</p>
                    <p className="promoParagraph">
                      Frontend Web Dev(Fundamentals)
                    </p>
                  </div>
                  <div className="d-lg-flex d-md-flex">
                    <p className="promoParagraph">Graphics Design</p>
                    <p className="promoParagraph">UI/UX(Fundamentals)</p>
                  </div>
                  <a
                    href="https://bit.ly/3WyJVFe"
                    target="_blank"
                    style={{ color: "#75117a" }}
                  >
                    <h4 className="d-flex">
                      <b>REGISTER NOW</b>
                    </h4>
                  </a>
                </>
              )}
            </div>
            <div className="col-lg-5 col-md-6 col-sm-10 mt-3">
              <img
                src={holidayprogram}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
              <div className="d-flex">
                <div>
                  <p className="mb-1 mt-4">Monday 5th, August, 2024</p>
                  <h6 className="mb-0 pb-0 text-black">
                    <b>DURATION:</b>
                  </h6>
                  <p className="">2 Weeks per cohort</p>
                </div>
                <div
                  className="py-2 ms-2 my-auto"
                  style={{
                    background: "#75117a",
                    borderRadius: "0.7rem",
                    width: "9.7rem",
                    height: "6.5rem",
                  }}
                >
                  <h1 className="text-center text-white">$60</h1>
                  <h6 className="text-center text-white">Per Cohort</h6>
                </div>
                <div
                  className="py-2 ms-2 px-2 my-auto"
                  style={{
                    background: "#75117a",
                    borderRadius: "0.7rem",
                    width: "9.7rem",
                    height: "6.5rem",
                  }}
                >
                  <h2 className="text-center text-white">5%</h2>
                  <h6 className="text-center text-white">Siblings Discount</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const HolidaayPromo = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container py-5">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none pb-0 mb-0">
                <span
                  style={{
                    fontFamily: "Raleway",
                  }}
                >
                  Summer
                </span>{" "}
                <span
                  className="text-black"
                  style={{
                    fontFamily: "Raleway",
                  }}
                >
                  Tech Bootcamp
                </span>
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                <span
                  style={{
                    fontFamily: "Raleway",
                  }}
                >
                  Summer
                </span>{" "}
                <span
                  className="text-black"
                  style={{
                    fontFamily: "Raleway",
                  }}
                >
                  Tech Bootcamp
                </span>
              </h3>
              <h5 className="physicalVirtual ps-1">Physical & Virtual</h5>
              <h5 className="text-black mt-3">Courses to choose from:</h5>
              <h6 className="">AGES 6-10</h6>
              <div className="d-lg-flex d-md-flex">
                {" "}
                <p className="promoParagraph">Coding</p>
                <p className="promoParagraph ms-lg-2   ms-md-2">
                  Robotics Engineering
                </p>
              </div>
              <h6 className="">AGES 11-16</h6>
              <div className="d-lg-flex d-md-flex">
                <p className="promoParagraph">Robotics Engineering</p>
                <p className="promoParagraph ms-lg-2   ms-md-2">
                  Frontend Web Dev(Fundamentals)
                </p>
              </div>
              <div className="d-lg-flex d-md-flex">
                <p className="promoParagraph">Graphics Design</p>
                <p className="promoParagraph ms-lg-2 ms-md-2">
                  UI/UX(Fundamentals)
                </p>
              </div>

              <a
                href="https://forms.gle/nnowN1Gg4ddN6pym8"
                target="_blank"
                style={{ color: "#75117a" }}
              >
                {" "}
                <h4 className="d-flex">
                  <b>REGISTER NOW</b>
                </h4>
              </a>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-10 mt-3">
              <img
                src={holidayprogram}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
              <div className="d-flex">
                {" "}
                <div>
                  <p className="mt-3 mb-1">
                    8thGear Hub, 41 CMD Road, <br /> Magodo/Secretariat, Lagos.
                  </p>
                  <p className="mb-1">10AM - 1PM</p>
                  <p className="mb-1">Monday 15th,July, 2024</p>
                  <h6 className="mb-0 pb-0 text-black">
                    <b>DURATION:</b>
                  </h6>
                  <p className="">2 Weeks per cohort</p>
                </div>
                <div
                  className="py-2 ms-5 my-auto"
                  style={{
                    background: "#75117a",
                    borderRadius: "0.7rem",
                    width: "9.7rem",
                    height: "6.5rem",
                  }}
                >
                  <h5 className="text-center" style={{ color: "#ED8B09" }}>
                    TRAINING FEE:
                  </h5>
                  <h2 className="text-center text-white">₦50K</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const WhatWeDo = () => {
  return (
    <>
      <div
        className="container-fluid"
        // style={{
        //   background:
        //     "radial-gradient(50.66% 50.66% at 50% 49.34%, #DFEFE1 0.01%, #FFFFFF 100%)",
        // }}
      >
        <h3 className="text-center mt-lg-3 mb-4 mt-5">WHAT WE DO</h3>
        <div className="row text-center justify-content-around mt-4 mx-2">
          {/* <div className="CardWork row text-center justify-content-around mt-5"> */}
          {whatwedo.whatwedo.map((data) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-5 col-sm-12 d-flex align-items-stretch"
                  key={data.id}
                >
                  <WhatWeDoCard {...data} />
                </div>
              </>
            );
          })}
        </div>
        {/* <div className="d-flex justify-content-center justify-content-evenly mt-5">
          <Link to="/signup">
            <BackBtn />
          </Link>
          <Link to="/RegisterNowForm">
            <RegisterNowBtn />
          </Link>
        </div> */}
      </div>
    </>
  );
};

const WhyTrustUs = () => {
  return (
    <>
      <div
        className="container-fluid py-5"
        // style={{
        //   background:
        //     "radial-gradient(50.66% 50.66% at 50% 49.34%, #DFEFE1 0.01%, #FFFFFF 100%)",
        // }}
      >
        <h3 className="text-center mt-3">WHY TRUST US</h3>
        <Row
          // xs={1}
          // md={2}
          className="g-0 justify-content-center justify-content-evenly"
        >
          {whyTrustUsInfo.whyTrustUsInfo.map((info) => {
            return (
              <Col
                className="col-lg-4 col-md-4 col-sm-10"
                // className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 d-flex align-items-stretch"
                key={info.id}
              >
                <WhyTrustUsCard {...info} />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

const OurActivities = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-4 bgGradient">
        <Row
          xs={1}
          md={2}
          className="g-0 justify-content-center justify-content-evenly"
        >
          <Col className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
            <Col className="">
              <Col className="">
                <Card.Img
                  variant="top"
                  src={activitiesimageone}
                  className="px-5"
                />
              </Col>
              <Col className="">
                <Card.Img
                  variant="top"
                  src={activitiesimagetwo}
                  className="px-5"
                />
              </Col>
            </Col>
          </Col>
          <Col className="col-lg-4 col-md-6 col-sm-10 d-flex justify-content-center align-items-center">
            <div className="w-100 px-5">
              <Card.Body className="text-center">
                <h3 className="mt-3">OUR OFFERINGS</h3>
                {/* <p className="text-decoration-underline fontSize">
                  School Facilitation
                </p>
                <Card.Text className="text-decoration-underline fontSize">
                  Haven Summer
                </Card.Text>
                <Card.Text className="text-decoration-underline fontSize">
                  Haven Weekend Club
                </Card.Text>
                <Card.Text className="text-decoration-underline fontSize">
                  Haven Products
                </Card.Text> */}
                <Link to="/" style={{ color: "#75117A" }}>
                  <p className="text-decoration-underline fontStyle m-2">
                    Tech Instructors Matching
                  </p>
                </Link>
                <Link to="/ourOfferings" style={{ color: "#75117A" }}>
                  <p className="text-decoration-underline fontStyle m-2">
                    Holiday Sessions
                  </p>
                </Link>
                <Link to="/ourOfferings" style={{ color: "#75117A" }}>
                  {" "}
                  <p className="text-decoration-underline fontStyle m-2">
                    After School Clubs
                  </p>
                </Link>
                <Link to="/ourOfferings" style={{ color: "#75117A" }}>
                  {" "}
                  <p className="text-decoration-underline fontStyle m-2">
                    Weekend Clubs
                  </p>
                </Link>
                <Link to="/ourOfferings" style={{ color: "#75117A" }}>
                  {" "}
                  <p className="text-decoration-underline fontStyle m-2">
                    Physical/Virtual Tech Sessions
                  </p>
                </Link>

                {/* <Link to="/">
                  <p className="text-decoration-underline fontSize m-2">
                    Haven Products
                  </p>
                </Link> */}

                {/* <ul>
                  {" "}
                  <Link to="after-school" style={{ color: "#000" }}>
                    <li>After School</li>
                  </Link>
                  <Link to="" style={{ color: "#000" }}>
                    <li>Weekend Activities</li>
                  </Link>
                  <Link to="" style={{ color: "#000" }}>
                    <li>Creative Summer</li>
                  </Link>
                </ul> */}
              </Card.Body>
            </div>
          </Col>
          <Col className="col-lg-4 col-md-6 col-sm-10 d-flex align-items-stretch">
            <Col className="">
              <Col className="">
                <Card.Img
                  variant="top"
                  src={activitiesimagethree}
                  className="px-5"
                />
              </Col>
              <Col className="">
                <Card.Img
                  variant="top"
                  src={activitiesimagefour}
                  className="px-5"
                />
              </Col>
            </Col>
          </Col>
        </Row>
      </div>
    </>
    // <Container>
    //   {" "}
    //   <Row className="g-0">
    //     {/* {Array.from({ length: 4 }).map((_, idx) => ( */}
    //     <Col>
    //       <Card>
    //         <Card.Img variant="top" src="holder.js/100px160" />
    //         <Card.Body>
    //           <Card.Title>Card title</Card.Title>
    //           <Card.Text>
    //             This is a longer card with supporting text below as a natural
    //             lead-in to additional content. This content is a little bit
    //             longer.
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     {/* ))} */}
    //   </Row>
    // </Container>
  );
};

const SomeOfOurSchools = () => {
  return (
    <>
      <div className="text-center container my-5 py-5">
        <h3 className="mb-4">SOME OF OUR TRUSTED SCHOOLS </h3>
        <div className="">
          <div className="row d-flex align-items-center">
            <div className="col-sm-12 col-md-3 col-lg-3">
              <img
                style={{
                  width: "40%",
                }}
                src={CapstoneSchool}
                alt=""
              />
            </div>
            <div className="col-md-3 col-lg-3">
              <img
                style={{
                  width: "90%",
                }}
                src={GraciaDavina}
                alt=""
              />
            </div>
            <div className=" col-md-3 col-lg-3">
              <img
                style={{
                  width: "55%",
                }}
                src={Hauk}
                alt=""
              />
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 mt-4">
              <img
                style={{
                  width: "30%",
                }}
                src={Smallville}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
