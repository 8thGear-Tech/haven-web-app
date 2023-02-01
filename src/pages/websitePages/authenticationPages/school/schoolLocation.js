//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
// import AboutChampsForm from "../../../../components/forms/website/schools/aboutChampsForm";

const SchoolLocation = () => {
  return (
    <>
      <GuestNavbar />
      {/* <ChampsNeed /> */}
    </>
  );
};

const ChampsNeed = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Tell us about your champs need</h3>
          <p>What’s your goal and what subjects do your champ need help in?</p>
          {/* <AboutChampsForm /> */}
        </Row>
      </Container>
    </>
  );
};

export default SchoolLocation;
