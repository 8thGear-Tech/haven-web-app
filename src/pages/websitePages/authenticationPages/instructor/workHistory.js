//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import WorkHistoryForm from "../../../../components/forms/website/instructors/workHistoryForm";

const WorkHistory = () => {
  return (
    <>
      <GuestNavbar />
      <Work />
    </>
  );
};

const Work = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Work History</h3>
          <WorkHistoryForm />
        </Row>
      </Container>
    </>
  );
};

export default WorkHistory;
