import React, { useState } from "react";
import "./Products.css";


const Product = [
  {
    id: 1,
    name: "Dehydrated Garlic Flakes",
    image: "/imgs/product1.png",
    desc: "Crisp, white garlic flakes perfect for seasoning and industrial use.",
    pack: "Available in 5kg | 10kg | 20kg packs"
  },
  {
    id: 2,
    name: "Dehydrated Onion Powder",
    image: "/imgs/product2.png",
    desc: "Fine, aromatic powder for flavoring soups, sauces, and snacks.",
    pack: "Available in 1kg | 5kg | 25kg drums"
  },
  {
    id: 3,
    name: "Dehydrated Garlic Granules",
    image: "/imgs/product3.png",
    desc: "Uniform garlic granules ideal for ready-to-eat mixes and spices.",
    pack: "Available in 2kg | 10kg | 25kg bags"
  },
  {
    id: 4,
    name: "Dehydrated White Onion Minced",
    image: "/imgs/product4.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging"
  },
  {
    id: 4,
    name: "Dehydrated White Onion Minced",
    image: "/imgs/product5.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging"
  },
  {
    id: 4,
    name: "Dehydrated White Onion Minced",
    image: "/imgs/product6.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging"
  },
  {
    id: 4,
    name: "Dehydrated White Onion Minced",
    image: "/imgs/product7.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging"
  },
  {
    id: 4,
    name: "Dehydrated White Onion Minced",
    image: "/imgs/product8.png",
    desc: "Premium minced white onion for high-grade food applications.",
    pack: "Available in 10kg | 20kg packaging"
  },
];

const Products = () => {


const [selectedImage, setSelectedImage] = useState(null); // ✅ correct!

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };
  return (
      <section className="product-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-4">Our Products</h2>
        <p className="section-subtitle text-center mb-5">
          Discover our premium range of dehydrated garlic and onion products, crafted for purity, flavor, and shelf stability.
        </p>

        <div className="row g-4">
          {Product.map((product) => (
            <div className="col-md-6 col-lg-4" key={product.id}>
              <div className="product-card h-100 p-3 rounded-4">
                <img
                  src={product.image}
                  className="img-fluid rounded-3 mb-3 ms-xl-5 ms-1 product-img"
                  style={{ height: "300px", cursor: "pointer" }}
                  alt={product.name}
                  onClick={() => handleImageClick(product.image)}
                />
                <h5 className="fw-bold">{product.name}</h5>
                <p>{product.desc}</p>
                <p className="text-muted small">{product.pack}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for full-screen image */}
      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <img src={selectedImage} alt="Enlarged" />
        </div>
      )}
    </section>
  );
};

export default Products;
