import React, { useCallback } from "react";
import { Container,Button, Row, Col, Card } from "react-bootstrap";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import notification1 from "../../../assets/images/dashboard/Notifications/notification1.png";
import notification2 from "../../../assets/images/dashboard/Notifications/notification2.png";
import notification3 from "../../../assets/images/dashboard/Notifications/notification3.png";
import notification4 from "../../../assets/images/dashboard/Notifications/notification4.png";
import notification5 from "../../../assets/images/dashboard/Notifications/notification5.png";
const ChampNotificationPage = () => {
 

  

  return (
    <>
    
    <ChampNavbar />
      <div style={{ marginTop: "150px" }}></div>
    <Container fluid className="text-center bg-light" style={{ height: "1080px", overflow: "hidden", color: "#000", fontFamily: "Raleway" }}>
      <Row>
        <Col>
         
            {/* Your content for the first section */}
           <Card.Text className="lg:col=6">
           <h1>Notification</h1>
           <p> Some quick example text.</p>
           </Card.Text>
        </Col>
        </Row>

        {/* ... Other columns and sections */}
     
        <div style={{ marginTop: '150px' }}></div>
        <Row>
        <Col>
        <Card.Img variant="top" className="square" src={notification1} style={{ height: "100px", width: "100px" }} />
        </Col>
        <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
       </Row>

       <Row>
        <Col>
        <Card.Img variant="top" className="square" src={notification2} style={{ height: "100px", width: "100px" }} />
        </Col>
        <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
        </Row>

         <Row>
        <Col>
        <Card.Img variant="top" className="square" src={notification3} style={{ height: "100px", width: "100px" }} />
        </Col>
        <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
                  
        </Row>

        <Row>
        <Col>
        <Card.Img variant="top" className="square" src={notification4} style={{ height: "100px", width: "100px" }} />
        </Col>
        <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
     </Row> 

     <Row>
        <Col>
        <Card.Img variant="top" className="square" src={notification5} style={{ height: "100px", width: "100px" }} />
        </Col>
        <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's contents.
            </Card.Text>
          </Col>
        </Row>
          
      

      <Row>
        <Col md={{ span: 4, offset: 2 }} className="d-flex align-items-center justify-content-center cursor-pointer">
          <div className="">
            {/* Your content for the "Go Home" button */}
            <Button href="/ChampDashboard">Go Home</Button>
          </div>
        </Col>
      </Row>

      {/* ... (other rows and columns) */}
    </Container>
    </>
  );
};

export default ChampNotificationPage;
