// UserDashboardCard
import { Link } from "react-router-dom";
import { Button, Card, Col, ListGroup, ProgressBar, Row } from "react-bootstrap";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Container from "react-bootstrap/Container";
import havenlogo from "../../../assets/icons/havenlogo.png";
import champResourcedata from "../../../data/allCards/dashboardCards.json";
import { height } from "@mui/system";
// import adminResourcedata from "../../../data/allCards/dashboardCards.json";

export const ChampsDashboardCards = (props) => {
  const { image, title, text, icon, link } = props;
  return (
    <div className="row p-3">
    <div className="col-md-3 col-12">
    <Card style={{ width: "15rem" }} className="mx-auto my-3">
      <Card.Img variant="top" src={image} />

      <Card.Body className="text-center">
        <h3 class="card-title">{title}</h3>
        <h2 class="card-text">{text} </h2>
        {/* <div> */}{" "}
        <img src={icon} className="img-fluid" style={{ width: "24px" }} />
        {/* </div> */}
        <Link to={link} className="urlFontColor">
          Click Here
        </Link>
      </Card.Body>
    </Card>
    </div>

    <div className="col-md-3 col-12">
      <Card style={{ width: "15rem" }} className="mx-auto my-3">
      <Card.Img src={icon} className="img-fluid" style={{ width: "24px" }} />
      
     
      </Card>
    </div>
    
    </div>
  );
};

