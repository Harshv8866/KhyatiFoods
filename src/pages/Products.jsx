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
        desc: "Garlic Flakes for sauces and curries",
      },
      {
        name: "Garlic Chopped",
        image: "/imgs/galic-chopped.png",
        desc: " Garlic Chopped for quick cooking.,  ",
      },
      {
        name: "Garlic Minced",
        image: "/imgs/garlic-minced.png",
        desc: "Garlic Minced for spice blends and ready meals.",
      },
      {
        name: "Garlic Powder",
        image: "/imgs/garlic-powder.png",
        desc: "Garlic Powder for instant flavor in seasonings.",
      },
    ],
  },
  {
    id: 2,
    name: "Dehydrated White Onion",
    image: "/imgs/product10.png",
    desc: "White Onion Flakes for seasoning and sauces. ",
    subProducts: [
      {
        name: "White Onion Flakes",
        image: "/imgs/white-flakes.png",
        desc: "White Onion Chopped and Minced offer finely cut and ground textures. "

      },
      {
        name: "White Onion Chopped",
        image: "/imgs/white-chopped.png",
        desc: "ideal for enhancing flavor in soups, sauces, and ready-to-eat dishes.",
      },
      {
        name: "White Onion minced",
        image: "/imgs/white-minced.png",
        desc: "ground White Onion Powder ideal for soups.",
      },
      {
        name: "White Onion Powder",
        image: "/imgs/white-powder.png",
        desc: "Finely ground white onion powder.",
      },
    ],
  },
  {
    id: 3,
    name: "Dehydrated Red Onion",
    image: "/imgs/product12.png",
    desc:"Crisp and flavorful flakes ideal for adding texture and color to cooked dishes.",
    subProducts: [
      {
        name: "Red Onion Flakes",
        image: "/imgs/red-flakes.png",
        desc: "Great for visual appeal in cooking.",
      },
      {
        name: "Red Onion Chopped",
        image: "/imgs/red-chopped.png",
        desc: "Coarsely cut with a bold taste, perfect for savory spice mixes and seasonings..",
      },
      {
        name: "Red Onion Minced",
        image: "/imgs/red-minced.png",
        desc: "Finely diced for instant use in ready-to-eat meals and dry blends..",
      },
      {
        name: "Red Onion Powder",
        image: "/imgs/red-powder.png",
        desc: " Smooth, pungent powder that enhances sauces, soups, and seasoning bases.",
      },
    ],
  },
  {
    id: 4,
    name: "Dehydrated Pink Onion",
    image: "/imgs/product11.png",
    desc: "Premium minced pink onion for food applications.",
    subProducts: [
      {
        name: "Pink Onion Flakes",
        image: "/imgs/pink-flakes.png",
        desc: "Light, aromatic flakes with a mild onion flavor for premium food applications..",
      },
      {
        name: "Pink Onion CHopped",
        image: "/imgs/pink-chopped.png",
        desc: "Soft pink chunks, great for visible inclusion in gourmet mixes.",
      },
      {
        name: "Pink Onion Minced",
        image: "/imgs/pink-minced.png",
        desc: "Delicate minced bits, perfect for subtle flavor and texture in food products.",
      },
      {
        name: "Pink Onion Powder",
        image: "/imgs/pink-powder.png",
        desc: "Fine powder with gentle aroma, suited for spice blends and soup bases.",
      },
    ],
  },
  {
    id: 5,
    name: "Dehydrated Spices",
    image: "/imgs/product9.png",
    desc: "Vibrant range of dehydrated spices.",
    subProducts: [
      {
        name: "Red Chili Powder",
        image: "/imgs/red-chilli-powder.png",
        desc: "Fiery red powder that adds vibrant color and intense heat to any dish.",
      },
      {
        name: "Turmeric Powder",
        image: "/imgs/turmeric-powder.png",
        desc: "Earthy golden spice known for its bold flavor and medicinal properties.",
      },
      {
        name: "Black Paper powder",
        image: "/imgs/blackpaper-powder.png",
        desc: "Strong, sharp flavor perfect for seasoning meats, soups, and marinades.",
      },
      {
        name: "Coriander Powder",
        image: "/imgs/coriander-powder.png",
        desc: "Warm, citrusy aroma with nutty undertones, ideal for curries and spice mixes.",
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
              <h5 className="slider-font2">{selectedProduct.subProducts[currentSlide].name}</h5>
              <p className="slider-font">{selectedProduct.subProducts[currentSlide].desc}</p>
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