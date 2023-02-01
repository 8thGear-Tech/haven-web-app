import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const ActivityScheduleForm = () => {
  return (
    <>
      <Form>
        {" "}
        <Row className="mt-3">
          <Form.Label>
            <h5>Which day do want activities to hold?</h5>
          </Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Monday"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Tuesday"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Wednesday"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Thursday"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Friday"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Saturday"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>
        <Row className="mb-3 mt-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <h5>When do you want to start?</h5>
            </Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="authPlaceHolderBorder"
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <h5>For how long?</h5>
            </Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="authPlaceHolderBorder"
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row className="mb-4 mt-3">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <h5>How many hours per day?</h5>
            </Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="authPlaceHolderBorder"
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              <h5>From what time?</h5>
            </Form.Label>
            <Form.Select
              defaultValue="Choose..."
              className="authPlaceHolderBorder"
            >
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <div className="d-flex justify-content-between">
          {" "}
          <BackBtn />
          <NextBtn />
        </div>
      </Form>
    </>
  );
};

export default ActivityScheduleForm;
