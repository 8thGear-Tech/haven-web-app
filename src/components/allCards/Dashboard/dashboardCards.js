// UserDashboardCard

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import Container from "react-bootstrap/Container";
import havenlogo from "../../../assets/icons/havenlogo.png";
import champResourcedata from "../../../data/allCards/dashboardCards.json";
import { height } from "@mui/system";
import Button from "react-bootstrap/Button";
// import adminResourcedata from "../../../data/allCards/dashboardCards.json";

export const ChampsDashboardCards = (props) => {
  const { image, title, text, id } = props;
  return (
    <Card style={{ width: "12rem" }} className="">
      <Card.Img variant="top" src={image} />

      <Card.Body className="text-center">
        <h3 class="card-title">{title}</h3>
        <h5 class="card-text">{text} </h5>{" "}
        <Card.Link href="#">Click Here</Card.Link>
      </Card.Body>
    </Card>
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
    <>
      <div className="container-fluid shadow-lg p-3 mb-5 bg-white rounded mt-5">
        <div className="row p-4">
          <div className="col-md-4 col-sm-12">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">Announcements</Card.Title>
                <Card.Text>
                  <h5>Trip to new york</h5>
                </Card.Text>
                <Card.Text>Updated 30mins ago</Card.Text>
                <Card.Text>G1/Class B</Card.Text>
              </Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Card.Text>
                    <h5>Trip to new york</h5>
                  </Card.Text>
                  <Card.Text>Updated 30mins ago</Card.Text>
                  <Card.Text>G1/Class B</Card.Text>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Card.Text>
                    <h5>Trip to new york</h5>
                  </Card.Text>
                  <Card.Text>Updated 30mins ago</Card.Text>
                  <Card.Text>G1/Class B</Card.Text>
                </ListGroup.Item>
              </ListGroup>
              <a href="" className="text-end">
                View All Discussions
              </a>
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card className="p-3">
              <Card.Title className="text-center">
                Champs Performance
              </Card.Title>
              <Card.Body>
                <Row>
                  <Col lg={3} md={3} sm={3}>
                    <Card.Img src={havenlogo} />
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <Card.Text>
                      <h5>Mathematics</h5>
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col lg={3} md={3} sm={3}>
                    <Card.Img src={havenlogo} />
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <Card.Text>
                      <h5>English Language</h5>
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-3 mb-3">
                  <Col lg={3} md={3} sm={3}>
                    <Card.Img className="rounded" src={havenlogo} />
                  </Col>
                  <Col lg={9} md={9} sm={9}>
                    <Card.Text>
                      {" "}
                      <h5>Chemistry</h5>
                    </Card.Text>
                    <Card.Text>
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
              <a href="" className="text-end">
                View all Performance
              </a>
            </Card>
          </div>
          <div className="col-md-4 col-sm-12">
            <Card>
              <Card.Body>
                <Card.Title className="text-center">
                  <div className="d-flex bd-highlight">
                    <div className="mr-auto"> My Notes</div>
                    <div className="text-end">
                      <Button variant="primary">Add Note</Button>
                    </div>
                  </div>
                </Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Card.Text>
                      <Row>
                        <Col lg={2}>
                          <NoteAddIcon />
                        </Col>
                        <Col lg={10}>
                          <h5>Prepare Question For Unit Test</h5>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis sit dolorem,{" "}
                          </p>
                          <p>05 Dec 2020 </p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Text>
                      <Row>
                        <Col lg={2}>
                          <NoteAddIcon />
                        </Col>
                        <Col lg={10}>
                          <h5>Prepare Question For Unit Test</h5>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis sit dolorem,{" "}
                          </p>
                          <p>05 Dec 2020 </p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Card.Text>
                      <Row>
                        <Col lg={2}>
                          <NoteAddIcon />
                        </Col>
                        <Col lg={10}>
                          <h5>Prepare Question For Unit Test</h5>
                          <p>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Perferendis sit dolorem,{" "}
                          </p>
                          <p>05 Dec 2020 </p>
                        </Col>
                      </Row>
                    </Card.Text>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
              <a href="" className="text-end">
                View All Notes
              </a>
            </Card>
          </div>
        </div>
      </div>
    </>
    // <Container>

    //   <Row className="dashboardbg shadow-lg p-3 mb-5 bg-white rounded p-5">
    //     <Col md={4} sm={12}>

    //     </Col>

    //     <Col md={4} sm={12}>
    // <Card>
    //   <Card.Title className="text-center">Champs Performance</Card.Title>
    //   <Card.Body>
    //     <Row>
    //       <Col lg={3} md={3} sm={3}>
    //         <Card.Img src={havenlogo} />
    //       </Col>
    //       <Col lg={9} md={9} sm={9}>
    //         <Card.Text>
    //           <h5>Mathematics</h5>
    //         </Card.Text>
    //         <Card.Text>
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         </Card.Text>
    //       </Col>
    //     </Row>
    //     <Row className="mt-3 mb-3">
    //       <Col lg={3} md={3} sm={3}>
    //         <Card.Img src={havenlogo} />
    //       </Col>
    //       <Col lg={9} md={9} sm={9}>
    //         <Card.Text>
    //           <h5>English Language</h5>
    //         </Card.Text>
    //         <Card.Text>
    //           {" "}
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         </Card.Text>
    //       </Col>
    //     </Row>
    //     <Row className="mt-3 mb-3">
    //       <Col lg={3} md={3} sm={3}>
    //         <Card.Img className="rounded" src={havenlogo} />
    //       </Col>
    //       <Col lg={9} md={9} sm={9}>
    //         <Card.Text>
    //           {" "}
    //           <h5>Chemistry</h5>
    //         </Card.Text>
    //         <Card.Text>
    //           {" "}
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //         </Card.Text>
    //       </Col>
    //     </Row>
    //   </Card.Body>
    //   <a href="" className="text-end">
    //     View all Performance
    //   </a>
    // </Card>
    //     </Col>

    //     <Col md={4} sm={12}>
    // <Card>
    //   <Card.Body>
    //     <Card.Title className="text-center">
    //       <div className="d-flex bd-highlight">
    //         <div className="mr-auto"> My Notes</div>
    //         <div className="text-end">
    //           <Button variant="primary">Add Note</Button>
    //         </div>
    //       </div>
    //     </Card.Title>
    //     <ListGroup variant="flush">
    //       <ListGroup.Item>
    //         <Card.Text>
    //           <Row>
    //             <Col lg={2}>
    //               <NoteAddIcon />
    //             </Col>
    //             <Col lg={10}>
    //               <h5>Prepare Question For Unit Test</h5>
    //               <p>
    //                 {" "}
    //                 Lorem ipsum dolor sit amet consectetur adipisicing
    //                 elit. Perferendis sit dolorem,{" "}
    //               </p>
    //               <p>05 Dec 2020 </p>
    //             </Col>
    //           </Row>
    //         </Card.Text>
    //       </ListGroup.Item>
    //       <ListGroup.Item>
    //         <Card.Text>
    //           <Row>
    //             <Col lg={2}>
    //               <NoteAddIcon />
    //             </Col>
    //             <Col lg={10}>
    //               <h5>Prepare Question For Unit Test</h5>
    //               <p>
    //                 {" "}
    //                 Lorem ipsum dolor sit amet consectetur adipisicing
    //                 elit. Perferendis sit dolorem,{" "}
    //               </p>
    //               <p>05 Dec 2020 </p>
    //             </Col>
    //           </Row>
    //         </Card.Text>
    //       </ListGroup.Item>
    //       <ListGroup.Item>
    //         <Card.Text>
    //           <Row>
    //             <Col lg={2}>
    //               <NoteAddIcon />
    //             </Col>
    //             <Col lg={10}>
    //               <h5>Prepare Question For Unit Test</h5>
    //               <p>
    //                 {" "}
    //                 Lorem ipsum dolor sit amet consectetur adipisicing
    //                 elit. Perferendis sit dolorem,{" "}
    //               </p>
    //               <p>05 Dec 2020 </p>
    //             </Col>
    //           </Row>
    //         </Card.Text>
    //       </ListGroup.Item>
    //     </ListGroup>
    //   </Card.Body>
    //   <a href="" className="text-end">
    //     View All Notes
    //   </a>
    // </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

// export const ChampAnnouncementCard = () => {
//   return (
//     <Card style={{ width: "20rem", height: "26rem" }} className="">
//       <Card.Body>
//         {" "}
//         <Card.Title className="text-center">Announcements</Card.Title>
//         <ListGroup variant="flush">
//           <ListGroup.Item>
//             <Card.Text>
//               <h5>Trip to new york</h5>
//             </Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//             <Card.Text>G1/Class B</Card.Text>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Card.Text>Trip to new york</Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//             <Card.Text>G1/Class B</Card.Text>
//           </ListGroup.Item>
//           <ListGroup.Item>
//             <Card.Text>Trip to new york</Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//             <Card.Text>G1/Class B</Card.Text>
//           </ListGroup.Item>
//         </ListGroup>
//       </Card.Body>
//     </Card>
//   );
// };

// export const ChampPerformanceCard = () => {
//   return (
//     <Card style={{ width: "20rem", height: "25rem" }} className="">
//       <Card.Body>
//         <Card.Title className="text-center">Champs Performance</Card.Title>

//         <div className="row">
//           <div className="col-4">
//             {" "}
//             <Card.Img src={havenlogo} />
//           </div>
//           <div className="col-8">
//             <Card.Text>
//               <h5>Art</h5>
//             </Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-4">
//             {" "}
//             <Card.Img src={havenlogo} />
//           </div>
//           <div className="col-8">
//             <Card.Text>
//               <h5>Art</h5>
//             </Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-4">
//             {" "}
//             <Card.Img src={havenlogo} />
//           </div>
//           <div className="col-8">
//             <Card.Text>
//               <h5>Art</h5>
//             </Card.Text>
//             <Card.Text>Updated 30mins ago</Card.Text>
//           </div>
//         </div>
//       </Card.Body>
//     </Card>
//   );
// };
// export const ChampNote = () => {
//   return (
//     <>
//       <Card style={{ width: "20rem", height: "25rem" }} className="">
//         <Card.Body>
//           {" "}
//           <Card.Title className="text-center">My Notes </Card.Title>
//           <ListGroup variant="flush">
//             <ListGroup.Item>
//               <Card.Text>
//                 <h5>Prepare Question For Unit Test</h5>
//               </Card.Text>
//               <Card.Text>Prepare Question For Unit Test</Card.Text>
//               <Card.Text>05 Dec 2020 </Card.Text>
//             </ListGroup.Item>
//             <ListGroup.Item>
//               <Card.Text>
//                 <h5>Prepare Question For Unit Test</h5>
//               </Card.Text>
//               <Card.Text>Prepare Question For Unit Test</Card.Text>
//               <Card.Text>
//                 <p>05 Dec 2020 </p>
//               </Card.Text>
//             </ListGroup.Item>
//             {/* <ListGroup.Item>
//               <Card.Text>Trip to new york</Card.Text>
//               <Card.Text>Updated 30mins ago</Card.Text>
//               <Card.Text>G1/Class B</Card.Text>
//             </ListGroup.Item> */}
//           </ListGroup>
//         </Card.Body>
//       </Card>
//     </>
//   );
// };

// AdminDashboardCard

export const AdminDashboardCard1 = (props) => {
  const { subtitle, title, text, id } = props;
  return (
    <Card
      style={{ width: "20rem", height: "25rem" }}
      className="col-md-4 mt-5 cardShadow"
    >
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
