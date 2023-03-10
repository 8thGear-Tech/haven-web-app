//external import
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";

//external import
import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import { BackBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";
import { SubmitBtn } from "../../../../components/Buttons/website/actionBtn/schoolBtn";

const ScreeningQuestions = () => {
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
            <Link to="/SelectTest">
              <BackBtn />
            </Link>
            <Link to="/InstructorProfileInfo">
              <SubmitBtn />
            </Link>
          </div>
        </Form>
      </Container>
    </>
  );
};

export default ScreeningQuestions;
