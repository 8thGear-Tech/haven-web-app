//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

//internal import
import { GuestNavbar } from "../../Navbar/guestNavbar";
import { BackBtn, SubmitBtn } from "../../Buttons/website/actionBtn/schoolBtn";

// import { SaveAndContinueBtn } from "../../../Buttons/website/actionBtn/instructorBtn";

const RegisterNowForm = () => {
  return (
    <>
      <GuestNavbar />
      <RegisterNow />
    </>
  );
};

const RegisterNow = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          {/* <h3>Tell us about yourself</h3> */}
          <p></p>
          <Form>
            {/* <Row className="mb-3"> */}
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h5>Email</h5>
              </Form.Label>
              <Form.Control type="text" className="authPlaceHolderBorder" />
            </Form.Group>
            {/* <Form.Group as={Col} controlId="formGridText">
                <Form.Label>
                  <h5>Last Name</h5>
                </Form.Label>
                <Form.Control type="text" className="authPlaceHolderBorder  " />
              </Form.Group> */}
            {/* </Row> */}
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <h5>Champ's full name</h5>
              </Form.Label>
              <Form.Control type="text" className="authPlaceHolderBorder" />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                as={Col}
                controlId="formGridAddress1"
              >
                <Form.Label>
                  <h5>Champ's full name</h5>
                </Form.Label>
                <Form.Control type="text" className="authPlaceHolderBorder" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                controlId="formGridAddress1"
              >
                <Form.Label>
                  <h5>Champ's age</h5>
                </Form.Label>
                <Form.Control type="text" className="authPlaceHolderBorder" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridTextOne">
                <Form.Label className="">
                  <h5 className="">Champ's date of birth</h5>
                </Form.Label>
                {/* <Form.Control type="email" placeholder="Enter email" /> */}{" "}
                <Form.Select
                  aria-label="Default select example"
                  className="authPlaceHolderBorder mx-1"
                >
                  <option>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <Row>
              <h4>Activities interested in</h4>{" "}
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Graphic design"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Video Editing"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Row>
            <Row>
              <h4>Relationship with champ</h4>{" "}
              {["radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Father"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Mother"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Row>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h5>Parents/Guardian’s Name</h5>
              </Form.Label>
              <Form.Control type="text" className="authPlaceHolderBorder" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h5>Parents/ Guardian’s Phone Number</h5>
              </Form.Label>
              <Form.Control type="text" className="authPlaceHolderBorder" />
            </Form.Group>
            <Row>
              <h4>How did you hear about this program</h4>{" "}
              {["radio"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="WhatsApp"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Facebook"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Row>
            <Row>
              <p>
                Declaration: I wish to have my child(ren) attend the selected
                Haven Program. I also give permission for pictures of my
                child(ren) while participating in the activities of the program
                to be taken. Picture may be used for Haven's Instructional and
                promotional purposes only via brochures, flyers, websites &
                social media handles.
              </p>{" "}
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="I agree"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Row>
            <div className="d-flex justify-content-center justify-content-evenly mt-5">
              <Link to="/AllActivities">
                <BackBtn />
              </Link>
              <Link to="/">
                <SubmitBtn />
              </Link>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default RegisterNowForm;
