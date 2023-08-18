import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ChampNavbar } from "../../../Navbar/champNavbar";
import { SubmitBtn } from "../../../Buttons/dashboard/actionBtn";

const ChampReportIssuesForm = () => {
  return (
    <>
      <ChampNavbar />
      <div style={{ marginTop: "150px" }}></div>

      <Container>
        <Row>
          <Col className="col-12">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Your Email" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type your complaints here"
                />
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-center">
            <SubmitBtn />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChampReportIssuesForm;
