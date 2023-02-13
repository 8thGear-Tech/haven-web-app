//external import
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { AddBtn } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { TakeATestBtn } from "../../../../components/Buttons/website/actionBtn/instructorBtn";

//internal import
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
// import { Add } from "../../../../components/Buttons/website/actionBtn/instructorBtn";
import { BackBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";
import { SubmitBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";

export const SelectTest = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <div className="selectTestBg w-50 py-4 mx-auto mt-5">
          <div className="d-flex justify-content-center justify-content-between px-5 mt-3">
            <div className="">
              <h4>Your Activity</h4>
            </div>
            <div className="">
              <AddBtn />
            </div>
          </div>
          <div className="selectTestBgOrange d-flex justify-content-center mx-5 mt-4 p-4 ">
            <div className="">
              <p>
                Complete the following test for the chosen subject. Click on the
                add button to add more subject or select to remove subject.
              </p>
            </div>
          </div>
          <Form className="d-flex justify-content-end me-5 mt-3 ">
            {["checkbox"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check type={type} id={`default-${type}`} label="Select" />
              </div>
            ))}
          </Form>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>HTML</h4>
            </div>
            <div className="">
              <TakeATestBtn />
            </div>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>React</h4>
            </div>
            <div className="">
              <TakeATestBtn />
            </div>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>CSS</h4>
            </div>
            <div className="">
              <TakeATestBtn />
            </div>
          </div>
          <div className="selectTestBgBorderPurple d-flex justify-content-center justify-content-between align-items-center p-4 mt-3  mx-5">
            <div className="">
              <h4>JavaScript</h4>
            </div>
            <div className="">
              <TakeATestBtn />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <Link to="">
              <BackBtn />
            </Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export const Questions = () => {
  return (
    <>
      <Container fluid>
        <GuestNavbar />
        <Form>
          <Row className="px-5 pt-5">
            <div className="col-lg-8 col-md-6 col-sm-12 align-items-center justify-content-center">
              <Form.Group as={Col} controlId="formGridTextOne">
                <Form.Label className="">
                  <h5>ANSWER THESE QUESTIONS CORRECTLY</h5>
                  <p>
                    Please tick the correct answer provided in the boxes
                    provided below. If you get the cut-off for this subjects you
                    have ticked, it will be added to you for your physical test.
                  </p>
                </Form.Label>
                {/* <Form.Control type="email" placeholder="Enter email" /> */}
              </Form.Group>
            </div>
          </Row>
          <Row className="px-5">
            <Form.Label>
              <p>
                Taliban-tv SMF i IVPA. Plaligen belär twerka. Fygital handel.{" "}
              </p>
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Row>
          <Row className="px-5">
            <Form.Label>
              <p>
                Taliban-tv SMF i IVPA. Plaligen belär twerka. Fygital handel.{" "}
              </p>
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Row>
          <Row className="px-5">
            <Form.Label>
              <p>
                Taliban-tv SMF i IVPA. Plaligen belär twerka. Fygital handel.{" "}
              </p>
            </Form.Label>
            {["checkbox"].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                />
                <Form.Check
                  inline
                  label="anchor tag"
                  type={type}
                  id={`inline-${type}-3`}
                />
              </div>
            ))}
          </Row>
          <div className="d-flex justify-content-between px-5 mt-3">
            {" "}
            <BackBtn />
            <Link to="/">
              <SubmitBtn />
            </Link>
          </div>
        </Form>
      </Container>
    </>
  );
};
