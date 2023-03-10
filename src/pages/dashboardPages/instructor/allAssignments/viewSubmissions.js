import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import submissionsData from "../../../../data/allCards/activitiesCard.json";

//internal import
import { SubmissionsCard } from "../../../../components/allCards/Dashboard/activitiesCards";
// import notone from "../../../assets/images/dashboard/instructor/notification/notone.png";
import { InstructorDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";

const ViewSubmissions = () => {
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
                <SubmissionsNavbar />
              </div>
              <div className="">
                <AllSubmissionsCard />
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

const SubmissionsNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Submissions</p>
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

export const AllSubmissionsCard = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        {submissionsData.submissionsData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <SubmissionsCard {...card}></SubmissionsCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ViewSubmissions;
