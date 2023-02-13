import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const SchoolInfoForm = () => {
  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>School Name</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Active Email</h5>
          </Form.Label>
          <Form.Control type="email" className="authPlaceHolderBorder" />
        </Form.Group>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>
              <h5>Phone Number</h5>
            </Form.Label>
            <InputGroup className="mb-3" as={Col}>
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <Form.Control
                aria-label="Text input with dropdown button"
                className="authPlaceHolderBorder"
              />
            </InputGroup>
            {/* <Form.Control type="number" className="authPlaceHolderBorder" /> */}
          </Form.Group>

          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>
              <h5>How did you hear about us?</h5>
            </Form.Label>
            <Form.Control type="text" className="authPlaceHolderBorder" />
          </Form.Group>
        </Row>

        <div className="d-flex justify-content-between">
          <Link to="/SchoolLocation">
            <BackBtn />
          </Link>
          <Link to="/ActivitySchedule">
            <NextBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SchoolInfoForm;
