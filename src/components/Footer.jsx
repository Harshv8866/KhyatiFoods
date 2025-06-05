import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/Logo.png"; // your logo path
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <img src={logo} alt="KhyatiFoods Logo" className="footer-logo" />
          <p>
            KhyatiFoods offers premium dehydrated garlic and onion products
            crafted for purity, flavor, and shelf stability. Trusted by
            industries and households alike.
          </p>
        </div>

      <div className="footer-section footer-links">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/process">Process</a></li>
            <li><a href="/certificate">Certificate</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h5>Contact Us</h5>
          <p>123 Food Street, Green City, India</p>
          <p>Phone: +91 98765 43210</p>
          <p>Email: info@khyatifoods.com</p>

          <div className="footer-socials">
            <a href="https://www.facebook.com/khyatifoods" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://www.instagram.com/khyatifoods" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com/khyatifoods" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://whatsapp.com/khyatifoods" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} KhyatiFoods. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
