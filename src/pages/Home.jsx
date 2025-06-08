import React, { useEffect, useState, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import About from "./About";
import Products from "./Products";
import Process from "./Process";
import Certificate from "./Certificate";
import Contact from "./Contact"; // Import your Contact component

const Home = () => {
  const [animate, setAnimate] = useState(false);

  // NEW: Create a ref to the Contact section
  const contactRef = useRef(null);

  useEffect(() => {
    // Add a slight delay to ensure animation triggers properly
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  // NEW: Scroll handler to scroll to contact section
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slides = [
    {
      title: "Dehydrated White Onion Flakes",
      description: "Experience the taste of naturally ripened mangoes from our farms.",
      img: "/imgs/slide1.png",
      button: "Contact Us",
    },
    {
      title: "Dehydrated  Garlic Chopped",
      description: "High-quality spices to add flavor and aroma to your dishes.",
      img: "/imgs/slide2.png",
      button: "Contact Us",
    },
    {
      title: "Dehydrated Red Onion Flakes",
      description: "Healthy, preserved veggies — perfect for year-round use.",
      img: "/imgs/slide3.png",
      button: "Contact Us",
    },
  ];

  const images = [
    "./imgs/img1.webp",
    "./imgs/img2.webp",
    "./imgs/img3.webp",
    "./imgs/img4.jpg",
    "./imgs/img5.jpg",
    "./imgs/img6.jpg",
    "./imgs/img7.jpg",
    "./imgs/img1.webp",
    "./imgs/img1.webp",
  ];

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
    <div className={animate ? "fade-up" : ""}>
      {/* Carousel Section */}
      <Carousel fade>
        {slides.map((slide, index) => (
          <Carousel.Item
            key={index}
            style={{
              backgroundImage: `url(${slide.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "500px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 1,
              }}
            />
            <Carousel.Caption className="carousel-caption-custom" style={{ zIndex: 2 }}>
              <h2 className="carousel-title fonts">{slide.title}</h2>
              <p className="carousel-description">{slide.description}</p>
              {/* UPDATED: Button calls scrollToContact */}
              <button className="carousel-button" onClick={scrollToContact}>
                {slide.button}
              </button>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      <br />
      <br />

      {/* Welcome Section */}
      <section className="background">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 text-dark">
              <h2 className="border-bottom fonts text-start " style={{ color: "#4cb04f" }}>
                WELCOME TO KHYATI FOODS
              </h2>
              <p className=" fonts2 text-start ">
                KHYATI FOODS – Premium Dehydrated Fruits, Vegetables & Spices At Khyati Foods,
                we pride ourselves on delivering superior quality dehydrated fruits,
                vegetables, and spices that preserve nature’s goodness and flavor. Built
                on decades of industry expertise and driven by a commitment to excellence,
                our products combine nutrition, taste, and reliability for consumers
                nationwide. <br /> <br />
                Leveraging advanced dehydration technologies and stringent quality standards,
                Khyati Foods ensures every item meets international benchmarks for purity and
                safety. Our state-of-the-art processing facility is equipped with automated
                production lines and certified by recognized food safety authorities to
                maintain the highest hygiene and quality. <br /> <br />
                From farm to table, Khyati Foods promises fresh, flavorful, and healthy
                dehydrated food products that cater to the evolving needs of the modern
                kitchen — enhancing taste, convenience, and longevity without compromising
                nutrition. <br /> <br />
                Trust Khyati Foods for authentic, certified, and sustainable food solutions
                sourced responsibly from the best farms, and delivered with care and
                consistency. <br /> <br />
              </p>
            </div>

            <div className="col-12 col-xl-6 mt-xl-5 mt-1">
              <div className="ms-xl-5 ms-1">
                <Swiper
                  direction={"vertical"}
                  slidesPerView={1}
                  spaceBetween={80}
                  mousewheel={true}
                  pagination={{ clickable: true }}
                  modules={[Mousewheel, Pagination]}
                  className="mySwiper"
                  style={{
                    height: "400px",
                    borderRadius: "15px",
                    maxWidth: "100%",
                  }}
                >
                  {images.map((img, i) => (
                    <SwiperSlide
                      key={i}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={img}
                        alt={`Slide ${i + 1}`}
                        style={{
                          width: "100%",
                          maxWidth: "500px", // limits on large screens
                          height: "auto",
                          aspectRatio: "5 / 4", // keeps proportions
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />

<section className="why-choose py-5">
        <div className="container text-center">
          <h2 className="section-title mb-1 fs-1 font3">Why Choose <span>Khyati Foods</span>?</h2>
          <p className="section-subtitle mb-5 font2 fs-5">Elevating standards in dehydrated ingredients through integrity, innovation, and nature-first values.</p>
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

      <br />

      <section>
        <Certificate />
      </section>

      {/* NEW: Contact Section with ref */}
      <section ref={contactRef} style={{ paddingTop: "60px", paddingBottom: "60px" }}>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
