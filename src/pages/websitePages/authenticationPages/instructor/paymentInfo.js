//external import
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { Done } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

export const PaymentInfo = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <Row className="mt-5 px-5">
          <Form>
            {/* <Row className="mb-3"> */}{" "}
            <Form.Group className="col-lg-6" controlId="formGridTextOne">
              <h4>Name of Bank</h4>
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Group className="col-lg-12" controlId="formGridtext1">
                <h4 className="mt-4">Account Number</h4>
                <Form.Label></Form.Label>
                <Form.Control type="text" className="authPlaceHolderBorder" />
              </Form.Group>
            </Form.Group>
            {/* </Row> */}
            <div className="d-flex justify-content-between mt-5">
              <Link to="/InstructorProfileInfo">
                <BackToApplication />
              </Link>
              <Link to="/InstructorProfileInfo">
                <Done />
              </Link>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};
