import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";

function Contact() {
  return (
    <>
      <div id="wrapper">
        <Container>
          <h3>Submit your details</h3>
          <Row>
            <Col>
              <Form className="contact-form">
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="name" placeholder="" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
                <Form.Group controlId="validationCustomUsername">
                  <Form.Label>Website</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">
                      https://
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder=""
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={6} />
                </Form.Group>
                <Form>
                  {["checkbox"].map((type) => (
                    <div className="mb-3">
                      <Form.Check
                        class="check-id"
                        type={type}
                        id="check-id"
                        label={`Allow us to sell your personal details to whomever we want`}
                      />
                    </div>
                  ))}
                </Form>
                <Button className="submit-button" variant="secondary">
                  Submit
                </Button>
              </Form>
            </Col>
            <Col className="info-email-location-telephone">
              <p>
                <i class="fas fa-envelope"></i>hello@yay.com
              </p>

              <p>
                <i class="fas fa-phone"></i>123 456 7890
              </p>

              <p>
                <i class="fas fa-map-marker-alt"></i>123 Some Street Somewhere
                Some Cit 1000
              </p>
            </Col>
          </Row>
        </Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand href="#">
              <i class="fab fa-vimeo-v"></i>
              <i class="fab fa-youtube"></i>
            </Navbar.Brand>
            <Navbar.Brand href="#">hello@yay.com</Navbar.Brand>
            <Navbar.Brand href="#">Copyright 2020</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Contact;
