import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";
import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const AboutChampsForm = () => {
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
    const {
      name,
      addressOfSchool,
      email,
      phone,
      noClass,
      avgNumber,
      // activities,
      // interest,
    } = form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "please enter your name";
    if (!addressOfSchool || addressOfSchool === "")
      newErrors.addressOfSchool = "please enter address of school";
    if (!email || email === "") newErrors.email = "please enter email";
    if (!phone || phone === "") newErrors.phone = "please enter phone number";
    if (!noClass || noClass === "")
      newErrors.noClass = "please number of classes";
    if (!avgNumber || avgNumber === "")
      newErrors.avgNumber = "please enter averange number";
    // if (!activities || activities === "")
    //   newErrors.activities = "please enter activities";
    // if (!interest || interest === "")
    // newErrors.interest = "please enter activties of interest";

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
        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>
            <h5>Name of School</h5>
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

        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Address of School</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.addressOfSchool}
            onChange={(e) => setField("addressOfSchool", e.target.value)}
            isInvalid={!!errors.addressOfSchool}
          />
          <Form.Control.Feedback type="invalid">
            {errors.addressOfSchool}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Email address</h5>
          </Form.Label>
          <Form.Control
            type="email"
            className="authPlaceHolderBorder"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Phone number</h5>
          </Form.Label>
          <Form.Control
            type="number"
            className="authPlaceHolderBorder"
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Number of class you need an instructor for </h5>
          </Form.Label>
          <Form.Control
            type="number"
            className="authPlaceHolderBorder"
            value={form.noClass}
            onChange={(e) => setField("noClass", e.target.value)}
            isInvalid={!!errors.noClass}
          />
          <Form.Control.Feedback type="invalid">
            {errors.noClass}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>Average number of Champs in a class </h5>
          </Form.Label>
          <Form.Control
            type="number"
            className="authPlaceHolderBorder"
            value={form.avgNumber}
            onChange={(e) => setField("avgNumber", e.target.value)}
            isInvalid={!!errors.avgNumber}
          />
          <Form.Control.Feedback type="invalid">
            {errors.avgNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Row>
          <h4>Activities of interest </h4>

          {["checkbox"].map((type) => (
            <div
              key={`default-${type}`}
              className="mb-3"
              value={form.day}
              onChange={(e) => setField("day", e.target.value)}
              isInvalid={!!errors.day}
            >
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
        {/* <Row className="champFormBgColor p-3">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <Form.Group as={Col} controlId="formGridTextOne">
              <Form.Label className="">
              
                <h5>Name of School</h5>
              </Form.Label>
            
              <Form.Select
                aria-label="Default select example"
                className="schoolPlaceHolderBorder"
              >
                <option>Select</option>
                <option value="1">5-10</option>
                <option value="2">10-20</option>
                <option value="3">20-25</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Number of classes</h5>
              </Form.Label>
              
              <Form.Select
                aria-label="Default select example"
                className="schoolPlaceHolderBorder"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="3">Four</option>
                <option value="3">Five</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
            <Form.Group
              className="mb-3 mt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Tell us a bit about this champ</h5>
              </Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </div>
        </Row>
        <Row className="mt-4">
          <Form.Label>
            <h5>What curriculum is used in your school?</h5>
          </Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Nigerian"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="American"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Britain"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>

        <Row className="mb-3">
          <Form.Label>
            <h5>Do you prefer a male or female instructor?</h5>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Any gender"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Male"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Female"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row> */}

        <div className="d-flex justify-content-between">
          <Link to="/signup">
            <BackBtn />
          </Link>
          <div type="submit" onClick={handleSubmit}>
            <Link to="/ActivitySchedule">
              <NextBtn />
            </Link>
          </div>
          {/* <div type="submit" onClick={handleSubmit}>
             <Link to="/SchoolLocation">
            <NextBtn />
          </Link>

          </div> */}
        </div>
      </Form>
    </>
  );
};

export default AboutChampsForm;
