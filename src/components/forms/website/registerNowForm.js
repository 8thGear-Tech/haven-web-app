//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

import { useState } from "react";

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
    const { name, email, number, childName, ages, relations, address } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "please enter your name";
    if (!email || email === "") newErrors.email = "please enter your email";
    if (!number || number === "")
      newErrors.number = "please enter your phone number";
    if (!childName || childName === "")
      newErrors.childName = "please enter Child/Children name";
    if (!ages || ages === "")
      newErrors.ages = "please enter your child/children name";
    if (!relations || relations === "")
      newErrors.relations = "please enter relationship with child";
    if (!address || address === "")
      newErrors.address = "please enter Home Address";

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
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          {/* <h3>Tell us about yourself</h3> */}
          <p></p>
          <Form>
            {/* <Row className="mb-3"> */}
            <Form.Group as={Col} controlId="formGridName" className="mb-3">
              <Form.Label>
                <h5>Name of parent</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
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
            <Form.Group as={Col} controlId="formGridNumber" className="mb-3">
              <Form.Label>
                <h5>Phone number</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder  "
                value={form.number}
                onChange={(e) => setField("number", e.target.value)}
                isInvalid={!!errors.number}
              />
              <Form.Control.Feedback type="invalid">
                {errors.number}
              </Form.Control.Feedback>
            </Form.Group>
            {/* </Row> */}
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <h5>The name(s) of your child/children</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder"
                value={form.childName}
                onChange={(e) => setField("childName", e.target.value)}
                isInvalid={!!errors.childName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.childName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <h5>The age(s) of your child/children</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder"
                value={form.ages}
                onChange={(e) => setField("ages", e.target.value)}
                isInvalid={!!errors.ages}
              />
              <Form.Control.Feedback type="invalid">
                {errors.ages}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <h5>Relationship with child/ children</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder"
                value={form.relations}
                onChange={(e) => setField("relations", e.target.value)}
                isInvalid={!!errors.relations}
              />
              <Form.Control.Feedback type="invalid">
                {errors.relations}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>
                <h5>Home address</h5>
              </Form.Label>
              <Form.Control
                type="text"
                className="authPlaceHolderBorder"
                value={form.address}
                onChange={(e) => setField("address", e.target.value)}
                isInvalid={!!errors.address}
              />
              <Form.Control.Feedback type="invalid">
                {errors.address}
              </Form.Control.Feedback>
            </Form.Group>
            <Row>
              <h4>What activities are you interested in?</h4>
              <h6>Weekend clubs</h6>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Taekwondo (N20,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Tech (N15,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Music (N15,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Arts and Crafts (N15,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
              <h6>After School activities</h6>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="Tech (N15,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Music(N15,000 monthly)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
              <h6>Virtual coding classes</h6>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    inline
                    label="1:1 classes (30,000)"
                    type={type}
                    id={`inline-${type}-3`}
                  />
                  <Form.Check
                    inline
                    label="Group classes (15,000)"
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
            {/* <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
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
            </Form.Group> */}
            <Form.Group controlId="formGridTextOne">
              <Form.Label className="">
                <h5>How did you hear about us?</h5>
              </Form.Label>
              {/* <Form.Control type="email" placeholder="Enter email" /> */}
              <div className="d-flex">
                {" "}
                <Form.Select
                  aria-label="Default select example"
                  className="authPlaceHolderBorder mx-1"
                >
                  <option>Select</option>
                  <option value="1">WhatsApp</option>
                  <option value="2">Twitter</option>
                  <option value="3">Instagram</option>
                </Form.Select>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-center justify-content-evenly mt-5">
              <Link to="/AllActivities">
                <BackBtn />
              </Link>
              <div onClick={handleSubmit} type="submit">
                {/* <Link to="/"> */}
                <SubmitBtn />
                {/* </Link> */}
              </div>
            </div>
          </Form>
        </Row>
      </Container>
    </>
  );
};

export default RegisterNowForm;
