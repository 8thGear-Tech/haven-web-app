import { SubmitBtn } from "../../../Buttons/dashboard/actionBtn";

//external import
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const RateInstructorForm = () => {
  return (
    <>
      <Form className="p-4">
        <h5 className="text-center">Rate Instructor</h5>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            // placeholder="Email"
            className=""
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" className="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Activity</Form.Label>
          <Form.Control type="email" className="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Rate Instructor</Form.Label>
          {/* Star Rating */}
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div className="text-center">
          {" "}
          <SubmitBtn />
        </div>
      </Form>
    </>
  );
};
