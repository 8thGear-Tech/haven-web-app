import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const AboutChampsForm = () => {
  return (
    <>
      <Form>
        <Row className="champFormBgColor p-3">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <Form.Group as={Col} controlId="formGridTextOne">
              <Form.Label className="">
                <h5> Number of champs in class</h5>
              </Form.Label>
              {/* <Form.Control type="email" placeholder="Enter email" /> */}
              <Form.Select
                aria-label="Default select example"
                className="schoolPlaceHolderBorder"
              >
                <option>Select</option>
                <option value="1">5-10</option>
                <option value="2">10-20</option>
                <option value="3">20-25</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Number of classes</h5>
              </Form.Label>
              {/* <Form.Control type="password" placeholder="Password" /> */}
              <Form.Select
                aria-label="Default select example"
                className="schoolPlaceHolderBorder"
              >
                <option>Select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
                <option value="3">Four</option>
                <option value="3">Five</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-center">
            <Form.Group
              className="mb-3 mt-2"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>
                <h5>Tell us a bit about this champ</h5>
              </Form.Label>
              <Form.Control as="textarea" rows={6} />
            </Form.Group>
          </div>
        </Row>
        <Row className="mt-4">
          <Form.Label>
            <h5>What curriculum is used in your school?</h5>
          </Form.Label>
          {["checkbox"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Nigerian"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="American"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Britain"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>

        <Row className="mb-3">
          <Form.Label>
            <h5>Do you prefer a male or female instructor?</h5>
          </Form.Label>
          {["radio"].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check
                inline
                label="Any gender"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
              />
              <Form.Check
                inline
                label="Male"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
              />
              <Form.Check
                inline
                label="Female"
                type={type}
                id={`inline-${type}-3`}
              />
            </div>
          ))}
        </Row>
        <div className="d-flex justify-content-between">
          {" "}
          <BackBtn />
          <Link to="/SchoolInformation">
            <NextBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default AboutChampsForm;