export const ChampsResource = () => {
  return (
    <div className="mx-5 mt-5">
      <div className="row d-flex justify-content-evenly">
        {champResourcedata.resourceData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <ChampsDashboardCards {...card}></ChampsDashboardCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const ChampDashboardCoCards = () => {
  return (
    <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-5">
    {/* announcement card */}
    <div className="row p-4">
      <div className="col-md-4 col-12">
        <Card className="h-100">
          <Card.Body className="d-flex flex-column">
            <Card.Title className="text-center">Announcements</Card.Title>
            <Card.Text>
              <h5>Trip to New York</h5>
            </Card.Text>
            <Card.Text>Updated 30mins ago</Card.Text>
            <Card.Text>G1/Class B</Card.Text>
            <ListGroup variant="flush" className="flex-fill">
              <ListGroup.Item>
                <Card.Text>
                  <h5>Trip to New York</h5>
                </Card.Text>
                <Card.Text>Updated 30mins ago</Card.Text>
                <Card.Text>G1/Class B</Card.Text>
              </ListGroup.Item>
              <ListGroup.Item>
                <Card.Text>
                  <h5>Trip to New York</h5>
                </Card.Text>
                <Card.Text>Updated 30mins ago</Card.Text>
                <Card.Text>G1/Class B</Card.Text>
              </ListGroup.Item>
            </ListGroup>
            <a href="" className="text-end">
              View All Discussions
            </a>
          </Card.Body>
        </Card>
      </div>


        {/* champs performance card */}
        <div className="col-md-4 col-12">
          <Card className="h-100 p-3">
            <Card.Title className="text-center">
              Champs Performance
            </Card.Title>
            <Card.Body>
              <Row className="align-items-center">
                <Col md={3} xs={3}>
                  <Card.Img src={havenlogo} />
                </Col>
                <Col md={9} xs={9}>
                  <Card.Text>
                    <h5>Art</h5>
                  </Card.Text>
                  <Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
                </Col>
              </Row>
              <div>
                <ProgressBar variant="info" now={20} />
              </div>
              <Row className="mt-3 mb-3 align-items-center">
                <Col md={3} xs={3}>
                  <Card.Img src={havenlogo} />
                </Col>
                <Col md={9} xs={9}>
                  <Card.Text>
                    <h5>English Language</h5>
                  </Card.Text>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                </Col>
              </Row>
              <div>
                <ProgressBar variant="info" now={60} />
              </div>
              <Row className="mt-3 mb-3 align-items-center">
                <Col md={3} xs={3}>
                  <Card.Img className="rounded" src={havenlogo} />
                </Col>
                <Col md={9} xs={9}>
                  <Card.Text>
                    <h5>Chemistry</h5>
                  </Card.Text>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Card.Text>
                </Col>
              </Row>
              <div>
                <ProgressBar variant="info" now={60} />
              </div>
            </Card.Body>
            <a href="" className="text-end">
              View all Performance
            </a>
          </Card>
        </div>

        {/* my notes card */}
        <div className="col-md-4 col-12">
          <Card className="h-100">
            <Card.Body>
              <Card.Title className="text-center">
                <div className="d-flex bd-highlight justify-content-between">
                  <div className="mr-auto"> My Notes</div>
                  <div className="text-end">
                    <Button variant="outline-primary" className="w-100">
                      Add Note
                    </Button>
                  </div>
                </div>
              </Card.Title>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Text>
                    <Row className="align-items-center">
                      <Col md={2} xs={2}>
                        <NoteAddIcon />
                      </Col>
                      <Col md={10} xs={10}>
                        <h5>Prepare Question For Unit Test</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perferendis sit dolorem,
                        </p>
                        <p>05 Dec 2020 </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Card.Text>
                    <Row className="align-items-center">
                      <Col md={2} xs={2}>
                        <NoteAddIcon />
                      </Col>
                      <Col md={10} xs={10}>
                        <h5>Prepare Question For Unit Test</h5>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perferendis sit dolorem,
                        </p>
                        <p>05 Dec 2020 </p>
                      </Col>
                    </Row>
                  </Card.Text>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </Card.Body>
            <a href="" className="text-end">
              View All Notes
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const AdminDashboardCard1 = (props) => {
  const { subtitle, title, text, id } = props;
  return (
    <Card style={{ width: "14rem" }} className="col-md-4 mt-5 cardShadow">
      <Card.Body className="text-left">
        <h5 class="card-subtitle">New School</h5>
        <h3 class="card-title">245</h3>
        <br />
        <p class="card-text">50% increase in 25 days</p>
      </Card.Body>
    </Card>
  );
};
export const AdminDashboardCard2 = (props) => {
  const { subtitle, title, text, id } = props;
  return (
    <Card
      style={{ width: "14rem" }}
      className="col-md-span-3, offset-3 cardShadow "
    >
      <Card.Body className="text-left">
        <h5 class="card-subtitle">Total Activities</h5>
        <h3 class="card-title">280</h3>
        <br />
        <p class="card-text">76% increase in 20 days</p>
      </Card.Body>
    </Card>
  );
};
export const AdminDashboardCard3 = (props) => {
  const { subtitle, title, text, id } = props;
  return (
    <Card style={{ width: "14rem" }} className="col-md-4 cardShadow">
      <Card.Body className="text-left">
        <h5 class="card-subtitle">Total Schools</h5>
        <h3 class="card-title">3280</h3>
        <br />
        <p class="card-text">80% increase in 20 days</p>
      </Card.Body>
    </Card>
  );
};
export const AdminDashboardCard = () => {
  return (
    <Container>
      <Card style={{ width: "14rem" }} className="col-md-4 mb-3 cardShadow">
        <Card.Body className="text-left">
          <h5 class="card-subtitle">New School</h5>
          <h3 class="card-title">245</h3>
          <br />
          <p class="card-text">50% increase in 25 days</p>
        </Card.Body>
      </Card>
      <Card
        style={{ width: "14rem" }}
        className="col-md-span-3, offset-3 cardShadow "
      >
        <Card.Body className="text-left">
          <h5 class="card-subtitle">Total Activities</h5>
          <h3 class="card-title">280</h3>
          <br />
          <p class="card-text">76% increase in 20 days</p>
        </Card.Body>
      </Card>
      <Card style={{ width: "14rem" }} className="col-md-4 mt-3 cardShadow">
        <Card.Body className="text-left">
          <h5 class="card-subtitle">Total Schools</h5>
          <h3 class="card-title">3280</h3>
          <br />
          <p class="card-text">80% increase in 20 days</p>
        </Card.Body>
      </Card>
    </Container>
  );
};
// export const AdminInstructorCard = ()
