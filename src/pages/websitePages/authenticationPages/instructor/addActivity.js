//external import
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

//internal import
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import { Add } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";

const AddYourActivity = () => {
  return (
    <>
      <GuestNavbar />
      <YourActivity />
    </>
  );
};

const YourActivity = () => {
  return (
    <>
      <Container className="mt-5">
        <Row className="d-flex justify-content-center text-center">
          {" "}
          <Card className="addYourActivitiesBg w-75 p-5">
            <h3>Add Your Activities</h3>
            <p>
              Please enter the subjects you intend to teach and run the test to
              add to your profile. the more subjects you select, the more
              chances you have to be booked
            </p>
            <Link to="/AddActivity">
              {" "}
              <Add />
            </Link>

            <div className="mt-3">
              {" "}
              <Link to="/InstructorLocation">
                <BackBtn />
              </Link>
            </div>
          </Card>
        </Row>
      </Container>
    </>
  );
};
export const AddActivity = () => {
  return (
    <>
      <Container fluid>
        {/* <GuestNavbar /> */}
        <Row className="mt-5 px-5">
          <h3>Add Activity</h3>
          <p>
            Please type the subject or select from the list of available
            subjects
          </p>
          <Form>
            <Row className="mb-3">
              {" "}
              <Form.Group as={Col} className="" controlId="formGridtext1">
                <Form.Label></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Type the Activity"
                  className="authPlaceHolderBorder"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridTextOne">
                <Form.Label className=""></Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="authPlaceHolderBorder mx-1"
                >
                  <option>Category</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <div className="d-flex justify-content-center mt-5">
              {" "}
              <Link to="/AddYourActivity">
                <BackBtn />
              </Link>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default AddYourActivity;
