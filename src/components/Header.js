import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { FaFacebook, FaLinkedin, FaTwitter, FaGoogle, FaInstagram } from "react-icons/fa";

function Header() {
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top order-lg-1 animated">
        <Container className="header-container">
          <Navbar.Brand href="#home">JOHN STANBRIDGE</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about-me">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience_education">Experience</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#testimonials">Testimonials</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Full-screen Image */}
      <div className="full-screen-image order-lg-2 animated" id="home">
        <div className="overlay">
          <h1 className="text-center text-white">Hi, I'm </h1>
          <h1 className="text-center text-white headname_style"> John Stanbridge</h1>
          <p className="lead text-center text-white lead-font">Frontend Web Developer and Graphics Designer</p>
          {/* Social Media Links */}
          <div className="social-links text-center">
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="social-icon" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" />
            </a>
          </div>
          <div className="mt-40 text-center">
            <Button className="theme-btn">Hire Me</Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
