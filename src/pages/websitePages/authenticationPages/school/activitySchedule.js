//external import
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { GuestNavbar } from "../../../../components/Navbar/guestNavbar";
import ActivityScheduleForm from "../../../../components/forms/website/schools/activityScheduleForm";

const ActivitySchedule = () => {
  return (
    <>
      <GuestNavbar />
      <ActivityScheduleSection />
    </>
  );
};

const ActivityScheduleSection = () => {
  return (
    <>
      <Container className="mt-5 px-4">
        <Row>
          {" "}
          <h3>Activity Schedule</h3>
          <p>How long do you need an instructor for?</p>
          <ActivityScheduleForm />
        </Row>
      </Container>
    </>
  );
};

export default ActivitySchedule;
