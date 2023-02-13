import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { SaveBtn } from "../../../Buttons/dashboard/actionBtn";

const WorkHistoryForm = () => {
  return (
    <>
      <Form>
        {" "}
        <Form.Group className="my-3" controlId="formGridtext1">
          <Form.Label>
            <h5>Name of Organization</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>
        <Form.Group className="my-3" controlId="formGridtext1">
          <Form.Label>
            <h5>What is your role?</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Is this a teaching role?" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-4">Start year</h5>
            </Form.Label>
            {/* <Form.Control type="email" placeholder="Enter email" /> */}{" "}
            <Form.Select
              aria-label="Default select example"
              className="authPlaceHolderBorder mx-1"
            >
              <option>Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-4">End year</h5>
            </Form.Label>
            {/* <Form.Control type="email" placeholder="Enter email" /> */}{" "}
            <Form.Select
              aria-label="Default select example"
              className="authPlaceHolderBorder mx-1"
            >
              <option>Year</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="I still work here" />
        </Form.Group>
        <div className="d-flex justify-content-center mt-5">
          {" "}
          <Link to="/InstructorProfileInfo">
            <SaveBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default WorkHistoryForm;
