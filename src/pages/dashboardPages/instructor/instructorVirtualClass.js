import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
import { StartaNewSessionBtn } from "../../../components/Buttons/dashboard/actionBtn";
import videoicon from "../../../assets/icons/videoicon.png";
import { InstructorDashboardSideNav } from "../../../components/Navbar/dashboardNavbar";

const instructorVirtualClass = () => {
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
                <VirtualClassNavbar />
              </div>
              <div className="">
                {" "}
                <VirtualClassCard />
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

const VirtualClassNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Virtual Class</p>
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

const VirtualClassCard = () => {
  return (
    <>
      <div className="container">
        <h4>Name: Michael</h4>
        <div className="row text-center justify-content-center InstructorMaterialBg py-5 mb-4">
          <div className="mb-4" style={{ maxWidth: "100px" }}>
            <img src={videoicon} className="img-fluid" />
          </div>
          <StartaNewSessionBtn />
          <p className="mt-3">View this session performance HERE</p>
        </div>
      </div>
    </>
  );
};

export default instructorVirtualClass;
