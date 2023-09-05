//Ibinabo
import Row from "react-bootstrap/Row";
import { Col, Form } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { ChampNavbar } from "../../../Navbar/champNavbar";
import studentProfile from "../../../../assets/images/dashboard/champ/studentProfile.png";
import { SaveBtn, CancelBtn} from "../../../Buttons/dashboard/actionBtn"
import { useFormValidation } from "../../authenticationForms";

const ChampUpdateProfilePage = () => {
 


  return (
    <>
      <ChampNavbar />
      <div className="margin-left-lg" style={{ marginTop: '150px' }}>
        <Container>
          <div className="materialRectangle"
            style={{ width: '100%', height: '100%', 
            background: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)', 
            borderRadius: 10, border: '0.50px black solid', 
            display: 'flex', alignItems: 'center', 
            justifyContent: 'space-between', padding: '0 20px' }}>

            <div><h3>Profile</h3></div>
            <div style={{ display: 'flex', alignItems: 'center' }}>

              <div>Home</div>
              <div style={{ marginLeft: '10px', 
              transform: 'rotate(-90deg)' }}>⤒</div>
            </div>
          </div>
        </Container>
      </div>  
      <div className="row d-flex justify-content-center">     
        <div className="col-lg-9 col-md-12">
          <div className="row">
            <div className="col-12">
              <StudentProfile />
            </div>
            <div className="mb-5">
              <DetailsForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ChampUpdateProfilePage;

const StudentProfile = () => {
  return (
    <>
      <div  style={{ width: "23rem", marginTop: "50px"}} className="group-flush profile-lg ">
        <Row>
          <Col>
            {" "}
            <Card.Img variant="top" className="roundedCircle" src={studentProfile} />
          </Col>
          <Col>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's contents.
            </Card.Text>
          </Col>
        </Row>
      </div>
    </>
  );
};

const DetailsForm = () => {
  const initialFormState = {
    name: "",
    email: "",
    phoneNumber: "",
    homeAddress: "",
    gender: "",
    dateOfBirth: "",
    studentId: "",
    gradeLevel: "",
    numberOfClasses: "",
  };

  const validateForm = (form) => {
    const {
      name,
      email,
      phoneNumber,
      homeAddress,
      gender,
      dateOfBirth,
      studentId,
      gradeLevel,
      numberOfClasses,
    } = form;
  
    const newErrors = {};
  
    if (!name || name.trim() === "") {
      newErrors.name = "Name is required";
    }
  
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }
  
    if (!phoneNumber || !/^[0-9]{10}$/.test(phoneNumber)) {
      newErrors.phoneNumber = "Invalid phone number format (10 digits)";
    }
  
    if (!homeAddress || homeAddress.trim() === "") {
      newErrors.homeAddress = "Home address is required";
    }
  
    if (!gender || (gender !== "Male" && gender !== "Female")) {
      newErrors.gender = "Gender must be Male or Female";
    }
  
    if (!dateOfBirth || !/^\d{4}-\d{2}-\d{2}$/.test(dateOfBirth)) {
      newErrors.dateOfBirth = "Invalid date of birth format (YYYY-MM-DD)";
    }
  
    if (!studentId || studentId.trim() === "") {
      newErrors.studentId = "Student ID is required";
    }
  
    if (!gradeLevel || gradeLevel.trim() === "") {
      newErrors.gradeLevel = "Grade level is required";
    }
  
    if (!numberOfClasses || !/^\d+$/.test(numberOfClasses)) {
      newErrors.numberOfClasses = "Number of classes must be a positive integer";
    }
  
    return newErrors;
  };
  const { form, setField, errors, handleSubmit } = useFormValidation(
    initialFormState,
    validateForm
  );

  return (
    <>
      <Container>
        <Row>
          <Col >
            <div className="" style={{ width: "23rem" ,  marginLeft: "4rem" , marginRight:"4rem", marginTop: "3rem" }}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control 
                  type="text" 
                  placeholder="Name"
                  value={form.name}
                  onChange={(e) => setField("name", e.target.value)}
                  isInvalid={!!errors.name}
                />
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                 <Form.Control 
                 type="Email" 
                 placeholder="Email"
                 value={form.email} 
                 onChange={(e)=> setField("email", e.target.value)} 
                 isValid={!!errors.email}
                 />
                 <Form.Control.Feedback type ="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                 
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
                <Form.Control 
                 type="PhoneNumber" 
                 placeholder="PhoneNumber"
                 value={form.phoneNumber} 
                 onChange={(e)=> setField("phoneNumber", e.target.value)} 
                 isValid={!!errors.phoneNumber}
                 />
                 <Form.Control.Feedback type ="invalid">
                    {errors.phoneNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicHomeAddress">
                  <Form.Control type="HomeAddress" placeholder="HomeAddress"
                  value={form.HomeAddress} 
                  onChange={(e)=> setField("HomeAddress", e.target.value)} 
                  isValid={!!errors.HomeAddress}
                  />
                  <Form.Control.Feedback type ="invalid">
                     {errors.HomeAddress}
                   </Form.Control.Feedback> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicGender">
                  <Form.Control type="Gender" placeholder="Gender"
                  value={form.Gender} 
                  onChange={(e)=> setField("Gender", e.target.value)} 
                  isValid={!!errors.Gender}
                  />
                  <Form.Control.Feedback type ="invalid">
                     {errors.Gender}
                   </Form.Control.Feedback> 
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                <Form.Control
                    type="date"
                    placeholder="Date of Birth"
                    value={form.dateOfBirth} 
                    onChange={(e) => setField("dateOfBirth", e.target.value)} 
                    isValid={!!errors.dateOfBirth}
                  />
                    <Form.Control.Feedback type ="invalid">
                       {errors.DateOfBirth}
                     </Form.Control.Feedback>
                </Form.Group>
              </Form>
            </div>
          </Col>

          <Col>
             <div className="" style={{ width: "23rem",  marginLeft:"4rem",  marginTop: "3rem"  }}>     
              <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicStudentId">
                <Form.Control 
                  type="text" 
                  placeholder="Student ID"
                  value={form.studentId}
                  onChange={(e) => setField("studentId", e.target.value)}
                  isInvalid={!!errors.studentId}
                />
                 <Form.Control.Feedback type="invalid">
                      {errors.studentId}
                  </Form.Control.Feedback>
                   </Form.Group>
                <br />
                <br />
                <Form.Group className="mb-3" controlId="formBasicGradeLevel">
                  <Form.Control 
                    type="text" 
                    placeholder="Grade Level"
                    value={form.gradeLevel}
                    onChange={(e) => setField("gradeLevel", e.target.value)}
                    isInvalid={!!errors.gradeLevel}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.gradeLevel}
                  </Form.Control.Feedback>
                </Form.Group>
                <br />
                <br />
              </Form>
            </div>
          </Col>

          <Col>
            <Row>
              <Col className="d-flex justify-content-end">
              <SaveBtn handleSubmit={handleSubmit} errors={errors} />
              </Col>
              <Col className="d-flex justify-content-start">
                <CancelBtn />
              </Col>
            </Row>
          </Col>

    </Row>
  </Container>
</>
  );
};


