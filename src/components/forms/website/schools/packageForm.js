import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import {
  BackBtn,
  SubmitBtn,
} from "../../../Buttons/website/actionBtn/schoolBtn";

const BasicForm = () => {
  return (
    <>
      <Form>
        <Row className="p-3">
          <div className="col-lg-8 col-md-6 col-sm-12 align-items-center">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>
                <h5>Name of champ(s)</h5>
              </Form.Label>
              <Form.Control className="authPlaceHolderBorder" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridTextOne">
              <Form.Label className="mt-4">
                <h5> Activities Interested in</h5>
              </Form.Label>
              {/* <Form.Control type="email" placeholder="Enter email" /> */}
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

            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Hours of activity</h5>
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
            <Form.Group as={Col} controlId="formGridTextTwo" className="mt-4">
              <Form.Label>
                <h5>Do you need a specific instructor?</h5>
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
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>
                <h5>No of champ(s)</h5>
              </Form.Label>
              <Form.Control className="authPlaceHolderBorder" />
            </Form.Group>
          </div>
        </Row>

        <div className="d-flex justify-content-between">
          <Link to="/PaymentPackages">
            <BackBtn />
          </Link>
          <Link to="/SchoolDashboard">
            <SubmitBtn />
          </Link>
        </div>
      </Form>
    </>
  );
};

export default BasicForm;
