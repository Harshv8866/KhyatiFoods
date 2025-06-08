import React, { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo2.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <>
      <div className="top-bar bg-dark text-white py-2">
        <Container className="d-flex justify-content-between align-items-center flex-wrap small">
          <div className="d-flex align-items-center gap-4">
            <span><i className="bi bi-telephone-fill me-1"></i> +91 9723890961</span>
            <span><i className="bi bi-envelope-fill me-1"></i> info@KhyatiFoods.in</span>
          </div>
        </Container>
      </div>
    <Navbar
      expand="lg"
      className="custom-navbar shadow-sm"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
          <img
            src={logo}
            alt="KhyatiFoods Logo"
            height="90"
            className="d-inline-block align-top m-0 p-0"
            />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />

        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={NavLink} to="/" end onClick={handleNavClick}>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" onClick={handleNavClick}>About Us</Nav.Link>
            <Nav.Link as={NavLink} to="/products" onClick={handleNavClick}>Product</Nav.Link>
            <Nav.Link as={NavLink} to="/process" onClick={handleNavClick}>Process</Nav.Link>
            <Nav.Link as={NavLink} to="/certificate" onClick={handleNavClick}>Certificate</Nav.Link>
            <Nav.Link as={NavLink} to="/contact" onClick={handleNavClick}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
            </>
  );
};

export default NavigationBar;
