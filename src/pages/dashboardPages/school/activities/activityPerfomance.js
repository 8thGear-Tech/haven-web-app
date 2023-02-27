import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
import { SchoolDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";
import { ActivitiesPerformance } from "../../../../components/allCards/Dashboard/activitiesCards";

const AllActivitiesPerformance = () => {
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
                <AllActivitiesPerformanceNavbar />
              </div>
              <div className="">
                {" "}
                <AllActivitiesPerformanceCard />
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

const AllActivitiesPerformanceNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>All Activities Performance</p>
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

const AllActivitiesPerformanceCard = () => {
  return (
    <>
      <ActivitiesPerformance />
      {/* <div className="container">
        <div className="row justify-content-center SchoolMaterialBg py-5 mb-4">
          <SchoolUpdateProfileForm />
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Link to="" className="mx-2">
            {" "}
            <CancelBtn />
          </Link>
          <Link to="" className="mx-2">
            {" "}
            <UpdateBtn />
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default AllActivitiesPerformance;
