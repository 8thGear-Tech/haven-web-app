import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import React, { useState } from "react";

import { SaveAndContinueBtn } from "../../../Buttons/website/actionBtn/instructorBtn";

const AboutInstructorForm = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field])
      setErrors({
        ...errors,
        [field]: null,
      });
  };

  const validateForm = () => {
    const { name, email, phone, location, education, about, subject } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "please enter your name";
    if (!email || email === "") newErrors.email = "please enter your email";
    if (!phone || phone === "")
      newErrors.phone = "please enter your phone number";
    if (!location || location === "")
      newErrors.location = "please enter your location";
    if (!education || education === "")
      newErrors.education = "please enter your location";
    if (!about || about === "") newErrors.about = "please enter your location";
    if (!subject || subject === "")
      newErrors.subject = "please enter your location";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");

      console.log(form);
    }
  };
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
            <h5>Email</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>Contact number</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>What do you do Currently</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.location}
            onChange={(e) => setField("location", e.target.value)}
            isInvalid={!!errors.location}
          />
          <Form.Control.Feedback type="invalid">
            {errors.location}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>What educational qualification do you have?</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.education}
            onChange={(e) => setField("education", e.target.value)}
            isInvalid={!!errors.education}
          />
          <Form.Control.Feedback type="invalid">
            {errors.education}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>
              Please tell us about past teaching/tutoring experience you have{" "}
              <i>
                E.g. Jsay Prevarsity - Mathematics Teacher for Grade 6 (March
                2022 - Present)
              </i>
            </h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.about}
            onChange={(e) => setField("about", e.target.value)}
            isInvalid={!!errors.about}
          />
          <Form.Control.Feedback type="invalid">
            {errors.about}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formFileLg" className="mb-3">
          {/* <Form.Label>Kindly upload your resume</Form.Label> */}
          <h4>Kindly upload your resume</h4>
          <Form.Control type="file" size="lg" />
        </Form.Group>
        <Row>
          <h4>What subject are you applying to be a tutor for?</h4>
          {["checkbox"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Coding"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Robotics"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Music"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="Arts and Crafts"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>
        <Row>
          <h4>Do you have a smart phone</h4>{" "}
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="No"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>
        <Row>
          <h4>Do you have working laptop</h4>{" "}
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Yes"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="No, but i can afford to get one right now"
                type={type}
                id={`inline-${type}-3`}
              />
              <Form.Check
                inline
                label="No, but i can't afford to get one right now"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>

        {/* <Row className="mb-3">
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
        </Row> */}
        {/* <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>Email Address</h5>
          </Form.Label>
          <Form.Control type="text" className="authPlaceHolderBorder" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Send me jobs and offers" />
        </Form.Group> */}

        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5>Birthday</h5>
              <p>You must be 18 and above to apply</p>
            </Form.Label>
          
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
        </Row> */}
        {/* <Row className="mb-3">
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
        </Row> */}
        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5>Birthday</h5>
              <p>You must be 18 and above to apply</p>
            </Form.Label>
            
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
        </Row> */}
        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Gender</h5>
            </Form.Label>
            {" "}
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
          </Form.Group>
        </Row> */}
        {/* <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Nationality</h5>
            </Form.Label>
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
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTextOne">
            <Form.Label className="">
              <h5 className="mt-3">Primary language</h5>
            </Form.Label>
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
          </Form.Group>
        </Row> */}
        <div
          className="d-flex justify-content-center mt-5"
          type="submit"
          onClick={handleSubmit}
        >
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
