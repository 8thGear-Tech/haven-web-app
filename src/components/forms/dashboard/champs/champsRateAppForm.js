import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const RatingsPage = () => {
  const instructors = [
    {
      id: 1,
      name: "Instructor 1",
      image: "",
    },
    {
      id: 2,
      name: "Instructor 2",
      image: "",
    },
    {
      id: 3,
      name: "Instructor 3",
      image: "",
    },
  ];

  const [ratings, setRatings] = useState({});

  const handleRatingChange = (instructorId, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [instructorId]: rating,
    }));
  };

  const handleSaveRating = (instructorId) => {
    const instructorRating = ratings[instructorId];
  
    // Retrieve existing ratings from local storage
    const storedRatings = JSON.parse(localStorage.getItem("instructorRatings")) || {};
  
    // Update the stored ratings with the new rating
    const updatedRatings = {
      ...storedRatings,
      [instructorId]: instructorRating,
    };
  
    // Save the updated ratings to local storage
    localStorage.setItem("instructorRatings", JSON.stringify(updatedRatings));
  
    alert(`Rating for ${instructors.find(instructor => instructor.id === instructorId).name} saved.`);
  };
  return (
    <Container fluid className="text-center">
      <h1>Ratings Page</h1>
      <Row>
        {instructors.map((instructor) => (
          <Col key={instructor.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={instructor.image} />
              <Card.Body>
                <Card.Title>{instructor.name}</Card.Title>
                <Button
                  variant="primary"
                  onClick={() => handleRatingChange(instructor.id, "good")}
                >
                  Good
                </Button>{" "}
                <Button
                  variant="success"
                  onClick={() => handleRatingChange(instructor.id, "very good")}
                >
                  Very Good
                </Button>{" "}
                <Button
                  variant="info"
                  onClick={() => handleRatingChange(instructor.id, "excellent")}
                >
                  Excellent
                </Button>{" "}
                <div style={{ marginTop: "20px" }}>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleSaveRating(instructor.id)}
                  >
                    Save Rating
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default RatingsPage;
