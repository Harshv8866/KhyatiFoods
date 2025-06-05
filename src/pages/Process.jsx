import React from 'react';
import { FaIndustry, FaFlask, FaLeaf, FaBox, FaTruck, FaSmile } from 'react-icons/fa';
import './Process.css';

const steps = [
  {
    icon: <FaLeaf className="process-icon" />,
    title: "Raw Material Selection",
    desc: "We handpick fresh, high-quality produce from trusted farmers to ensure the best flavor and nutrition."
  },
  {
    icon: <FaFlask className="process-icon" />,
    title: "Cleaning & Preparation",
    desc: "Thorough cleaning and trimming remove impurities and prepare the produce for dehydration."
  },
  {
    icon: <FaIndustry className="process-icon" />,
    title: "Dehydration Process",
    desc: "Using advanced technology, we gently dry the ingredients while preserving aroma and nutrients."
  },
  {
    icon: <FaBox className="process-icon" />,
    title: "Packaging",
    desc: "Hygienic packaging in moisture-proof materials ensures extended shelf life and product integrity."
  },
  {
    icon: <FaTruck className="process-icon" />,
    title: "Logistics",
    desc: "We deliver on time through reliable logistics channels, ensuring your supply never stops."
  },
  {
    icon: <FaSmile className="process-icon" />,
    title: "Customer Satisfaction",
    desc: "Our mission is complete only when our customers are fully satisfied with the quality and service."
  },
];

const Process = () => {
  return (
    <section className="process-section py-5">
      <div className="container">
        <h2 className="text-center section-heading mb-4 fonts">OUR PROCESS</h2>
        <p className="text-center section-subtitle mb-5 font2">
          From farm to final product — discover how we ensure unmatched quality at every step.
        </p>
        <div className="row g-4">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="process-card p-4 h-100 shadow-sm rounded-4">
                {step.icon}
                <h5 className="mt-3 fw-bold">{step.title}</h5>
                <p className="text-muted small">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
