// WeekendActivitiesHero
// AfterSchoolHero

//images
import weekendactivities from "../../assets/images/hero/weekendactivities.png";
import creativesummer from "../../assets/images/hero/creativesummer.png";
import afterschool from "../../assets/images/hero/afterschool.png";

import { RegisterNowBtn } from "../Buttons/website/actionBtn/schoolBtn";

export const WeekendActivitiesHero = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4">
          <div className="row align-items-center justify-content-center mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                HAVEN WEEKEND ACTIVITIES
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                HAVEN WEEKEND ACTIVITIES
              </h3>
              <p className="d-flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet.
              </p>
              <div className="">
                {" "}
                <RegisterNowBtn />
              </div>
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
export const CreativeSummerHero = () => {
  return (
    <>
      <div className="px-3">
        <div className="px-4 container-fluid pb-4">
          <div className="row align-items-center justify-content-center mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12 ">
              <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
                HAVEN SUMMER
              </h2>
              <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
                HAVEN SUMMER
              </h3>
              <p className="d-flex">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet.
              </p>
              <div className="">
                {" "}
                <RegisterNowBtn />
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-10 mb-5">
              <img
                src={creativesummer}
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

export const AfterSchoolHero = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 py-5">
            <h2
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none text-center"
              style={{ color: "#2B0947" }}
            >
              AFTER SCHOOL ACTIVITIES
            </h2>
            <h3
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none text-center"
              style={{ color: "#2B0947" }}
            >
              AFTER SCHOOL ACTIVITIES
            </h3>
            <p className="d-flex text-center mx-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
            <div className="text-center">
              {" "}
              <RegisterNowBtn />
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 container-fluid">
        <div className="row align-items-center justify-content-center mt-2 mx-2">
          <div className="col-lg-8 col-md-12 col-sm-12 d-flex">
            <img
              src={afterschool}
              className="d-block mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
          {/* <div className="col-lg-6 col-md-12 col-sm-12 pt-5">
            <h3
              className="lh-5 herotextblack d-none d-lg-block d-md-none d-sm-none d-xs-none"
              style={{ color: "#2B0947" }}
            >
              Attend a Summer Camp
            </h3>
            <h4
              className="lh-5 d-xs-block d-sm-block d-md-block d-lg-none"
              style={{ color: "#2B0947" }}
            >
              Attend a Summer Camp
            </h4>
            <p className="d-flex ">
              Summer Camps draw children together and help build team spirit.
              Kids not only make new friends but also learn to cooperate and
              respect the views of others. They imbibe the value of sincere
              communication and learn to resolve disagreements. The Kids enjoys
              fun, safe educational/recreational programs, outdoor experiences
              and group activities.
            </p>
            <h5 className="lh-5 " style={{ color: "#2B0947" }}>
              Learn self-defence
            </h5>
            <p className="d-flex">
              One of the greatest gifts you can ever give your children is the
              confidence, discipline, and fortitude to accomplish their own life
              goals. Committing to Martial Arts classes is one of these gifts.
            </p>
            <h5 className="lh-5" style={{ color: "#2B0947" }}>
              Learn a new language
            </h5>
            <p className="d-flex">
              Learning a new language promotes open-mindedness and introduces
              your kids to different people, cultures, and ways of life.
            </p>
          </div> */}
        </div>
      </div>
    </>
  );
};
