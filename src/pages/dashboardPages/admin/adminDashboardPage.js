import { Card, Row, Col, Container, Table } from "react-bootstrap";
import { AdminDashboardCard } from "../../../components/allCards/Dashboard/dashboardCards";
import {
  AdminSideNavBar,
  AdminTopNavbar,
} from "../../../components/Navbar/adminDashboard";
import havenlogo from "../../../assets/icons/havenlogo.png";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "bootstrap";
import { ViewAllBtn } from "../../../components/Buttons/dashboard/actionBtn";

const AdminDashboardPg = () => {
  return (
    <>
      <AdminTopNavbar />
      <div className="row d-flex justify-content-center">
        <div className="col-lg-3">
          <AdminSideNavBar />
        </div>

        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-6">
              <AdminDashboardCard />
            </div>
            <div className="col-6">
              <Timestamp />
            </div>
            <Container>
              <div className="row">
                <div className="col">
                  <TutorList />
                </div>
              </div>
            </Container>
            <Container>
              <div>
                <SalaryStatus />
              </div>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
const Timestamp = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={havenlogo} />
        <Card.Body style={{ fill: "Solid #e2e9f0 " }}>
          <Card.Link href="#">About </Card.Link>
          <Card.Link href="#">Description</Card.Link>
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

const TutorList = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <ListGroup variant="flush">
        <ListGroup.Item>
          {" "}
          <Row>
            <Col md={2}>
              <Card.Img
                variant="top"
                style={{ height: "3rem", width: "2rem" }}
                className="rounded-circle"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              />
            </Col>
            <Col md={10}>
              <p>Theodore Handle ( B.Com )</p>
              <small
                style={{
                  color: "#F27D16",
                }}
              >
                Available
              </small>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <Card.Img
                variant="top"
                style={{ height: "3rem", width: "2rem" }}
                className="rounded-circle"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              />
            </Col>
            <Col md={10}>
              <p>Theodore Handle ( B.Com )</p>
              <small
                style={{
                  color: "#F27D16",
                }}
              >
                Available
              </small>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <Card.Img
                variant="top"
                style={{ height: "3rem", width: "2rem" }}
                className="rounded-circle"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              />
            </Col>
            <Col md={10}>
              <p>Theodore Handle ( B.Com )</p>
              <small
                style={{
                  color: "#F27D16",
                }}
              >
                Available
              </small>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row>
            <Col md={2}>
              <Card.Img
                variant="top"
                style={{ height: "3rem", width: "2rem" }}
                className="rounded-circle"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
              />
            </Col>
            <Col md={10}>
              <p>Theodore Handle ( B.Com )</p>

              <small
                style={{
                  color: "#F27D16",
                }}
              >
                Available
              </small>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Row>
        <Col md={2}>
          <Card.Img
            variant="top"
            style={{ height: "3rem", width: "2rem" }}
            className="rounded-circle"
            src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
          />
        </Col>
        <Col md={10}>
          <p>Theodore Handle ( B.Com )</p>
          <small
            style={{
              color: "#F27D16",
            }}
          >
            Available
          </small>
        </Col>
      </Row>

      <ViewAllBtn />
    </Card>
  );
};

const SalaryStatus = () => {
    return (
      
    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
      <Card.Body>
        <Card.Title className="text-center">Salary Status</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th> Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  style={{ height: "3rem", width: "2rem" }}
                  className="rounded-circle"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
              </td>
              <td>Angelina Ramos</td>
              <td>Paid</td>
              <td>12 Aug 2021</td>
              <td>$100 </td>
              <td>$#42371 </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  style={{ height: "3rem", width: "2rem" }}
                  className="rounded-circle"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
              </td>
              <td>Bradley Greer</td>
              <td>Unpaid</td>
              <td>12 July 2021</td>
              <td>$150</td>
              <td>#42372 </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  style={{ height: "3rem", width: "2rem" }}
                  className="rounded-circle"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
              </td>
              <td>Cedric Kelly</td>
              <td>Pending</td>
              <td>12 July 2021</td>
              <td>$150</td>
              <td>#42372 </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  style={{ height: "3rem", width: "2rem" }}
                  className="rounded-circle"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
              </td>
              <td>Cedric Kelly</td>
              <td>Pending</td>
              <td>12 July 2021</td>
              <td>$150</td>
              <td>#42372 </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Card.Img
                  variant="top"
                  style={{ height: "3rem", width: "2rem" }}
                  className="rounded-circle"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
              </td>
              <td>Cedric Kelly</td>
              <td>Pending</td>
              <td>12 July 2021</td>
              <td>$150</td>
              <td>#42372 </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AdminDashboardPg;
