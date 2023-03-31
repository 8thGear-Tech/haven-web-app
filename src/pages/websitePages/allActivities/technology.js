//external import
import { Link } from "react-router-dom";

import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { ActivitiesCard } from "../../../components/allCards/Website/activitiesCard";
import codingData from "../../../data/allCards/activitiesCard.json";
import roboticsData from "../../../data/allCards/activitiesCard.json";
import { NewActivitiesCard } from "../../../components/allCards/Website/activitiesCard";

import {
  BackBtn,
  RegisterNowBtn,
} from "../../../components/Buttons/website/actionBtn/schoolBtn";
import { GetAnInstructorBtn } from "../../../components/Buttons/website/actionBtn/homeandAboutBtn";
import { SignUpBtn } from "../../../components/Buttons/website/authenticationBtn";
import { SchoolParentSignUpBtn } from "../../../components/Buttons/website/authenticationBtn";

const Technology = () => {
  return (
    <>
      <GuestNavbar />
      <Coding />
      <Robotics />
    </>
  );
};

// const Tech = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="CardWork row text-center justify-content-around mt-5">
//           {techData.techData.map((data) => {
//             return (
//               <>
//                 <div className="col-lg-3 col-md-5 col-sm-12" key={data.id}>
//                   <ActivitiesCard {...data} />
//                 </div>
//               </>
//             );
//           })}
//         </div>
//         <div className="d-flex justify-content-center justify-content-evenly mt-5">
//           {/* <Link to="/">
//             <BackBtn />
//           </Link> */}
//           <Link to="">
//             <SchoolParentSignUpBtn />
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };
const Coding = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">CODING</h3>
        <div className="row text-center justify-content-evenly justify-content-center mt-5">
          {codingData.codingData.map((dataone) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                  key={dataone.id}
                >
                  <NewActivitiesCard {...dataone} />
                </div>
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center justify-content-evenly mt-2">
          <Link to="">
            {/* <SignUpBtn /> */}
            <SchoolParentSignUpBtn />
          </Link>
        </div>
      </div>
    </>
  );
};
const Robotics = () => {
  return (
    <>
      <div className="container">
        <h3 className="text-center mt-5">ROBOTICS</h3>
        <div className="row text-center justify-content-evenly justify-content-center mt-5">
          {roboticsData.roboticsData.map((datatwo) => {
            return (
              <>
                <div
                  className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                  key={datatwo.id}
                >
                  <NewActivitiesCard {...datatwo} />
                </div>
              </>
            );
          })}
        </div>
        <div className="d-flex justify-content-center justify-content-evenly mt-2">
          <Link to="">
            <SchoolParentSignUpBtn />
            {/* <SignUpBtn /> */}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Technology;
