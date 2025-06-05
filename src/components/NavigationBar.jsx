import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './NavigationBar.css';

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar shadow-sm" sticky="top">
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="d-flex align-items-center" onClick={handleNavClick}>
            <img src={logo} alt="KhyatiFoods Logo" height="80" className="d-inline-block align-top me-2" />
          </Navbar.Brand>

          {/* Custom Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Custom sliding menu */}
          <div className={`custom-slide-menu ${menuOpen ? 'open' : ''}`}>
            <nav className="nav flex-column">
              <NavLink to="/" end className="nav-link" onClick={handleNavClick}>Home</NavLink>
              <NavLink to="/about" className="nav-link" onClick={handleNavClick}>About Us</NavLink>
              <NavLink to="/products" className="nav-link" onClick={handleNavClick}>Product</NavLink>
              <NavLink to="/process" className="nav-link" onClick={handleNavClick}>Process</NavLink>
              <NavLink to="/certificate" className="nav-link" onClick={handleNavClick}>Certificate</NavLink>
              <NavLink to="/contact" className="nav-link" onClick={handleNavClick}>Contact</NavLink>
            </nav>
          </div>
        </Container>
      </Navbar>

      {/* Backdrop */}
      {menuOpen && <div className="menu-backdrop" onClick={() => setMenuOpen(false)}></div>}
    </>
  );
};

export default NavigationBar;
