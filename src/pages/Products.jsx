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

const Product = [
  {
    id: 1,
    name: "Dehydrated Garlic",
    image: "/imgs/product13.png",
    desc: "Crisp, white garlic flakes perfect for seasoning and industrial use.",
    pack: "Available in 5kg | 10kg | 20kg packs",
  },
  {
    id: 2,
    name: "Dehydrated White Onion ",
    image: "/imgs/product10.png",
    desc: "Fine, aromatic powder for flavoring soups, sauces, and snacks.",
    pack: "Available in 1kg | 5kg | 25kg drums",
  },
  {
    id: 3,
    name: "Dehydrated Red Onion",
    image: "/imgs/product12.png",
    desc: "Uniform garlic granules ideal for ready-to-eat mixes and spices.",
    pack: "Available in 2kg | 10kg | 25kg bags",
  },
  {
    id: 4,
    name: "Dehydrated Pink Onion",
    image: "/imgs/product11.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging",
  },
  {
    id: 5,
    name: "Dehydrated Spices",
    image: "/imgs/product9.png",
    desc: "Vibrant red onion flakes with bold flavor and rich color.",
    pack: "Available in 10kg | 20kg packaging",
  },
  
];

const Products = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <motion.section
      className="product-section py-5"
      ref={sectionRef}
      variants={fadeUpVariant}
      initial="hidden"
      animate={sectionInView ? "visible" : "hidden"}
    >
      <div className="container">
        <h2 className="section-title text-center mb-2 fonts">OUR PRODUCTS</h2>
        <p className="section-subtitle text-center mb-5 font2">
          Discover our premium range of dehydrated garlic and onion products, crafted for purity, flavor, and shelf stability.
        </p>

        <div className="row g-4">
          {Product.map((product) => (
            <motion.div
              className="col-md-6 col-lg-4"
              key={product.id}
              variants={fadeUpVariant}
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              transition={{ delay: 0.1 * product.id }}
            >
             <div className="product-card h-100 p-3 rounded-4 shadow-sm text-center">
  <img
    src={product.image}
    className="img-fluid rounded-4 mb-4 product-img"
    style={{ height: "260px", objectFit: "cover", cursor: "pointer" }}
    alt={product.name}
    onClick={() => handleImageClick(product.image)}
  />
  <h5 className="fw-semibold text-dark mb-2">{product.name}</h5>
  <p className="text-secondary small mb-2">{product.desc}</p>
  <p className="text-success small fw-medium">{product.pack}</p>
</div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </motion.section>
  );
};

export default Products;
