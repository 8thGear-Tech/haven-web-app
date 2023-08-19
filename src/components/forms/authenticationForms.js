import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from "react";
import { toast } from "react-toastify";
import { Modal, Form, Button } from "react-bootstrap";


import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { LoginBtnTwo } from "../Buttons/website/authenticationBtn";
import { CreateAccountBtn } from "../Buttons/website/authenticationBtn";
import { SchoolCreateAccountBtn } from "../Buttons/website/authenticationBtn";
import { ParentCreateAccountBtn } from "../Buttons/website/authenticationBtn";

//button
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

//images
import havenlogo from "../../assets/icons/havenlogo.png";
import havenfavico from "../../assets/icons/havenfavico.png";
import createaccountimg from "../../assets/images/createaccountimg.png";

// for forms
export const useFormValidation = (initialFormState, validateForm) => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(form);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log("form submitted");
      console.log(form);
    }
  };

  return { form, setField, errors, handleSubmit };
};

//login form
export const LoginForm = () => {
  const initialFormState = {
    email: "",
    password: "",
  };

  const validateForm = (form) => {
    const { email, password } = form;
    const newErrors = {};

    if (!email || email === "") newErrors.email = "Please enter your email";
    if (!password || password === "")
      newErrors.password = "Please enter your password";

    return newErrors;
  };

  const { form, setField, errors, handleSubmit } = useFormValidation(
    initialFormState,
    validateForm
  );
  const [showJoinUsModal, setShowJoinUsModal] = useState(false);

  const openJoinUsModal = () => {
    setShowJoinUsModal(true);
  };

  const closeJoinUsModal = () => {
    setShowJoinUsModal(false);
  };
  return (
    <>
     {showJoinUsModal && <JoinUsModal onClose={closeJoinUsModal} />}
      <Form onSubmit={handleSubmit} className="p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Email"
            className="placeHolderBorder"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          
          <Form.Control.Feedback type="invalid">
          {errors.email}
        </Form.Control.Feedback>
      </Form.Group>

         <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control
          type="password"
          placeholder="Password"
          className="placeHolderBorder"
          value={form.password}
          onChange={(e) => setField("password", e.target.value)}
          isInvalid={!!errors.password}
        />
        <Form.Control.Feedback type="invalid">
          {errors.password}
        </Form.Control.Feedback>
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>

        <div className="text-center">
          <LoginBtnTwo />
        </div>
        <h6 className="text-muted text-center pt-3">
          Don't have an account?
          <Link onClick={openJoinUsModal} className="px-1 mutedTextFontColor">
            SignUp
          </Link>
        </h6>

        <h6 className="text-center">
          <Link to="/" className="mutedTextFontColor">
            Forgot Password?
          </Link>
        </h6>
      </Form>
     
    </>
  );
};

// validating function for signup forms
export function validateInput( password, cpassword) {
  if (password !== cpassword) {
    return Promise.reject("passwords don't match")
  }
  if (password.length < 8) {
    return Promise.reject("password must be at least 8 characters long")
   
  }
  if (password.search(/[0-9]/) == -1) {
    return Promise.reject("password must contain digit")
    
  }
  if (password.search(/[A-Z]/) == -1) {
    return Promise.reject("password must contain uppercase letters")
    
  }
  if (password.search(/[a-z]/) == -1) {
    return Promise.reject("password must contain lowercase letters")
    
  }
  if (password.search(/[!"#$%&\\'()*+,-.\/:;<=>?@\[\]^_`\{\|\}~]/) == -1) {
    return Promise.reject("password must contain symbols")
    
  }
  return Promise.resolve();
};

//Axios
export const AxiosInstance = axios.create({
  baseURL: "/", // Replace with your backend API URL
});

AxiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export const ParentCreateAccountForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const navigate = useNavigate();


const handleSubmit = async (e) => {
   e.preventDefault();

  try {
      await validateInput(firstName, lastName, password, cpassword);
      // Validation passed, make the API request
      const response = await axios.post('/auth/parent-signup', {
        firstName: firstName,
        lastName: lastName,
        password: password,
      });
      console.log(response.data);
      toast.success("Account created successfully");
 // Redirect to the dashboard or another protected page
 navigate("/ChampDashboard"); // default protected page
} catch (error) {
  toast.error(error);
}
};
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
            </Card.Body>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-8 col-sm-12 createAccountBgTwo d-flex align-items-center justify-content-center"
          style={{ height: "660px" }}
        >
           <Form onSubmit={handleSubmit}>
            <h3 className="text-center my-4">CREATE ACCOUNT</h3>
            <Form.Group className="mb-3 formFieldWidth">
              <Form.Control
                required
                type="name"
                placeholder="First Name"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 formFieldWidth">
              <Form.Control
                required
                type="name"
                placeholder="Last Name"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 formFieldWidth" id="password">
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3 formFieldWidth" id="cpassword">
              <Form.Control
                required
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                id="cpassword"
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
            </Form.Group>
            <div className="text-center">
              <ParentCreateAccountBtn />
            </div>
          </Form>
        </div>
      </div>
    </Container>
  </>
);
};


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
                {/* <div className="my-4">
                  {" "}
                  <Button variant="primary">Go somewhere</Button>
                </div> */}
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
                <CreateAccountBtn />
              </div>
            </Form>
           
          </div>
        </div>
      </Container>
    </>
  );
};
export const SchoolCreateAccountForm = () => {
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
  };

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
              </Card.Body>
            </div>
          </div>
          <div
            className="col-lg-6 col-md-8 col-sm-12 createAccountBgTwo d-flex align-items-center justify-content-center"
            style={{ height: "660px" }}
          >
            <Form onSubmit={handleSubmit} noValidate validated={validated}>
              <h3 className="text-center my-4">CREATE ACCOUNT</h3>
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
              >
                <Form.Control
                  required
                  type="password"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password does not match
                </Form.Control.Feedback>
              </Form.Group>
              <div className="text-center">
                <SchoolCreateAccountBtn />
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};



