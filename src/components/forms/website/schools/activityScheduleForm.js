import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import React, { useState } from "react";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const ActivityScheduleForm = () => {
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
    const { day, instructor, hours, time } = form;
    const newErrors = {};

    if (!day || day === "") newErrors.day = "please enter day";
    if (!instructor || instructor === "")
      newErrors.instructor = "please enter how long";
    if (!hours || hours === "") newErrors.hours = "please enter hours";
    if (!time || time === "") newErrors.time = "please enter time";

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
        {" "}
        <Row className="mt-3">
          <Form.Label>
            <h5>What day(s) do want activities to hold?</h5>
          </Form.Label>
          {["checkbox"].map((type) => (
            <div
              key={`inline-${type}`}
              className="mb-3"
              value={form.day}
              onChange={(e) => setField("day", e.target.value)}
              isInvalid={!!errors.day}
            >
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
          <Form.Control.Feedback type="invalid">
            {errors.day}
          </Form.Control.Feedback>
        </Row>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>For how long do you need an instructor for?</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.instructor}
            onChange={(e) => setField("instructor", e.target.value)}
            isInvalid={!!errors.instructor}
          />
          <Form.Control.Feedback type="invalid">
            {errors.instructor}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>How many hours per day</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.hours}
            onChange={(e) => setField("hours", e.target.value)}
            isInvalid={!!errors.hours}
          />
          <Form.Control.Feedback type="invalid">
            {errors.hours}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGridEmail">
          <Form.Label>
            <h5>From what time?</h5>
          </Form.Label>
          <Form.Control
            type="text"
            className="authPlaceHolderBorder"
            value={form.time}
            onChange={(e) => setField("time", e.target.value)}
            isInvalid={!!errors.time}
          />
          <Form.Control.Feedback type="invalid">
            {errors.time}
          </Form.Control.Feedback>
        </Form.Group>
        {/* <Row className="mb-3 mt-3">
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
          </Form.Group> */}
        {/* </Row> */}
        <div className="d-flex justify-content-between">
          <Link to="/ChampsNeeds">
            <BackBtn />
          </Link>
          {/* <Link to="/SchoolInformation">
            <BackBtn />
          </Link> */}

          <div type="submit" onClick={handleSubmit}>
            <Link to="/PaymentPackages">
              {" "}
              <NextBtn />
            </Link>
          </div>
        </div>
      </Form>
    </>
  );
};

export default ActivityScheduleForm;
