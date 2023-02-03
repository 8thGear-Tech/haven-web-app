//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import AboutInstructorForm from "../../../../components/forms/website/instructors/aboutInstructorForm";

const AboutInstructor = () => {
  return (
    <>
      <GuestNavbar />
      <About />
    </>
  );
};

const About = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Tell us about yourself</h3>
          <p>
            Please enter your information accurately. This is confidential, only
            your first name is visible on your profile.
          </p>
          <AboutInstructorForm />
        </Row>
      </Container>
    </>
  );
};

export default AboutInstructor;
