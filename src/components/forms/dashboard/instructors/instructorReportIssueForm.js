import { SubmitBtn } from "../../../Buttons/dashboard/actionBtn";

//external import
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export const InstructorReportIssueForm = () => {
  return (
    <>
      <Form className="p-4">
        <h5 className="text-center">Report Issue</h5>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Kindly state the issue you’re encountering</Form.Label>
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
