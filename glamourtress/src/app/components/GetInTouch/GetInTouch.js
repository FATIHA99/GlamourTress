"use client"; 
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './GetInTouch.module.css';

gsap.registerPlugin(ScrollTrigger);

const GetInTouch = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const mapContainerRef = useRef(null);
  const contactInfoRef = useRef(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Smooth map appearance when loaded
      if (mapLoaded) {
        gsap.from(mapContainerRef.current, {
          opacity: 0,
          duration: 0,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: mapContainerRef.current,
            start: "top 75%",
            toggleActions: "play none none none"
          }
        });
      }

      // Contact info slides from right
      gsap.from(contactInfoRef.current, {
        opacity: 0,
        x: 80,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contactInfoRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [mapLoaded]);

  return (
    <section className={styles.getInTouch} ref={sectionRef}>
      <div className={styles.container}>
        <h2 ref={titleRef} className={`${styles.title} Eastwood`}>Get in Touch</h2>
      </div>
      <div className={styles.container}>
        <div  className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8c8!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1625072402417!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0, opacity: mapLoaded ? 1 : 0, transition: 'opacity 0.8s ease' }}
            allowFullScreen=""
            loading="lazy"
            onLoad={() => setMapLoaded(true)}
          />
        </div>

        <div ref={contactInfoRef} className={styles.contactInfo}>
          <img
            src="/images/3.jpg"
            alt="Contact Background"
            className={styles.backgroundImage}
          />
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <p className={styles.description}>
              We'd love to hear from you! Reach out to us for appointments,
              inquiries, or just to say hello.
            </p>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <div className={styles.phoneWrapper}>
                  <span className={styles.icon}>📞</span>
                  <span className={styles.label}>Phone:</span>
                </div>
                <span className={styles.phoneValue}>+1 (123) 456-7890</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.emailWrapper}>
                  <span className={styles.icon}>✉️</span>
                  <span className={styles.label}>Email:</span>
                </div>
                <span className={styles.emailValue}>GlamourTress@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;