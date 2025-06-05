import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import './About.css'

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const visionRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });



    const values = [
    {
      icon: "/imgs/leaf.png",
      title: "Pure Ingredients",
      desc: "We ensure 100% chemical-free dehydration processes, maintaining natural flavor and nutrition.",
    },
    {
      icon: "/imgs/eco.png",
      title: "Eco-Conscious",
      desc: "From farm to factory, we follow sustainable practices to minimize our environmental impact.",
    },
    {
      icon: "/imgs/shield.png",
      title: "Trusted Quality",
      desc: "Strict quality checks at every step make us a dependable partner across industries.",
    },
    {
      icon: "/imgs/support.png",
      title: "End-to-End Support",
      desc: "We assist you from sample requests to bulk fulfillment — always responsive, always reliable.",
    },
    {
      icon: "/imgs/fresh.png",
      title: "Always Fresh",
      desc: "Smart storage and processing ensure year-round freshness in every batch we deliver.",
    },
    {
      icon: "/imgs/packaging.png",
      title: "Hygienic Packaging",
      desc: "State-of-the-art packaging technology ensures clean, long-lasting shelf life for every product.",
    },
  ];
  return (
    <>
      <br />
      <div className="container">
        <div className="row gy-4">
          <motion.div
            className="col-lg-6"
            ref={leftRef}
            variants={fadeUpVariant}
            initial="hidden"
            animate={leftInView ? "visible" : "hidden"}
          >
            <h3>Khyati Foods: The Trusted Name in Dehydrated Onion & Garlic Products</h3>
            <br />
            <motion.img
              src="/imgs/aboutimg1.png"
              className="img-fluid rounded-4 mb-4"
              alt="Garlic Kibbled"
              variants={fadeUpVariant}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            />
            <motion.p
              variants={fadeUpVariant}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              Khyati Foods is a leading manufacturer and exporter of high-quality dehydrated onion and garlic products, committed to delivering natural taste and nutritional value in every form. Based in India, we specialize in processing fresh produce into various dehydrated forms such as flakes, granules, slices, minced, and powders, ensuring convenience and extended shelf life without compromising on quality.
            </motion.p>
          </motion.div>

          <motion.div
            className="col-lg-6"
            ref={rightRef}
            variants={fadeUpVariant}
            initial="hidden"
            animate={rightInView ? "visible" : "hidden"}
          >
            <div className="content ps-0 ps-lg-5">
              <motion.p className="fst-italic" variants={fadeUpVariant} initial="hidden" animate={rightInView ? "visible" : "hidden"}>
                With advanced dehydration technology and strict quality control processes, we produce ingredients that meet international food safety standards, making us a trusted partner in the food processing, hospitality, retail, and spice industries.
              </motion.p>
              <motion.h3 variants={fadeUpVariant} initial="hidden" animate={rightInView ? "visible" : "hidden"}>
                🌱 What We Do:
              </motion.h3>
              <motion.ul variants={fadeUpVariant} initial="hidden" animate={rightInView ? "visible" : "hidden"}>
                <li><i className="bi bi-check-circle-fill"></i> <b>Dehydrated Onion Products</b><br />Flakes, Chopped, Minced, Granules, Powder</li>
                <li><i className="bi bi-check-circle-fill"></i> <b>Dehydrated Garlic Products</b><br />Flakes, Minced, Granules, Powder</li>
                <li><i className="bi bi-check-circle-fill"></i> <b>Custom Drying & Processing Solutions</b><br />Tailored dehydration based on customer specifications</li>
              </motion.ul>
              <motion.p variants={fadeUpVariant} initial="hidden" animate={rightInView ? "visible" : "hidden"}>
                At Khyati Foods, we blend technology with tradition — ensuring every product retains its authentic flavor, aroma, and nutritional value.
              </motion.p>
              <motion.img
                src="/imgs/aboutimg2.png"
                className="img-fluid rounded-4 mt-4"
                alt="Dehydrated Products"
                variants={fadeUpVariant}
                initial="hidden"
                animate={rightInView ? "visible" : "hidden"}
              />
            </div>
          </motion.div>
        </div>

        {/* 🌿 New Section: Vision & Sustainability */}
    <div className="row mt-5 gy-4 align-items-center p-4 rounded-4" ref={visionRef}>
  <motion.div
    className="col-lg-6"
    variants={fadeUpVariant}
    initial="hidden"
    animate={visionInView ? "visible" : "hidden"}
  >
    <h3 className="mb-3">🌍 Our Vision & Commitment</h3>
    <p>
      At Khyati Foods, sustainability isn’t a choice — it's a responsibility. We embrace eco-conscious practices, minimize waste, and support ethical sourcing directly from local farms. Our facility is designed to reduce energy consumption while maximizing quality output.
    </p>
    <p>
      We envision a healthier world where nutritious food ingredients are accessible and trusted. Every step we take, from sourcing to packaging, reflects our commitment to nature and people alike.
    </p>
  </motion.div>

  <motion.div
    className="col-lg-6"
    variants={fadeUpVariant}
    initial="hidden"
    animate={visionInView ? "visible" : "hidden"}
  >
    <img
      src="/imgs/aboutimg3.webp"
      alt="Sustainability"
      className="img-fluid rounded-4 img-hover-zoom"
      style={{ float: "right", width: "500px" }}
    />
  </motion.div>
</div>

      </div>



          <section className="why-choose py-5">
      <div className="container text-center">
        <h2 className="section-title mb-1">Why Choose <span>Khyati Foods</span>?</h2>
        <p className="section-subtitle mb-5">Elevating standards in dehydrated ingredients through integrity, innovation, and nature-first values.</p>
        <div className="row g-4">
          {values.map((item, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="why-card h-100 p-4">
                <img src={item.icon} alt="icon" className="why-icon mb-3" />
                <h5 className="fw-bold">{item.title}</h5>
                <p className="text-muted">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default About;
