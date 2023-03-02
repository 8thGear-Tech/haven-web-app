import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import havenlogo from "../../../assets/icons/havenlogo.png";
const ProfileEditCard = () => {
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
              <DetailsForm />
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

const DetailsForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={4} className=" mt-5 mb-4">
            <Card>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="Name" placeholder="Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="Email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="PhoneNumber" placeholder="Phone Number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHomeAddress">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="HomeAddress" placeholder="HomeAddress" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicGender">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="Gender" placeholder="Gender" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="DateOfBirth"
                    placeholder="Date of Birth"
                  />
                </Form.Group>
              </Form>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mt-5 mb-4">
                      <Card>
                            <Card.Body></Card.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="Name" placeholder="Student ID" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control type="Email" placeholder="Grade Level" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                  {/* <Form.Label>Email address</Form.Label> */}
                  <Form.Control
                    type="PhoneNumber"
                    placeholder="Number Of Classes"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHomeAddress">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control type="HomeAddress" placeholder="HomeAddress" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                  {/* <Form.Label>Password</Form.Label> */}
                  <Form.Control
                    type="DateOfBirth"
                    placeholder="Date of Birth"
                  />
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfileEditCard;
