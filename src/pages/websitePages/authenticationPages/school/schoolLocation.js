//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import SchoolLocationForm from "../../../../components/forms/website/schools/schoolLocationForm";

const SchoolLocation = () => {
  return (
    <>
      <GuestNavbar />
      <SchoolLocationSection />
    </>
  );
};

const SchoolLocationSection = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Where is your school located?</h3>
          <p>This helps us get the best instructor close to you.</p>
          <SchoolLocationForm />
        </Row>
      </Container>
    </>
  );
};

export default SchoolLocation;
