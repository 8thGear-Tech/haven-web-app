//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import InstructorLocationForm from "../../../../components/forms/website/instructors/instructorsLocationForm";

const InstructorLocation = () => {
  return (
    <>
      <GuestNavbar />
      <Location />
    </>
  );
};

const Location = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Tell us where you live</h3>
          <p>
            Please enter your current residential address. Ensure to update your
            location if you move to a new city to ensure you receive relevant
            offers.
          </p>
          <InstructorLocationForm />
        </Row>
      </Container>
    </>
  );
};

export default InstructorLocation;
