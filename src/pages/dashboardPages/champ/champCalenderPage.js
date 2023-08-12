import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
import moment from "moment";
import Card from "react-bootstrap/Card";
import havenlogo from "../../../assets/icons/havenlogo.png";

const Champcalendar = () => {
  return (
    <>
      <ChampNavbar />

      {/* Material rectangle */}
      <div style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, border: '0.50px black solid', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>

            <div>Calendar</div>
            <div style={{ display: 'flex', 
            alignItems: 'center' }}>

              <div>Home</div>
              <div style={{ marginLeft: '10px', 
              transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>

<div className="container-fluid" style={{ marginTop: '150px' }}>
  <div className="row d-flex justify-content-center"> 
    <div className="col-lg-12 col-md-12">
      <div className="row">
        <div className="col-12 col-md-8"> {/* Adjusted width to 2/3 */}
          <Calendar />
        </div>
        <div className="col-12 col-md-4"> {/* Adjusted width to 1/3 */}
          <Timestamp />
        </div>
      </div>
    </div>
  </div>
</div>







    </>
  );
};

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(moment());
  const [showModal, setShowModal] = useState(false);

  const daysInMonth = selectedDate.daysInMonth();
  const firstDayOfMonth = moment(selectedDate).startOf("month").day();

  const handlePrevMonth = () => {
    setSelectedDate(moment(selectedDate).subtract(1, "month"));
  };

  const handleNextMonth = () => {
    setSelectedDate(moment(selectedDate).add(1, "month"));
  };

  const handleDayClick = (day) => {
    setSelectedDate(moment(selectedDate).date(day));
    setShowModal(true);
  };

  return (
    <Container className="shadow-lg p-3 mb-5 bg-white rounded">
    <h2 className="text-center">Calendar</h2>
    <Row className="mx-0 mb-3">
      <Col xs={4} md={2} className="text-center">
        <Button onClick={handlePrevMonth}>Prev</Button>
      </Col>
      <Col xs={4} md={8} className="text-center">
        {selectedDate.format("MMMM YYYY")}
      </Col>
      <Col xs={4} md={2} className="text-center">
        <Button onClick={handleNextMonth}>Next</Button>
      </Col>
    </Row>
    <Row xs={3} className="m-0 m-md-5">
  {[0, 1, 2, 3, 4, 5, 6].map((day) => (
    <Col key={day} className="text-center">
      {moment().day(day).format("ddd")}
    </Col>
  ))}
</Row>

      {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7)).keys()].map(
        (week) => (
          <Row xs={3} className="m-0 m-md-5" key={week}>
            {[...Array(7).keys()].map((day) => {
              const dayNumber = week * 7 + day + 1 - firstDayOfMonth;
              if (dayNumber <= 0 || dayNumber > daysInMonth) {
                return <Col key={day}></Col>;
              }
              return (
                <Col className="day "
                  key={day}
                  
                  onClick={() => handleDayClick(dayNumber)}
                >
                  {dayNumber}
                </Col>
              );
            })}
          </Row>
        )
      )}
    <Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{selectedDate.format("MMMM Do YYYY")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        This is where you could show more information about the selected day.
      </Modal.Body>
    </Modal>
  </Container>
  
  );
};
const Timestamp = () => {
  return (
    <>
      <Card style={{ width: "20rem", height: "100%" }}>
        <Card.Img variant="top" src={havenlogo} />
        <Card.Body style={{ fill: "Solid #e2e9f0 " }}>
          <Card.Link href="#">About </Card.Link>
          <Card.Link href="#" className="text-end">
            Description
          </Card.Link>
          <Card.Title>Card Title</Card.Title>{" "}
        </Card.Body>
        <Card.Body className="timeStamp">
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Champcalendar;
