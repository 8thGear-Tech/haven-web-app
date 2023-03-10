//external import
import { Link } from "react-router-dom";

import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { ActivitiesCard } from "../../../components/allCards/Website/activitiesCard";
import languagesData from "../../../data/allCards/activitiesCard.json";

import {
  BackBtn,
  RegisterNowBtn,
} from "../../../components/Buttons/website/actionBtn/schoolBtn";
import { GetAnInstructorBtn } from "../../../components/Buttons/website/actionBtn/homeandAboutBtn";
import { Language } from "@mui/icons-material";

const Languages = () => {
  return (
    <>
      <GuestNavbar />
      <LanguagesInfo />
    </>
  );
};

const LanguagesInfo = () => {
  return (
    <>
      <div className="container">
        <div className="CardWork row text-center justify-content-around mt-5">
          {languagesData.languagesData.map((data) => {
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
          <Link to="/signup">
            <GetAnInstructorBtn />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Languages;
