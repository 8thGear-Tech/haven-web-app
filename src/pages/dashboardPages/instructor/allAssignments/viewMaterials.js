import { Link } from "react-router-dom";
import { MaterialsandActivities } from "../../../../components/allCards/Dashboard/activitiesCards";
import instructorActivitiesData from "../../../../data/allCards/activitiesCard.json";
import { MaterialsandActivitiesCard } from "../../../../components/allCards/Dashboard/activitiesCards";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { InstructorDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";

const ViewMaterials = () => {
  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2">
            <InstructorDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <MaterialsNavbar />
              </div>
              <div className="">
                {" "}
                <Materials />
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

const MaterialsNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Materials</p>
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
const Materials = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center InstructorMaterialBg pb-5 pt-3">
        <h4 className="ps-5">Welcome Michael</h4>
        <h3 className="text-center mb-1 mt-3">Materials</h3>
        {instructorActivitiesData.instructorActivitiesData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <MaterialsandActivitiesCard
                {...card}
              ></MaterialsandActivitiesCard>
            </div>
          );
        })}
        <div className="d-flex justify-content-between p-5">
          {" "}
          <div className="d-flex urlFontColor">
            <Link to="/UploadMaterial" className="urlFontColor">
              <p className="urlFontColor">Upload material</p>
            </Link>{" "}
            <ArrowRightAltOutlinedIcon />
          </div>
          <div className="d-flex urlFontColor">
            {" "}
            <Link to="" className="urlFontColor">
              <p className="urlFontColor">Go to resource</p>
            </Link>
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMaterials;
