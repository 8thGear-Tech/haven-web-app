//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import BasicForm from "../../../components/forms/website/schools/packageForm";

const BasicPackage = () => {
  return (
    <>
      <GuestNavbar />
      <Package />
    </>
  );
};

const Package = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          {/* <h3>Tell us about your champs need</h3>
          <p>What’s your goal and what subjects do your champ need help in?</p> */}
          <BasicForm />
        </Row>
      </Container>
    </>
  );
};

export default BasicPackage;
