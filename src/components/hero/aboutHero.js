//images
import aboutheroimage from "../../assets/images/hero/aboutheroimage.png";

export const AboutHero = () => {
  return (
    <>
      {/* <div className="px-3"> */}
      <div className="px-4 container-fluid aboutHeroBg py-5">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-12 col-sm-12 ">
            <h2 className="d-none d-xl-block d-lg-block d-md-block d-sm-none d-xs-none">
              WHO WE ARE
            </h2>
            <h3 className="d-xs-block d-sm-block d-md-none d-lg-none d-xl-none">
              WHO WE ARE
            </h3>
            <p className="d-flex">
              Haven Edu-Services is an extra-curricular childhood educational
              organisation focused on providing training contents related to
              Technology, Arts and Multi-languages for children (ages 6-12) and
              Teenagers (ages 13-16)
            </p>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-10 mb-5 pb-3">
            <img
              src={aboutheroimage}
              className="mx-lg-auto img-fluid"
              alt=""
              loading=""
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
