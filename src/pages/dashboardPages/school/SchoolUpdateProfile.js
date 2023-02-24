import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
import { CancelBtn } from "../../../components/Buttons/dashboard/actionBtn";
import { UpdateBtn } from "../../../components/Buttons/dashboard/actionBtn";
import videoicon from "../../../assets/icons/videoicon.png";

import profilepic from "../../../assets/images/dashboard/instructor/profilepic.png";
import { ProfileCard } from "../../../components/allCards/Dashboard/profileCards";
import { SchoolDashboardSideNav } from "../../../components/Navbar/dashboardNavbar";
import SchoolUpdateProfileForm from "../../../components/forms/dashboard/schools/schoolupdateProfileForm";

const SchoolUpdateProfile = () => {
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
                <SchoolUpdateProfileNavbar />
              </div>
              <div className="">
                {" "}
                <SchoolUpdateProfileCard />
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

const SchoolUpdateProfileNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>My Profile</p>
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
      <div className="d-flex align-items-center justify-content-evenly mt-5">
        <div className="mb-4">
          <img src={profilepic} className="img-fluid" />
        </div>
        {/* <div> */}
        <p className="mt-3">
          Ut velit eu erat duis quaLorem ipsum dolor sit amet, consectetur
          adipiscing elit.{" "}
        </p>
        {/* </div> */}
        <Link to="">View Champs Feedback</Link>
      </div>
    </div>
  );
};

const SchoolUpdateProfileCard = () => {
  return (
    <>
      <div className="container">
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
      </div>
    </>
  );
};

export default SchoolUpdateProfile;
