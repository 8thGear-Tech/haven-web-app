import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { SaveAndContinueBtn } from "../../../Buttons/website/actionBtn/instructorBtn";

const InstructorLocationForm = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-4">What country do you live in?</h5>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="authPlaceHolderBorder mx-1"
            >
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-4">State</h5>
            </Form.Label>

            <Form.Select
              aria-label="Default select example"
              className="authPlaceHolderBorder mx-1"
            >
              <option>State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Where in Lagos?</h5>
            </Form.Label>
            <Form.Select
              aria-label="Default select example"
              className="authPlaceHolderBorder mx-1"
            >
              <option>Select</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} className="my-3" controlId="formGridtext1">
            <Form.Label>
              <h5>Where in Lagos?</h5>
            </Form.Label>
            <Form.Control type="text" className="authPlaceHolderBorder" />
          </Form.Group>
        </Row>
        <Form.Group className="my-3" controlId="formGridtext1">
          <Form.Label>
            <h5>Enter your street address</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>
        <h5>Teaching physical or online</h5>
        <p>
          Indicate if you prefer to teach online, in-person (which is usually at
          the client’s location) or both. To teach online, you MUST have a very
          good laptop, and a very reliable internet connection.
        </p>
        <h5>Select Medium</h5>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="mb-3">
            <Form.Check
              inline
              label="Physical"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check
              inline
              label="Online"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
            />
          </div>
        ))}
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <Link to="/InstructorProfileInfo">
            <SaveAndContinueBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default InstructorLocationForm;
