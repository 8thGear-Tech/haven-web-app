// MaterialsandActivitiesCard

import activitiesData from "../../../data/allCards/activitiesCard.json";
import performanceData from "../../../data/allCards/activitiesCard.json";
import { ReadMoreBtn } from "../../Buttons/dashboard/actionBtn";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MaterialsandActivitiesCard = (props) => {
  const { image, title, text, id } = props;
  return (
    <Card style={{ width: "18rem" }} className="">
      <Card.Img variant="top" src={image} />

      <Card.Body className="text-center">
        <h3 class="card-title">{title}</h3>
        <p class="card-text">{text} </p>{" "}
        <Card.Link href="#">Go to Resource</Card.Link>
      </Card.Body>
    </Card>
  );
};

export const MaterialsandActivities = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        {activitiesData.activitiesData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <MaterialsandActivitiesCard
                {...card}
              ></MaterialsandActivitiesCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ActivitiesPerfomanceCard

export const ActivitiesPerfomanceCard = (props) => {
  const { image, title, text, id } = props;
  return (
    <Card style={{ width: "18rem" }} className="">
      <Card.Img variant="top" src={image} />

      <Card.Body className="text-center">
        <h3 class="card-title">{title}</h3>
        <p class="card-text">{text}</p> <ReadMoreBtn />
      </Card.Body>
    </Card>
  );
};

export const ActivitiesPerformance = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center">
        {performanceData.performanceData.map((card) => {
          return (
            <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
              <ActivitiesPerfomanceCard {...card}></ActivitiesPerfomanceCard>
            </div>
          );
        })}
      </div>
    </div>
  );
};
