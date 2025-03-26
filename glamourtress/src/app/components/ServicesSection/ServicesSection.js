"use client"
import React, { useEffect, useRef } from 'react';
import styles from './ServicesSection.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Hair Styling",
      description: "We offer the latest trends in hair styling to make you look fabulous.",
      image: "/images/s1.jpg",
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Makeup Artistry",
      description: "Our professional makeup artists will enhance your natural beauty.",
      image: "/images/s2.jpg",
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Skin Care",
      description: "Pamper your skin with our luxurious skincare treatments.",
      image: "/images/s3.jpg",
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Nail Art",
      description: "Get creative with our unique and stylish nail art designs.",
      image: "/images/s4.jpg",
      imagePosition: "left",
    },
  ];

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const serviceItemsRef = useRef([]);

  // Add service item to ref array
  const addToRefs = (el) => {
    if (el && !serviceItemsRef.current.includes(el)) {
      serviceItemsRef.current.push(el);
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Animate each service item with staggered delays
      serviceItemsRef.current.forEach((item, index) => {
        const direction = index % 2 === 0 ? 100 : -100; // Alternate directions
        
        gsap.from(item, {
          opacity: 0,
          x: direction,
          duration: 0.8,
          delay: index * 0.15,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });

      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={styles.container} ref={sectionRef}>
      {/* Section Title */}
      <h2 ref={titleRef} className={`${styles.sectionTitle} Eastwood`}>Our Services</h2>

      {/* Services List */}
      <div className={styles.servicesList}>
        {services.map((service) => (
          <div
            key={service.id}
            ref={addToRefs}
            className={`${styles.serviceItem} ${
              service.imagePosition === "right" ? styles.imageRight : styles.imageLeft
            }`}
          >
            {/* Image */}
            <div className={styles.imageContainer}>
              <img
                src={service.image}
                alt={service.title}
                className={styles.serviceImage}
              />
            </div>

            {/* Text Content */}
            <div className={styles.textContent}>
              <h3 className={`Eastwood`}>{service.title}</h3>
              <p className={`Roboto`}>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;