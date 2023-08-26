import { useFormValidation } from "../../components/forms/authenticationForms";
import { SubmitBtn } from "../../components/Buttons/dashboard/actionBtn";
import {  Form } from "react-bootstrap";


 const Contact = () => {
    const initialFormState = {
      email: "",
      password: "",
    };
  
    const validateForm = (form) => {
      const { email} = form;
      const newErrors = {};
  
      if (!email || email === "") newErrors.email = "Please enter your email";

      return newErrors;
    };
  
    const { form, setField, errors, handleSubmit } = useFormValidation(
      initialFormState,
      validateForm
    );
    

    return (
      <>
        <div className="LoginPopup" style={{ width: '100%', height: '100%', background: '#D9D9D9'}}>
        <Form onSubmit={handleSubmit} className="p-4">
          <Form.Group className="m-5" controlId="formBasicEmail">
          <h3>Email</h3>
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
  
  <Form.Group className="m-5">
                <h3>Message</h3>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Type message here"
                  value={form.complaints}
                  onChange={(e) => setField("complaints", e.target.value)}
                  isInvalid={!!errors.complaints}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.complaints}
                </Form.Control.Feedback>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <SubmitBtn handleSubmit={handleSubmit} errors={errors} />
              </div>
        </Form>
        </div>
      </>
    );
  };
  export default Contact;