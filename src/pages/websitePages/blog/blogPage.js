import { GuestNavbar } from "../../../components/Navbar/guestNavbar";
import { BlogHero } from "../../../components/hero/blogHero";
import { BlogCard } from "../../../components/allCards/Website/blogCard";
import Card from "react-bootstrap/Card";
import BlogCardInfo from "../../../data/blogCard.json";
import CardPhoto from "../../../assets/images/blog/passport.jpg";

const Blog = () => {
  return (
    <>
      <GuestNavbar />
      <BlogHero />
      {/* <BlogCategory /> */}
    </>
  );
};

const BloggCcard = () => {
  return (
    <>
      <div className="container-fluid">
        {/* <div className="row"> */}
        {BlogCardInfo.blogCarddata.map((Blog) => {
          return (
            <>
              <div
                className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                key={Blog.id}
              >
                <BlogCard {...Blog} />
              </div>
            </>
          );
        })}

        {/* <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12">
            <h4>Categories</h4>
            <ul></ul>
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

const BlogCategory = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12">
            <BloggCcard />
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-5 d-flex align-items-center">
            <div>
              {" "}
              <h4>Categories</h4>
              <ul>
                <li className="lh-lg blogCategoryText">Technology</li>
                <li className="lh-lg blogCategoryText">Arts</li>
                <li className="lh-lg blogCategoryText">Language</li>
              </ul>
              <Card.Img
                variant="top"
                src={CardPhoto}
                style={{ width: "15rem" }}
                className="blogImage lh-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
