import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";

import { SaveBtn } from "../../../../components/Buttons/dashboard/actionBtn";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import {
  Done,
  IAgreeBtn,
} from "../../../../components/Buttons/website/actionBtn/instructorBtn";

export const Referee = () => {
  return (
    <>
      <GuestNavbar />

      <Form>
        {" "}
        <Row className="mt-5 justify-content-center">
          {" "}
          <div className="text-center">
            <h4>
              List the name of your refree below (at least 4 reputable persons
              or companies.)
            </h4>
          </div>
          <div className="col-lg-6">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        </Row>
        <div className="d-flex justify-content-between mt-5 mx-5">
          <Link to="/AddYourActivity">
            <BackToApplication />
          </Link>
          <Link to="/AddYourActivity">
            <Done />
          </Link>
        </div>
      </Form>
    </>
  );
};

export const InstructorAgreement = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <Row className="mt-5 px-5 justify-content-center">
          <h4>Instructor’s Agreement</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cras
            feugiat ut pulvinar non aliquet aliquet aliquam nec. Facilisi
            sagittis, eu sed viverra cursus nec. Vitae tristique praesent arcu
            purus, eu euismod. Sollicitudin bibendum urna adipiscing dictum
            cursus nulla convallis quis tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cras
            feugiat ut pulvinar non aliquet aliquet aliquam nec. Facilisi
            sagittis, eu sed viverra cursus nec. Vitae tristique praesent arcu
            purus, eu euismod. Sollicitudin bibendum urna adipiscing dictum
            cursus nulla convallis quis tempor.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In cras
            feugiat ut pulvinar non aliquet aliquet aliquam nec. Facilisi
            sagittis, eu sed viverra cursus nec. Vitae tristique praesent arcu
            purus, eu euismod. Sollicitudin bibendum urna adipiscing dictum
            cursus nulla convallis quis tempor.
          </p>
          <p>I agree to the company”s terms and condition</p>
          <IAgreeBtn />
        </Row>
      </Container>
    </>
  );
};