export const JoinUsModal = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <div className="joinUsModalBg py-5">
        {" "}
        <h3 className="text-center joinUsTextColor">Join Us</h3>
        <h6 className="text-center pt-3">
          Continue as a school
          <Link to="/ChampsNeeds" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6>
        <h6 className="text-center pt-3">
          Continue as an instructor
          <Link to="/InstructorProfileInfo" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6>
        <h6 className="text-center pt-3">
          Continue as a parent
          <Link to="/parent-signup" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6>
        <div className="text-center mt-4">
          {" "}
          <Button variant="secondary" onClick={handleClose} className="BackBtn">
            <KeyboardBackspaceOutlinedIcon />
            Back
          </Button>
        </div>
      </div>
    </>
  );
};
export const SchoolParentSignUpModal = ({ handleClose }) => {
  // const [show, setShow] = useState(false);
  // const handleShow = () => setShow(true);
  // const handleClose = () => setShow(false);
  return (
    <>
      <div className="joinUsModalBg py-5">
        <h6 className="text-center pt-3">
          Continue as a school
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScaOieURFObPVm4shxavB7Z6mtyUOXadCMUa_MKu-8KT77m0g/viewform?usp=sf_link"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScaOieURFObPVm4shxavB7Z6mtyUOXadCMUa_MKu-8KT77m0g/viewform?usp=sf_link",
                "_blank"
              )
            }
            className="px-1 mutedTextFontColor"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
          {/* <Link to="/school-signup" className="px-1 mutedTextFontColor">
            Click here
          </Link> */}
          {/* <Link to="/ChampsNeeds" className="px-1 mutedTextFontColor">
            Click here
          </Link> */}
        </h6>
        {/* <h6 className="text-center pt-3">
          Continue as a school
          <Link to="/school-signup" className="px-1 mutedTextFontColor">
            Click here
          </Link>
          <Link to="/ChampsNeeds" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6> */}
        <h6 className="text-center pt-3">
          Continue as an instructor
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdV1S2xwMwH35oaMLbzuJanRCnxK1bmrd8tLIRDdIsW9WmhAg/viewform?usp=sharing"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdV1S2xwMwH35oaMLbzuJanRCnxK1bmrd8tLIRDdIsW9WmhAg/viewform?usp=sf_link",
                "_blank"
              )
            }
            className="px-1 mutedTextFontColor"
            // target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </h6>
        {/* <h6 className="text-center pt-3">
          Continue as an instructor
          <Link to="/InstructorProfileInfo" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6> */}
        <h6 className="text-center pt-3">
          Continue as a parent
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScTQuY6r0NkWTeRX1jcUD-ceHguT4JfbiF2OTWTV2Oj-4o7bg/viewform?usp=sharing"
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLScTQuY6r0NkWTeRX1jcUD-ceHguT4JfbiF2OTWTV2Oj-4o7bg/viewform?usp=sf_link",
                "_blank"
              )
            }
            className="px-1 mutedTextFontColor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here
          </a>
        </h6>
        {/* <h6 className="text-center pt-3">
          Continue as a parent
          <Link to="/parent-signup" className="px-1 mutedTextFontColor">
            Click here
          </Link>
        </h6> */}
        <div className="text-center mt-4">
          {" "}
          <Button variant="secondary" onClick={handleClose} className="BackBtn">
            <KeyboardBackspaceOutlinedIcon />
            Back
          </Button>
        </div>
      </div>
    </>
  );
};
