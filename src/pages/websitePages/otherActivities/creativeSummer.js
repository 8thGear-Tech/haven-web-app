import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { CreativeSummerHero } from "../../../components/hero/otherActivities";
import { AfterSchoolHero } from "../../../components/hero/otherActivities";
import { WeekendActivitiesHero } from "../../../components/hero/otherActivities";

//images
import taekwondo from "../../../assets/images/otheractivities/taekwondo.png";
import weekendactivities from "../../../assets/images/otheractivities/weekendactivities.png";

//external import
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const CreativeSummer = () => {
  return (
    <>
      <GuestNavbar />
      <CreativeSummerHero />
      <ActivitiesSectionOne />
      <ActivitiesSectionTwo />
      <AfterSchoolHero />
      {/* <WeekendActivitiesHero /> */}
      <ActivitiesSectionThree />
    </>
  );
};

const ActivitiesSectionOne = () => {
  return (
    <>
      <div className="container-fluid px-5 py-3">
        <div className="">
          {" "}
          <h3 className="text-center pb-1">HAVEN SUMMER</h3>
          <div className="card-group">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
              <div className="row d-lg-flex d-md-flex ">
                <div className="col-lg-4 col-md-6 d-flex py-2">
                  <VerifiedUserOutlinedIcon />
                  <p className="ms-3">Haven Summer for Children aged 4 to 12</p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex py-2">
                  <VerifiedUserOutlinedIcon />

                  <p className="ms-3">
                    Haven Summer for Teenagers aged 13 to 16
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex  py-2">
                  <VerifiedUserOutlinedIcon />

                  <p className="ms-3">
                    Partner Schools Summer powered by Haven
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex  py-2">
                  <VerifiedUserOutlinedIcon />

                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex  py-2">
                  <VerifiedUserOutlinedIcon />

                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex  py-2">
                  <VerifiedUserOutlinedIcon />

                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const ActivitiesSectionTwo = () => {
  return (
    <>
      <div className="container-fluid px-5 py-4">
        <div className="">
          {" "}
          {/* <h3 className="text-center">HAVEN SUMMER</h3> */}
          <h4 className="text-center mt-5">
            Highlight of Haven Summer 2022 held at 8thGear hub, Magodo, Lagos
          </h4>
        </div>
        <div className="responsive-iframe d-flex justify-content-center mt-4">
          <iframe
            src={"https://www.youtube.com/embed/CZMm9epJviQ"}
            width="600"
            height="400"
            allow="autoplay; fullscreen; picture-in-picture"
            className="rounded"
          ></iframe>
        </div>
        <p className="text-center mt-4">Visit our youtube channel for more.</p>
      </div>
    </>
  );
};

const ActivitiesSectionThree = () => {
  return (
    <>
      <div className="container-fluid px-5 pt-2 mt-5 BgColor">
        <h3 className="text-center mt-5">HAVEN WEEKEND ACTIVITIES</h3>
        <p className="text-center mb-5">
          Haven weekend activities holds every Saturday at 8thGear hub, Magodo
          Lagos.
        </p>
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
export default CreativeSummer;
