import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";
import Container from "react-bootstrap/Container";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";

const AdminReportIssue = () => {
  return (
    <>
      <AdminTopNavbar />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <AdminSideNavBar />
        </div>
        <div className="col-lg-9 col-md-12">
          <div>
            <TutorNavbar />
          </div>
          <div className="row">
            <div className="col">
              <Card1 />
            </div>
            <div className="row">
              <Card2 />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Card1 = () => {
  return (
    <Container>
      <h3>Champs Issue</h3>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </Container>
  );
};
const Card2 = () => {
  return (
    <Container>
      <h3>Instructor Issue</h3>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <p>
        Neil Robert Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </Container>
  );
};

const TutorNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center AdmintTutorNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">Report Issue</p>
          </div>
          <div className="d-flex navFontColor">
            {" "}
            <Link to="" className="text-decoration-none">
              <p className="navFontColor">Home</p>
            </Link>
            <ArrowRightAltOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminReportIssue;
