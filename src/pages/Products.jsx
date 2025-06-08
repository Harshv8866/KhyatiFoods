import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Products.css";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const products = [
 {
    id: 1,
    name: "Dehydrated Garlic",
    image: "/imgs/product13.png",
    desc: "Crisp, white garlic flakes perfect for seasoning and industrial use.",
    pack: "Available in 5kg | 10kg | 20kg packs",
    subProducts: [
      {
        name: "Garlic Flakes",
        image: "/imgs/garlic-flakes.png",
        desc: "Perfect for sauces, pickles, and curries.",
      },
      {
        name: "Garlic Chopped",
        image: "/imgs/galic-chopped.png",
        desc: "Uniform cuts for instant use in cooking.",
      },
      {
        name: "Garlic Minced",
        image: "/imgs/product3.png",
        desc: "Ideal for seasoning mixes and ready-to-eat foods.",
      },
      {
        name: "Garlic Powder",
        image: "/imgs/product4.png",
        desc: "Smooth fine garlic powder for fast flavor.",
      },
    ],
  },
  {
    id: 2,
    name: "Dehydrated White Onion",
    image: "/imgs/product10.png",
    desc: "Fine, aromatic white onion powder.",
    pack: "Available in 1kg | 5kg | 25kg drums",
    subProducts: [
      {
        name: "White Onion Flakes",
        image: "/imgs/white_onion_flakes.jpg",
        desc: "Aromatic and crisp for seasoning and sauces.",
      },
      {
        name: "White Onion Powder",
        image: "/imgs/white_onion_powder.jpg",
        desc: "Finely ground white onion powder.",
      },
    ],
  },
  {
    id: 3,
    name: "Dehydrated Red Onion",
    image: "/imgs/product12.png",
    desc: "Uniform granules ideal for ready-to-eat mixes and spices.",
    pack: "Available in 2kg | 10kg | 25kg bags",
    subProducts: [
      {
        name: "Red Onion Flakes",
        image: "/imgs/red_onion_flakes.jpg",
        desc: "Great for visual appeal in cooking.",
      },
      {
        name: "Red Onion Powder",
        image: "/imgs/red_onion_powder.jpg",
        desc: "Bold flavor for spice blends.",
      },
    ],
  },
  {
    id: 4,
    name: "Dehydrated Pink Onion",
    image: "/imgs/product11.png",
    desc: "Premium minced pink onion for food applications.",
    pack: "Available in 10kg | 20kg packaging",
    subProducts: [
      {
        name: "Pink Onion Flakes",
        image: "/imgs/pink_onion_flakes.jpg",
        desc: "Delicate taste and aroma.",
      },
    ],
  },
  {
    id: 5,
    name: "Dehydrated Spices",
    image: "/imgs/product9.png",
    desc: "Vibrant range of dehydrated spices.",
    pack: "Available in 10kg | 20kg packaging",
    subProducts: [
      {
        name: "Red Chili Powder",
        image: "/imgs/red_chili_powder.jpg",
        desc: "Bright color and heat.",
      },
      {
        name: "Turmeric Powder",
        image: "/imgs/turmeric_powder.jpg",
        desc: "Rich in aroma and health benefits.",
      },
    ],
  }, // Add other product entries similarly...
];

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openSlider = (product) => {
    setSelectedProduct(product);
    setCurrentSlide(0);
  };

  const closeSlider = () => {
    setSelectedProduct(null);
  };

  const handleNext = () => {
    setCurrentSlide((prev) =>
      prev === selectedProduct.subProducts.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? selectedProduct.subProducts.length - 1 : prev - 1
    );
  };

  return (
    <>
      <section className="product-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">Our Products</h2>
          <div className="row g-4">
            {products.map((product) => (
              <div
                className="col-md-4 text-center"
                key={product.id}
                onClick={() => openSlider(product)}
                style={{ cursor: "pointer" }}
              >
                <div className="product-card p-3 rounded-4 shadow-sm">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="img-fluid rounded-3 mb-3"
                    style={{ height: "230px", objectFit: "cover" }}
                  />
                  <h5>{product.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedProduct && (
        <div className="slider-overlay">
          <div className="slider-popup">
            <div className="slider-header">
              <h4>{selectedProduct.name}</h4>
              <button className="close-btn" onClick={closeSlider}>
                &times;
              </button>
            </div>
            <div className="slider-content">
              <img
                src={selectedProduct.subProducts[currentSlide].image}
                alt={selectedProduct.subProducts[currentSlide].name}
                className="slider-image"
              />
              <h5>{selectedProduct.subProducts[currentSlide].name}</h5>
              <p>{selectedProduct.subProducts[currentSlide].desc}</p>
              <p className="text-success fw-medium">
                {selectedProduct.subProducts[currentSlide].pack}
              </p>

              <div className="slider-controls">
                <button onClick={handlePrev}>← Previous</button>
                <button onClick={handleNext}>Next →</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;