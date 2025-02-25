"use client"; // Mark this component as a Client Component

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import styles from './FeaturesSection.module.css'; // Import your CSS file
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
  const features = [
    {
      icon: '/images/1.jpg', // Path to the image in the public/images folder
      title: '100% Original Products',
      description: 'We guarantee authentic, high-quality beauty products for your skincare and makeup needs.',
    },
    {
      icon: '/images/2.jpg', // Path to the image
      title: 'Customer Satisfaction',
      description: 'Your happiness is our priority. We ensure you love every product you purchase.',
    },
    {
      icon: '/images/3.jpg', // Path to the image
      title: 'New Arrivals Every Day',
      description: 'Discover the latest beauty trends and products added daily to our collection.',
    },
  ];

  // Create a ref for each card
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate each card when it comes into view
    cardRefs.current.forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: 'top 80%', // Start animation when the top of the card is 80% from the top of the viewport
          end: 'bottom 20%', // End animation when the bottom of the card is 20% from the top of the viewport
          toggleActions: 'play none none reverse', // Play the animation when scrolling down, reverse when scrolling up
        },
      });
    });
  }, []);

  return (
    <section className={styles.sectionContainer}>
      <div className="container mx-auto px-4">
        <h2 className={`${styles.sectionTitle} Eastwood`}>Why Choose Us?</h2>
        <div className={styles.cardGrid}>
          {features.map((feature, index) => (
            <div
              key={index}
              className={styles.card}
              ref={(el) => (cardRefs.current[index] = el)} // Assign the ref to each card
            >
              <div className={styles.imageContainer}>
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill // Use `fill` to make the image take 100% of the parent's width and height
                  className={styles.image} // Apply the CSS class for the image
                />
              </div>
              <div className={styles.textContainer}>
                <h3 className={`${styles.cardTitle} Coolvetica`}>{feature.title}</h3>
                <p className={`${styles.cardDescription} Roboto`}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;