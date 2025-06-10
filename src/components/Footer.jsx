import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/Logo2.png"; // your logo path
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <img src={logo} height="" alt="KhyatiFoods Logo" className="footer-logo " />
          <p className="text-center myimg"> 
            KhyatiFoods offers premium dehydrated garlic and onion products
            crafted for purity, flavor, and shelf stability. Trusted by
            industries and households alike.
          </p>
        </div>

        <div className="footer-section footer-links text-center">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/process">Process</Link></li>
            <li><Link to="/certificate">Certificate</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h5>Contact Us</h5>
          <p>Survey no 186, paiki 2/1, paiki 1, Dwarkadish Road, Mahuva, Dist Bhavnagar, Gujarat(India)-364290</p>
          <p>Phone: +91 9723890961</p>
<p>
  Email: <a href="mailto:info@khyatifoods.in" style={{ color: "inherit", textDecoration: "none" }}>
    info@khyatifoods.in
  </a>
</p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/khyatifoods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/khyatifoods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://twitter.com/khyatifoods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="https://whatsapp.com/khyatifoods"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Whatsapp"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a
  href="https://www.linkedin.com/company/khyatifoods"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FontAwesomeIcon icon={faLinkedin} />
</a>

          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} KhyatiFoods. All rights reserved.
<small>
  Design by <a href="https://Dcreator.co.in" target="_blank" rel="noopener noreferrer" style={{textDecoration:"none" ,color: "inherit" }}>Dcreator</a>
</small>
      </div>
    </footer>
  );
};

export default Footer;
