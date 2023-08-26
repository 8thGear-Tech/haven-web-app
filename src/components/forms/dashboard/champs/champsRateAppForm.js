import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import image1 from "../../../../assets/images/Ratings/image1.png"
import image2 from "../../../../assets/images/Ratings/image2.png"
import image3 from "../../../../assets/images/Ratings/image3.png"

const RatingsPage = () => {
  const instructors = [
    {
      id: 1,
      name: "Instructor 1",
      image: image1,
    },
    {
      id: 2,
      name: "Instructor 2",
      image: image2,
    },
    {
      id: 3,
      name: "Instructor 3",
      image: image3,
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
    <Container fluid className="text-left">
      <h1>Rating Board</h1>
      <Row  className="justify-content-center">
        {instructors.map((instructor) => (
          <Col key={instructor.id} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={instructor.image} />
              <Card.Body>
                <Card.Title>{instructor.name}</Card.Title>
                <Col>
                <Button
                  variant="outline-primary"
                  onClick={() => handleRatingChange(instructor.id, "good")}
                >
                  Good
                </Button>{" "}
                </Col>
               <Col>
               <Button
                  variant="outline-success"
                  onClick={() => handleRatingChange(instructor.id, "very good")}
                >
                  Very Good
                </Button>{" "}
               </Col>
               <Col>
               <Button
                  variant="outline-info"
                  onClick={() => handleRatingChange(instructor.id, "excellent")}
                >
                  Excellent
                </Button>{" "}
               </Col>
                
                <div style={{ marginTop: "20px" }}>
                  <Button
                  className="SaveBtn"
                    
                    onClick={() => handleSaveRating(instructor.id)}
                  >
                    Save 
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
