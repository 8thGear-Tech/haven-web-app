import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

//internal import
import notone from "../../../assets/images/dashboard/instructor/notification/notone.png";
import { ChampFeedback } from "../../../components/allCards/Dashboard/Feedback";
import champsFeedbackData from "../../../data/allCards/feedback.json";
import { InstructorDashboardSideNav } from "../../../components/Navbar/dashboardNavbar";

const InstructorChampsFeedback = () => {
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
                <InstructorChampsFeedbackNavbar />
              </div>
              <div className="">
                <InstructorAllChampsFeedback />
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

const InstructorChampsFeedbackNavbar = () => {
  return (
    <div className="container mt-5 my-3">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Champs Feedback</p>
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

const InstructorAllChampsFeedback = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center">
          {champsFeedbackData.champsFeedbackData.map((card) => {
            return (
              <div className="col-12" key={card.id}>
                <ChampFeedback {...card}></ChampFeedback>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InstructorChampsFeedback;
