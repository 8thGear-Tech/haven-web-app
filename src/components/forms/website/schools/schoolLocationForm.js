import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { BackBtn, NextBtn } from "../../../Buttons/website/actionBtn/schoolBtn";

const SchoolLocationForm = () => {
  return (
    <>
      <Form>
        <Row className="px-3 py-4 mb-4">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <Form.Group as={Col} controlId="formGridTextOne">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>
                  <h5>Street Address</h5>
                </Form.Label>
                <Form.Control type="text" className="authPlaceHolderBorder" />
              </Form.Group>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>State</h5>
              </Form.Label>
              {/* <Form.Control type="password" placeholder="Password" /> */}

              <Form.Select
                aria-label="Default select example"
                className="authPlaceHolderBorder"
              >
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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

        <div className="d-flex justify-content-between">
          <Link to="/ChampsNeeds">
            <BackBtn />
          </Link>
          <Link to="/SchoolInformation">
            <NextBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default SchoolLocationForm;
