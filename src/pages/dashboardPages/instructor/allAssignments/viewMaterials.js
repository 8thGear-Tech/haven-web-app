import { Link } from "react-router-dom";
import { MaterialsandActivities } from "../../../../components/allCards/Dashboard/activitiesCards";
import activitiesData from "../../../../data/allCards/activitiesCard.json";
import { MaterialsandActivitiesCard } from "../../../../components/allCards/Dashboard/activitiesCards";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";

const ViewMaterials = () => {
  return (
    <>
      <MaterialsNavbar />
      <Materials />
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
            <p>Material</p>
          </div>
          <div className="d-flex">
            {" "}
            <Link to="">
              <p>Home</p>
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
    <div className="container">
      <div className="row d-flex justify-content-center InstructorMaterialBg py-5">
        <h4 className="ms-5">Welcome Michael</h4>
        <h3 className="text-center my-3">Materials</h3>
        {activitiesData.activitiesData.map((card) => {
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
          <div className="d-flex">
            <Link to="/UploadMaterial">
              <p>Upload material</p>
            </Link>{" "}
            <ArrowRightAltOutlinedIcon />
          </div>
          <div className="d-flex">
            {" "}
            <Link to="">
              <p>Go to resource</p>
            </Link>
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMaterials;
