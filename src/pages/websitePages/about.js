import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import { AboutHero } from "../../components/hero/aboutHero";
import { Team } from "../../components/allCards/Website/teamCards";

import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import team from "../../assets/images/about/team.png";
import googlebreakbeatcode from "../../assets/images/about/partners/googlebreakbeatcode.png";
import eightgear from "../../assets/images/about/partners/eightgear.png";
import cisco from "../../assets/images/about/partners/cisco.png";

import innkeeper from "../../assets/images/about/partners/innkeeper.png";

import { JoinOurTeamBtn } from "../../components/Buttons/website/actionBtn/homeandAboutBtn";

const About = () => {
  return (
    <>
      <GuestNavbar />
      <AboutHero />
      <Statistics />
      <ActivitiesSectionOne />
      <ActivitiesSectionTwo />
      <AboutCEO />
      <JoinTeam />
      <Partners />
      <Team />
    </>
  );
};

const Statistics = () => {
  return (
    <div className="card-group px-5 py-5 justify-content-center">
      <div className="col-lg-4 col-md-6 col-sm-12 my-2">
        <div
          className="card-body text-center
        "
        >
          <div className="align-items-center">
            {" "}
            <h1 className="card-title ">5</h1>
          </div>
          <p className="card-text">Partner Schools</p>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 my-2">
        <div className="card-body text-center">
          <div className="align-items-center">
            {" "}
            <h1 className="card-title ">4</h1>
          </div>
          <p className="card-text">Languages Taught</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 my-2">
        <div className="card-body text-center">
          <div className="align-items-center">
            {" "}
            <h1 className="card-title ">7</h1>
          </div>
          <p className="card-text">Summer Camps</p>
        </div>
      </div>
    </div>
  );
};

const ActivitiesSectionOne = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid">
          <div className="row align-items-center justify-content-center mt-5">
            {" "}
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
              <img
                src={vision}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>{" "}
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Our Vision
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Our Vision
              </h3>
              <p className="d-flex">
                By 2025, we would be recognized by parents and educational
                providers in Nigeria as a leading content provider and
                facilitators for Technology, Foreign languages and Arts related
                contents.
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

const ActivitiesSectionTwo = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4">
          <div className="row align-items-center justify-content-center">
            {" "}
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Our Mission
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Our Mission
              </h3>
              <p className="d-flex">
                We would operate a subscription-based web and mobile platform
                where our designed content can be shared with children via
                multi-level games, quizzes, interactive videos, and early
                learning assessments These platform will supplement and feed
                into our current B2B model where we support schools with content
                and Instructors to fill the identified Gaps.
              </p>
              {/* <div className="">
                {" "}
                <RegisterNowBtn />
              </div> */}
            </div>{" "}
            <div className="col-lg-5 col-md-12 col-sm-10">
              <img
                src={mission}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const AboutCEO = () => {
  return (
    <>
      <div className="container-fluid px-5 mb-5 pb-5">
        <div className="">
          {" "}
          <h3 className="text-center">Meet our C.E.O Omowunmi Obidairo</h3>
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
      </div>
    </>
  );
};
const JoinTeam = () => {
  return (
    <>
      {/* <div className="container-fluid bgColor p-5 mt-5">
        <div className="d-flex justify-content-center my-5 ">
          <img src={team} className="img-fluid" />
        </div>
      </div> */}
      <div className="d-flex justify-content-center">
        <div>
          <h3 className="mx-3">Interested in working with us?</h3>
        </div>

        <div className="mx-3">
          {" "}
          <JoinOurTeamBtn />
        </div>
      </div>
    </>
  );
};

const Partners = () => {
  return (
    <div className="container-fluid partnersBg pt-5">
      {" "}
      <div className="row g-0">
        <h3 className="mt-4 text-center mb-4">OUR PARTNERS</h3>
        <div className="row justify-content-center justify-content-evenly">
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={googlebreakbeatcode} className="logo1 col-12 "></img>
          </div>

          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6">
            <img
              src={eightgear}
              className="col-6"
              // style={{ maxWidth: "90%", maxHeight: "90%" }}
            ></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={cisco} className="col-12"></img>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6 col-xs-6 my-3">
            <img src={innkeeper} className="col-12 "></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
