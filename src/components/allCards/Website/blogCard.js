import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardPhoto from "../../../Image/passport.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlogCardInfo from "../../../data/blogCard.json";

export const BlogCard = (props) => {
  const { image, text } = props;
  return (
    <Card style={{ width: "40rem" }} className=" mt-5 blogcard">
      <Row>
        <Col>
          <Card.Img
            variant="top"
            src={CardPhoto}
            style={{ width: "15rem" }}
            className="blogImage"
          />
        </Col>
        <Col>
          <Card.Body>
            <Card.Text>{text}</Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export const BloggCcard = () => {
  return (
    <>
      <div className="container">
        <div className="">
          {BlogCardInfo.blogCarddata.map((Blog) => {
            return (
              <>
                <div className="col-lg-3 col-md-5 col-sm-12" key={Blog.id}>
                  <BlogCard {...Blog} />
                </div>
              </>
            );
          })}
          ;
        </div>
      </div>
    </>
  );
};
