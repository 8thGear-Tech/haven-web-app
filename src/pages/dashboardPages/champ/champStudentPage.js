import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import havenlogo from "../../../assets/icons/havenlogo.png";
const ProfileIdCard = () => {
  return (
    <>
      <ChampNavbar />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <ChampSideNavBar />
        </div>
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-6">
              <StudentProfile />
            </div>
            <div className="row">
              <DetailsCards />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <ChampSideNavBar />
          </div>
          <div className="col-lg-8">
            <div className="row">
              <StudentProfile />
            </div>
            <div className="row">
              <
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
const StudentProfile = () => {
  return (
    <>
      <Card style={{ width: "23rem" }} className="group-flush">
        <Row>
          <Col>
            {" "}
            <Card.Img variant="top" className="roundedCircle" src={havenlogo} />
          </Col>
          <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Col>
        </Row>

        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title>
            
            <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};

const DetailsCards = () => {
  return (
    <>
      <Container className="m-auto">
        <Row>
          <Col md={6} lg={6} className=" mt-5 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Personal details</Card.Title>
                <Card.Text>Full Name: Ogunsakin Michael</Card.Text>
                <Card.Text>Email : Adekolaokesonya@gmail.com</Card.Text>
                <Card.Text>Phone : +2348023672339</Card.Text>
                <Card.Text>Home Address : Number 55, albert street</Card.Text>
                <Card.Text>Gender : Male</Card.Text>
                <Card.Text>Date of birth : 1/3/2022</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={6} className="mt-5 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Class details</Card.Title>
                <Card.Text>Student ID : 111747747</Card.Text>
                <Card.Text>Grade level : 2</Card.Text>
                <Card.Text>Number of classes : 6 </Card.Text>
                <Card.Text>Class Address : Number 55, albert street</Card.Text>
                <Card.Text>VirtualAddress : Number 55, albert street</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileIdCard;
