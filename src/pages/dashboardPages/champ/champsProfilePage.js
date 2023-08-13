import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import { ChampSideNavBar } from "../../../components/Navbar/champNavbar";
import { ChampNavbar } from "../../../components/Navbar/champNavbar";
import studentProfilePic from "../../../assets/images/dashboard/champ/studentProfile.png";
import  { PersonalDetailsCard, ClassDetailsCard } from "../../../components/allCards/Dashboard/profileCards"
const ChampProfilePage = () => {
  return (
    <>
      <ChampNavbar />
      <div style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, border: '0.50px black solid', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>

            <div><h3>Profile</h3></div>
            <div style={{ display: 'flex', 
            alignItems: 'center' }}>

              <div>Home</div>
              <div style={{ marginLeft: '10px', 
              transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>  
      <div className="row d-flex justify-content-center">     
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-6">
              <StudentProfile />
            </div>
            <div className="container-fluid row shadow-lg p-3 mb-5 bg-white ">
              <PersonalDetailsCard />
              <ClassDetailsCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChampProfilePage;

const StudentProfile = () => {
  return (
    <>
      <Card style={{ width: "23rem", marginTop: "50px"}} className="group-flush">
        <Row>
          <Col>
            {" "}
            <Card.Img variant="top" className="roundedCircle" src={studentProfilePic} />
          </Col>
          <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's contentssss.
            </Card.Text>
          </Col>
        </Row>

        <Card.Body>
          {/* <Card.Title>Card Title</Card.Title>
            
            <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </>
  );
};




