import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";

import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import havenlogo from "../../../assets/icons/havenlogo.png";

const AdminProfilePage = () => {
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
              <AdminProfile />
            </div>
            <div className="col-6">
              <Timestamp />
            </div>
            <div className="row">
              <DetailsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const TutorNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center AdmintTutorNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p className="navFontColor">My Profile</p>
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

const AdminProfile = () => {
  return (
    <>
      <div className="d-flex ">
        <img width={"100px"} src={havenlogo} alt="" />
        <div>
          <h5 className="text-black">Admin Id:</h5>
          <h5 className="text-black">Admin Name:Haven</h5>
        </div>
      </div>
    </>
  );
};

const Timestamp = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={havenlogo} />
        <Card.Body style={{ fill: "Solid #e2e9f0 " }}>
          <Card.Link href="#">About </Card.Link>
          <Card.Link href="#">Description</Card.Link>
          <Card.Title>Card Title</Card.Title>{" "}
        </Card.Body>
        <Card.Body className="timeStamp">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

const DetailsForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={6} className=" mt-5 mb-4">
            <Card>
              <h3 className="text-center text-black">Personal details</h3>
              <div className="p-3">
                <p>School:Haven</p>
                <p>Email:Haven</p>
                <p>Phone number:Haven</p>
                <p>School Adress:Haven</p>
              </div>
            </Card>
          </Col>
          <Col md={6} lg={6} className=" mt-5 mb-4">
            <Card>
              <h3 className="text-center text-black">Other details</h3>
              <div className="p-3">
                <p>No of all champ:500</p>
                <p>No of all activities:5</p>
                <p>No of all instructor:5</p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AdminProfilePage;
