// Awelewa
// ReadMore

// import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const GetAnInstructorBtn = () => {
  return (
    <>
      <Link to="/signup">
        {" "}
        <button className="GetAnInstructorBtn">GET AN INSTRUCTOR</button>
      </Link>
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
      <a href="" target="_blank">
        {" "}
        <button className="JoinOurTeamBtn">JOIN OUR TEAM</button>
      </a>
    </>
  );
};
