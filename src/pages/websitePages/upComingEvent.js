import React from "react";
import { GuestNavbar } from "../../components/Navbar/guestNavbar";
import Upcomingevent from "../../assets/images/hero/upcoming1.png";
import flier from "../../assets/images/hero/flier.png";
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
                <strong>UPCOMING EVENTS</strong>
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
      <div class="row row-cols-1 row-cols-md-3 g-5 justify-content-center">
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
              <h6 class="card-text text-black">Apr 11 - 22, 2023</h6>
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
