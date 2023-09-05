// MaterialsandActivitiesCard
import { Link } from "react-router-dom";
import activitiesData from "../../../data/allCards/activitiesCard.json";
import performanceData from "../../../data/allCards/activitiesCard.json";
import { ReadMoreBtn } from "../../Buttons/dashboard/actionBtn";
import { useMediaQuery } from 'react-responsive';


import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const MaterialsandActivitiesCard = (props) => {
  const { image, title, text, link } = props;
  return (
    <Card style={{ width: "14rem" }} className="mx-auto my-3">
      <img variant="top" src={image} />
      <Card.Body className="text-center">
        <h3 class="card-title">{title}</h3>
        <p class="card-text">{text} </p>
        <Link to={link}>
          {" "}
          <ReadMoreBtn />
        </Link>
        {/* <Card.Link href="#">Go to Resource</Card.Link> */}
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

// Original styling for larger screens (d-flex)
export const ActivitiesPerfomanceCard = (props) => {
  const { image, title, text, id } = props;
  return (
    <Card className="d-flex">
      <div className="row d-flex">
        <div className="col">
          <Card.Img
            variant="top"
            style={{ width: "17.8rem", height: "16rem" }}
            src={image}
          />
        </div>
        <div className="col">
          <Card.Body className="text-center">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
            <ReadMoreBtn />
          </Card.Body>
        </div>
      </div>
    </Card>
  );
};

// Modified styling for small screens (d-md-flex)
export const ActivitiesPerfomanceCardSmallScreen = (props) => {
  const { image, title, text, id } = props;
  return (
    <Card className="d-md-flex mb-5">
      <div className="row">
        <div className="col-md-6">
          <Card.Img
            variant="top"
            src={image}
            className="img-fluid" // Ensure the image fills the card body
          />
        </div>
        <div className="col-md-6">
          <Card.Body className="text-center">
            <h3 className="card-title">{title}</h3>
            <p className="card-text">{text}</p>
            <ReadMoreBtn />
          </Card.Body>
        </div>
      </div>
     
      
    </Card>
  );
};




export const ActivitiesPerformance = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 767 }); // Define your breakpoint
  return (
    <div className="container-fluid mt-5">
      <div className="row d-flex justify-content-center shadow-lg p-3 mb-5 bg-white rounded">
        {performanceData.performanceData.map((card) => {
          return (
            <div className="col-sm-12 col-md-6 col-lg-4" key={card.id}>
               {isSmallScreen ? (
                    <ActivitiesPerfomanceCardSmallScreen {...card}/>
                  ) : (
                    <ActivitiesPerfomanceCard {...card}></ActivitiesPerfomanceCard>
                  )}
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

// export const ActivitiesPerfomanceCard = (props) => {
//   const { image, title, text, id } = props;
//   return (
//     <Card style={{ width: "18rem" }} className="">
//       <Card.Img variant="top" src={image} />

//       <Card.Body className="text-center">
//         <h3 class="card-title">{title}</h3>
//         <p class="card-text">{text}</p> <ReadMoreBtn />
//       </Card.Body>
//     </Card>
//   );
// };

// export const ActivitiesPerformance = () => {
//   return (
//     <div className="container-fluid mt-5">
//       <div className="row d-flex justify-content-center">
//         {performanceData.performanceData.map((card) => {
//           return (
//             <div className="col-sm-12 col-md-4 col-lg-4" key={card.id}>
//               <ActivitiesPerfomanceCard {...card}></ActivitiesPerfomanceCard>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

export const SubmissionsCard = (props) => {
  const { image, name, activities, status, grade, date, time } = props;
  return (
    <Card style={{ width: "20rem" }} className="mx-auto mb-5">
      <Card.Img variant="top" src={image} />
      <Card.Body className="">
        <p class="card-title">Name: {name}</p>
        <p class="card-text">Activities: {activities}</p>
        <p class="card-text">Status: {status}</p>
        <p class="card-text">Grade: {grade}</p>
        <p class="card-text">Date: {date}</p>
        <p class="card-text">Time: {time}</p>
        {/* <p class="card-text">V{viewsubmission}</p> */}
      </Card.Body>
    </Card>
  );
};

