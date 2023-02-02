import { WeekendActivitiesHero } from "../../../components/hero/otherActivities";
import { GuestNavbar } from "../../../components/Navbar/guestNavbar";

import taekwondo from "../../../assets/images/otheractivities/taekwondo.png";
import weekendactivities from "../../../assets/images/otheractivities/weekendactivities.png";
//external import
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const WeekendActivities = () => {
  return (
    <>
      <GuestNavbar />
      <WeekendActivitiesHero />
      <ActivitiesSectionOne />
      <ActivitiesSectionTwo />
    </>
  );
};

const ActivitiesSectionOne = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-2 mt-5 BgColor">
        <Row
          xs={1}
          md={2}
          className="g-0 justify-content-center justify-content-evenly"
        >
          <Col className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch">
            <Card.Img variant="top" src={taekwondo} className="" />
            <Card.Body className="">
              <h3 className="mt-3">Taekwondo Club</h3>
              <Card.Text className="">
                Build confidence, fitness and self defence
                <ul>
                  <li className="activitiesListFont">
                    For Champs of ages 4 to 16
                  </li>
                  <li className="activitiesListFont">
                    8am to 10am every saturday{" "}
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch">
            <Card.Img variant="top" src={taekwondo} className="" />
            <Card.Body className="">
              <h3 className="mt-3">Tech Club</h3>
              <Card.Text className="">
                Build Creativity and Problem solving skills in Coding and
                Robotics
                <ul>
                  <li className="activitiesListFont">
                    For Champs of ages 4 to 16
                  </li>
                  <li className="activitiesListFont">
                    10am to 12 noon every saturday
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch">
            <Card.Img variant="top" src={taekwondo} className="" />
            <Card.Body className="">
              <h3 className="mt-3">Music Club</h3>
              <Card.Text className="">
                Learn the rudiments of music, Singing, Sight reading and musical
                instruments
                <ul>
                  <li className="activitiesListFont">
                    For Champs of ages 4 to 16
                  </li>
                  <li className="activitiesListFont">
                    10am to 12 noon every saturday
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="col-lg-4 col-md-6 col-sm-10 px-lg-5 px-md-4 px-sm-5 align-items-stretch">
            <Card.Img variant="top" src={taekwondo} className="mt-3" />
            <Card.Body className="">
              <h3 className="mt-3">Creative Arts Club</h3>
              <Card.Text className="">
                Whatsoever you imagine in your mind can be created with your
                Hands, join our Creative club to explore
                <ul>
                  <li className="activitiesListFont">
                    For Champs of ages 4 to 16
                  </li>
                  <li className="activitiesListFont">
                    10am to 12 noon every saturday
                  </li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </>
  );
};
const ActivitiesSectionTwo = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4 pt-5 mt-5">
          <h3 className="text-center">HAVEN WEEKEND ACTIVITIES</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora.
          </p>
          <div className="row align-items-center justify-content-center mt-5">
            {" "}
            <div className="col-lg-5 col-md-6 col-sm-12 mb-5">
              <img
                src={weekendactivities}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h3 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Lorem ipsum dolor sit amet consectetur
              </h3>
              <h4 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Lorem ipsum dolor sit amet consectetur
              </h4>
              <p className="d-flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Curabitur tempus
              </p>
              {/* <div className="">
                {" "}
                <RegisterNowBtn />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeekendActivities;
