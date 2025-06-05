import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./carousel-arrows.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import About from "./About";

const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Add a slight delay to ensure animation triggers properly
    const timeout = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const slides = [
    {
      title: "Fresh Mangoes",
      description: "Experience the taste of naturally ripened mangoes from our farms.",
      img: "/imgs/slide1.png",
      button: "Shop Now",
    },
    {
      title: "Premium Spices",
      description: "High-quality spices to add flavor and aroma to your dishes.",
      img: "/imgs/slide2.png",
      button: "Explore Spices",
    },
    {
      title: "Dehydrated Vegetables",
      description: "Healthy, preserved veggies — perfect for year-round use.",
      img: "/imgs/slide3.png",
      button: "Browse Products",
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

  return (
    // Add fade-up class conditionally
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
            <Carousel.Caption
              style={{
                zIndex: 2,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                position: "absolute",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>{slide.title}</h2>
              <p style={{ fontSize: "1.2rem" }}>{slide.description}</p>
              <button
                style={{
                  backgroundColor: "#4caf50",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  color: "white",
                  fontSize: "1rem",
                  marginTop: "10px",
                }}
              >
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
              <h1 className="border-bottom" style={{ color: "#4cb04f" }}>
                WELCOME TO KHYATI FOODS
              </h1>
              <p className="fonts-style fw-light">
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
                  style={{ height: "400px", borderRadius: "15px" }}
                >
                  {images.map((img, i) => (
                    <SwiperSlide
                      key={i}
                      style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                      <img
                        src={img}
                        alt={`Slide ${i + 1}`}
                        style={{
                          width: "500px",
                          height: "400px",
                          objectFit: "cover",
                          borderRadius: "10px",
                          display: "block",
                          margin: "0 auto",
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

      <section>
        <div className="container">
          <div className="container section-title" data-aos="fade-up">
            <h2>About</h2>
            <p style={{ color: "#4caf50" }}> About Us</p>
          </div>
        </div>
        <About />
      </section>
    </div>
  );
};

export default Home;
