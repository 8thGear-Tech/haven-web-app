//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import EducationHistoryForm from "../../../../components/forms/website/instructors/educationalHistoryForm";

const EducationHistory = () => {
  return (
    <>
      <GuestNavbar />
      <Education />
    </>
  );
};

const Education = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Education History</h3>
          <EducationHistoryForm />
        </Row>
      </Container>
    </>
  );
};

export default EducationHistory;
