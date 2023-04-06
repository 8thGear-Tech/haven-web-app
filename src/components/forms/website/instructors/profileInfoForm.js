import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//internal import
import { SubmitBtn } from "../../../Buttons/dashboard/actionBtn";

const ProfileInfoForm = () => {
  return (
    <>
      <Row>
        <Col>
          {" "}
          <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Personal Information</h5>
              </Card.Title>
              <Link to="/AboutInstructor">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card>
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Your Education</h5>
              </Card.Title>
              <Link to="/EducationHistory">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Your Work History</h5>
              </Card.Title>
              <Link to="/WorkHistory">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Location</h5>
              </Card.Title>
              <Link to="/InstructorLocation">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Activities</h5>
              </Card.Title>
              <Link to="/AddYourActivity">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Profile Upload</h5>
              </Card.Title>
              <Link to="/ProfileUpload">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Identify Upload</h5>
              </Card.Title>
              <Link to="/IdUpload">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Video Introduction Upload</h5>
              </Card.Title>
              <Link to="/VideoUpload">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Your Schedule</h5>
              </Card.Title>
              <Link to="/"></Link>
              <LockOutlinedIcon />
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Teaching Special Needs</h5>
              </Card.Title>
              <Link to="/SpecialNeeds">
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Payment Information</h5>
              </Card.Title>
              <Link to="/PaymentInfo">
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
          <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Provide Referees</h5>
              </Card.Title>
              <Link to="/Referees">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card>
          {/* <Card
            style={{ width: "45rem" }}
            className="instructorCardBorder my-4"
          >
            <Card.Body className="d-flex justify-content-between align-items-center">
              <Card.Title>
                <h5>Instructors Agreements</h5>
              </Card.Title>
              <Link to="/InstructorAgreement">
                {" "}
                <LockOutlinedIcon />
              </Link>
            </Card.Body>
          </Card> */}
        </Col>
      </Row>
      <div className="text-center">
        <Link to="/CongratsMessage">
          {" "}
          <SubmitBtn />
        </Link>
      </div>
      {/* <Form>
        <Row className="p-3">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>
                <h5>Name of champ(s)</h5>
              </Form.Label>
              <Form.Control className="authPlaceHolderBorder" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTextOne">
              <Form.Label className="mt-4">
                <h5> Activities Interested in</h5>
              </Form.Label>
        
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Hours of activity</h5>
              </Form.Label>
        
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Do you need a specific instructor?</h5>
              </Form.Label>
             
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>
                <h5>No of champ(s)</h5>
              </Form.Label>
              <Form.Control className="authPlaceHolderBorder" />
            </Form.Group>
          </div>
        </Row>

        <div className="d-flex justify-content-between">
          {" "}
          <BackBtn />
          <SubmitBtn />
        </div>
      </Form> */}
    </>
  );
};

export default ProfileInfoForm;
