//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import SchoolInfoForm from "../../../../components/forms/website/schools/schoolInfoForm";

const SchoolInformation = () => {
  return (
    <>
      <GuestNavbar />
      <SchoolInfoSection />
    </>
  );
};

const SchoolInfoSection = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Personal information</h3>
          <SchoolInfoForm />
        </Row>
      </Container>
    </>
  );
};

export default SchoolInformation;
