// Skills.js

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/css/skills.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  return (
    <section id="skills" className="py-5">
      <Container>
        <h2 className="text-center mb-50 textContainer">
          <span className="borderEffect">Professional Skills</span>
        </h2>
        <Row>
          <Col lg={2}>
            <div className="skill-item">
              <p>HTML</p>
              <CircularProgressbar
                value={80}
                text={`80%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#3498db",
                  },
                  path: {
                    stroke: "#3498db",
                  },
                }}
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="skill-item">
              <p>JavaScript</p>
              <CircularProgressbar
                value={70}
                text={`70%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#e74c3c",
                  },
                  path: {
                    stroke: "#e74c3c",
                  },
                }}
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="skill-item">
              <p>BOOTSTRAP</p>
              <CircularProgressbar
                value={60}
                text={`60%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#2ecc71",
                  },
                  path: {
                    stroke: "#2ecc71",
                  },
                }}
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="skill-item">
              <p>PHOTOSHOP</p>
              <CircularProgressbar
                value={80}
                text={`80%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#3498db",
                  },
                  path: {
                    stroke: "#3498db",
                  },
                }}
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="skill-item">
              <p>CSS</p>
              <CircularProgressbar
                value={80}
                text={`80%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#3498db",
                  },
                  path: {
                    stroke: "#3498db",
                  },
                }}
              />
            </div>
          </Col>
          <Col lg={2}>
            <div className="skill-item">
              <p>SASS</p>
              <CircularProgressbar
                value={80}
                text={`80%`}
                strokeWidth={8}
                styles={{
                  text: {
                    fontSize: "20px",
                    fontWeight: "bold",
                    fill: "#3498db",
                  },
                  path: {
                    stroke: "#3498db",
                  },
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
