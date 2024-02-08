// About.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/about.css";
import ProfilePic from "../assets/images/profile.jpg";

const About = () => {
  return (
    <section id="about-me" className="py-5">
      <Container>
        <Row>
          {/* Left side - User image */}
          <Col lg={6} className="mb-4">
            <div className="user-image-container">
              <img
                src={ProfilePic} // Replace with the URL of your user image
                alt="User"
                className="img-fluid rounded-circle"
              />
            </div>
          </Col>

          {/* Right side - User description */}
          <Col lg={6}>
            <div className="about-me-text">
              <h2 className="text-center mb-4">About Me</h2>
              <p>
                Hello! I'm [Your Name], a passionate web developer with a strong background in frontend technologies. I
                love creating beautiful and responsive web applications. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Sed ac arcu eu ligula sagittis ullamcorper non sit amet ipsum.
              </p>
              <p>
                My skills include HTML, CSS, JavaScript, React, and more. I enjoy turning complex problems into simple,
                intuitive, and user-friendly solutions. Let's work together to bring your ideas to life!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
