import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

//internal import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";

import { SaveBtn } from "../../../../components/Buttons/dashboard/actionBtn";
import { BackToApplication } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

const SpecialNeeds = () => {
  return (
    <>
      <GuestNavbar />

      <Form>
        {" "}
        <Row className="mt-5 justify-content-center">
          {" "}
          <div className="text-center">
            <h4>Teaching Special Need</h4>
            <p className="VideoUploadBgTwo">
              The questions below do not in anyway disqualify you from becoming
              a facilitator, rather, it helps us to identify facilitators with
              this special skill.
            </p>
          </div>
          <div className="col-lg-6">
            <Form.Label>
              <p>Have you taught people with Special Needs?</p>
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
            <Form.Label>
              <p>Can you teach people with Special needs?</p>
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="Yes"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="No"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
              </div>
            ))}
            <Form.Label>
              <p>Specify the area(s) of special Needs you can handle</p>
            </Form.Label>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        </Row>
        <div className="text-center mt-2 mb-5">
          <Link to="/InstructorProfileInfo">
            {" "}
            <SaveBtn />
          </Link>
        </div>
        <div className="text-center">
          <Link to="/InstructorProfileInfo">
            {" "}
            <BackToApplication />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SpecialNeeds;
