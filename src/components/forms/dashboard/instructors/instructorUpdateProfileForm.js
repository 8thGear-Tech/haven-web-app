import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const InstructorUpdateProfileForm = () => {
  return (
    <>
      <Form style={{ width: "32rem" }} className="profileFormBorder">
        <Row className="p-3 justify-content-center">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <h5 className="text-center mt-5">Personal details</h5>
            <Form.Group as={Col} controlId="formGridName" className="mb-3">
              <Form.Label>
                <h6>Name</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h6>Email</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h6>PhoneNumber</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h6>Home Address</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h6>Gender</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" className="mb-3">
              <Form.Label>
                <h6>Date of birth</h6>
              </Form.Label>
              <Form.Control type="text" className="" />
            </Form.Group>
          </div>
        </Row>
      </Form>
    </>
  );
};

export default InstructorUpdateProfileForm;
