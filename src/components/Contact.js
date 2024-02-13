// Contact.js
import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../assets/css/contact.css"; // Import your custom CSS
import { FaEnvelope, FaMapMarker, FaMapPin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-5">
      <Container>
        <h2 className="text-center mb-4 textContainer">
          <span className="borderEffect">Contact Me</span>
        </h2>
        <Row>
          {/* Left side - Contact Form */}
          <Col md={12}>
            <Card className="contact-card">
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <Form>
                      <Form.Group controlId="formName" className="form-input">
                        <Form.Control type="text" placeholder="Your Name" />
                      </Form.Group>

                      <Form.Group controlId="formEmail" className="form-input">
                        <Form.Control type="email" placeholder="Your Email" />
                      </Form.Group>

                      <Form.Group controlId="formMessage" className="form-input">
                        <Form.Control as="textarea" rows={4} placeholder="Your Message" />
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Send Message
                      </Button>
                    </Form>
                  </Col>
                  <Col md={6}>
                    {" "}
                    <p>
                      ADDRESS <br />
                      <FaMapMarker /> San Francisco, CA
                    </p>
                    <p>
                      EMAIL ID <br />
                      <FaEnvelope />
                      <a href="mailto:hello@tom.com">hello@tom.com</a>
                      <br /> <FaEnvelope />
                      <a href="mailto:tomsaulnier@gmail.com">tomsaulnier@gmail.com</a>
                      <br />
                    </p>
                    <p>
                      CONTACT NUMBER
                      <br />
                      <FaPhoneAlt /> + (00) 123 456 789
                      <br />
                      <FaPhoneAlt />+ (00) 123 344 789
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
