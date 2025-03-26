"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './About.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  // Create refs for the elements we want to animate
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    // Only animate if the refs are available
    if (sectionRef.current && imageRef.current && textRef.current && headingRef.current) {
      // Clear any existing animations to avoid memory leaks
      const ctx = gsap.context(() => {
        // Animation for the heading
        gsap.from(headingRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });

        // Animation for the image
        gsap.from(imageRef.current, {
          opacity: 0,
          x: -100,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });

        // Animation for the text
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
      }, sectionRef);

      // Cleanup function
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-12" ref={sectionRef}>
      <h1 className="Eastwood sectionTitle" ref={headingRef}>About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section (50% width on screens > 768px) */}
        <div 
          className={`w-full md:w-1/2 ${styles.aboutImageContainer}`} 
          ref={imageRef}
        >
          <Image
            src="/images/about.jpg"
            alt="Style Salon"
            fill
            className={styles.aboutImage}
          />
        </div>

        <div 
          className="w-full md:w-1/2 Roboto text-container" 
          ref={textRef}
        >
          <p className="text-lg text-gray-600 mb-4">
            Welcome to <strong>GlamourTress</strong>, your go-to destination for beauty and hair care. 
            We are passionate about helping you look and feel your best. Our team of skilled professionals 
            is dedicated to providing top-notch services tailored to your unique style.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            At Style Salon, we believe that beauty is about more than just appearance—it's about confidence, 
            self-expression, and feeling great in your own skin. Whether you're here for a haircut, color, 
            or a full makeover, we're here to make your experience unforgettable.
          </p>
          <p className="text-lg text-gray-600">
            Thank you for choosing Style Salon. We look forward to serving you and helping you shine!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;