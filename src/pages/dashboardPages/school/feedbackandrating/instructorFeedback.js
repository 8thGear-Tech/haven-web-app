import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
// import notone from "../../../assets/images/dashboard/instructor/notification/notone.png";
import { InstructorFeedback } from "../../../../components/allCards/Dashboard/Feedback";
import instructorFeedbackData from "../../../../data/allCards/feedback.json";
import { SchoolDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";

const SchoolInstructorFeedback = () => {
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
                <SchoolInstructorFeedbackNavbar />
              </div>
              <div className="">
                <SchoolAllInstructorFeedback />
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

const SchoolInstructorFeedbackNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Instructor Feedback</p>
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

const SchoolAllInstructorFeedback = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row d-flex justify-content-center">
          {instructorFeedbackData.instructorFeedbackData.map((card) => {
            return (
              <div className="col-12" key={card.id}>
                <InstructorFeedback {...card}></InstructorFeedback>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SchoolInstructorFeedback;
