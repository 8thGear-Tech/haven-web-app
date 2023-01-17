import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { CreativeSummerHero } from "../../../components/hero/otherActivities";

//external import
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const CreativeSummer = () => {
  return (
    <>
      <GuestNavbar />
      <CreativeSummerHero />
      <ActivitiesSectionOne />
      <ActivitiesSectionTwo />
    </>
  );
};

const ActivitiesSectionOne = () => {
  return (
    <>
      <div className="container-fluid p-5">
        <div className="">
          {" "}
          <h3 className="text-center pb-4">HAVEN SUMMER</h3>
          <div className="card-group">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 m-auto">
              <div className="row d-lg-flex d-md-flex ">
                <div className="col-lg-4 col-md-6 d-flex py-2">
                  <VerifiedUserOutlinedIcon />
                  <p className="ms-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vulputate
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 d-flex py-2">
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
      <div className="container-fluid p-5">
        <div className="">
          {" "}
          <h3 className="text-center">HAVEN SUMMER</h3>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
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
        <p className="text-center mt-4">Visit our youtube channel for more.</p>
      </div>
    </>
  );
};

export default CreativeSummer;
