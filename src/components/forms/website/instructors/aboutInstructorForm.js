import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { SaveAndContinueBtn } from "../../../Buttons/website/actionBtn/instructorBtn";

const AboutInstructorForm = () => {
  return (
    <>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>
              <h5>First Name</h5>
            </Form.Label>
            <Form.Control type="text" className="authPlaceHolderBorder" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridText">
            <Form.Label>
              <h5>Last Name</h5>
            </Form.Label>
            <Form.Control type="text" className="authPlaceHolderBorder  " />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>Email Address</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Send me jobs and offers" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5>Birthday</h5>
              <p>You must be 18 and above to apply</p>
            </Form.Label>
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            <div className="d-flex">
              {" "}
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>
              <h5 className="mt-4">Primary phone number</h5>
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
          </Form.Group>
          <Form.Group as={Col} controlId="formGridNumber">
            <Form.Label>
              <h5 className="mt-4">Whatsapp number</h5>
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
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5>Birthday</h5>
              <p>You must be 18 and above to apply</p>
            </Form.Label>
            {/* <Form.Control type="email" placeholder="Enter email" /> */}
            <div className="d-flex">
              {" "}
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder mx-1"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Gender</h5>
            </Form.Label>
            {/* <Form.Control type="email" placeholder="Enter email" /> */}{" "}
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Male"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="Female"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">How did you hear about us?</h5>
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
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Nationality</h5>
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
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Primary language</h5>
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

export default AboutInstructorForm;
