import Card from "react-bootstrap/Card";

export const ChampFeedback = (props) => {
  const { name, email, rating, message } = props;
  return (
    <div className="mx-auto">
      <Card.Body className="mt-3">
        <p class="card-text">
          <b>Champ's Name:</b> {name}
        </p>
        <p class="card-text">
          <b>Champ Email:</b> {email}
        </p>
        <p class="card-text">
          <b>Rating from Champ:</b> {rating}
        </p>
        <p class="card-text">
          <b>Message:</b> {message}
        </p>
        {/* <p class="card-text">V{viewsubmission}</p> */}
      </Card.Body>
      <hr />
    </div>
  );
};
export const InstructorFeedback = (props) => {
  const { name, email, rating, message } = props;
  return (
    <div className="mx-auto">
      <Card.Body className="mt-3">
        <p class="card-text">
          <b>Champ's Name:</b> {name}
        </p>
        <p class="card-text">
          <b>Champ Email:</b> {email}
        </p>
        <p class="card-text">
          <b>Rating from Champ:</b> {rating}
        </p>
        <p class="card-text">
          <b>Message:</b> {message}
        </p>
        {/* <p class="card-text">V{viewsubmission}</p> */}
      </Card.Body>
      <hr />
    </div>
  );
};
