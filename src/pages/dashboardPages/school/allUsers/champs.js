import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { MaterialsandActivities } from "../../../../components/allCards/Dashboard/activitiesCards";
import activitiesData from "../../../../data/allCards/activitiesCard.json";
import { MaterialsandActivitiesCard } from "../../../../components/allCards/Dashboard/activitiesCards";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { SchoolDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";

import { ProfileCard } from "../../../../components/allCards/Dashboard/profileCards";
// import champsDetails from ""

//images
import detailsimage from "../../../../assets/images/dashboard/school/detailsimage.png";

const AllChamps = () => {
  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2">
            <SchoolDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <ChampsNavbar />
              </div>
              <div className="">
                {" "}
                <ProfileCard />
              </div>
              {/* <div className="">
                <RegisteredUsersList />
              </div> */}
            </div>
          </div>{" "}
        </div>
      </div>
    </>
  );
};

const ChampsNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Champs</p>
          </div>
          <div className="d-flex navFontColor">
            {" "}
            <Link to="" className="text-decoration-none">
              <p className="navFontColor">Home</p>
            </Link>
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

//  <ProfileCard />

// const ChampsDetails = () => {
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="row">
//           {champsDetails.champsDetails.map((card) => {
//             return (
//               <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
//                 <ProfileCard {...card}></ProfileCard>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

export default AllChamps;
