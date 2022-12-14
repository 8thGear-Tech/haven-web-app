// createAccountForm
// loginForm
// forgetPasswordForm
//external import
import { useState } from "react";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

//images
import havenlogo from "../../assets/icons/havenlogo.png";
import havenfavico from "../../assets/icons/havenfavico.png";
import createaccountimg from "../../assets/images/createaccountimg.png";

export const CreateAccountForm = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  });
  const [userdetails, setUserDetails] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // setUser({ ...user });
    setUser({ ...user, [name]: value });
    console.log(name, value);
  };
  const [validated, setValidated] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    // setUser({ firstName: "", lastName: "", password: "", confirmPassword: "" });
  };

  //validation

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (firstName && lastName && password && confirmPassword) {
  //     const userdetails = {
  //       firstName,
  //       lastName,
  //       password,
  //       confirmPassword,
  //     };
  //     setUser((user) => {
  //       return [...user, userdetails];
  //     });
  //     setFirstName("");
  //     setLastName("");
  //     setPassword("");
  //     setConfirmPassword("");
  //   } else {
  //     console.log("empty values");
  //   }
  // };
  return (
    <>
      <Container fluid>
        <div className="row d-flex align-items-center">
          <div
            className="col-lg-6 col-md-4 col-sm-12 createAccountBgOne d-flex justify-content-center"
            style={{ height: "660px" }}
          >
            <div style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src={havenfavico}
                maxwidth="10%"
                maxheight="10%"
              />
              <Card.Img variant="top" src={createaccountimg} className="" />
              <Card.Body className="text-center">
                <Card.Title>
                  <b>Welcome To Haven</b>
                </Card.Title>
                <div className="my-4">
                  {" "}
                  <Button variant="primary">Go somewhere</Button>
                </div>
              </Card.Body>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-8 col-sm-12 createAccountBgTwo d-flex align-items-center justify-content-center"
            style={{ height: "660px" }}
          >
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <h3 className="text-center my-4">CREATE ACCOUNT </h3>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="firstName"
                // id="firstName"
              >
                <Form.Control
                  required
                  type="name"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid first name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="lastName"
                // id="lastName"
              >
                <Form.Control
                  required
                  type="name"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid last name
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="password"
                // id="password"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 char long, consisting of at least
                  one upper case, numbers, and special characters
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="confirmPassword"
                // id="confirmPassword"
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password does not match
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </div>
            </Form>
            {/* <Form onSubmit={handleSubmit}>
              <h3 className="text-center my-4">CREATE ACCOUNT </h3>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="firstName"
                // id="firstName"
              >
                <Form.Control
                  type="name"
                  placeholder="First Name"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="lastName"
                // id="lastName"
              >
                <Form.Control
                  type="name"
                  placeholder="Last Name"
                  name="lastName"
                  value={user.lastName}
                  // onChange={(e) => setLastName(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="password"
                // id="password"
              >
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  // onChange={(e) => setPassword(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 formFieldWidth"
                controlId="confirmPassword"
                // id="confirmPassword"
              >
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  // onChange={(e) => setConfirmPassword(e.target.value)}
                  onChange={handleChange}
                />
              </Form.Group>
              <div className="text-center">
                <Button variant="primary" type="submit">
                  Create Account
                </Button>
              </div>
            </Form> */}
          </div>
        </div>
      </Container>
    </>
  );
};
