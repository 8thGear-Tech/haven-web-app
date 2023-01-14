// MaterialsandActivitiesCard
// ActivitiesPerfomanceCard

// const SinglePiggeryTrainingCards = (props) => {
//   const { image, id } = props;
//   return (
//     <>
//       <img
//         className="img-fluid w-100"
//         // style={{ width: 358.8 }}
//         src={image}
//         alt={id}
//       />
//     </>
//   );
// };

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function MaterialsandActivitiesCard() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="haven.png" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
