//external import
import { Link } from "react-router-dom";

import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { ActivitiesCard } from "../../../components/allCards/Website/activitiesCard";
import artsData from "../../../data/allCards/activitiesCard.json";

import {
  BackBtn,
  RegisterNowBtn,
} from "../../../components/Buttons/website/actionBtn/schoolBtn";
import { GetAnInstructorBtn } from "../../../components/Buttons/website/actionBtn/homeandAboutBtn";
import { SchoolParentSignUpBtn } from "../../../components/Buttons/website/authenticationBtn";

const Arts = () => {
  return (
    <>
      <GuestNavbar />
      <ArtsInfo />
    </>
  );
};

const ArtsInfo = () => {
  return (
    <>
      <div className="container">
        <div className="CardWork row text-center justify-content-around mt-5">
          {artsData.artsData.map((data) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={data.id}>
                  <ActivitiesCard {...data} />
                </div>
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center justify-content-evenly mt-5">
          {/* <Link to="/">
            <BackBtn />
          </Link> */}
          <SchoolParentSignUpBtn />
          {/* <Link to="/signup">
            <GetAnInstructorBtn />
          </Link> */}
        </div>
      </div>
    </>
  );
};

export default Arts;
