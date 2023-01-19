import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import { AboutHero } from "../../components/hero/aboutHero";
import { Team } from "../../components/allCards/Website/teamCards";

import vision from "../../assets/images/about/vision.png";
import mission from "../../assets/images/about/mission.png";
import team from "../../assets/images/about/team.png";

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
        <div className="px-4 container-fluid pt-5 mt-5">
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

const ActivitiesSectionTwo = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4">
          <div className="row align-items-center justify-content-center mt-5">
            {" "}
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Our Mission
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Our Mission
              </h3>
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
            </div>{" "}
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
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
      <div className="container-fluid p-5">
        <div className="">
          {" "}
          <h3 className="text-center">Meet our C.E.O Omowunmi Obidairo</h3>
        </div>
        <div className="responsive-iframe d-flex justify-content-center mt-5">
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
      <div className="container-fluid p-5">
        <div className="responsive-iframe d-flex justify-content-center mt-5 ">
          <img src={team} />
        </div>

        <h3 className="text-center mt-5">Interested in working with us?</h3>
      </div>
    </>
  );
};
export default About;
