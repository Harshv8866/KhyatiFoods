import React from "react";
import { motion } from "framer-motion";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/8866483132?text=Hello%20Khyati%20Foods%2C%20I'm%20interested%20in%20your%20products"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <img
        src="/imgs/social.png"
        alt="WhatsApp Chat"
        className="whatsapp-icon"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
