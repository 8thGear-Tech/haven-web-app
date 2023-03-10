import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { InstructorDashboardSideNav } from "../../../../components/Navbar/dashboardNavbar";
import { CancelBtn } from "../../../../components/Buttons/dashboard/actionBtn";
import { SubmitBtn } from "../../../../components/Buttons/dashboard/actionBtn";

const UploadMaterial = () => {
  return (
    <>
      {/* <DashboardNavbar /> */}
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-2">
            <InstructorDashboardSideNav />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="col">
              <div className="">
                {" "}
                <MaterialsNavbar />
              </div>
              <div className="">
                {" "}
                <MaterialForm />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
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
            <p className="navFontColor">Materials</p>
          </div>
          <div className="d-flex navFontColor">
            {" "}
            <Link to="" className="text-decoration-none">
              <p className="navFontColor">Home</p>
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
        <div className="d-flex mt-5 justify-content-center">
          <div className="mx-2">
            {" "}
            <Link to="">
              <CancelBtn />
            </Link>
          </div>
          <div className="mx-2">
            {" "}
            <Link to="">
              <SubmitBtn />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadMaterial;
