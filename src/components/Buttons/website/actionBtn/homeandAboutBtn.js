// Awelewa
// ReadMore

// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const GetAnInstructorBtn = () => {
  return (
    <>
      {/* <Link to=""> */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScaOieURFObPVm4shxavB7Z6mtyUOXadCMUa_MKu-8KT77m0g/viewform"
        target="_blank"
      >
        {" "}
        {/* <Link to="/signup"> */}{" "}
        <button className="GetAnInstructorBtn">GET AN INSTRUCTOR</button>
        {/* </Link> */}
      </a>
    </>
  );
};
export const LearnMoreBtn = () => {
  return (
    <>
      <a href="" target="_blank">
        {" "}
        <button className="LearnMoreBtn">LEARN MORE</button>
      </a>
    </>
  );
};
export const JoinOurTeamBtn = () => {
  return (
    <>
      <Link to="/signup">
        {" "}
        <button className="JoinOurTeamBtn">JOIN OUR TEAM</button>
      </Link>
    </>
  );
};
export const TeamOneViewBioBtn = () => {
  return (
    <>
      <a
        href=""
        className="text-decoration-none team-button-color"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop1"
      >
        View Bi<i className="bi bi-arrow-right"></i>
      </a>
    </>
  );
};
