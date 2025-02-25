"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules"; // Import Autoplay and Pagination modules
import "swiper/css";
import "swiper/css/pagination";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  const images = [
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg",
    "/images/hero6.jpg",
  ];

  return (
    <div className={styles.heroSection}>
      <Swiper
        modules={[Autoplay, Pagination]} // Add Autoplay and Pagination modules here
        pagination={{ dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Adjust delay as needed
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={styles.heroSlide}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Welcome to GlamourTress</h1>
                <p className={styles.heroDescription}>Your destination for luxury hair styling.</p>
                <button className={`${styles.ctaButton} Roboto`}>Book Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;