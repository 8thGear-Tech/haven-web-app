import React from "react";
import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import Upcomingevent from "../../assets/images/hero/upcoming1.png";
// import flier from "../../assets/images/hero/flier.png";
import onsitesummercamp from "../../assets/images/events/onsitesummercamp.jpeg";
import onlinesummercamp from "../../assets/images/events/onlinesummercamp.jpeg";
// import Card from "react-bootstrap/Card";
// import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";

const UpComingEvent = () => {
  return (
    <>
      <GuestNavbar />
      <Hero />
      <CardUpcoming />
    </>
  );
};

const Hero = () => {
  return (
    <>
      <div
        className="p-5"
        style={{
          backgroundImage: `url(${Upcomingevent})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <section className="container mt-5 p-5 w-100">
          <div className="row">
            <div className="text-center">
              <h1 className="heading ">
                <strong>HOLIDAY PROGRAMS</strong>
              </h1>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const CardUpcoming = () => {
  return (
    <div className="container p-5">
      <div class="row g-5 justify-content-center">
        <div class="col-lg-4 col-md-6">
          <div class="card h-100">
            <img src={onsitesummercamp} class="card-img-top" alt="..." />
            <div
              // style={{
              //   backgroundColor: "#FFE7FF",
              // }}
              class="card-body"
            >
              <h5 class="card-title" style={{ fontSize: "1.05rem" }}>
                <strong>Creative Summer Camp (Physical)</strong>
              </h5>
              <h6 class="card-title m-0 p-0" style={{ fontSize: "0.9rem" }}>
                <strong>Batch 1</strong>
              </h6>
              <p
                class="card-text text-black p-0 m-0"
                style={{ fontSize: "0.8rem" }}
              >
                24th July - 11th August, 2023
              </p>
              <h6 class="card-title m-0 p-0" style={{ fontSize: "0.9rem" }}>
                <strong>Batch 2</strong>
              </h6>
              <p
                class="card-text text-black p-0 m-0"
                style={{ fontSize: "0.8rem" }}
              >
                14th August - 1st September, 2023
              </p>
              {/* <p>Physical</p> */}
            </div>
            <div>
              <a href="http://bit.ly/havensummer2023" target="_blank">
                {" "}
                <Button
                  style={{ backgroundColor: "#75117A", width: "100%" }}
                  className="hello"
                >
                  <strong>Register</strong>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <div class="card">
            <img src={onlinesummercamp} class="card-img-top" alt="..." />
            <div
              // style={{
              //   backgroundColor: "#FFE7FF",
              // }}
              class="card-body"
            >
              <h5 class="card-title" style={{ fontSize: "1.05rem" }}>
                <strong>Online Summer Camp</strong>
              </h5>
              <h6 class="card-title m-0 p-0" style={{ fontSize: "0.9rem" }}>
                <strong>Batch 1</strong>
              </h6>
              <p
                class="card-text text-black p-0 m-0"
                style={{ fontSize: "0.8rem" }}
              >
                24th July - 4th August, 2023
              </p>
              <h6 class="card-title m-0 p-0" style={{ fontSize: "0.9rem" }}>
                <strong>Batch 2</strong>
              </h6>
              <p
                class="card-text text-black p-0 m-0"
                style={{ fontSize: "0.8rem" }}
              >
                7th August - 18th August, 2023
              </p>
              <h6 class="card-title m-0 p-0" style={{ fontSize: "0.9rem" }}>
                <strong>Batch 3</strong>
              </h6>
              <p
                class="card-text text-black p-0 m-0"
                style={{ fontSize: "0.8rem" }}
              >
                21st August - 1st September, 2023
              </p>
              {/* <p>Physical</p> */}
            </div>
            <div>
              <a href="http://bit.ly/havensummer2023" target="_blank">
                {" "}
                <Button style={{ backgroundColor: "#75117A", width: "100%" }}>
                  <strong>Register</strong>
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/* <div class="col">
          <div class="card  h-100">
            <img src={flier} class="card-img-top" alt="..." />
            <div
              style={{
                backgroundColor: "#FFE7FF",
              }}
              class="card-body"
            >
              <h5 class="card-title">
                <strong>EASTER TECH BOOTCAMP</strong>
              </h5>
              <h6 class="card-text text-black">Tue, Apr 11, 10:00AM</h6>
              <p>Virtual and Physical</p>
            </div>
            <div>
              <a href="https://docs.google.com/forms/d/1Ju1K9utRAbytFjYEP1l86avpOS9pQUjfVU1UCCGkLIY/viewform?edit_requested=true">
                {" "}
                <Button style={{ backgroundColor: "#75117A", width: "100%" }}>
                  <strong>Register</strong>
                </Button>
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <img src={flier} class="card-img-top" alt="..." />
            <div
              style={{
                backgroundColor: "#FFE7FF",
              }}
              class="card-body"
            >
              <h5 class="card-title">
                <strong>EASTER TECH BOOTCAMP</strong>
              </h5>
              <h6 class="card-text text-black">Tue, Apr 11, 10:00AM</h6>
              <p>Virtual and Physical</p>
            </div>
            <div>
              <a
                href="https://docs.google.com/forms/d/1Ju1K9utRAbytFjYEP1l86avpOS9pQUjfVU1UCCGkLIY/viewform?edit_requested=true"
                target="_blank"
              >
                {" "}
                <Button style={{ backgroundColor: "#75117A", width: "100%" }}>
                  <strong>Register</strong>
                </Button>
              </a>
            </div>
          </div>
        </div> */}
      </div>
    </div>

    // <CardGroup className='container pt-5 g-5'>
    //   <Card className=''>
    //     <Card.Img variant="top" src={flier} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This content is a little bit longer.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={flier} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This card has supporting text below as a natural lead-in to
    //         additional content.{" "}
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    //   <Card>
    //     <Card.Img variant="top" src={flier} />
    //     <Card.Body>
    //       <Card.Title>Card title</Card.Title>
    //       <Card.Text>
    //         This is a wider card with supporting text below as a natural lead-in
    //         to additional content. This card has even longer content than the
    //         first to show that equal height action.
    //       </Card.Text>
    //     </Card.Body>
    //     <Card.Footer>
    //       <small className="text-muted">Last updated 3 mins ago</small>
    //     </Card.Footer>
    //   </Card>
    // </CardGroup>
  );
};

export default UpComingEvent;
