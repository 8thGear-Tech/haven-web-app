import {
  ChampNavbar,
  ChampSideNavBar,
} from "../../../components/Navbar/champNavbar";
import React, { useState } from "react";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";
// import moment from "moment";
import Card from "react-bootstrap/Card";
import havenlogo from "../../../assets/icons/havenlogo.png";
const Champcalendar = () => {
  return (
    <>
      <ChampNavbar />
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-3">
            <ChampSideNavBar />
          </div>
          <div className="col-lg-9 col-md-12">
            <div className="row">
              {/* <div className="col-6">
                <Calendar />
              </div> */}
              <div className="col-6">
                <Timestamp />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4">
            <ChampSideNavBar />
          </div>
          <div className="col-lg-8">
            <div className="row">
              <div className="col-6">  </div>
              <div className="col-6">
                <Timestamp/>
            </div>
            </div>

            
          </div>
        </div>
      </div> */}
    </>
  );
};
// const Calendar = () => {
//   const [selectedDate, setSelectedDate] = useState(moment());
//   const [showModal, setShowModal] = useState(false);

//   const daysInMonth = selectedDate.daysInMonth();
//   const firstDayOfMonth = moment(selectedDate).startOf("month").day();

//   const handlePrevMonth = () => {
//     setSelectedDate(moment(selectedDate).subtract(1, "month"));
//   };

//   const handleNextMonth = () => {
//     setSelectedDate(moment(selectedDate).add(1, "month"));
//   };

//   const handleDayClick = (day) => {
//     setSelectedDate(moment(selectedDate).date(day));
//     setShowModal(true);
//   };

//   return (
//     <Container className="shadow-lg p-3 mb-5 bg-white rounded">
//       <Row>
//         <Col>
//           <Button onClick={handlePrevMonth}>Prev</Button>
//         </Col>
//         <Col>{selectedDate.format("MMMM YYYY")}</Col>
//         <Col>
//           <Button onClick={handleNextMonth}>Next</Button>
//         </Col>
//       </Row>
//       <Row>
//         {[0, 1, 2, 3, 4, 5, 6].map((day) => (
//           <Col key={day}>{moment().day(day).format("ddd")}</Col>
//         ))}
//       </Row>
//       {[...Array(Math.ceil((daysInMonth + firstDayOfMonth) / 7)).keys()].map(
//         (week) => (
//           <Row key={week}>
//             {[...Array(7).keys()].map((day) => {
//               const dayNumber = week * 7 + day + 1 - firstDayOfMonth;
//               if (dayNumber <= 0 || dayNumber > daysInMonth) {
//                 return <Col key={day}></Col>;
//               }
//               return (
//                 <Col
//                   key={day}
//                   className="day"
//                   onClick={() => handleDayClick(dayNumber)}
//                 >
//                   {dayNumber}
//                 </Col>
//               );
//             })}
//           </Row>
//         )
//       )}
//       <Modal show={showModal} onHide={() => setShowModal(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>{selectedDate.format("MMMM Do YYYY")}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           This is where you could show more information about the selected day.
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// };
const Timestamp = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
