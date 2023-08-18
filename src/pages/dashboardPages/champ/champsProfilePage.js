import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import studentProfilePic from "../../../assets/images/dashboard/champ/studentProfile.png";
import { PersonalDetailsCard, ClassDetailsCard } from "../../../components/allCards/Dashboard/profileCards";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import {UpdateBtn} from "../../../components/Buttons/dashboard/actionBtn"

const ChampProfilePage = () => {
  return (
    <>
      <ChampNavbar />
      <div style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>
            
            <div><h3>Profile</h3></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>Home</div>
              <div style={{ marginLeft: '10px', transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-12">
              <StudentProfile />
            </div>
            <Row className=" mb-5">
              <PersonalDetailsCard />
              {/* <div style={{ margin: "10px 0" }}></div> */}
              <ClassDetailsCard />
            </Row>
            <UpdateBtn />  {/* Use the UpdateBtn component */}
          </div>
        </div>
      </div>
    </>
  );
};

const StudentProfile = () => {
  return (
    <>
      <div style={{ width: "100%", marginTop: "50px" }} className="group-flush">
        <Row>
          <Col>
          {" "}
            <Card.Img variant="top" className="rounded-circle" src={studentProfilePic} style={{ height: "200px", width: "150px" }} />
          </Col>
          <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
        </Row>
        
      </div>
    </>
  );
};

export default ChampProfilePage;
