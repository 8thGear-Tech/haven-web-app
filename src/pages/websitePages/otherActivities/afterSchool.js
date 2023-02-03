import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { AfterSchoolHero } from "../../../components/hero/otherActivities";

import weekendactivities from "../../../assets/images/otheractivities/weekendactivities.png";

const AfterSchool = () => {
  return (
    <>
      <GuestNavbar />
      <AfterSchoolHero />
      <ActivitiesSectionOne />
      <ActivitiesSectionTwo />
    </>
  );
};

const ActivitiesSectionOne = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pt-5 mt-5">
          <div className="row align-items-center justify-content-center mt-5">
            {" "}
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Lorem ipsum dolor sit amet consectetur
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
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
              <img
                src={weekendactivities}
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

const ActivitiesSectionTwo = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4">
          <div className="row align-items-center justify-content-center mt-5">
            {" "}
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
              <img
                src={weekendactivities}
                className="mx-lg-auto img-fluid"
                alt=""
                loading=""
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                Lorem ipsum dolor sit amet consectetur
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                Lorem ipsum dolor sit amet consectetur
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

export default AfterSchool;
