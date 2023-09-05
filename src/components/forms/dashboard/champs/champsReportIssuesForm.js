import React from "react";
import { Modal, Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ChampNavbar } from "../../../Navbar/champNavbar";
import { SubmitBtn } from "../../../Buttons/dashboard/actionBtn";
import { useFormValidation } from "../../authenticationForms";


const ChampReportIssuesModal = () => {
  const initialFormState = {
    fullName: "",
    email: "",
    complaints: "",
  };

  const validateForm = (form) => {
    const { fullName, email, complaints } = form;
    const newErrors = {};

    if (!fullName || fullName.trim() === "") {
      newErrors.fullName = "Full Name is required";
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!complaints || complaints.trim() === "") {
      newErrors.complaints = "Complaints field is required";
    }

    return newErrors;
  };

  const { form, setField, errors, handleSubmit } = useFormValidation(
    initialFormState,
    validateForm
  );

  return (
    <>
        
      <div style={{ marginTop: "50px" }}></div>

      <Container >
        <Row >
          <Col className="col-12 ">
            <h2 className="text-center">Report Issues</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicName">
                <h4>Full Name</h4>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  value={form.fullName}
                  onChange={(e) => setField("fullName", e.target.value)}
                  isInvalid={!!errors.fullName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.fullName}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <h4>Your Email</h4>
                <Form.Control
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setField("email", e.target.value)}
                  isInvalid={!!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3">
                <h4>Type your complaints here</h4>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your complaints here"
                  value={form.complaints}
                  onChange={(e) => setField("complaints", e.target.value)}
                  isInvalid={!!errors.complaints}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.complaints}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <SubmitBtn handleSubmit={handleSubmit} errors={errors} />
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChampReportIssuesModal;
