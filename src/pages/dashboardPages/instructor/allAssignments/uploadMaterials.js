import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

const UploadMaterial = () => {
  return (
    <>
      <MaterialsNavbar />
      <MaterialForm />
    </>
  );
};

const MaterialsNavbar = () => {
  return (
    <div className="container my-5">
      <div className="row d-flex justify-content-center InstructorMaterialNav">
        <div className="d-flex justify-content-between px-5 pt-2">
          {" "}
          <div className="d-flex">
            <p>Upload Material</p>
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

const MaterialForm = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center InstructorMaterialBg py-5">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>
                  <h5>Link</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="uploadMaterialFormBorder"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridText">
                <Form.Label>
                  <h5>Title</h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="uploadMaterialFormBorder"
                />
              </Form.Group>
            </Row>
            <Form.Group
              className="mb-3 mt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Message</h5>
              </Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UploadMaterial;
