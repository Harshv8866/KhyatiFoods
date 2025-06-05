import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 100); // Trigger animation after 100ms
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzI20S7owL6imCloLQ-Eimns7bu9a8lpXaVcdAX-SA4xj_7EeT4JAErk7vHy7YAgU8J4g/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setStatus("Message sent! Thank you.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className={`contact-wrapper container my-5 ${animate ? "fade-up" : "fade-start"}`}>
      {/* Contact Info full width */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="contact-info-box">
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Khyati Foods Street, Gujarat, India
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Email:</strong> contact@khyatifoods.com
            </p>
            <p>
              <strong>Working Hours:</strong> Mon - Sat, 9:00 AM - 6:00 PM
            </p>
          </div>
        </div>
      </div>

      {/* Form and Map side by side */}
      <div className="row gx-5 gy-4">
        {/* Left side: Form */}
        <div className="col-lg-6 contact-left">
          <div className="contact-form-box">
            <h3 className="myfont" style={{color:"#2e7d32"}}>Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                required
              />

              <button type="submit">Send Message</button>
            </form>
            <p className="status-message">{status}</p>
          </div>
        </div>

        {/* Right side: Map */}
        <div className="col-lg-6 contact-right">
          <div className="map-container">
            <iframe
              title="Khyati Foods Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3368.603305100871!2d71.7100109747161!3d21.095503085483898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be23b9b3b306f15%3A0x7caf8befe6ae5297!2skhyati%20foods!5e1!3m2!1sen!2sin!4v1749157977765!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "15px", minHeight: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
