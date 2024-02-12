// Testimonials.js

import React from "react";
import { Container, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/testimonials.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import the arrow icons

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-5">
      <Container className="">
        <h2 className="text-center mb-50 textContainer">
          <span className="borderEffect">Testimonials</span>
        </h2>
        <Carousel>
          <Carousel.Item>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            <p className="testimonial-author">- John Doe</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            <p className="testimonial-author">- John Doe</p>
          </Carousel.Item>
          <Carousel.Item>
            <p className="testimonial-text">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            </p>
            <p className="testimonial-author">- John Doe</p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
