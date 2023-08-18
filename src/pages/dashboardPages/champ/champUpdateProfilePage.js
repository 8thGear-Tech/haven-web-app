//Ibinabo
import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import studentProfile from "../../../assets/images/dashboard/champ/studentProfile.png";
import { SaveBtn, CancelBtn} from "../../../components/Buttons/dashboard/actionBtn"


const ChampUpdateProfilePage = () => {
  return (
    <>
      <ChampNavbar />
      <div style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, border: '0.50px black solid', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>

            <div><h3>Profile</h3></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

              <div>Home</div>
              <div style={{ marginLeft: '10px', 
              transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>  
      <div className="row d-flex justify-content-center">     
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-12">
              <StudentProfile />
            </div>
            <div className="mb-5">
              <DetailsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChampUpdateProfilePage;

const StudentProfile = () => {
  return (
    <>
      <div style={{ width: "23rem", marginTop: "50px"}} className="group-flush">
        <Row>
          <Col>
            {" "}
            <Card.Img variant="top" className="roundedCircle" src={studentProfile} />
          </Col>
          <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's contents.
            </Card.Text>
          </Col>
        </Row>
      </div>
    </>
  );
};
// md={6} lg={4} className=" mt-5 mb-4"
const DetailsForm = () => {
  return (
    <>
      <Container>
        <Row>
          <Col >
            <div className="" style={{ width: "23rem" ,  marginLeft: "4rem" , marginRight:"4rem", marginTop: "3rem" }}>
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
              
            </div>
           
          </Col>

          <Col>
             <div className="" style={{ width: "23rem",  marginLeft:"4rem",  marginTop: "3rem"  }}>     
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                 
                  <Form.Control type="Name" placeholder="Student ID" />
                </Form.Group>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                 
                  <Form.Control type="Email" placeholder="Grade Level" />
                </Form.Group>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                 
                  <Form.Control
                    type="PhoneNumber"
                    placeholder="Number Of Classes"
                  />
                </Form.Group>
                <br />
                <br />
                {/* <Form.Group className="mb-3" controlId="formBasicHomeAddress">
               
                  <Form.Control type="HomeAddress" placeholder="HomeAddress" />
                </Form.Group> */}
                <br />
                {/* <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                  
                  <Form.Control
                    type="DateOfBirth"
                    placeholder="Date of Birth"
                  />
                </Form.Group> */}
              </Form>
            </div>
          </Col>

          <Col>
            <Row>
              <Col className="d-flex justify-content-end">
                <SaveBtn />
              </Col>
              <Col className="d-flex justify-content-start">
                <CancelBtn />
              </Col>
            </Row>
          </Col>

    </Row>
  </Container>
</>
  );
};


