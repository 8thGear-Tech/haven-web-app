// UserDashboardCard
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import champResourcedata from "../../../data/allCards/dashboardCards.json";
// import adminResourcedata from "../../../data/allCards/dashboardCards.json";

export const ChampsDashboardCards = (props) => {
  const { image, title, text, icon, link } = props;
  return (
    <Card style={{ width: "15rem" }} className="mx-auto my-4">
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
  );
};

export const ChampsResource = () => {
  return (
    <div className="mt-5">
      <div className="row">
        {champResourcedata.resourceData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-3" key={card.id}>
              <ChampsDashboardCards {...card}></ChampsDashboardCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// AdminDashboardCard

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
