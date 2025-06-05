import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Certificate.css';

const certificates = [
  { name: "FSSAI", img: "/imgs/fssai.jpg" },
  { name: "APEDA", img: "/imgs/apeda.png" },
  { name: "Spice Board", img: "/imgs/spice-board.png" },
  { name: "SGS", img: "/imgs/SGS.png" },
  { name: "FSSC", img: "/imgs/FSSC.png" },
  { name: "KLBD", img: "/imgs/KLBD.png" },
];

const Certificate = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="certificate-section">
      <div className="container">
        <div className="certificate-text">
          <h2 className='fonts'>OUR CERTIFICATIONS</h2>
          <p className='font2'>
            We are committed to delivering the best quality products while maintaining international standards.
            Our certifications are a testament to our dedication to food safety, quality, and reliability.
          </p>
        </div>

        <div className="certificate-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index} data-aos="fade-up">
              <a href={cert.img} target="_blank" rel="noopener noreferrer">
                <img src={cert.img} alt={cert.name} />
              </a>
              <p>{cert.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
