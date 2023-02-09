//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import ProfileInfoForm from "../../../../components/forms/website/instructors/profileInfoForm";

const InstructorProfileInfo = () => {
  return (
    <>
      <GuestNavbar />
      <InstructorInfo />
    </>
  );
};

const InstructorInfo = () => {
  return (
    <>
      <Container className="mt-5 d-flex justify-content-center">
        <Row className="">
          {" "}
          <ProfileInfoForm />
        </Row>
      </Container>
    </>
  );
};

export default InstructorProfileInfo;
