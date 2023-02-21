import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

import { CancelBtn } from "../../../../components/Buttons/dashboard/actionBtn";
import { SubmitBtn } from "../../../../components/Buttons/dashboard/actionBtn";

const CreateAssignment = () => {
  return (
    <>
      <CreateAssignmentNavbar />
      <CreateAssignmentForm />
    </>
  );
};

const CreateAssignmentNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>Create Assignment</p>
          </div>
          <div className="d-flex">
            {" "}
            <Link to="">
              <p>Home</p>
            </Link>
            <ArrowUpwardOutlinedIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

const CreateAssignmentForm = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center InstructorMaterialBg py-5">
          <Form>
            <Form.Group
              className="mb-3 mt-2 mx-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Message</h5>
              </Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Link to="">
                <CancelBtn />
              </Link>
              <Link to="">
                {" "}
                <SubmitBtn />
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default CreateAssignment;
