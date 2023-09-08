//internal import
import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import { HomeHero } from "../../components/hero/homeHero";
import { HomeMobileHero } from "../../components/hero/homeHero";
import { WhyTrustUsCard } from "../../components/allCards/Website/whyTrustUs";
import { WhatWeDoCard } from "../../components/allCards/Website/activitiesCard";
import whyTrustUsInfo from "../../data/allCards/whyTrustUs.json";
import whatwedo from "../../data/allCards/activitiesCard.json";

//external import
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
        <h3 className="text-center mt-lg-3 mb-4">WHAT WE DO</h3>
        <div className="row text-center justify-content-around mt-3 mx-2">
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
