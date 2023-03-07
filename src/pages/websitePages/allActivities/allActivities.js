//external import
import { Link } from "react-router-dom";

import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { ActivitiesCard } from "../../../components/allCards/Website/activitiesCard";
import allActivitiesPageData from "../../../data/allCards/activitiesCard.json";
import {
  BackBtn,
  RegisterNowBtn,
} from "../../../components/Buttons/website/actionBtn/schoolBtn";

const AllActivities = () => {
  return (
    <>
      <GuestNavbar />
      <AllActivitiesMapping />
    </>
  );
};

const AllActivitiesMapping = () => {
  return (
    <>
      <div className="container">
        <div className="CardWork row text-center justify-content-around mt-5">
          {allActivitiesPageData.allActivitiesPageData.map(
            (allactivitiesdata) => {
              return (
                <>
                  <div
                    className="col-lg-3 col-md-5 col-sm-12"
                    key={allactivitiesdata.id}
                  >
                    <ActivitiesCard {...allactivitiesdata} />
                  </div>
                </>
              );
            }
          )}
        </div>
        <div className="d-flex justify-content-center justify-content-evenly mt-5">
          <Link to="/">
            {/* <Link to="/signup"> */}
            <BackBtn />
          </Link>
          <Link to="/">
            {/* <Link to="/RegisterNowForm"> */}
            <RegisterNowBtn />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllActivities;
